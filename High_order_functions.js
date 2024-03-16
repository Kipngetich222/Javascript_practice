const companies = [
    {name:"Cmpany one", category: "Finance", Start: 1981, end: 2003},
    {name:"Cmpany two", category: "Retail", Start: 1992, end: 2008},
    {name:"Cmpany three", category: "Auto", Start: 1999, end: 2007},
    {name:"Cmpany four", category: "Retail", Start: 1989, end: 2010},
    {name:"Cmpany five", category: "Technology", Start: 2009, end: 2014},
    {name:"Cmpany six", category: "Finance", Start: 1987, end: 2010},
    {name:"Cmpany seven", category: "Auto", Start: 1986, end: 1996},
    {name:"Cmpany eight", category: "Technology", Start: 2011, end: 2016},
    {name:"Cmpany nine", category: "Retail", Start: 1981, end: 1989},
];

const ages= [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

//old for loop
for (let i = 0; i< companies.length; i++) {
//   console.log(companies[i]);
    }

//forEach

companies.forEach((company => {
    // console.log(company.name);
}))
// const camp= companies.forEach(company => console.log(company));


//filter

//Get 21 and older

// let cantDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] <= 21) {
//         cantDrink.push(ages[i]);
//     }
// }
// console.log(cantDrink);

// const cantDrink = ages.filter((age) => {
//     if (age >= 21) {
//         return true;
//     }
// });

// const cantDrink = ages.filter(age => age >= 21);
// console.log(cantDrink);

//filter retail companies
// const retailCompanies = companies.filter((company) => {
//     if (company.category  === 'Retail') {
//         return true
//     }
// });

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

//get 80s companies
// const eightiesCompanies = companies.filter(company => company.Start >= 1980 && company.Start < 1990);
// console.log(eightiesCompanies);

//Get companies that lasted more than 10 years

const lastTenYears = companies.filter(company => (company.end - company.Start) > 10)
// console.log(lastTenYears);

//map
//create array of company names
// const companyNames = companies.map(company => company.name)
// console.log(companyNames);

// const test = companies.map((company) => {
//     return `${company.name} [${company.Start} - ${company.end}]`
// })
// console.log(test);

// const agesSquare = ages.map(age => Math.sqrt(age));
// const agesTimetwo = ages.map(age => age * 2);
// console.log(agesTimetwo);

// const agesMap = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2);
// console.log(agesMap);

//sort
//sort companies by start year
// const sortedCompanies = companies.sort(function (c1, c2) {
//     if (c1.Start > c2.Start) {
//         return 1
//     } else {
//         return-1
//     }
// });

//using es6 and ternary operator
const sortedCompanies = companies.sort((a ,b) => (a.Start > b.Start ? 1 : -1));

// console.log(sortedCompanies);

//sort ages ascending
// const sortAges = ages.sort((a ,b) => a-b);
// console.log(sortAges);

//sort ages descending
// const sortdAges = ages.sort((a ,b) => b-a);
// console.log(sortdAges);


//reduce

//older way
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
    
// }
// console.log(ageSum);

// using reduse
// const ageSum = ages.reduce(function (total, age) {
//     return total + age;
// }, 0);

//using arrow functions
// const ageSum = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum);

//total years for all companies
// const totalYears = companies.reduce( function (total, company) {
//     return total + (company.end - company.Start)
// }, 0);

//using arrow functions
// const totalYears = companies.reduce( (total, company) => total + (company.end - company.Start)
// , 0);
// console.log(totalYears);


//combine methods
const combine = ages
.map(age => age * 2)
.filter(age => age >=40)
.sort((a, b)=> a-b)
.reduce((a, b)=> a+ b, 0)

console.log(combine);
