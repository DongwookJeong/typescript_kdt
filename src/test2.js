"use strict";
exports.__esModule = true;
// interface Info{
//   name: string;
//   age: number;
//   lang: string;
// }
// ? TS 문법5 - class
// ? public은 프로그램 전체에서 자유롭게 접근 가능
// ? private은 private을 선언한 클래스 외에서는 접근할 수 없는 멤버변수
// ? TS 문법5 - getter, setter
// ? setter의 경우 멤버 변수를 숨기고, 값 할당시에 제약 조건 등을 적용 가능
var Info = /** @class */ (function () {
    function Info(_name) {
        this._name = _name;
    }
    Object.defineProperty(Info.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (inputName) {
            if (inputName && inputName.length > 10) {
                throw new Error("\uC774\uB984\uC740 \uCD5C\uB300 10\uAE00\uC790\uAC00 \uB118\uC73C\uBA74 \uC548\uB418\uC694. \uD604\uC7AC \uAE00\uC790 \uC218: ".concat(inputName.length));
            }
            this._name = inputName;
        },
        enumerable: false,
        configurable: true
    });
    return Info;
}());
var personInfo1 = new Info("");
personInfo1.name = "masterJung";
var helloMaster = function (person) {
    console.log("hello ".concat(person.name, "!"));
};
helloMaster(personInfo1);
