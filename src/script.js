function tackleOTPBoxes(){
    const boxes = document.getElementById("otp-box-list-id")
    boxes.addEventListener("input",function(e){
        const target = e.target
        const value = target.value

        if (isNaN(value)){
            target.value = "";
            return;
        }

        const nextElement = target.nextElementSibling
        if(nextElement){
            nextElement.focus();
        }
    })
}

function init(){
    tackleOTPBoxes();
}

init();