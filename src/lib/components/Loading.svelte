<script lang="ts">
    let { size = 'md', label = '' } = $props();

    const sizeMap: Record<string, number> = {
        sm: 12,
        md: 18,
        lg: 28
    };

    const px = sizeMap[size] ?? sizeMap.md;
</script>

<div class="spinner" role="status" aria-live="polite" aria-label={label || 'Loading'}>
    <svg class="ring" width={px} height={px} viewBox="0 0 24 24" aria-hidden="true">
        <circle class="bg" cx="12" cy="12" r="10" fill="none" stroke-width="3" />
        <path class="accent" d="M22 12a10 10 0 0 1-10 10" fill="none" stroke-width="3" stroke-linecap="round" />
    </svg>
    {#if label}
        <span class="visually-hidden">{label}</span>
    {/if}
</div>

<style>
    .spinner { display:inline-flex; align-items:center; justify-content:center; }
    .ring { display:block; }
    .ring .bg { stroke: rgba(0,0,0,0.06); }
    .ring .accent { stroke: #2563eb; transform-origin: center; animation: spin 850ms linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .visually-hidden { position: absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
</style>
