<script>
  import { userStore } from '../store';
  import Login from '../components/login.svelte';
  import Header from '../components/header.svelte';

  let loggedIn = false;

  userStore.subscribe(value => {
    if (value.uid) {
      loggedIn = true;
    }
  });
</script>

{#if !loggedIn}
  <div class="p1">
    <Login></Login>
  </div>
{:else}
  <Header name={$userStore.name} currency={$userStore.currency}></Header>
  <div class="space">
    <slot></slot>
  </div>
{/if}


<style>
  .space {
    padding-top: 3rem;
    height: calc(100% - 3rem);
  }
</style>