import { FASTElement } from '@microsoft/fast-element';
export declare class AppFooter extends FASTElement {
    footerElement: HTMLElement;
    connectedCallback(): void;
    disconnectedCallback(): void;
    scrollHandler: () => void;
}
