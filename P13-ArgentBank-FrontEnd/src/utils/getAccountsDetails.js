import accounts from '../mockedData/accountDetails.json';

export function getAccounts(){
    return accounts;
}

export function getAccount(id){
    const selectedAccount = accounts.find((account) => account.accountNumber === id);
    return selectedAccount;
}