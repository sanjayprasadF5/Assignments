"use strict";
function nextArmstrongNo(Number) {
    console.log("Armstrong Numbers:");
    // looping through lowNumber to infinity
    for (var i = Number;; i++) {
        // converting number to string
        var numberOfDigits = i.toString().length;
        var sum = 0;
        // create a temporary variable
        var temp = i;
        /* loop through a number to find if
            a number is an Armstrong number */
        while (temp > 0) {
            var remainder = temp % 10;
            sum += Math.pow(remainder, numberOfDigits);
            // removing last digit from the number
            temp = parseInt(temp / 10); // convert float into integer
        }
        if (sum == i) {
            console.log(i);
            break;
        }
    }
}
