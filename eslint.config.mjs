import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',
      'prefer-const': 'warn',
      'prefer-destructuring': 'warn',
      'no-console': 'off',
      'no-case-declarations': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        exports: 'writable',
        require: 'readonly',
        module: 'writable',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'writable',
        process: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'prefer-const': 'warn',
      'no-console': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    // The GitHub Pages site under site/ is plain browser JavaScript, not part
    // of the npm package — it needs DOM globals instead of the Node globals
    // configured for the rest of the repo's **/*.js files above.
    files: ['site/js/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        history: 'readonly',
        fetch: 'readonly',
        setTimeout: 'writable',
        clearTimeout: 'writable',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'prefer-const': 'warn',
    },
  },
  {
    // The service worker runs in its own worker global scope (self/caches),
    // separate from both the Node scripts and the page-context site JS above.
    files: ['site/sw.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        self: 'readonly',
        caches: 'readonly',
        fetch: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'prefer-const': 'warn',
    },
  },
  {
    ignores: ['node_modules/', 'dist/', 'build/', '**/*.config.*', '**/*.test.js', '**/*.test.ts'],
  }
);
