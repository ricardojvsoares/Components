<script lang="ts">
	import { Button } from '$lib/components';
	const variants = ['primary', 'secondary', 'ghost'] as const;
	const sizes = ['sm', 'md', 'lg'] as const;
</script>

<h1>Components demo</h1>

<section>
	<h2>Variants</h2>
	{#each variants as v}
		<div style="margin: 0.5rem 0">
			<Button variant={v as 'primary' | 'secondary' | 'ghost'}>{v} button</Button>
		</div>
	{/each}
</section>

<section>
	<h2>Sizes</h2>
	{#each sizes as s}
		<div style="margin: 0.5rem 0">
			<Button size={s as 'sm' | 'md' | 'lg'}>{s} size</Button>
		</div>
	{/each}
</section>

<section>
	<h2>Loading / Disabled</h2>
	<div style="display:flex; gap:1rem; align-items:center">
		<Button loading={true}>Loading</Button>
		<Button disabled={true}>Disabled</Button>
	</div>
</section>
