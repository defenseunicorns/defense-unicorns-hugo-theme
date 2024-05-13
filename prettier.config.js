module.exports =  {
	bracketSpacing: true,
	htmlWhitespaceSensitivity: 'ignore',
	overrides: [
		{
			files: ['*.html'],
			options: {
				parser: 'go-template',
			},
		},
	],
	plugins: ['prettier-plugin-go-template'],
	printWidth: 100,
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	useTabs: true,
	trailingComma: 'es5',
}
