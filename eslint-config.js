import stylistic from '@stylistic/eslint-plugin-js'
import globals from 'globals'

export default [
  {
    languageOptions: {
      // v9之后不使用env配置了， 转而使用globals这个包
      // 参考最新文档
      // https://eslint.org/docs/latest/use/configure/migration-guide#configuring-language-options
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    },
    plugins: {
      '@stylistic': stylistic
    },
    // "files": ["**/*.[jt]s?(x)"],
    files: ['src/**/*.js', 'tests/**/*.js', '*.config.[jt]s'],
    rules: {
      // 使用单引号
      '@stylistic/quotes': ['error', 'single', {
        avoidEscape: true,
        allowTemplateLiterals: true
      }],
      // 不使用分号
      '@stylistic/semi': ['warn', 'never'],
      // 使用2个空格缩进
      '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],
      // 禁止使用console，除了console.warn
      'no-console': ['warn', { 'allow': ['warn'] }],
      // 函数括号前总是有空格
      '@stylistic/space-before-function-paren': ['warn', 'always'],
      // 对象键值对中冒号前无空格，冒号后有空格
      '@stylistic/key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      // 箭头函数的箭头前后都要有空格
      '@stylistic/arrow-spacing': ['error', { 'before': true, 'after': true }],
      // 最多允许一个空行，文件末尾最多一个空行
      '@stylistic/no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
      // 块级作用域前总是有空格
      '@stylistic/space-before-blocks': ['error', 'always'],
      // 中缀操作符周围要有空格
      '@stylistic/space-infix-ops': ['warn'],
      // 关键字周围要有空格
      '@stylistic/keyword-spacing': ['warn'],
      // 对象键值对中冒号前无空格，冒号后有空格
      '@stylistic/key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      // 对象花括号内部两侧总是有空格
      '@stylistic/object-curly-spacing': ['warn', 'always'],
      // 数组括号内部两侧不允许有空格
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      // 逗号前不允许有空格，逗号后必须有空格
      '@stylistic/comma-spacing': ['warn', { 'before': false, 'after': true }],
      // 分号前不允许有空格，分号后必须有空格
      '@stylistic/semi-spacing': ['warn', { before: false, after: true }],
      // 未定义
      'no-undef': 'error'
    }
  }
]
