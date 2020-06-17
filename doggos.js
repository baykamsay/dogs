function getDoggo(url) {
    const img = document.querySelector('.dog-img');
    const loading = document.querySelector('.loading');
    img.onload = () => {
        loading.classList.add('hidden');
        img.classList.remove('hidden');
    }

    // show loading spinner
    img.classList.add('hidden');
    loading.classList.remove('hidden');

    fetch(url) // returns a promise
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            img.src = data.message;
        });
}

const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breeds');

fetch(BREEDS_URL)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);

        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option);
        }
    });

select.addEventListener("change", (event) => {
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
    getDoggo(url);
})

getDoggo('https://dog.ceo/api/breed/affenpinscher/images/random');