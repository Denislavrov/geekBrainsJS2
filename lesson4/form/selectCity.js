'use stict';

window.onload = () => {
    let cityBlock = document.querySelector('#city');
    fetch('city.json')
        .then(result => {
            console.log(result);
            return result.json();
        })
        .then(data => {
            for (let key in data) {
                let option = document.createElement('option');
                option.classList.add('city__option');
                option.setAttribute('value', key);
                option.innerText= data[key];
                cityBlock.appendChild(option);
                console.log(key + " : "+ data[key]);
            }
        })
};