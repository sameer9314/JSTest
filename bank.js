var bankAccount = function BankAccount(accountHolder, accountNumber, accountBalance) {
    this.name="aaaaa";
    this.accountHolder = accountHolder,
    this.accountNumber = accountNumber,
    this.accountBalance = accountBalance
    this.withdraw = function withdraw(withdrawAmount) { }
    this.deposit = function (depositAmount) {
  
        console.log("Amount Credited To Account : " + depositAmount);
        this.accountBalance += depositAmount;
        console.log("Total Account Balance : " + this.accountBalance);
    }
};

var creditAccount = new bankAccount("Sameer Saurabh", "0001", 10000);

creditAccount.withdraw = function (withdrawAmount) {
console.log("name : "+creditAccount.name);
    var odlimit = 1000;

    if (withdrawAmount <= creditAccount.accountBalance + odlimit) {
        creditAccount.accountBalance=creditAccount.accountBalance - withdrawAmount;
        console.log("Amount withdrawn : " + withdrawAmount);
        console.log("Current Balance : " + (creditAccount.accountBalance));
    }
    else {
        console.log("Not Sufficient Balance to withdraw including obLimit balance");
    }
}

var salaryAccount = Object.create(new bankAccount("Saurav Manchanda", "0002", 10000));

salaryAccount.withdraw = function (withdrawAmount) {

    if (withdrawAmount <= salaryAccount.accountBalance) {
        salaryAccount.accountBalance=salaryAccount.accountBalance - withdrawAmount;
        console.log("Amount withdrawn : " + withdrawAmount);
        console.log("Current Balance : " + (salaryAccount.accountBalance));
    }else{
        console.log("Not Sufficient Balance to withdraw");
    }
}

transaction();

function transaction() {

    console.log("Account Holder Name : " + creditAccount.accountHolder);
    creditAccount.deposit(6000);
    creditAccount.withdraw(5000);
    
    console.log("\n");
    
    console.log("Account Holder Name : " + salaryAccount.accountHolder);
    salaryAccount.deposit(8000);
    salaryAccount.withdraw(5000);

    console.log("\n");
    console.log("Account Holder Name : " + creditAccount.accountHolder);
    creditAccount.withdraw(12000);

    creditAccount.withdraw(100);

    console.log();
}

