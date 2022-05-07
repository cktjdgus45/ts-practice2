export class PageComponent {
    private ulElement: HTMLUListElement;
    constructor() {
        this.ulElement = document.createElement('ul');
        this.ulElement.setAttribute('class', 'page');
        this.ulElement.textContent = 'This is PageComponent';
    }
    attachTo(element: HTMLElement, position: InsertPosition = 'afterbegin') {
        element.insertAdjacentElement(position, this.ulElement);
    }
}