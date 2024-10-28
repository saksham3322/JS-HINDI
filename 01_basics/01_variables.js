const accountId = 14455
let accountEmail = "xyz@gmai.com"
var accountPassword = 1234
accountCity = "Jaipur"
let accountState;

//accountId = 2 // not allowed

accountEmail = "hiii@gmail.com"
accountPassword = 12
accountCity = "Bengaluru"

console.log(accountId);
/* Prefer not to use var because of issue
in block scope and functional scope */
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])