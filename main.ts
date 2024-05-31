#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk";

console.log(chalk.greenBright('**WElcome in Typescript Quiz **'));

console.log(chalk.bgBlue('\n Each Question is of 10 marks'));

let marks: number = 0;

let userInput = await inquirer.prompt([{
    name:"question1",
    type:"list",
    message:chalk.grey("Q:1.Which Operator is used to create an intersection type in Typescript?"),
    choices:['1.!','2.&','3.&&','4.!!']
},
{
    name:"question2",
    type:"list",
    message:chalk.bgBlue("Q:2.Which are the object in Typescript?"),
    choices:['1.collection of key value pair','2.function with return value','3.special data type for arrys','4.Interfaces for class defination' ] 
},
{
    name:"question3",
    type:"list",
    message:chalk.bgGreen("Q:3.Which method is used to add an element to the end of an arry?"),
    choices:['1.add()','2.insert()','3.push()','4.append()' ]
},
{
    name:"question4",
    type:"list",
    message:chalk.green("Q:4.Which method is used to remove the first element from an arry?"),
    choices:['1.removeFirst()','2.pop()','3.shift()','4.unshift()' ]
},
{
    name:"question5",
    type:"list",
    message:chalk.bgBlueBright("Q:5.In Typescript object what type can keys (property names) be?"),
    choices:['1.String','2.Number','3.Boolean','4.any' ]
}
]);
const {question1, question2, question3, question4, question5} = userInput;

let correctOptions = ['&','collection of key value pair','push()','shift()','String'];
if(question1 === '2.&') marks += 10;
if(question2 === '1.collection of key value pair') marks += 10;
if(question3 === '3.push()') marks += 10;
if(question4 === '3.shift()') marks += 10;
if(question5 === '1.String') marks += 10;
console.log(marks);
function myAns() {
    console.log(`\n correct Option:`, correctOptions);
    
    if(marks == 50){
        console.log(`\n Congragulation You got ${marks} out of 50.`);
  }else if(marks > 0) {
    console.log(`\n You Got ${marks} number Out of 50.`);
    
  }else{
    console.log(`\n Need Improved you got ${marks} number out of 50`);
    
  }
}
myAns();