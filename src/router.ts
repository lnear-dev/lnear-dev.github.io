// docs for router https://github.com/thepassle/app-tools/blob/master/router/README.md



if (!(globalThis as any).URLPattern) {
  await import("urlpattern-polyfill");
}

import { Router } from '@thepassle/app-tools/router.js';
import { lazy } from '@thepassle/app-tools/router/plugins/lazy.js';

// @ts-ignore
import { title } from '@thepassle/app-tools/router/plugins/title.js';

import './pages/landing.js';
import { html } from '@microsoft/fast-element';

export const router = new Router({
    routes: [
      {
        path: '/',
        title: 'lnear.dev',
        render: () => html`<app-landing></app-landing>`
      },

      {
        path: '/contact',
        title: 'contact',
        plugins: [
          lazy(() => import('./pages/contact.js')),
        ],
        render: () => html`<app-contact></app-contact>`
      },
      {
        path: '/blog',
        title: 'blog',
        plugins: [
          lazy(() => import('./templates/blog-post.js')),
        ],
        render: () => html`<app-blog-post></app-blog-post>`
      }
    ]
  });
