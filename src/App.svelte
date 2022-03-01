<script lang="ts">
  import { RouterView, routes } from "./router";
  import Navigation from "./components/Navigation.svelte";
</script>

<main>
  <div id="main-container">
    <Navigation />
    <RouterView {routes} />
  </div>
</main>

<style lang="postCss">
  @import "./assets/styles/global.css";
</style>
