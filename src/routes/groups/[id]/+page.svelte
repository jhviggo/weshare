<script>
  import Spinner from '../../../components/spinner.svelte';
  import Payment from '../../../components/payment.svelte';
  import { getPayments } from '../../../lib/repository';
  import { page } from '$app/stores';
</script>

<div class="payment-view">
  <div class="payment-list">
    {#await getPayments($page.params.id)}
      <Spinner></Spinner>
    {:then payments} 
      {#each payments as payment}
        <Payment payment={payment}></Payment>
      {/each}
    {/await}
  </div>
  <div class="payment-actions p1">
    <button>Add</button>
    <button>Pay</button>
  </div>
</div>

<style>
  .payment-view {
    display: grid;
    grid-template-rows: 1fr auto;
    height: 100%;
  }

  .payment-list {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: white;
    overflow-y: scroll;
    padding: 0 0.5rem;
  }

  .payment-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    box-shadow: 0.25rem 0.25rem 0 0;
  }
</style>