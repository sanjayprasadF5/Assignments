const printNames = function(...names){

    for(let i in names){
        console.log(names[i]);

    }
    
}

const names = ['dante','tom','ben'];
printNames(...names)