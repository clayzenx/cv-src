import Router, { link, location } from 'svelte-spa-router';
import About from '../pages/About.svelte';
import Experience from '../pages/Experience.svelte';
import Projects from '../pages/Projects.svelte';
import Education from '../pages/Education.svelte';

export const RouterView = Router;
export { link, location };

export const routes = {
  '/': About,
  '/exp': Experience,
  '/projects': Projects,
  '/edu': Education,
};

