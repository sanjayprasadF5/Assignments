"use strict";
var order = {
    id: 101,
    title: 'samsung',
    price: 404,
    priceOrder: function () {
        console.log('Mr. Client');
    },
    getPrice: function () {
        console.log("My name is dante i order " + this.title + " and " + this.price);
    }
};
var copyorder = Object.assign(order);
console.log(copyorder);
