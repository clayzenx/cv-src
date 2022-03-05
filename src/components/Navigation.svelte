<script lang="ts">
  import { link, location } from "../router";

  const navigation: { name: string; href: string; svg: string }[] = [
    {
      name: "Обо мне",
      href: "/",
      svg: "M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z",
    },
    {
      name: "Опыт",
      href: "/exp",
      svg: "M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z",
    },
    {
      name: "Проекты",
      href: "/projects",
      svg: "M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z",
    },
    {
      name: "Образование",
      href: "/edu",
      svg: "M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z",
    },
  ];
</script>

<s-nav direction="row" class="nav">
  {#each navigation as { name, href, svg }}
    <a
      slot="nav-item"
      use:link
      {href}
      id={href}
      class="nav-item"
      class:active={href === $location}
    >
      <svg class="svg-icon" viewBox="0 0 18 18">
        <path fill-rule="evenodd" d={svg} />
      </svg>
      <span class="name">{name}</span>
    </a>
  {/each}
</s-nav>

<style scoped>
  .nav-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px 20px;
    font-weight: 500;
    font-size: 14px;
    border: 1px solid transparent;
    border-top: 3px solid transparent;
    border-bottom: 1px solid var(--disable);
  }
  .nav-item.active {
    border-top: 3px solid var(--primary);
    border-left: 1px solid var(--disable);
    border-right: 1px solid var(--disable);
    border-bottom: 1px solid transparent;
  }
  .nav-item.active > svg.svg-icon > * {
    fill: var(--acive);
  }
  .nav-item:hover:not(.active) > svg.svg-icon > * {
    fill: var(--hover);
  }
  .nav-item.active > span.name {
    color: var(--active);
  }
  .nav-item:hover:not(.active) > span.name {
    color: var(--hover);
  }
</style>
