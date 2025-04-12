const accountId = 1234567890
let accountEmail = "supratimdas@google.com"
var accountPassword = "12345"
// sometime in javascript we ca declare a variable without any keyword (let,var,const) but it is not recommended.
accountCity = "Kolkata"

int accountState;
// can print variables/constant in a tabular form
console.table([accountId, accountPassword, accountEmail, accountCity, accountState]);


// accountId = 2233344 : will throw error because "accountId" declared as a constant
console.log(accountId)

