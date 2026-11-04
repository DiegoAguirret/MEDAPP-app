import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['**/node_modules/**', '**/dist/**', '**/coverage/**', '.superpowers/**', 'apps/**'] },
  ...tseslint.configs.strict,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      eqeqeq: ['error', 'always'],
    },
  },
  { files: ['tools/**/src/cli.ts', 'tools/**/src/report.ts', 'scripts/**'], rules: { 'no-console': 'off' } },
  { files: ['**/test/**/*.ts'], rules: { '@typescript-eslint/no-non-null-assertion': 'off' } },
);
