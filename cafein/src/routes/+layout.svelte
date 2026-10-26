<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import '#lib/styles/Globals.css';
	import '@fontsource/anton-sc/400.css';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}