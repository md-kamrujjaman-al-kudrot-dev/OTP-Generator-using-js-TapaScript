function tackleOTPBoxes(){
    const boxes = document.getElementById("otp-box-list-id")
    boxes.addEventListener("input",function(e){
        const target = e.target
        const value = target.value

        if (isNaN(value)){
            target.value = "";
            return;
        }

        const netElement = target.nextElementSibling
        if(netElement){
            netElement.focus();
        }        
    })
    
}

function generateOTP(){
    const otp = Math.floor(1000 + Math.random() * 9000)
    const otpElem = document.getElementById("genereted-otp-id")
    otpElem.innerHTML = `Your OTP is : ${otp}`
}

function init(){
    tackleOTPBoxes();
    generateOTP();
}

init();

// *****************************************
// console.log("hello")

// function tackleOTPBoxes(){
//     const otpbox = document.getElementById("otp-box-list-id")
//     otpbox.addEventListener("input",function(e){
//         const target = e.target
//         const value = target.value
//         console.log(value)
        
//         if(isNaN(value)){
//             target.value = "";
//             return;
//         }
//     })
// }

// tackleOTPBoxes()



// function box_input(){
//     const parent_box = document.getElementById("otp-box-id")
//     parent_box.addEventListener("input", (e)=>{
//         const target = e.target;
//         const value = target.value
//         if (isNaN(value)){
//             target.value = "";
//             return;
//         }
//     })

// }

// box_input();