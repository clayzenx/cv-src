import Router, { link } from 'svelte-spa-router';
import About from '../pages/About.svelte';
import Experience from '../pages/Experience.svelte';

export const RouterView = Router;
export { link };

export const routes = {
  '/': About,
  '/exp': Experience,
};

