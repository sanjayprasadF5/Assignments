class Account{
    constructor(id, name1, balance){
        this.id = id;
        this.name1  =name1;
        this.balance = balance;
        
    }

   
    
}

class SavingAccount extends Account{

    constructor(id, name1, balance, interest){
        super(id, name, balance);
        this.interest = interest;
    }

    totalBalance(){
        return (this.interest + this.balance);
    }

}



class CurrentAccount extends Account{

    constructor(id, name1, balance, cash_credit){
        super(id, name1, balance);
        this.cash_credit = cash_credit;
    }
    totalBalance(){
        return (this.cash_credit + this.balance);
    }
}


let save1 = new SavingAccount("101", "denver", 3343, 90);
console.log(save1.totalBalance());

var save2 = new SavingAccount("102","tokyo",200,12);
console.log(save2.totalBalance);

let curr1 = new CurrentAccount("101", "berlin",4567,32);
console.log(curr1.totalBalance);

let curr2 = new CurrentAccount("104","Rio",54322,54);
console.log(curr2.totalBalance);


