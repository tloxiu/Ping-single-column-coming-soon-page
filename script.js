const notifyBtn = document.querySelector(".notify-btn");
const error = document.querySelector(".error");


function checkEmail(){
    const emailInput = document.querySelector(".email-input")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(emailInput.value)){
        error.classList.remove("hidden");
        if(window.innerWidth < 1440){
            notifyBtn.classList.add("notify-btn-move");
        }
    }
    else if(emailInput.value === ""){
        error.classList.remove("hidden");
    }
    if(emailRegex.test(emailInput.value)){
        error.classList.add("hidden");
        if(window.innerWidth < 1440){
            notifyBtn.classList.remove("notify-btn-move");
    }
}
}


notifyBtn.addEventListener("click", function(){
    event.preventDefault();
    checkEmail()
})