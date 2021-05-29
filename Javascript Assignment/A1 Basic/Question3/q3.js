function numheads(numberofflips){

    var count =0;
    for (i=0; i<=numberofflips; i++){

        var x = Math.floor(Math.random()*2);
        if( x === 1){
            document.write("its head");

        }
        else{
            document.write("its tails");
        }
    }
    document.write("the no.of head is " + count);

}
var numofflips = parseInt(prompt("please enter the number of flips:"), 10);
numheads();
