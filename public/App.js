import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 120);
docTwo = new Payment('Dan', 'work on school project', 50);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const invOne = new Invoice('mario', 'work On Website for Mario', 250);
const invTwo = new Invoice('luigi', 'work on Luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
let form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
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
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docFive = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: { name: 'shaun' }
};
//tuples - similar to arrays - but the type of data in each position in a tuple is fixed once initialised
let tup = ['Riu', 25, false]; // position 0 must be a string position 1 must be a number position 2 must be a boolean
let student;
student = ['cho', 12875];
