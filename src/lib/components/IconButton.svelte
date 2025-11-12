<script lang="ts">
  /**
   * IconButton - circular icon-only button with same visual language
   * @prop disabled
   * @prop ariaLabel
   */
  type Props = { disabled?: boolean; ariaLabel?: string };
  let { disabled = false, ariaLabel } : Props = $props();

  function handleClick(e: MouseEvent) { if (disabled) e.preventDefault(); }
</script>

<button class="icon-btn" {disabled} aria-label={ariaLabel} onclick={handleClick}>
  <span class="icon-btn__glass" aria-hidden="true"></span>
  <span class="icon-btn__content">{@render children()}</span>
</button>

<style>
  .icon-btn { border-radius: 9999px; width: 2.4rem; height: 2.4rem; display:inline-flex; align-items:center; justify-content:center; border:1px solid var(--btn-primary-border); background:var(--btn-primary-bg); box-shadow:var(--btn-shadow); }
  .icon-btn__content { z-index:1 }
  .icon-btn__glass { position:absolute; inset:0; pointer-events:none; background:linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.06)); }
</style>
