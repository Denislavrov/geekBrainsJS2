'use stict';

/**
 *
 * SELECT city
 */
/*
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
};*/


/**
 * autocomplete
 */

window.onload = () => {
    fetch('city.json')
        .then(result => {
            console.log(result);
            return result.json();
        })
        .then(data => {
            let cityList = document.querySelector('#cityList');
            let input = document.querySelector('#city');
            let result;

            function autocomplete(val) {
                let cityReturn = [];

                for(let key in data) {
                    if(val === data[key].slice(0, val.length)) {
                        cityReturn.push(data[key]);

                    }
                }
                return cityReturn;
            }

            input.onkeyup = function (e) {
                 inputVal = this.value;

                if(inputVal.length > 0) {
                   let cityToShow = [];

                   cityList.innerHTML = '';
                   cityToShow = autocomplete(inputVal);

                   for (let i = 0; i < cityToShow.length; i++) {
                       cityList.innerHTML +='<li class="item">' + cityToShow[i] + '</li>'
                   }
                    cityList.style.display = 'block';
                    const items = document.querySelectorAll('.item');
                    for (let key in items) {
                        items[key].addEventListener('click', () => {
                            input.value = items[key].textContent;
                            cityList.style.display = 'none';
                        });
                        console.log(key + ' + ' + items[key].textContent);
                    }



                } else {
                    cityToShow = [];
                    cityList.innerHTML = '';

                }
            };
            console.log(document.querySelectorAll('.item'));


        })
};