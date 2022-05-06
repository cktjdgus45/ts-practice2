export class PageComponent {
    constructor() {
        this.ulElement = document.createElement('ul');
        this.ulElement.setAttribute('class', 'page');
        this.ulElement.textContent = 'This is PageComponent';
    }
    attachTo(element, position = 'afterbegin') {
        element.insertAdjacentElement(position, this.ulElement);
    }
}
