module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    // project: ['./tsconfig.json'], // Specify it only for TypeScript files
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    document: 'readonly',
    window: 'readonly',
    XMLHttpRequest: 'readonly',
    fetch: 'readonly',
    AMap: 'readonly',
  },
  plugins: [ '@typescript-eslint', 'prettier', 'import', 'react', 'react-hooks'],
  rules: {
    'max-len': ['error', { code: 120 }],
    'indent': ['off', 2, { "MemberExpression": 1,  "ArrayExpression": 1 }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-unused-expressions': 'off',
    'no-param-reassign': 'off',
    'no-mixed-operators': 'off',
    // 'object-curly-spacing': ["error", "always"],
    // 'object-curly-newline': ["error", { "multiline": true }],
    // 'key-spacing': ["error", { "mode": "strict" }],
    'no-shadow': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'newline-after-var': 1,
    'newline-before-return': 1,
    'prefer-template': "error",
    'import/first': [2, "absolute-first"],
    'import/no-duplicates': ['error', { considerQueryString: true }],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    // 'import/order': [
    //   'error',
    //   {
    //     "pathGroups": [
    //       {
    //         "pattern": "@/**",
    //         "group": "external",
    //         "position": "after"
    //       }
    //     ],
    //     groups: [
    //       'builtin',
    //       'external',
    //       'internal',
    //       'parent',
    //       'sibling',
    //       'object',
    //       'type',
    //       'index',
    //     ],
    //   },
    // ],
    'no-console': 'warn',
    'react/prop-types': 'off',
  },
  ignorePatterns: [
    '*.min.*',
    'CHANGELOG.md',
    'dist',
    'build',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode',
  ],
  settings: {
    react: {
      version: '17',
    },
  },
}