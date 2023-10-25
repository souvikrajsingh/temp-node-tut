const API_URL = "https://api.github.com/users/souvikrajsingh";

// async function returns a promise 
async function handlePromise(){

    const data = await fetch(API_URL);

    const jsonValue = await data.json();

    console.log(jsonValue);
}

handlePromise().catch((err) => console.log(err));