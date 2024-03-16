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
console.log(lastTenYears);

//map
//sort
//reduce