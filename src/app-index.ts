import { global } from '../global.js';
import { router } from './router';
import { FASTElement, ViewTemplate, customElement } from '@microsoft/fast-element';
import './pages/landing.js';

@customElement({
  name: 'app-index',
  template: (router.render() as ViewTemplate),
  styles: global,
})
export class AppIndex extends FASTElement {
  requestUpdate() {
    this.shadowRoot!.innerHTML = '';  
    (router.render() as ViewTemplate).render([], this.shadowRoot!);
  }
  
  connectedCallback() {
    super.connectedCallback();
    // this.target = this.shadowRoot!.getElementById('target') as HTMLDivElement;
    router.addEventListener('route-changed', () => {
      console.log('route-changed');
      if ('startViewTransition' in document) {
        return (document as any).startViewTransition(() => {
          this.requestUpdate();
        });
      } else {
        this.requestUpdate();
      }
    });
  }
}