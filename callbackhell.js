const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    addColor(3000 , '.second', 'red')
    .then((data) => addColor(1000, '.first' , 'green'))
    .then(() => addColor(4000, '.third' , "blue"))
    .catch((err) => console.log(err));
});

function addColor(time , selector , color , data) {
    const element = document.querySelector(selector);
    return new Promise((resolve, reject) => {
        if(element){
            setTimeout(() => {
                element.style.color = color;
                resolve(data);
            },time );
        }
        else{
            reject(`There is no such element : "${selector}"`);
        }
    })
}
