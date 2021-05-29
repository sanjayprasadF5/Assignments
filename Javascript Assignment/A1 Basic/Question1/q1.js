function evenoddfun() {

    var num = document.getElementById("evenodd").value;

    if (num % 2 == 0) {
        document.write(num + "is even");
    }
    else {
        document.write(num + "is odd");
    }
}
