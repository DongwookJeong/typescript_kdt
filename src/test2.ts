import { isConstructorDeclaration } from "typescript";

// interface Info{
//   name: string;
//   age: number;
//   lang: string;
// }

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