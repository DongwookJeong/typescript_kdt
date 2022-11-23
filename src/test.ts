// const helloMaster = (name, age, lang) => {
  // console.log(`hello ${name}, you are ${age}, wellcome ${lang}!`)
// }
// helloMaster("masterJung", 31, "typescript")
// export{}




/*
? TS문법1 - Argument 인자의 타입을 지정할 때에는 인자 뒤에 콜론

? TS문법2 - Function 인자 괄호가 끝난 후 입력하고 그 뒤에 return 타입을 입력한다.
? 만약 리턴 타입이 없다면 void를 입력한다.
const helloMaster = (name:string, age:number, lang:string): void => {
  console.log(`hello ${name}, you are ${age}, wellcome ${lang}!`)
}
helloMaster("masterJung", 31, "typescript")
export{}

? TS문법3 - Argument(Option type)
? 만약 인자가 있어도 되고, 없어도 된다면 인자 뒤에 물음표(?)를 입력 후, 콜론과 타입을 순서대로 정의한다.
? 먄약 인자를 입력하지 않았다면 undefined로 정의된다.
const helloMaster = (name:string, age:number, lang?:string): void => {
  console.log(`hello ${name}, you are ${age}, wellcome ${lang}!`)
}
helloMaster("masterJung", 31)
export{}
*/

// ? TS문법4 - Object 자바스크립트에서는 안되고 타입스크립트에서만 가능
interface Info{
  name: string;
  age: number;
  lang: string;
}

const person1 = {
  name:"masterJung",
  age: 31,
  lang: "typescript"
}

const helloMaster = (person: Info): void =>{
  console.log(`hello ${person.name}, you are ${person.age}, Wellcome ${person.lang}!`)
}

helloMaster(person1)
export{}