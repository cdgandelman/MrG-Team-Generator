// link to page creation
// const generateHTML = require('./src/generateHTML');

// team profiles
const Manager = require('./Libraries/Manager');
const Engineer = require('./Libraries/Engineer');
const Intern = require('./Libraries/Intern'); 

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// employee array
const teammembersArray = []; 

inquirer.prompt([
    {
        type: "input",
        name: "employeeName",
        message: "What is the name of the Employee?",
        validate: answer=>{
            if (answer !== "") {
                return true;
            
             }return "Please enter the Employee name in a string"
         }
    },
    {
    type: "input",
    name: "engineerName",
    message: "What is the name of the engineer?",
    validate: answer=>{
        if (answer !== "") {
            return true;
            
        }return "Please enter the engineer name in a string"
    }
},
{
    type: "input",
    name: "internName",
    message: "What is the name of the Intern?",
    validate: answer=>{
        if (answer !== "") {
            return true;
            
        }return "Please enter the intern name in a string"
    }
},
{
    type: "input",
    name: "managerName",
    message: "What is the name of the Manager?",
    validate: answer=>{
        if (answer !== "") {
            return true;
            
        }return "Please enter the Manager name in a string"
    }
},
])
function createTeam(){
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Which type of team member are you?",
            choices: ["engineer","intern","N/A"]
        }
    ]).then(userChoice=>{
        switch (userChoice.memberChoice) {
            case "engineer":
                
                break;
        
            default:
                break;
        }
    })
}
function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of the engineer?",
            validate: answer=>{
                if (answer !== "") {
                    return true;
                    
                }return "Please enter the engineer name in a string"
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your email?",
            validate: answer=>{
                if (answer.match) {
                    return true;
                    
                }return "Please enter the engineer name in a string"
            }
        },
    ])
}
