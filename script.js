
let filterData = {};
let acctData = [{ "acctNum": "AAA - 1234", "user": "Alice" },
{ "acctNum": "AAA - 5231", "user": "Bob" },
{ "acctNum": "AAA - 9921", "user": "Alice" },
{ "acctNum": "AAA - 8191", "user": "Alice" }];

let balance = { "AAA - 1234": 4593.22, "AAA - 9921": 0, "AAA - 5231": 232142.5, "AAA - 8191": 4344 };
// Write Javascript code!

const AccountBanlance = acctData.map((i) => {
    const result = {};
    result.accountNumber = i.acctNum;
    result.userName = i.user;
    result.accountMoney = balance[i.acctNum];
    return result;

})
let accountDiv = document.getElementById('account');

let option = '';
AccountBanlance.sort((a, b) => parseFloat(a.accountMoney) - parseFloat(b.accountMoney));
AccountBanlance.forEach(i => {

    let accountNumberdiv = document.createElement("div");
    accountNumberdiv.setAttribute("class", "insidediv");
    accountNumberdiv.innerHTML = '<span class="leftspan">' + i.accountNumber + '</span>' + '   ' + '<span class="rightspan">' + i.accountMoney + '</span>';
    accountDiv.appendChild(accountNumberdiv);
    let accountMoneydiv = document.createElement("div");
    option += '<option value="' + i.accountNumber + '">' + i.userName + '</option>';
    document.getElementById('ddlUserName').innerHTML = option;

})
function filterRecord() {
    let sel = document.getElementById('ddlUserName');
    myVar = sel.options[sel.selectedIndex].value;
    console.log(myVar);
    filterData = AccountBanlance.filter(i => {

        return i.accountNumber == myVar;


    })

    accountDiv.innerHTML = '';
    filterData.forEach(i => {
        let accountNumberdiv = document.createElement("div");
        accountNumberdiv.setAttribute("class", "insidediv");
        accountNumberdiv.innerHTML = '<span class="leftspan">' + i.accountNumber + '</span>' + '   ' + '<span class="rightspan">' + i.accountMoney + '</span>';
        accountDiv.appendChild(accountNumberdiv);
    });


}
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function LoadData() {
    accountDiv.innerHTML = '';
    AccountBanlance.forEach(i => {
        let accountNumberdiv = document.createElement("div");
        accountNumberdiv.setAttribute("class", "insidediv");
        accountNumberdiv.innerHTML = '<span class="leftspan">' + i.accountNumber + '</span>' + '   ' + '<span class="rightspan">' + i.accountMoney + '</span>';
        accountDiv.appendChild(accountNumberdiv);

    })
}

function sortByDirection(){
    AccountBanlance.reverse((a, b) => parseFloat(a.accountMoney) - parseFloat(b.accountMoney));
    LoadData();

}

