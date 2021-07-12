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
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
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
