// const helloMaster = (name, age, lang) => {
  // console.log(`hello ${name}, you are ${age}, wellcome ${lang}!`)
// }
// helloMaster("masterJung", 31, "typescript")
// export{}

// const helloMaster = (name:string, age:number, lang:string): void => {
  // console.log(`hello ${name}, you are ${age}, wellcome ${lang}!`)
// }
// helloMaster("masterJung", 31, "typescript")
// export{}

// const helloMaster = (name:string, age:number, lang?:string): void => {
  // console.log(`hello ${name}, you are ${age}, wellcome ${lang}!`)
// }
// helloMaster("masterJung", 31)
// export{}

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