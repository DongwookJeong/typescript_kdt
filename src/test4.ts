/*
? Fall-through (폴스루) switch-case문에서 많이 사용하는 패턴
const num: any = one;
switch(num){
  case "one":
  case "two":
    console.log("two인데")
    break
    default:
      console.log("아닌가?")
      break
}
! 왜 에러가 나는지 모르겠다.
*/
let arr: number[] = [1, 2, 3, 4]
// let arrr: Array<number> = [1,2,3,4]

for(let i: number = 0, len: number = arr.length; i < len; i++){
  console.log(`${i}번째 실행`)
}

// ? 나머지 변수(rest parameter) 타입스크립트 사용시 나머지 변수에 타입을 지정해야 하는 상황이라면, 배열이므로 아래와 같이 사용
function concat(x:string, y:string, ...restParam: string[]):string{
  return x + y + restParam.join("")
}

// ? 함수 오버로드(function overloads)함수명은 같지만, 매개변수와 반환 타입이 다른 함수를 여러개 선언
function add1(a:number, b:number): number
function add1(a:string, b:string): string
function add1(a:number, b:string): string
function add1(a:any, b:any): any{
  return a + b
}
console.log(add1(1,2), add1("뭐지", "타입스크립트"), add1(33, "일단"))//3 뭐지타입스크립트 33일단

// * 매개변수의 개수를 달리한 오버로드
function add2(a:number): number;
function add2(a:number, b: number): number;
function add2(a:any, b?: any): any{
  if(b === undefined){
    return a;
  }
  return a+b
};
console.log(add2(1,2), add2(1))// 3 1
// ! 일반적인 경우를 any타입으로 제일 아래에 선언하고, 그 위로 타입을 명시한 함수를 쌓아 준다.
// ! 매개변수의 개수를 달리하고 싶을 때는 option type으로 해당 변수를 선언해주고, 매개변수 개수 확인 로직 추가
