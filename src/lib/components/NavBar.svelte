<script lang="ts">
	/**
	 * Reusable NavBar component
	 * @prop {string} title - brand/title text
	 * @prop {{href:string,label:string}[]} links - navigation links shown on the right
	 * @prop {boolean} compact - if true, render a compact variant
	 */

	type Link = { href: string; label: string };
	let {
		title = 'Components',
		links = [{ href: '/', label: 'Home' }] as Link[],
		compact = false,
		actions = () => null
	} = $props();
</script>

<nav class="demo-nav {compact ? 'demo-nav--compact' : ''}">
	<div class="demo-nav__brand">{title}</div>
	<div class="demo-nav__links">
		{#each links as l}
			<a href={l.href}>{l.label}</a>
		{/each}
		{@render actions()}
	</div>
</nav>

<style>
	.demo-nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.6rem 1rem;
		background: #f6f7fb;
		border-bottom: 1px solid rgba(0, 0, 0, 0.06);
		box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02);
	}
	.demo-nav__brand {
		font-weight: 700;
	}
	.demo-nav__links a {
		margin-left: 1rem;
		color: #3b3f4a;
		text-decoration: none;
	}
</style>
