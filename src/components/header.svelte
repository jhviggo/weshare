<script>
  import Icon from './icon.svelte';
  import { page } from '$app/stores'

  export let name;
  export let currency;
</script>

<div class="header">
  <div class="header-content">
    <a href="/">
      {#if $page.url.pathname !== '/'}
        <Icon color="green">arrow_back_ios</Icon>
      {:else}
        {name}
      {/if}
    </a>
    <select bind:value={currency}>
      <option value="DKK">DKK</option>
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
    </select>
  </div>
</div>

<style>
  .header {
    display: grid;
    position: fixed;
    width: 100%;
    height: 3rem;
    box-shadow: 0 0 0.25rem 0;
    align-content: center;
    z-index: 50;
    background-color: white;
  }

  .header-content {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    padding: 1rem;
  }

  select {
    border-radius: 8px;
  }

  a {
    display: flex;
    color: var(--primary);
  }
</style>
