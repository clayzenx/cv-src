<script lang="ts">
  import { RouterView, routes, link } from "./router";
  import { location } from "svelte-spa-router";

  const navigation: { name: string; href: string }[] = [
    { name: "About", href: "/" },
    { name: "Experience", href: "/exp" },
  ];
</script>

<main>
  <s-nav direction="row">
    {#each navigation as { name, href }}
      <a slot="nav-item" use:link {href} id={href} active={href === $location}>
        {name}
      </a>
    {/each}
  </s-nav>
  <RouterView {routes} />
</main>

<style>
  :root {
    font: 14px/1 "Open Sans", sans-serif;
    color: #555;
  }

  [active="true"] {
    color: red;
  }
</style>
