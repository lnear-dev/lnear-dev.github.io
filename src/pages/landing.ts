import {
  FASTElement,
  html,
  css,
  customElement
} from '@microsoft/fast-element';
import { global } from '../../global.js';
import { projects, components, packages, workflow } from '../data/index.js';
import {
  BaseCard,
  // CardEntry,
  cardStyles,
  cardTemplate,
} from '../components/card.js';
import '../components/body.js';

@customElement({
  name: 'projects-card',
  template: cardTemplate,
  styles: cardStyles(css`
    :host {
      justify-content: start;
      align-items: start;
      width: 40%;
    }

    fieldset {
      border: 2px solid var(--sec, black);

      & legend {
        justify-content: center;
        text-align: center;

        width: 35%;
        padding: 0;
        border: 6px solid var(--ponc);
      }
      & img {
        width: 100%;
      }
      & ul li {
        width: 45%;
        padding: 1%;
      }
    }
  `),
})
export class ProjectsCard extends BaseCard {}
@customElement({
  name: 'stack-card',
  template: cardTemplate,
  styles: cardStyles(css`
    :host {
      justify-content: center;
      align-items: center;
      width: 75%;
    }

    fieldset {
      border: 2px solid var(--sec, black);
      text-align: center;

      margin: 5% 0;

      & legend {
        justify-content: center;
        background-color: transparent;
        border: none;
        width: 20%;
      }
      & h2 {
        color: var(--ponc);
      }
      & img {
        width: 30%;
      }
      & ul li {
        width: 25%;
        padding: 1%;
      }
    }
  `),
})
export class StackCard extends BaseCard {}
@customElement({
  name: 'packages-card',
  template: cardTemplate,
  styles: cardStyles(css`
  :host {
    flex-wrap: nowrap;
    width: 100%;
  }  
  fieldset {
    flex-wrap: wrap;
      border: 2px solid var(--sec, black);
      text-align: center;

      & legend {
        border: 5px solid var(--ponc, black);
        justify-content: center;
        width: 20%;
      }
      & img {
        width: 55%;
      }
    }
  `),
})
export class PackagesCard extends BaseCard {}
const template = html`
  <app-body>
    <section>

      <span class="plein">
        
      <span class="vert">  
        <div class="blurb">
        <h1>
        Hi, my name is Lanre.
        </h2>
        
        <h4>
        Software has been an integral part of my professional journey for over a decade, during which I've honed my skills through self-teaching and dedicated practice. I am excited about the opportunity to contribute to the ecosystem of your company.
        </h4>
        </div>

        <stack-card title="my stack" :data="${() => workflow}"></stack-card>
</span>
        <projects-card
          title="active projects"
          :data="${() => projects}"
        ></projects-card>
        </span>
      </span>

        <packages-card title="packages" :data="${() =>
          packages}"></packages-card>
        <components-card title="components" :data="${() =>
          components}"></components-card>

    </section>
  </app-body>
`;

@customElement({
  name: 'app-landing',
  template,
  styles: [
    global,
    css`
      .blurb {
        flex-flow: column wrap;
        margin: 2% 0;
      }
      .plein {
        justify-content: space-between;
        align-items: start;
        width: 100%;
        margin: 1% 0;
        padding: 1% 0;
      }
      .vert {
        flex-flow: column wrap;
        align-items: start;

        width: 50%;
      }
    `,
  ],
})
export class AppLanding extends FASTElement {}
