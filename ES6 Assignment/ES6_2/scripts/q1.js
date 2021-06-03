"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _fibo_previousNo, _fibo_currentNo;
var fibo = /** @class */ (function () {
    function fibo() {
        _fibo_previousNo.set(this, 1);
        _fibo_currentNo.set(this, 2);
    }
    fibo.prototype.next = function () {
        return __classPrivateFieldGet(this, _fibo_previousNo, "f") + __classPrivateFieldGet(this, _fibo_currentNo, "f");
    };
    return fibo;
}());
_fibo_previousNo = new WeakMap(), _fibo_currentNo = new WeakMap();
var fib = new fibo();
console.log(fib.next());
