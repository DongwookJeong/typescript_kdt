// interface cardType{
//   objValue: object;
//   jokerValue: object;
//   shape_array: (string | number)[];
// }

interface Test{
  [key:string]: object
}


const shape_array: (string | number)[] = ["spade", "heart", "diamond", "club", "joker"];
const objValue: object = {"A" : 1, "2" : 2, "3" : 3, "4" : 4, "5" : 5, "6" : 6, "7" : 7, "8" : 8, "9" : 9, "10": 10, "J" : 11, "Q" : 12, "K" : 13 }
const jokerValue: object = { "RED" : 1, "BLACK" : 2 } 



const arrSplice = shape_array.splice(4,1).map(el => jokerValue)
console.log(arrSplice)

const test:Test= {}

for(let i = 0; i < shape_array.length; i++){
  test[shape_array[i]] = objValue
}                          

// trump_deck(shapeArray)
console.log(shape_array)
console.log(test)