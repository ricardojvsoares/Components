<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';

	let { children } = $props();
</script>

<NavBar title="Component gallery" links={[{ href: '/', label: 'Home' }]}></NavBar>

{@render children()}
