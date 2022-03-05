<div class="tag">
  <slot />
</div>

<style scoped>
  .tag {
    display: inline-block;
    padding: 0 7px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    white-space: nowrap;
    border: 1px solid transparent;
    border-radius: 2em;
    padding-right: 10px;
    padding-left: 10px;
    line-height: 22px;
    color: var(--link);
    background-color: var(--light-blue);
  }
  .tag:hover {
    background-color: var(--link);
    color: #fff;
  }
</style>

