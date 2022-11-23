import { isConstructorDeclaration } from "typescript";

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
class Info{
  private _name: string;

  constructor(_name:string){
    this._name = _name
  }
  get name():string{
    return this._name;
  }
  set name(inputName: string){
    if(inputName && inputName.length>10){
      throw new Error(
        `이름은 최대 10글자가 넘으면 안되요. 현재 글자 수: ${inputName.length}`
      )
    }
    this._name = inputName
  }
}

const personInfo1 = new Info("")
personInfo1.name = "masterJung"


const helloMaster = (person: Info): void =>{
  console.log(`hello ${person.name}!`)
}

helloMaster(personInfo1)
export{}