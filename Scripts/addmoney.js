// Add Money btn click

const addMoneyBtn = document.getElementById("add-money-button");
const addMoneyForm = document.getElementById("add-money-form");
addMoneyBtn.addEventListener("click" , function(){
addMoneyForm.classList.remove("hidden");
cashoutForm.classList.add("hidden");
transfermoneyForm.classList.add("hidden");
bonusForm.classList.add("hidden");

});


//

document.getElementById("add-money-btn").addEventListener("click", function(){

    const selectBank = document.getElementById("select-bank");
    const bank = selectBank.value;
    if(bank=="Select back"){
        alert("Please Select Your Bank");
        return;
    }



    const bankAccountInput = document.getElementById("account-number");
    const accountNumber = bankAccountInput.value;
    if(accountNumber == ""){
       alert("insert number");
        return;
    }
    else if(accountNumber.length !=11){
         alert("invaild number");
        return;
        
    }
    // console.log(accountNumber);

    const addAmountInput = document.getElementById("add-amount");
    const addAmount = addAmountInput.value;

    if(addAmount === ""){
        alert("Enter your amount");
        return;

    }
    // console.log(cashoutAmount);


    const mainAmount = document.getElementById("balance");
    const balance = mainAmount.innerText;
    // console.log(balance);


    const newBalance = Number(balance) + Number(addAmount);
    
    if(newBalance <0 ){
        alert("Insuficiante Balance");
        return;
    }

    const addMoneyPin = document.getElementById("add-money-pin");
    const pin = addMoneyPin.value;
    if(pin === "4743"){
        alert(`Add Money Sucessfull from ${bank} at ${new Date}`);
        mainAmount.innerText = newBalance;
        // console.log("new balance-", newBalance);

    }
    else if(pin === ""){
        alert("please enter pin");
        return;
    }
    else{
        alert(" The PIN Number is Wrong");
        return;
    }
    
    

    
});