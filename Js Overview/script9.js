//destrcutre object

let employees = {
    name:"Smith Devid",
    email:"smithdevid@gmail.com",
    skills:["Java", "SQL", "Python", "Azure"],
    role:[
        {company:"wipro", title:"Architecht"},
        {company:"LTS", title:"Analyst"}
    ]
};

//Q1. print last 3 skills of employees
let _skills = employees.skills;

console.log(_skills);