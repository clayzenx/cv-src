<script lang="ts">
  export let url: string;
</script>

<a href={url}>
  <div class="company d-flex ai-center jc-between">
    <slot name="left" />
    <slot name="right" />
  </div>
</a>

<style>
  .company {
    width: var(--container-width);
    height: 140px;
    padding: 5px 20px;
    border-radius: 10px;
    border: 1px solid var(--disable);
  }
</style>
