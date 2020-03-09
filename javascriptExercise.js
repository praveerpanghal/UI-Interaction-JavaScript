
let filterData = {};
let acctData = [{ "acctNum": "AAA - 1234", "user": "Alice" },
{ "acctNum": "AAA - 5231", "user": "Bob" },
{ "acctNum": "AAA - 9921", "user": "Charlie" },
{ "acctNum": "AAA - 8191", "user": "Tom" }];

let balance = { "AAA - 1234": 4593.22, "AAA - 9921": 0, "AAA - 5231": 232142.5, "AAA - 8191": 4344 };
// Write Javascript code!

const AccountBalance = acctData.map((i) => {
    const result = {};
    result._accNum = i.acctNum;
    result._user = i.user;
    result._balance = balance[i.acctNum];
    return result;

});

function AccountNumberOnly(argUser){

    return  AccountBalance.filter(i=>i._user==argUser);
}



function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

const resultAccount= AccountNumberOnly('Bob');
const compareAccount= compareValues('_accNum','asc');
const compareBalance= compareValues('_balance','desc');


console.log(resultAccount);
console.log(AccountBalance.sort(compareAccount));
console.log(AccountBalance.sort(compareBalance));

