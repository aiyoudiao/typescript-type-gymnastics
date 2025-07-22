import fs from 'fs'
import path from 'path'

const CHALLENGE_DIR = path.resolve('./challenges', 'questions')
const OUTPUT_SRC_DIR = path.resolve('src')
const OUTPUT_TEST_DIR = path.resolve('test')

function toKebabCase(str: string): string {
  return str
    .replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())
    .replace(/\s+/g, '-')
    .replace(/^-/, '')
}

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

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

function sync() {
  const entries = fs.readdirSync(CHALLENGE_DIR)

  entries.forEach((folderName) => {
    const questionPath = path.join(CHALLENGE_DIR, folderName)
    const readmePath = path.join(questionPath, 'README.md')

    if (!fs.existsSync(readmePath)) return

    const readmeRaw = fs.readFileSync(readmePath, 'utf-8')
    const { title, difficulty } = extractMetaFromInfoHeader(readmeRaw)

    const id = folderName.split('-')[0].padStart(3, '0')
    const kebabName = toKebabCase(title)

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

    if (!fs.existsSync(srcFile)) {
      fs.writeFileSync(
        srcFile,
        `/**
 * ${id} - ${title}
 * @difficulty ${difficulty}
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

describe('${id} - ${title}', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
`
      )
    }

    console.log(`✅ 同步题目 ${id} - ${title}`)
  })
}

sync()
