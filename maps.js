const people = [
    {name : 'John', email : 'john@gmail.com', age : 26 },
    {name : 'Ben', email: 'ben@icloud.com' , age: 30},
    {name: 'Bob' , email: 'bob@gmail.com' , age: 40},
    {name: 'Kevin' , email: 'kevin@gmail.com' , age: 45},
    {name: 'Hardy' , email: 'hardy@hotmail.com' , age: 21}
];

const ages = people.map((person) => {
    return person.age * 2;
});
console.log(ages);

const objects = people.map(person => {
    console.log(person);
})


const newPeopleSet = people.map((person) => {
    return { 
    firstname: person.name.toLowerCase(), 
    per_email : person.email,
    age2023 : person.age,
} ;
});

console.log(newPeopleSet);

const youngPeople = people.filter((person) =>{
    if(person.age < 30){
        return person.age;
    }
});

console.log(youngPeople);

const youngMen = people.find((person) =>{return person.age < 30});

console.log(youngMen);

const number = [ 1,2];
const sumWintitial = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0 );
console.log(sumWintitial);
