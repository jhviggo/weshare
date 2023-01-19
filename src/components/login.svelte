<script>
  import Spinner from './spinner.svelte';
  import { login } from '../lib/auth';

  let email = 'user@mail.com';
  let password = '321654987';
  let loading = false;

  async function handleLogin() {
    loading = true;
    await login(email, password);
    loading = false;
  }
</script>

<h1>WeShare</h1>
<p><a href="https://viggo.work/">By Viggo</a></p>
<hr>
<form>
  <label>
    Email
    <input type="text" bind:value={email}>
  </label>

  <label>
    Password
    <input type="password" bind:value={password}>
  </label>

  
  <div class="btn-container">
    <button on:click|preventDefault={handleLogin}>Sign in</button>
  </div>
</form>

{#if loading}
  <Spinner></Spinner>
{/if}

<style>
  form * {
    display: grid;
  }

  h1 {
    margin-bottom: 0;
    text-align: center;
  }

  hr {
    margin-bottom: 5rem;
  }

  p {
    margin-top: 0;
    text-align: center;
  }

  form {
    display: grid;
    gap: 0.5rem;
    margin-bottom: 3rem;
  }

  button {
    width: 80%;
    font-weight: bold;
    font-size: 1rem;
  }
  
  .btn-container {
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 1rem;
    left: 0;
    margin-top: 0.5rem;
    width: 100%;
  }
</style>