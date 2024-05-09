import { FASTElement, ElementStyles } from '@microsoft/fast-element';
export type CardEntry = {
    img: string;
    url: string;
    name?: string;
};
export declare const cardTemplate: import("@microsoft/fast-element").ViewTemplate<BaseCard, any>;
export declare const cardStyles: (styles?: ElementStyles) => ElementStyles[];
export declare abstract class BaseCard extends FASTElement {
    title: string;
    data: CardEntry[];
    constructor();
}
