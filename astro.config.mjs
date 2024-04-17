import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	// Enable Svelte to support Svelte components.
	integrations: [svelte()],
	// Support a custom domain
	site: 'https://edgebox.io',
	redirects: {
    		'/sh': 'https://raw.githubusercontent.com/edgebox-iot/install/main/install.sh?token=GHSAT0AAAAAACOR7TIKNSRJG7AASMEKZYZAZRAD6AA'
  	}
});
