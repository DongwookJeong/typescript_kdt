/*
? number 타입의 경우 hex, binary, octal 모두 가능
? string 타입의 경우 큰 따옴표"", 작은 따옴표'', backtick``으로도 가능
? Array 타입도 가능하며, 방법은 두가지
*/
var listA = [1, 2, 3];
var listB = [1, 2, 3];
/*
? null, undefined타입의 경우도 가능 대부분 다른 유형의 하위 유형으로 사용
let num: number | undefined = undefined
num = 123
*/
// ? 문 리터럴 타입과 숫자 리터럴 타입 모두 가능
var num;
num = 1;
// num = 4 //Error
var str;
// str = '잘 지내니'//Error
// ? any 타입은 숫자, 문자, 함수도 가능하지만, 많이 쓰면 무의미, 타입이 지정되지 않거나
// ? 임시로 타입을 유지 할 경우에 사용하는 것이 좋다
var result;
result = 123;
result = function () { };
var data;
data = "예뻤어";
// * any 타입과 자주 쓰이는 개념 Type assertions
// * 처음에는 any 타입으로 지정했다가 사용할 때 타입을 명확하게 알려주는 것을 뜻함
// ? 방법 1
var dataLength1 = data.length;
// ! 방법 2 jsx와 사용한다면 요걸로
var dataLength2 = data.length;
// console.log(dataLength1, dataLength2)
// enum Name {Jung, Kim, Park}
// let firstName1: Name = Name.Jung
// let firstName2: string = Name[1];
// console.log(firstName1)// ? 0, 열거형 타입, 임의로 변경 가능
// console.log(firstName2)//Kim
var Name;
(function (Name) {
    Name[Name["jung"] = 2] = "jung";
    Name[Name["kim"] = 4] = "kim";
    Name[Name["park"] = 3] = "park";
})(Name || (Name = {}));
var Name1 = Name.jung;
var Name2 = Name[1];
var Name3 = Name[3];
// console.log(Name.jung)
// console.log(Name2)
// console.log(Name3)
// ! void 타입은 아무값도 반환하지 않는 함수의 타입을 정의 한다.
function exVoid() {
    console.log("return 되는 값이 없네요! 나는 void 야");
}
console.log(exVoid, typeof exVoid);
function exNever1() {
    throw new Error('난 never로 지정해줘');
}
function exNever2(message) {
    throw new Error(message);
}
function exNever3() {
    while (true) {
        console.log('난 never로 지정해줘');
    }
}
var exNum;
exNum = 5;
exNum = "5";
var add = function (a, b) { return a + b; };
var minus = function (a, b) { return a - b; };
console.log(add(1, 2), minus(1, 2));
var ab = { args1: "안녕", args2: 1 };
console.log(ab);
