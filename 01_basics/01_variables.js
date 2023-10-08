const accountId = 14512
let accountEmail = "kishor@google.com"
var accountPassword = 45125544
accountCity = "Pune"

// accountId = 2 not allowed


accountEmail = "kl@google.com"
accountPassword = 12512
accountCity = "Mumbai"

let accountState;

console.log(accountId);

/*
Preper not to use var because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])