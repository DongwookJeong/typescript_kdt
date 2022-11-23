var listA = [1, 2, 3];
var listB = [1, 2, 3];
// let num: number | undefined = undefined
// num = 123
var num;
num = 1;
// num = 4 //Error
var str;
// str = '잘 지내니'//Error
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
