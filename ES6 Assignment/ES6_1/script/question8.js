"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, name1, balance) {
        this.id = id;
        this.name1 = name1;
        this.balance = balance;
    }
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(id, name1, balance, interest) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.interest = interest;
        return _this;
    }
    SavingAccount.prototype.totalBalance = function () {
        return (this.interest + this.balance);
    };
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, name1, balance, cash_credit) {
        var _this = _super.call(this, id, name1, balance) || this;
        _this.cash_credit = cash_credit;
        return _this;
    }
    CurrentAccount.prototype.totalBalance = function () {
        return (this.cash_credit + this.balance);
    };
    return CurrentAccount;
}(Account));
var save1 = new SavingAccount("101", "denver", 3343, 90);
console.log(save1.totalBalance());
var save2 = new SavingAccount("102", "tokyo", 200, 12);
console.log(save2.totalBalance);
var curr1 = new CurrentAccount("101", "berlin", 4567, 32);
console.log(curr1.totalBalance);
var curr2 = new CurrentAccount("104", "Rio", 54322, 54);
console.log(curr2.totalBalance);
