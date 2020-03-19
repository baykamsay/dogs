// const BREEDS_URL = 'https://dog.ceo/api/breeds/image/random';

// function addDoggo() {

//     // show loading spinner
//     fetch(BREEDS_URL) // returns a promise
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             const img = document.createElement('img');
//             img.src = data.message;
//             img.alt = 'Cute Dog';
    
//             document.querySelector('.doggos').appendChild(img);
            
//             // stop loading spinner
//         });
// }

// document.querySelector('.add-doggo').addEventListener("click", addDoggo);

const BREEDS_URL = ' https://dog.ceo/api/breeds/list/all';

fetch(BREEDS_URL)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);
        console.log(breedsArray);
    });