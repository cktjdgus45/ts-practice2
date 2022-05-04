//TYPE VS INTEFACE
type PositionType = {
    x: number;
    y: number;
}

interface PositionInterface {
    x: number;
    y: number;
}

const obj1: PositionType = {
    x: 1,
    y: 1
}
const obj2: PositionInterface = {
    x: 1,
    y: 1
}

class Pos1 implements PositionType {
    x: number = 1;
    y: number = 1;
}

class Pos2 implements PositionInterface {
    x: number = 1;
    y: number = 1;
}

interface ZPositionInterface extends PositionInterface {
    z: number;
}

type ZPositionType = PositionType & { z: number };

//뭘써야할까
//interface는 규격사항. API 는 계약서와 동일. 구현하는 사람들은 그 규약을 따름.
//type은 이런 규격이라면 type보단 interface를 사용. 누군가 구현할 사람이 있다면 interface.

//type은 data의 모습을 결정.
//구현목적이 아닌 데이터를 담는 목적이라면 type을 사용.