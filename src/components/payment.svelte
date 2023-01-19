<script>
  export let payment;
</script>

<div>
  <span>{payment.user} added {payment.amount} kr.</span>
  <span>{payment.text}</span>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    border: 1px solid black;
    border-radius: 8px;
  }
</style>
