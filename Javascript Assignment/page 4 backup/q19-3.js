function greeting() {
    var name = document.getElementById("username").value;
    if(name === "Alice" || name === "Bob"){
        document.write("Good Morning " + name);
    }
    else{
        document.write("i don't know you guys");
    }


  }