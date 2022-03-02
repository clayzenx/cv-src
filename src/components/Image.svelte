<script lang="ts">
  export let src: String;
</script>

<div class="image" style={`background-image: url(${src})`} />

<style scoped>
  .image {
    background-size: 112px;
    width: 112px;
    height: 112px;
    box-shadow: 1px 1px 3px var(--black800);
  }
</style>
