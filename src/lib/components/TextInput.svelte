<script lang="ts">
  /**
   * TextInput - simple input with subtle border and glass effect
   * @prop value
   * @prop placeholder
   * @prop disabled
   */
  export let value = '';
  export let placeholder = '';
  export let disabled = false;
</script>

<div class="input-wrap">
  <input class="text-input" {placeholder} {disabled} bind:value />
  <span class="text-input__glass" aria-hidden="true"></span>
</div>

<style>
  .input-wrap { position: relative; display:inline-block }
  .text-input { padding:0.5rem 0.75rem; border-radius:8px; border:1px solid var(--btn-primary-border); background:var(--btn-secondary-bg); }
  .text-input__glass { position:absolute; inset:0; pointer-events:none; background:linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.06)); }
</style>
