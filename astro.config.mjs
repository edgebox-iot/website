import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	// Enable Svelte to support Svelte components.
	integrations: [svelte()],
	// Support a custom domain
	site: 'https://edgebox.io',
	redirects: {
  		'/sh': 'https://github.com/edgebox-iot/install/releases/download/v1.0.0-beta.1/install.sh'
	}
});
