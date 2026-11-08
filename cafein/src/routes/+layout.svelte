<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import '#lib/styles/Globals.css';
	import '@fontsource/anton-sc/400.css';

	let { children }: LayoutProps = $props();

	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';

  onMount(() => {
    const lenis = new Lenis({
      autoRaf: true,     
      duration: 1.2,     
      smoothWheel: true,
    });
    return () => lenis.destroy();
  });
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}