// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	plugins: [
		[
			'@snowpack/plugin-build-script',
			{
				cmd: "postcss",
				input: [".css", ".pcss"],
				output: [".css"],
			}
		],
	
		...require("@sveltejs/snowpack-config").plugins,
	
	],
	extends: '@sveltejs/snowpack-config',
	mount: {
		'src/components': '/_components'
	},
	alias: {
		$components: './src/components'
	}
};
