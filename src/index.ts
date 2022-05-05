//Condition Type

type Check<T> = T extends string
    ? string
    : T extends number
    ? 'number'
    : T extends boolean
    ? 'boolean'
    : T extends Function
    ? 'funcion'
    : 'object';
type Type = Check<string>; // boolean;