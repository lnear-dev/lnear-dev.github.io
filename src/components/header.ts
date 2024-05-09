import { global } from '../../global.js';
import { menu } from '../data/index.js';
import { FASTElement, css, html, customElement } from '@microsoft/fast-element';
const styles = [
  global,
  css`
    /* tete */
    header {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;

      background-color: var(--fill);
    
      top: 0;
      width: 100%;
    }

    /* navbar */
    nav {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;

      width: 90%;
      background-color: transparent;
    }
    ul {
      flex-flow: row wrap;
      justify-content: end;
      align-items: end;

      width: 50%;
      gap: 5%;
    }
    ul a {
      font-size: 18px;
      text-align: end;
    }

    /* logo (cl) */
    .logoLink {
      text-align: start;
      width: 25%;
    }
  `,
];

const template = html<AppHeader>`
  <header>
    <nav>
      <a href="/" class="logoLink">
        <img class="petit" src="/assets/brand-kit/cl_LNE.svg" />
      </a>

      <ul>
        ${menu.header
          .map(
            (item) =>
              ` <li>  <a title="nav" href="${item.link}" ${
                item.title === "/cv" ? 'download' : ''
              }> ${item.title} </a> </li> `
          )
          .join('')}
      </ul>
    </nav>
  </header>
`;

@customElement({ name: 'app-header', template, styles })
export class AppHeader extends FASTElement {}
