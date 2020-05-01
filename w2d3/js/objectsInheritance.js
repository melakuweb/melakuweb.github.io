/**
 * filename:objectinheritance.js
 * author:Melaku Tegegne
 * Description: object , inheritance and jquery solution for lab3
 * Date: 30 APrile 2020
 * 
 *  */
"use strict"
// 1. creating object person from object literal
let person = {
    name:"",
    dateOfBirth:"",
    getName: function(){
        return this.name;
    },

    setName: function(newName){
        this.name = newName;
    }
};

let john = Object.create(person);
john.setName("John");
john.dateOfBirth= new Date("10 dec 1998");

console.log(`The person's name is ${john.name}`);
console.log(`${john.name} was born on ${john.dateOfBirth.getFullYear()}-${john.dateOfBirth.getMonth()+1}-${john.dateOfBirth.getDate()}`);

//2.

let employee = Object.create(person);
employee.name="Anna";
employee.salary=249995.50;
employee.hireDate=Date.now();
employee.dojob = function (jobTitle){
    // /\B(?=(\d{3})+(?!\d))/g  regex for matching and replacing so that there is a comm
    // separated decimla number representation
    console.log(`${this.name} is a ${jobTitle} who earns $${this.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} `);
};

let Anna = Object.create(employee);
Anna.dojob("Programmer");

// 3



//{Name: John, DateOfBirth: 1998-12-10}
function Person(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
 }

 const ana = new Person("Johm", new Date("1998-12-10"));
 Person.prototype.toString = function() {
     return `{name: ${this.name}, dateOfBirth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()+1}-${this.dateOfBirth.getDate()}}`;
 }

 console.log(ana.toString());

 //name peter, November 10, 1985
 const peter = new Person("Peter", new Date("November 10, 1985"));
 console.log(peter.toString());