module.exports = {
	env: {
		node: true,
		es2022: true,
		browser: true,
	},
	extends: ['eslint:recommended', 'plugin:astro/recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {},
	settings: {
		react: {
			version: 'detect',
		},
	},
	overrides: [
		{
			files: ['*.astro'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
			rules: {},
		},
		{
			files: ['*.ts'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.ts'],
			},
			rules: {},
		},
		{
			files: ['*.jsx'],
			plugins: ['react'],
			extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
			rules: {
				'react/prop-types': 'off',
			},
		},
	],
};
