import { defineConfig } from 'vitepress';
import typedocSidebar from '../docs/api/typedoc-sidebar.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Typescript API',
  description: 'An example API documentation site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],

    sidebar: [
      {
        text: 'API',
        items: typedocSidebar,
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  ignoreDeadLinks: [
    './documents/%25E5%259F%25BA%25E7%25A1%2580%25E5%25BA%2593',
    './documents/%25E9%25A1%25B9%25E7%259B%25AE%25E6%2596%2587%25E6%25A1%25A3',
    // ignore all localhost links
    /^https?:\/\/localhost/,
    // ignore all links include "/repl/""
    /\/repl\//,
    // custom function, ignore all links include "ignore"
    (url) => {
      return url.toLowerCase().includes('ignore');
    },
  ],
});
