import { FASTElement, html, css, customElement } from '@microsoft/fast-element';
import { global } from '../../global.js';
import '../components/body.js';

const template = html<AppBlogPost>`
  <app-body>
    <section>
    </section>
  </app-body>
`;
const styles = [
  global,
  css`
  .plein {
    justify-content: space-between;
    width: 100%;
    margin: 2.5% 0;
  }
    .socialList {
      text-align: start;
      width: 50%;
      margin: 0.5% 0;
      font-weight: 600;
    }
  
    .contactForm {
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .contactForm div {
      width: 50%;
    }
    .contactForm button {
      width: 100%;
      padding: 1%;
      background: rgba(214, 214, 214, 0.53);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(11px);
      -webkit-backdrop-filter: blur(11px);
      border: none;
      color: #00b8ff;
      font-weight: 500;
    }
    .contactForm button:hover {
      background-color: #00000010;
      border: 1px dashed #000;
      color: #000;
    }
    .contactForm button:active {
      background-color: #000;
      border: 1px solid #000;
      color: #fff;
    }
  `,
];
@customElement({
  name: 'app-blog-post',
  template,
  styles,
})
export class AppBlogPost extends FASTElement {}
