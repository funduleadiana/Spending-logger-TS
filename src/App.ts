
import { textSpanEnd } from "../../../node_modules/typescript/lib/typescript.js";
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 120);
docTwo = new Payment('Dan', 'work on school project', 50);

let docs: HasFormatter[] = []
docs.push(docOne);
docs.push(docTwo);

const invOne= new Invoice('mario', 'work On Website for Mario', 250);
const invTwo = new Invoice('luigi', 'work on Luigi website', 300);

let invoices : Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv=>{
    console.log(inv.client, inv.amount, inv.format())
});

let form = document.querySelector('.new-item-form') as HTMLFormElement;


//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


//list template instance

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event)=> {
    e.preventDefault();
    let values: [string, string, number]
    values = [tofrom.value, details.value, amount.valueAsNumber]
    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values);
    } else{
        doc = new Payment(...values);
    } 
    list.render(doc, type.value, 'end')
})



// interface isPerson {
//     name: string; 
//     age: number; 
//     speak(a: string): void; //returns nothing -console.log()
//     spend(a: number) : number;
// }

// const me : isPerson = {
//     name: "Diana",
//     age: 30,
//     speak(text: string): void{
//         console.log(text)
//     },
//     spend(amount: number) : number{
//         console.log('I spent', amount);
//         return amount;
//     }
// }

// const greetPerson = (person: isPerson)=> {
//     console.log('hello', person.name);
// }
// greetPerson(me);


//Generics - reusable blocks of code which can be used with different types

// const addUID = <T>(obj: T)=> {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid}
//     //T captures what properties are on the object
//     //But we do not specify that it has to be an object
// }

// let docThree = addUID({name: 'yoshi', age: 40});
// console.log(docThree)

// let docFour = addUID('hello') // We can do this because we have not specified that it needs to be an object

// //We need to extend object and add the properties like below
// //const addUID = <T extends {name: string}>(obj: T)=> {}


// //With interfaces
// interface Resource <T>{
//     uid: number;
//     resourceName: string;
//     data: T;

// }

// const docFive: Resource<object> = {
//     uid: 1,
//     resourceName: 'person',
//     data: {name: 'shaun'}

// }
// console.log(docFive)

// const docSix : Resource<string[]>={
//     uid: 2,
//     resourceName: 'shoppingList',
//     data: ['bread', 'milk', 'toilet roll']
// }
// console.log(docSix)

//Enums

enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
//all resourceTypes are associated with a specific number that is represented by the index of the type
interface Resource <T>{
    uid: number;
    resourceName: ResourceType;
    data: T;

}
const docFive: Resource<object> = {
        uid: 1,
        resourceName: ResourceType.BOOK, //number: 0
        data: {name: 'shaun'}
    
    }


    //tuples - similar to arrays - but the type of data in each position in a tuple is fixed once initialised
    let tup: [string, number, boolean] = ['Riu', 25, false] // position 0 must be a string position 1 must be a number position 2 must be a boolean

    let student: [string, number];
    student= ['cho', 12875]