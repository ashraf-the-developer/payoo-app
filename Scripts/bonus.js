const bonusBtn = document.getElementById("bonus-btn");
const bonusForm = document.getElementById("bonus-form");

bonusBtn.addEventListener("click", function(){
    bonusForm.classList.remove("hidden");
    cashoutForm.classList.add("hidden");
    addMoneyForm.classList.add("hidden");
    transfermoneyForm.classList.add("hidden");
})


// main function
const mainAmount = document.getElementById("balance");
    const balance = mainAmount.innerText;

const bonusPrice = "500";
const newBalance = Number(balance) + Number(bonusPrice);


document.getElementById("get-bonus-btn").addEventListener("click", function(){
    const bonusInput = document.getElementById("get-bonus");
    const bonusValue = bonusInput.value;

     if(bonusValue === "ashraf4743"){
        alert("congress you got a onetime bonus of 500tk yeahhh!");
        mainAmount.innerText = newBalance;
        

        
    }
    else if(bonusValue === ""){
        alert("please enter your cupon code");
        return;
    }
    else{
        alert("sorry your cupon code dosen't matched");
        return;
    }
   

});