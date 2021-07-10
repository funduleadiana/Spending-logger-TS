
interface isPerson {
    name: string; 
    age: number; 
    speak(a: string): void; //returns nothing -console.log()
    spend(a: number) : number;
}

const me : isPerson = {
    name: "Diana",
    age: 30,
    speak(text: string): void{
        console.log(text)
    },
    spend(amount: number) : number{
        console.log('I spent', amount);
        return amount;
    }
}

const greetPerson = (person: isPerson)=> {
    console.log('hello', person.name);
}
greetPerson(me);

import { textSpanEnd } from "../../../node_modules/typescript/lib/typescript.js";
import { Invoice } from "./classes/Invoice.js";


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