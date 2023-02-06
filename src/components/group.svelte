<script>
  export let group;
</script>

<a class="group" href="/groups/{group.id}">
  <div class="banner">
    <img src="/images/banner.webp" alt="Group banner.">
    <div class="group-title">
      <span>{group.title}</span>
    </div>
  </div>
  <div class="info">
    <div class="info-segment">
      <span class="money">500 kr.</span>
      <span>All expenses</span>
    </div>
    <div class="info-segment">
      <span class="money">0 kr.</span>
      <span>You will receive</span>
    </div>
  </div>
</a>

<style>
  .group {
    display: grid;
    grid-template-rows: auto auto;
    border-radius: 8px;
    overflow: hidden;
    background-color: white;
  }

  .banner {
    position: relative;
  }
  
  img {
    width: 100%;
    height: 100%;
  }
  
  .group-title {
    position: absolute;
    display: grid;
    justify-content: center;
    align-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 2rem;
  }

  .info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
  }

  .info-segment {
    display: grid;
    color: var(--disabled);
    text-align: center;
  }

  .money {
    color: black;
    font-size: 1.2rem;
    font-weight: bold;
  }
</style>
