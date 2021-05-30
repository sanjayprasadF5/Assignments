
function sumofNum(){
    var N =document.getElementById("number").value;
    var total = 0;
    for(var i = 1; i <= N; i++){
      total += i;

       if(total %3 == 0 && total % 5==0){
           document.write(total);
            
          }
      
    }

  

}
