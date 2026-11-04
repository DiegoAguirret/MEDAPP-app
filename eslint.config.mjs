import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['**/node_modules/**', '**/dist/**', '**/coverage/**', '.superpowers/**', 'apps/mobile/android/**', 'apps/mobile/src/content/bundled.ts', 'apps/mobile/.expo/**'] },
  ...tseslint.configs.strict,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      eqeqeq: ['error', 'always'],
    },
  },
  { files: ['tools/**/src/cli.ts', 'tools/**/src/report.ts', 'scripts/**'], rules: { 'no-console': 'off' } },
  { files: ['**/test/**/*.ts', '**/*.test.ts', '**/*.test.tsx'], rules: { '@typescript-eslint/no-non-null-assertion': 'off' } },
  {
    files: ['apps/mobile/**/*.{ts,tsx}'],
    plugins: { 'react-hooks': reactHooks },
    rules: { 'react-hooks/rules-of-hooks': 'error', 'react-hooks/exhaustive-deps': 'error' },
  },
  { files: ['apps/mobile/*.js', 'apps/mobile/plugins/*.js'], rules: { '@typescript-eslint/no-require-imports': 'off' } },
);
