<script lang="ts">
	/**
	 * NavBar — small header used on demo pages
	 * @prop {string} title - Title shown on the left side of the nav
	 */
	let { title = 'Components' } = $props();
</script>

<nav class="demo-nav">
	<div class="demo-nav__brand">{title}</div>
	<div class="demo-nav__links">
		<a href="/">Home</a>
		<a href="/components-demo">Components</a>
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
