<div class="spinner"></div>

<style>
  .spinner {
    width: 80px;
    height: 80px;
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .spinner:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 6px solid var(--primary);
    border-color: var(--primary) transparent var(--primary) transparent;
    animation: spinner 1.2s linear infinite;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>