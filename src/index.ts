//Readonly

//왠만한 타입은 이미 다만들어져있다. declare

type Todo = {
    title: string;
    description: string;
}

function display(todo: Readonly<Todo>) {
    // todo.title = 1  //error
    console.log(todo.title);
}