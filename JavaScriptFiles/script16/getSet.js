// class User {
//     constructor(name) {
//         this._name = name;
//     }
//     get name(){
//         return this._name.toUpperCase();
//     }
// }
// let u = new User("Mutayib")
// console.log(u.name);
class Account {
    constructor(balance){
        this._balance = balance
    }
    get balance() {
        return `₹${this._balance}`;
    }
    set balance(balance){
        if(balance<0){
            console.log("Balance cannot be negative");
            return;
            
        }
        this._balance = amount;
    }
}
let acc = new Account(1000)
console.log(acc.balance);
acc.balance = -500;
console.log(acc.balance);

