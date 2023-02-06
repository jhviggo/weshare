<script>
  import Spinner from '../components/spinner.svelte';
  import Group from '../components/group.svelte';

  import { getGroups } from '../lib/repository';
  import { userStore } from '../store';
</script>

<div class="container pad-m">
  {#await getGroups($userStore.groups)}
    <Spinner></Spinner>
  {:then groups} 
    <div class="groups">
      {#each groups as group}
        <Group group={group}></Group>
      {/each}
    </div>
  {/await}
  
  <a href="/new-group">+</a>
</div>

<style>
  .container {
    padding-top: 1rem;
  }

  .groups {
    display: grid;
    gap: 1rem;
  }

  a {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 1rem;
    right: 1rem;
    background-color: var(--success-light);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    color: white;
    font-size: 1.5rem;
    font-weight: bolder;
    z-index: 50;
  }
</style>
