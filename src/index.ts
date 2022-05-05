//mapped Type

//[1,2].map(item=>item*item); // [1,4]

type Video = {
    title: string;
    author: string;
}

type Optional<T> = {
    [P in keyof T]?: T[P] // for... in
}

type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
}

type VideoOptional = Optional<Video>;

const videoOp: VideoOptional = {
    title: 'autor',
    author: 'author'
}

type Animal = {
    name: string;
    age: number;
}

const animal: Optional<Animal> = {
    name: 'dog'
}