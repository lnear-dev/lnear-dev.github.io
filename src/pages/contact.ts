import { FASTElement, html, css, customElement } from '@microsoft/fast-element';
import { global } from '../../global.js';
import '../components/body.js';

const kFormLabels: Array<string> = ['Name', 'Email', 'Subject'];
const template = html<AppContact>`
  <app-body>
    <section>
      <form class="contactForm" action="/submit_contact" method="post">
        <a class="socialList" href="mailto:hi@lnear.dev">hi@lnear.dev</a>
        ${kFormLabels
          .map((item) => {
            return `
          <div>
            <input name="${item}" placeholder="${item}" required />
          </div>
        `;
          })
          .join('')}
        <div>
          <textarea name="message" placeholder="Message" required> </textarea>
        </div>
        <div>
          <button class="sendButton">Send</button>
        </div>
      </form>
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
      border: 2px solid var(--sec);
      color: #00b8ff;
      font-weight: 500;
    }
    .contactForm button:hover {
      background-color: transparent;
      border: 2px solid var(--ponc);
    }
    .contactForm button:active {
      background-color: var(--ponc);
      border: 2px solid var(--ponc);
      color: #fff;
    }
  `,
];
@customElement({
  name: 'app-contact',
  template,
  styles,
})
export class AppContact extends FASTElement {}
