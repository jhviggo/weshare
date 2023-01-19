<script>
  export let color;
</script>

<span class="material-symbols-outlined {color}">
  <slot></slot>
</span>

<style>
  span {
    font-size: 1rem;
  }

  .green {
    color: var(--success);
  }
</style>