import { global } from '../../global.js';
import {
  FASTElement,
  html,
  css,
  attr,
  repeat,
  ElementStyles,
} from '@microsoft/fast-element';
export type CardEntry = {
  img: string;
  url: string;
  name?: string;
};
export const cardTemplate = html<BaseCard>`
  <fieldset>
    <legend><h2>${(x) => x.title}</h2></legend>
    <ul>
      ${repeat(
        (x) => x.data,
        html<CardEntry>`
          <li>
            <a target="_blank" href="${(x) => x.url}">
              <img src="${(x) => x.img}" />
              <h2>${(x) => x.name || ''}</h2>
            </a>
          </li>
        `
      )}
    </ul>
  </fieldset>
`;
export const cardStyles = (styles?: ElementStyles) => [
  global,
  css`
  :host {
    width: 50%;
  }
    fieldset {
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      background: transparent;
      border-radius: 16px;

      width: 95%;
      
      & legend {
        background-color: var(--ponc);
        border: 2px solid var(--ponc, black);

        text-align: start;
        width: 75%;
      }

    }
  `,
  styles || css``,

];
export abstract class BaseCard extends FASTElement {
  @attr title = 'Tabs';
  @attr data: CardEntry[] = [];

  constructor() {
    super();
  }
}
