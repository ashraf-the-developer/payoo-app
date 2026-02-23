// cashout btn click

const cashoutBtn = document.getElementById("cashout-btn");
const cashoutForm = document.getElementById("cashout-form");
cashoutBtn.addEventListener("click" , function(){
    cashoutForm.classList.remove("hidden");
    addMoneyForm.classList.add("hidden");
    transfermoneyForm.classList.add("hidden");
    bonusForm.classList.add("hidden");

});

//main function


document.getElementById("withdraw-btn").addEventListener("click", function(){
    const agentNumberInput = document.getElementById("agent-number");
    const agentNumber = agentNumberInput.value;
    if(agentNumber.length !=11){
        alert("invaild number");
        return;
    }
    // console.log(agentNumber);

    const amountInput = document.getElementById("withdraw-amount");
    const cashoutAmount = amountInput.value;

    if(cashoutAmount === ""){
        alert("Enter your amount");
        return;

    }
    // console.log(cashoutAmount);


    const mainAmount = document.getElementById("balance");
    const balance = mainAmount.innerText;
    // console.log(balance);


    const newBalance = Number(balance) - Number(cashoutAmount);
    
    if(newBalance <0 ){
        alert("Insuficiante Balance");
        return;
    }

    const cashoutPin = document.getElementById("withdraw-pin");
    const pin = cashoutPin.value;
    if(pin === "4743"){
        alert("Cashout Sucessfull");
        mainAmount.innerText = newBalance;
        // console.log("new balance-", newBalance);

    }
    else if(pin === ""){
        alert("please enter pin");
        return;
    }
    else{
        alert("wrong pin");
        return;
    }
    
    

    
});