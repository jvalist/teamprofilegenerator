const Engineer=require('./lib/Engineer')
const Manager=require('./lib/Manager')
const Intern=require('./lib/Intern')
const inquirer=require('inquirer')
const fs=require('fs')
let team=[]
Donext()
function Engineerquestions(){
inquirer.prompt([
    {
        type:'input',
        name:'name',
        message:'What is your name?'
    },
    {
        type:'input',
        name:'id',
        message:'What is your id?'
    },
    {
        type:'input',
        name:'email',
        message:'What is your email?'
    },
    {
        type:'input',
        name:'github',
        message:'What is your github?'
    }
])
.then(answers=>{
    const engineer=new Engineer(answers.name,answers.id,answers.email,answers.github)
    engineer.special=`Github: ${answers.github}`
    team.push(engineer)
    return Donext()
})
}
function Managerquestions(){
inquirer.prompt([
    {
        type:'input',
        name:'name',
        message:'What is your name?'
    },
    {
        type:'input',
        name:'id',
        message:'What is your id?'
    },
    {
        type:'input',
        name:'email',
        message:'What is your email?'
    },
    {
        type:'input',
        name:'office',
        message:'What is your office number?'
    }
])
.then(answers=>{
    const manager=new Manager(answers.name,answers.id,answers.email,answers.office)
    manager.special=`Office Number: ${answers.office}`
    team.push(manager)
    return Donext()
})
}
function Internquestions(){
    inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is your name?'
        },
        {
            type:'input',
            name:'id',
            message:'What is your id?'
        },
        {
            type:'input',
            name:'email',
            message:'What is your email?'
        },
        {
            type:'input',
            name:'school',
            message:'What is your school?'
        }
    ])
    .then(answers=>{
        const intern=new Intern(answers.name,answers.id,answers.email,answers.school)
        intern.special=`School: ${answers.school}`
        team.push(intern)
        return Donext()
    })
}
function Donext(){
    inquirer.prompt([
        {
            type:'list',
            name:'doNext',
            message:'What would you like to do next?',
            choices:[
                'Add an Engineer',
                'Add a Manager',
                'Add an Intern',
                'Finish building the team'
            ]
        }
    ])
    .then(answers=>{
        switch(answers.doNext){
            case 'Add an Engineer': 
                Engineerquestions()
                break;

            case 'Add a Manager':
                Managerquestions()
                break;

            case 'Add an Intern':
                Internquestions()
                break;

            case 'Finish building the team':
                Buildteam()
                break;
        }
    })
}
function Buildteam(){
    fs.writeFileSync('./dist/index.html', `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    `)
for (let i = 0; i < team.length; i++) {
    fs.appendFileSync('./dist/index.html',`
    <div class="card">
    <div class="card-body">
    <h5 class="card-title">${team[i].name}</h5>
    <p class="card-text">ID: ${team[i].id}</p>
    <p class="card-text">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></p>
    <p class="card-text">${team[i].special}</p>
    </div>
    </div>
    `)
}
fs.appendFileSync('./dist/index.html',`
</body>
</html>
    `)
}