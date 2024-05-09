import { global } from '../../global.js';
import './footer.js';
import './header.js';
import { FASTElement, html, customElement } from '@microsoft/fast-element';
const template = html<AppBody>`
  <app-header></app-header>
  <main>
    <slot></slot>
  </main>
  <app-footer></app-footer>
`;
@customElement({ name: 'app-body', template, styles: global })
export class AppBody extends FASTElement {}

