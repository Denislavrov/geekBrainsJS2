'use strict';

window.onload = () => document.querySelector('#burgerBtn').addEventListener('click', () =>{
           let burger = new Burger('sizeBurger', 'fillingBurger', 'toppings');
           console.log(burger._getToppings('toppings'));
});


class Param {
    constructor(element) {
        this.name = element.value;
        this.price = parseInt(element.dataset['price']);
        this.cal = parseInt(element.dataset['cal']);
    }
}

class Burger {
    constructor(sizeBurger, fillingBurger, toppings) {
        this.sizeBurger = new Param(this._select(sizeBurger));
        this.fillingBurger = new Param(this._select(fillingBurger));
        this.toppings = this._getToppings(toppings);
    }

    _getToppings(toppings) {
        let sumToppings = [];
        this._selectToppings(toppings).forEach(element => sumToppings.push(new Param(element)));
        return sumToppings;
    }

    _select(name) {
        return document.querySelector('')
    }

    _selectToppings(name) {
        return [...document.querySelectorAll(`input[name="${name}"]:checked`)];
    }
}