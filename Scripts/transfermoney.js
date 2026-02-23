// cashout btn click

const transfermoneyBtn = document.getElementById("transfermoney-btn");
const transfermoneyForm = document.getElementById("transfermoney-form");

transfermoneyBtn.addEventListener("click" , function(){
    transfermoneyForm.classList.remove("hidden");
    cashoutForm.classList.add("hidden");
    addMoneyForm.classList.add("hidden");
    bonusForm.classList.add("hidden");

});

//main function


document.getElementById("transfer-money-btn").addEventListener("click", function(){
    const transferAgentNumberInput = document.getElementById("transfer-agent-number");
    const transferAgentNumber = transferAgentNumberInput.value;
    if(transferAgentNumber.length !=11){
        alert("invaild number");
        return;
    }
    // console.log(agentNumber);

    const transferAmountInput = document.getElementById("transfer-amount");
    const transferAmount = transferAmountInput.value;

    if(transferAmount === ""){
        alert("Enter your amount");
        return;

    }
    // console.log(cashoutAmount);


    const mainAmount = document.getElementById("balance");
    const balance = mainAmount.innerText;
    // console.log(balance);


    const newBalance = Number(balance) - Number(transferAmount);
    
    if(newBalance <0 ){
        alert("Insuficiante Balance");
        return;
    }

    const transferPin = document.getElementById("transfer-pin");
    const pin = transferPin.value;
    if(pin === "4743"){
        alert("Transfer Money Sucessfull");
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