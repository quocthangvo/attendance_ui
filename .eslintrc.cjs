module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'eslint-config-prettier',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'prettier'],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'prettier/prettier': [
            'warn',
            {
                arrowParens: 'always',
                bracketSameLine: false,
                bracketSpacing: true,
                jsxSingleQuote: true,
                printWidth: 120,
                proseWrap: 'preserve',
                quoteProps: 'as-needed',
                requirePragma: false,
                semi: false,
                singleQuote: true,
                tabWidth: 4,
                useTabs: false,
            },
        ],
    },
}
