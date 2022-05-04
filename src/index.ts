import { type } from 'os';

type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
}

type Name = Animal['name']; //string

const text: Name = 'name';

type Gender = Animal['gender']; //'male'|'female'

const gender: Gender = 'female';

type Keys = keyof Animal; //'name' |'age' | 'gender'

const keys: Keys = 'age';
