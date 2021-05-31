
function FindTable(){

    for(let i = 1; i <= 12; i++) {

    
        var no =document.getElementById("number").value;
        const result = i * no;
    
        
        //  console.log(`${no} * ${i} = ${result}`);
        document.write(no + "" + result);
    }
}