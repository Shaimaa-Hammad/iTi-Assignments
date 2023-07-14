class Account {
    acc_no:number;
    balance:number;

    depitAmount():void {};
    creditAmount():void {};
    getBalance():void {};
}

interface IAccount {
    date_of_opening;

    addCustomer();
    removeCustomer();
}

class Current_Account extends Account implements IAccount {
    interest_rate:number;   

    date_of_opening;

    addCustomer():void {};
    removeCustomer():void {};
}

class Saving_Account extends Account implements IAccount {
    min_balance:number;

    date_of_opening;

    addCustomer():void {};
    removeCustomer():void {};
}