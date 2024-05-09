import { global } from '../../global.js';
import { menu } from '../data/index.js';
import { FASTElement, html, css, customElement } from '@microsoft/fast-element';
import linkedin from '@icons/icon-linkedin.svg';

const template = html<AppFooter>`
  <footer>
    <article>
      <a
        target="_blank"
        href="https://www.linkedin.com/company/op-dev/"
        class="socialList"
      >
        <img class="med" src="${linkedin}" />
      </a>

      <ul class="piedList">
        ${menu.footer
          .map((item) => {
            return `
            <li>
              <a title="nav" href="${item.link}"> ${item.title} </a>
            </li>
          `;
          })
          .join('')}
      </ul>
    </article>
  </footer>
`;
const styles = [
  global,
  css`
    /* pied */
    footer {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;

      width: 100%;
      padding: 0.5% 0;

      text-align: center;
      transform: translateY(10px);
      opacity: 0;
      transition: transform, opacity;
      transition-duration: 0.4s;
      transition-timing-function: ease;

      &.show {
        transform: translateY(0);
        opacity: 1;
      }
    }

    /* navbar */
    article {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;

      width: 90%;
      background: transparent;
      border-radius: 16px;
      border: none;
      padding: 0.5% 0;
    }
    .piedList {
      gap: 1%;
      width: 100%;
    }
    .piedList li a {
      color: var(--sec);
      font-size: clamp(10px, 1vw, 12px);
    }

    /* linkedin */
    .socialList {
      width: 2.5%;
    }
  `,
];
@customElement({ name: 'app-footer', template, styles })
export class AppFooter extends FASTElement {
  // @query('footer') footerElement!: HTMLElement;
  footerElement!: HTMLElement;

  connectedCallback() {
    super.connectedCallback();
    this.footerElement = this.shadowRoot!.querySelector('footer')!;
    //show footer if page is small enough - window.scrollY + window.innerHeight > document.body.scrollHeight - 100 (100px from bottom of the page )
    if (
      window.scrollY + window.innerHeight >
      document.body.scrollHeight - 100
    ) {
      this.footerElement.classList.add('show');
    }
    window.addEventListener('scroll', this.scrollHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('scroll', this.scrollHandler);
  }

  scrollHandler = () => {
    if (
      window.scrollY + window.innerHeight >
      document.body.scrollHeight - 100
    ) {
      this.footerElement.classList.add('show');
    } else if (
      this.footerElement.classList.contains('show') &&
      window.scrollY + window.innerHeight < document.body.scrollHeight - 150
    ) {
      this.footerElement.classList.remove('show');
    }
  };
}
