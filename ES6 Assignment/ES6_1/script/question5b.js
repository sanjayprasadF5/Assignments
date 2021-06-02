"use strict";
var username = 'Dante';
var array = ['tom', 'sam', 'john'];
function userFriends(username, array) {
    console.log(username);
    for (var i in array) {
        console.log(array[i]);
    }
}
userFriends(username, array);
