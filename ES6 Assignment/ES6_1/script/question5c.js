"use strict";
var printNames = function () {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    for (var i in names) {
        console.log(names[i]);
    }
};
var names = ['dante', 'tom', 'ben'];
printNames.apply(void 0, names);
