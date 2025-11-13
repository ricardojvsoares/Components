<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Button,
		IconButton,
		Modal,
		Icon,
		Dropdown,
		Toast,
		Pattern,
		toaster
	} from '$lib/components';

	// Local state
	let query = '';
	let sidebarOpen = true;
	let playerOpen = false;
	let currentVideo: {
		id: string;
		title: string;
		thumb: string;
		channel: string;
		views: string;
	} | null = null;

	// Mock videos
	const videos = Array.from({ length: 12 }).map((_, i) => ({
		id: String(i + 1),
		title: `Sample Video Title ${i + 1}`,
		thumb: `https://picsum.photos/seed/video${i + 1}/480/270`,
		channel: `Channel ${String.fromCharCode(65 + (i % 26))}`,
		views: `${(Math.floor(Math.random() * 900) + 100).toLocaleString()} views`
	}));

	function openPlayer(v: any) {
		currentVideo = v;
		playerOpen = true;
	}

	function onSearch() {
		toaster.push(`Search: ${query || '(empty)'}`);
	}

	// Small accessibility helper
	onMount(() => {
		document.title = 'MockTube - Demo';
	});
</script>

<main class="yt-root">
	<header class="yt-header">
		<div class="left">
			<IconButton ariaLabel="menu" onclick={() => (sidebarOpen = !sidebarOpen)}>
				<Icon name="hamburger" />
			</IconButton>
			<h1 class="logo">MockTube</h1>
		</div>

		<div class="center">
			<input
				class="search"
				placeholder="Search"
				bind:value={query}
				on:keydown={(e) => e.key === 'Enter' && onSearch()}
			/>
			<Button onclick={onSearch}>Search</Button>
		</div>

		<div class="right">
			<IconButton ariaLabel="create">
				<Icon name="default" />
			</IconButton>
			<IconButton ariaLabel="notifications">
				<Icon name="default" />
			</IconButton>
			<Button variant="ghost">Sign in</Button>
		</div>
	</header>

	<section class="yt-body">
		{#if sidebarOpen}
			<aside class="yt-sidebar">
				<nav>
					<ul>
						<li class="active">Home</li>
						<li>Trending</li>
						<li>Subscriptions</li>
						<li>Library</li>
					</ul>
				</nav>
				<div class="categories">
					<h4>Categories</h4>
					<Dropdown
						items={[
							{ label: 'All', value: 'all' },
							{ label: 'Music', value: 'music' },
							{ label: 'Gaming', value: 'gaming' }
						]}
						value="all"
					/>
				</div>
			</aside>
		{/if}

		<main class="yt-content">
			<div class="hero">
				<Pattern />
				<div class="hero-info">
					<h2>Top Picks</h2>
					<p class="muted">A small demo of components in a video-grid layout</p>
				</div>
			</div>

			<section class="grid">
				{#each videos as v}
					<button type="button" class="video-card" on:click={() => openPlayer(v)}>
						<img src={v.thumb} alt={v.title} />
						<div class="meta">
							<h3>{v.title}</h3>
							<div class="sub">{v.channel} • {v.views}</div>
						</div>
					</button>
				{/each}
			</section>
		</main>
	</section>

	<Modal bind:open={playerOpen} title={currentVideo ? currentVideo.title : 'Player'}>
		{#if currentVideo}
			<div class="player-stub">
				<img src={currentVideo.thumb} alt={currentVideo.title} style="width:100%" />
				<p class="muted">{currentVideo.channel} • {currentVideo.views}</p>
				<div style="margin-top:1rem">
					<Button variant="primary" onclick={() => toaster.push('Liked')}>Like</Button>
					<Button variant="ghost" onclick={() => toaster.push('Share link copied')}>Share</Button>
				</div>
			</div>
		{/if}
	</Modal>

	<Toast />
</main>

<style>
	.yt-root {
		padding: 1rem 2rem;
	}
	.yt-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	.yt-header .left {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.logo {
		margin: 0;
		font-size: 1.25rem;
	}
	.center {
		display: flex;
		gap: 0.5rem;
		flex: 1;
		justify-content: center;
	}
	.search {
		padding: 0.5rem;
		min-width: 320px;
		border-radius: 6px;
		border: 1px solid var(--border-color);
	}
	.yt-body {
		display: flex;
		gap: 1rem;
	}
	.yt-sidebar {
		width: 220px;
	}
	.yt-sidebar nav ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.yt-sidebar nav li {
		padding: 0.5rem 0;
		color: var(--muted-fg);
		cursor: pointer;
	}
	.yt-sidebar nav li.active {
		font-weight: 600;
		color: var(--fg);
	}
	.yt-content {
		flex: 1;
	}
	.hero {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 0;
	}
	.hero-info h2 {
		margin: 0;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: 1rem;
	}
	.video-card {
		background: var(--card-bg);
		border: 1px solid var(--border-color);
		border-radius: 8px;
		overflow: hidden;
		cursor: pointer;
	}
	.video-card img {
		display: block;
		width: 100%;
		height: auto;
	}
	.video-card .meta {
		padding: 0.5rem;
	}
	.video-card h3 {
		margin: 0 0 0.25rem 0;
		font-size: 0.95rem;
	}
	.video-card .sub {
		color: var(--muted-fg);
		font-size: 0.85rem;
	}
	.player-stub img {
		border-radius: 6px;
	}
</style>
