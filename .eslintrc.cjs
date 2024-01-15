/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	env: {
		node: true,
		es2022: true,
	},
	// parser: 'vue-eslint-parser',
	// parserOptions: {
	// 	parser: '@typescript-eslint/parser',
	// 	sourceType: 'module',
	// 	ecmaVersion: 2020,
	// },
	rules: {
		'vue/no-unused-components': 'warn',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		'prettier/prettier': [
			'warn',
			{
				printWidth: 120,
				useTabs: true,
				eslintIntegration: true,
				singleQuote: true,
				semi: true,
				trailingComma: 'es5',
			},
		],
	},
	extends: [
		'plugin:vue/strongly-recommended',
		'eslint:recommended',
		// '@vue/eslint-config-recommended',
		'@vue/eslint-config-prettier',
	],
	// required to lint *.vue files
	// plugins: ['vue', '@typescript-eslint'],
	// overrides: [
	// 	{
	// 		files: ['cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}'],
	// 		extends: ['plugin:cypress/recommended'],
	// 	},
	// ],
};
