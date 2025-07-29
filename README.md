# typsescript-type-gymnastics

TypeScript 体操（TypeScript Type Gymnastics）

- https://www.typescriptlang.org/docs/handbook/2/types-from-types.html


## 初始化

```bash
pnpm init

pnpm add -D typescript vitest tsx @types/node eslint prettier eslint-config-prettier eslint-plugin-import

pnpm add -D tsup

npx tsc --init

```

配置 `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "types": ["vitest/globals"],
    "outDir": "dist",
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src", "test"]
}
```

## 题库

```
git submodule add https://github.com/type-challenges/type-challenges.git challenges

mkdir -p scripts
touch scripts/generate-challenge.ts

```

