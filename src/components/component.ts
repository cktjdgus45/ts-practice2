export interface Component {
    attachTo(element: HTMLElement, position?: InsertPosition): void;
    removeFrom(parent: HTMLElement): void;
}

export class BaseComponent<T extends HTMLElement> implements Component {
    protected readonly element: T;
    constructor(htmlString: string) {
        const template = document.createElement('template');
        template.innerHTML = htmlString;
        this.element = template.content.firstElementChild! as T;
    }
    attachTo(element: HTMLElement, position: InsertPosition = 'afterbegin') {
        element.insertAdjacentElement(position, this.element);
    }
    removeFrom(parent: HTMLElement) {

        parent.removeChild(this.element);
    }
}