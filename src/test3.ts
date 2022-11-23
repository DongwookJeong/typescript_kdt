const listA: number[]=[1,2,3]
const listB: Array<number> = [1, 2, 3]

// let num: number | undefined = undefined
// num = 123

let num: 1|2|3;
num = 1;
// num = 4 //Error

let str: '여보세요' | '나야'
// str = '잘 지내니'//Error

let result: any
result = 123
result = ()=>{}

let data: any
data = "예뻤어"

// * any 타입과 자주 쓰이는 개념 Type assertions
// * 처음에는 any 타입으로 지정했다가 사용할 때 타입을 명확하게 알려주는 것을 뜻함
// ? 방법 1
let dataLength1: number = (<string>data).length
// ! 방법 2 jsx와 사용한다면 요걸로
let dataLength2: number = (data as string).length
// console.log(dataLength1, dataLength2)

// enum Name {Jung, Kim, Park}
// let firstName1: Name = Name.Jung
// let firstName2: string = Name[1];
// console.log(firstName1)// ? 0, 열거형 타입, 임의로 변경 가능
// console.log(firstName2)//Kim

enum Name {
  jung=2,
  kim=4,
  park=3
}
let Name1: Name = Name.jung;
let Name2: string = Name[1];
let Name3: string = Name[3];
// console.log(Name.jung)
// console.log(Name2)
// console.log(Name3)

// ! void 타입은 아무값도 반환하지 않는 함수의 타입을 정의 한다.
function exVoid(): void{
  console.log("return 되는 값이 없네요! 나는 void 야")
}
console.log(exVoid, typeof exVoid)

function exNever1():never{
  throw new Error('난 never로 지정해줘')
}
