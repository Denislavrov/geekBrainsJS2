'use strict';

window.onload = () => {
    const btn = document.querySelector('#button').addEventListener('click', () => {
        const input = document.querySelector('.text');
        let jsonText = 'success.json';
        if (input.value === '') {
            jsonText = 'error.json';
        }
        fetch(jsonText)
            .then(result => {
                console.log(result);
                return result.json();
            })
            .then(data => {
                console.log(data.result);
                document.getElementById('res').innerHTML = data.result
            })
            .catch(errors => console.log(errors));

    });
};