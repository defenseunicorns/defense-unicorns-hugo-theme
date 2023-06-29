module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'button', 'feat!', 'fix!', 'refactor!'],
    ],
    'subject-case': [2, 'always', ['sentence-case', 'start-case', 'pascal-case', 'upper-case', 'lower-case']],
  },
}
