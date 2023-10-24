const menu = [
    {
        name: 'Scrambled Eggs',
        category: 'Breakfast'
    },
    {
        name: 'Pancakes',
        category: 'Breakfast'
    },
    {
        name: 'Oatmeal',
        category: 'Breakfast'
    },
    {
        name: 'French Toast',
        category: 'Breakfast'
    },
    {
        name: 'Smoothie',
        category: 'Breakfast'
    },
    {
        name: 'Burger',
        category: 'Lunch'
    },
    {
        name: 'Pizza',
        category: 'Lunch'
    },
    {
        name: 'Salad',
        category: 'Lunch'
    },
    {
        name: 'Sandwich',
        category: 'Lunch'
    },
    {
        name: 'Taco',
        category: 'Lunch'
    },
    {
        name: 'Spaghetti',
        category: 'Lunch'
    },
    {
        name: 'Sushi',
        category: 'Lunch'
    },
    {
        name: 'Steak',
        category: 'Lunch'
    },
    {
        name: 'Chicken Curry',
        category: 'Dinner'
    },
    {
        name: 'Pasta',
        category: 'Dinner'
    },
    {
        name: 'Fish and Chips',
        category: 'Dinner'
    },
    {
        name: 'Mashed Potatoes',
        category: 'Dinner'
    },
    {
        name: 'Samosa',
        category: 'Snacks'
    },
    {
        name: 'Popcorn',
        category: 'Snacks'
    }
];

// when  bracket need to specify what to return 
// const category = menu.map((cat) => {return cat.category});
// console.log(category);



const categories = ['all', ...new Set(menu.map((item) => item.category))];

const result = document.querySelector('.result');
result.innerHTML = categories.map((category) => {
    return `<button>${category}</button>`;
}).join(' '); 
 

