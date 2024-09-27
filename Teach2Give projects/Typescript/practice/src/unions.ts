//A union type is TypeScript's way of saying that a value can be "either this type or that type".
const message = Date.now() % 2 === 0 ? 'Hello Tuesdays!' : null
console.log(message)

//declaring union types

const userId=(name:string|number|boolean)=>{
    console.log("", name)
}


userId(1234)
userId('jehhdjhdh')
userId(true)


const logId = (id: string | number) => {
    console.log(id);
}
logId("ertyui")
logId(3454)

type AllSortsOfStuff =
  | string
  | number
  | boolean
  | object
  | null
  | {
      name: string
      age: number
    }



