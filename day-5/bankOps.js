// Tasks

// Create the following functions:
// 1. checkBalance(account)
// Displays the current balance of the account.
// Example:
// Current Balance of Omkar: ₹50000

// 2. deposit(account, amount)
// Deposits the given amount into the account.
// Example:
// deposit(account1, 10000);
// Output:
// ₹10000 deposited successfully.
// New Balance: ₹60000

// 3. withdraw(account, amount)
// Withdraws the amount only if sufficient balance is available.
// Example:
// withdraw(account2, 5000);
// Output:
// ₹5000 withdrawn successfully.
// New Balance: ₹25000
// If balance is insufficient:
// Insufficient Balance!

// 4. transfer(sender, receiver, amount)
// Transfers money from one account to another.
// Example:
// transfer(account1, account2, 15000);
// Output:
// Transfer Successful!
// ₹15000 transferred from Omkar to Rohit.
// Balances should be updated accordingly.

// 5. displayAccountDetails(account)
// Displays all account information.
// Example:
// Account Number: 101
// Holder Name: Omkar
// Balance: ₹45000

const acc_1 = {
    name : "ajit",
    age : 20,
    acc_num : 9579489585,
    balance : 5000
}

const acc_2 = {
    name : "peter",
    age : 25,
    acc_num : 1234567890,
    balance : 10000
}
// 1. checkBalance(account)
// Displays the current balance of the account.
// Example:
// Current Balance of Omkar: ₹50000

let ChkBalance = (acc) => {
    console.log(`Current Balance of ${acc.name} : `,acc.balance); 
}
ChkBalance(acc_1);
console.log("----------------------------------------------------");


// 2. deposit(account, amount)
// Deposits the given amount into the account.
// Example:
// deposit(account1, 10000);
// Output:
// ₹10000 deposited successfully.
// New Balance: ₹60000

let DepositAmt = (acc,amount) => {
    acc.balance += amount;
    console.log(`${amount} Amount deposited successfully. in ${acc.name} account.`);
    console.log(`New Balance: ₹${acc.balance}`);
     
}
DepositAmt(acc_1,2000);
console.log("----------------------------------------------------");

// 3. withdraw(account, amount)
// Withdraws the amount only if sufficient balance is available.
// Example:
// withdraw(account2, 5000);
// Output:
// ₹5000 withdrawn successfully.
// New Balance: ₹25000
// If balance is insufficient:
// Insufficient Balance!
let WithdrawAmt = (acc, amount) => {
    if(amount > acc.balance) {
        return "Insuffient Balance.";
    }
    else{
        console.log(`₹${amount} Withdraw Successfully `);
        acc.balance -= amount;
        console.log(`Amount Withdraw Successfully from ${acc.name} Account.`);
        ChkBalance(acc);
        
    }
}
WithdrawAmt(acc_1,3000);
console.log("----------------------------------------------------");


// 4. transfer(sender, receiver, amount)
// Transfers money from one account to another.
// Example:
// transfer(account1, account2, 15000);
// Output:
// Transfer Successful!
// ₹15000 transferred from Omkar to Rohit.
// Balances should be updated accordingly.

let Transfer = (sender, receiver, amount) => {
    if(amount > sender.balance) {
        console.log("Amount is very high.\n Please Check Balance.");
    }
    else{

        console.log(`Initial Balance of ${sender.name}`,sender.balance);
        console.log(`Balance of ${receiver.name}`,receiver.balance);
       
        // ChkBalance(receiver.name)
       
        sender.balance -= amount; 
        receiver.balance += amount;

        console.log(`\n${amount} Amount Transferred from ${sender.name} To ${receiver.name} Successfully. `);
        ChkBalance(sender)
        ChkBalance(receiver)
    }
}
Transfer(acc_2, acc_1, 5000);
console.log("----------------------------------------------------");

// 5. displayAccountDetails(account)
// Displays all account information.
// Example:
// Account Number: 101
// Holder Name: Omkar
// Balance: ₹45000

let account_details = (acc) => {
    console.log("***** Welcome To JS Bank *****");
    console.log(`Account holder Name: `,acc.name);
    console.log(`Account holder Age Name: `,acc.age);
    console.log(`Account holder Account Number: `,acc.acc_num);
    console.log(`Account holder Account Balance: `,acc.balance);
} 
account_details(acc_1);


