import fs from 'fs'
import path from 'path'

const CHALLENGE_DIR = path.resolve('./challenges', 'questions')
const OUTPUT_SRC_DIR = path.resolve('src')
const OUTPUT_TEST_DIR = path.resolve('test')

const API_URL = 'https://translate-pa.googleapis.com/v1/translateHtml'
const API_KEY = 'AIzaSyATBXajvzQLTDHEQbcpq0Ihe0vWDHmO520'

// 翻译成中问
async function translateZhCn(str: string[]) {
  let translated = str

  try {
    const json = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'x-goog-api-key': API_KEY,
        'content-type': 'application/json+protobuf',
      },
      body: JSON.stringify([[str, 'auto', 'zh-CN'], 'te_lib']),
    }).then((res) => res.json())
    translated = json?.[0] || []
  } catch (err) {
    console.error('翻译失败：', err)
  }

  return translated
}

// 驼峰转连字符
function toKebabCase(str: string): string {
  return str
    .split('-')
    .slice(2)
    .map((m) => m.toLocaleLowerCase())
    .join('-')
}

// 确保目录必定存在
function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

// 提取 README 有效信息
function extractMetaFromInfoHeader(content: string) {
  const headerRegex = /<!--info-header-start-->(.*?)<!--info-header-end-->/s
  const footerRegex = /<!--info-footer-start-->(.*?)<!--info-footer-end-->/s

  const headerMatch = content.match(headerRegex)
  const footerMatch = content.match(footerRegex)

  const header = headerMatch?.[1] ?? ''
  const body = content.replace(headerRegex, '').replace(footerRegex, '').trim()

  // 提取 <h1> 里的文字并去掉 <img>
  const titleMatch = header.match(/<h1>(.*?)<\/h1>/s)
  const h1Html = titleMatch?.[1] ?? ''
  const titleText = h1Html.replace(/<img[^>]*>/g, '').trim()

  const difficultyMatch = header.match(/badge\/-\s*(\w+)\s*-/i)

  return {
    title: titleText,
    difficulty: difficultyMatch?.[1]?.toLowerCase() ?? 'unknown',
    body,
  }
}

const map = {
  easy: '简单',
  medium: '中等',
  hard: '困难',
  extreme: '极难',
  warm: '中下等',
  unknown: '未知',
}

type levelStr = keyof typeof map
async function sync(levels: levelStr[] = Object.keys(map) as levelStr[]) {
  const entries = fs.readdirSync(CHALLENGE_DIR)
  const levelMap = {
    ...Object.keys(map).reduce((acc, level) => {
      acc[level] = 0
      return acc
    }, {}),
    unknown: 0,
  }
  const list = entries
    .map((folderName) => {
      const questionPath = path.join(CHALLENGE_DIR, folderName)
      const readmePath = path.join(questionPath, 'README.md')
      let readmeZhCnPath = path.join(questionPath, 'README.zh-CN.md')

      if (!fs.existsSync(readmePath)) return

      if (!fs.existsSync(readmeZhCnPath)) {
        readmeZhCnPath = readmePath
      }

      const id = folderName.split('-')[0].padStart(3, '0')
      const kebabName = toKebabCase(folderName)
      const readmeRaw = fs.readFileSync(readmePath, 'utf-8')
      const { title, difficulty } = extractMetaFromInfoHeader(readmeRaw)
      const zhCnDifficulty = map[difficulty]

      levelMap[difficulty in levelMap ? difficulty : 'unknown'] += 1

      return {
        id,
        kebabName,
        title,
        difficulty,
        zhCnDifficulty,
        folderName,
        readmeZhCnPath,
      }
    })
    .filter((entry) => entry)

  console.log(`
🧠 总题目数：${list.length}

📈 难度分布：

${Object.entries(levelMap)
  .map(
    ([level, count], i) => ` ${i + 1}、${level}（${map[level]}）：${count} 题`
  )
  .join('\r\n')}

🛠️  当前仅同步难度为：${levels.map((level) => `${level}（${map[level]}）`).join('、')} 的题目

`)

  for (const item of list) {
    const {
      id,
      readmeZhCnPath,
      kebabName,
      title,
      difficulty,
      zhCnDifficulty,
      folderName,
    } = item!
    // 不在难度范围内，则不进行题目的生成
    if (!levels.includes(difficulty as levelStr)) {
      continue
    }

    const readmeZhCnRaw = fs.readFileSync(readmeZhCnPath, 'utf-8')
    let { title: zhCnTitle } = extractMetaFromInfoHeader(readmeZhCnRaw)

    if (!zhCnTitle || zhCnTitle === title) {
      const result = await translateZhCn([kebabName.split('-').join(' ')])
      zhCnTitle = result[0]
    }

    const srcFile = path.join(
      OUTPUT_SRC_DIR,
      difficulty,
      `${id}-${kebabName}.ts`
    )
    const testFile = path.join(
      OUTPUT_TEST_DIR,
      difficulty,
      `${id}-${kebabName}.test.ts`
    )

    ensureDir(path.dirname(srcFile))
    ensureDir(path.dirname(testFile))

    const fileExists = fs.existsSync(srcFile)
    if (!fs.existsSync(srcFile)) {
      fs.writeFileSync(
        srcFile,
        `/**
 * ${id} - ${kebabName}(${zhCnTitle})
 * @difficulty ${difficulty}（${zhCnDifficulty}）
 * 
 * 👉 题目来源：https://github.com/type-challenges/type-challenges/blob/main/questions/${folderName}/README.md
 * 📝 请在下方写出你的实现：
 */

export type ReplaceMe = any
`
      )
    }

    if (!fs.existsSync(testFile)) {
      fs.writeFileSync(
        testFile,
        `import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/${difficulty}/${id}-${kebabName}'

describe('${id} - ${kebabName}(${zhCnTitle})', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
`
      )
    }

    // 题目已存在则无须同步
    if (fileExists) {
      console.log(
        `⚠️  题目[ ${difficulty}（${zhCnDifficulty}）] ${id} - ${kebabName}(${zhCnTitle}) 已存在`
      )
    } else {
      console.log(
        `✅ 新增题目[ ${difficulty}（${zhCnDifficulty}）] ${id} - ${kebabName}(${zhCnTitle})`
      )
    }
  }
}

await sync(['easy', 'medium', 'hard', 'extreme', 'warm'])
