import { InputDialog } from './components/dialog/dialog.js';
import { Component } from './components/component.js';
import { VideoComponent } from './components/page/item/video.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent, Composable, PageItemComponent } from './components/page/page.js';

class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        this.page.addChild(image);
        const note = new NoteComponent('Note Title', 'Note Body');
        this.page.addChild(note);

        const todo = new TodoComponent('Todo Title', 'Todo item');
        this.page.addChild(todo);

        const video = new VideoComponent('Video Title', "https://www.youtube.com/embed/DPmX85Tj8fY");
        this.page.addChild(video);

        const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
        imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(document.body);
            })
            dialog.setOnSubmitListener(() => {
                dialog.removeFrom(document.body);
            })
            dialog.attachTo(document.body);
        })
    }
}

new App(document.querySelector('.document')! as HTMLElement);