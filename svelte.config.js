import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$server: 'src/lib/server',

			$axios: 'src/lib/axios',
			$widgets: 'src/widgets',
			$shared: 'src/shared/ui',
			$actions: 'src/shared/actions',
			$utils: 'src/shared/utils',
			$types: 'src/shared/types'
		}
	}
};

export default config;
