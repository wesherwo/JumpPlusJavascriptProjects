var customers = [];

function mainMenu(){
    var input;
    do {
        input = prompt('Enter a valid choice (1 > Transactions 2 > Open New Account)  ');
    } while(input != '1' && input != '2');
    if(input == '1'){
        transaction();
    } else {
        account();
    }
}

function account() {
    var deposit, pin;
    var regex  = /^\d+(?:\.\d{0,2})$/;
    var good = false;
    do {
        deposit = prompt('Enter Initial Deposit in the format : 00.00:  ');
        if (!regex.test(deposit)) {
            good = true;
        } else {
            console.log('Must be in the format 00.00');
        }
    } while(!good);
    
    good = false;
    var pin2;
    regex  = /^\d{4}$/;
    do {
        pin = prompt('Enter a secure 4 digit pin:  ');
        if (!regex.test(pin)) {
            pin2 = prompt('Verify pin:  ');
            if(pin == pin2){
                good = true;
            } else {
                console.log('Pins dont match');
            }
        } else {
            console.log('Must be a 4 digit number');
        }
    } while(!good);

    customser.push(new Customer(deposit, [], pin));
}