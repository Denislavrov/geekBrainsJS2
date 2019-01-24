'use strict';


window.onload = () => {
    const text = document.querySelector('.text__box');
    const button = document.querySelector('.btn');
    const newText = document.querySelector('.text__box-new');

    button.addEventListener('click', () => {

        newText.innerHTML = text.textContent.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');
    })

}