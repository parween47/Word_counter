#! /usr/bin/env node

import inquirer from "inquirer"

const answers=await inquirer.prompt(
    {
        type:"input",
        name:"Sentence",
        message:"Enter the sentence to count the words in sentence?"
    }
) 
const word=answers.Sentence.trim().split(" ")
console.log(`There is ${word.length} words in the sentence.`);







