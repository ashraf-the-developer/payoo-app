// funcationabale the login button

document.getElementById("login-btn").addEventListener("click", function(){
const mobileNumber = document.getElementById("mobile");
const number = mobileNumber.value;
// console.log("mobile-",number);
const pinInput = document.getElementById("pin");
const pin = pinInput.value;
// console.log("pin-", pin);

if(number=="01845456790" && pin=="4743"){
    alert("welcome back ashraf");
    window.location.assign("./home.html")
}
else{
    alert("ehhh you put a wrong info bro");
    return;
}



})