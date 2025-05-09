let otp;
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
        
        otpCHeker()
        

    })
    
}

function generateOTP(){
    otp = Math.floor(1000 + Math.random() * 9000)
    const otpElem = document.getElementById("genereted-otp-id")
    otpElem.innerHTML = `Your OTP is : ${otp}`
}

function otpCHeker(){
    let typedNumber = "";
    const boxListElem = document.getElementById("otp-box-list-id");
    [...boxListElem.children].forEach((elem) => {
      typedNumber = typedNumber + elem.value;
    });
    console.log(otp,typedNumber)
    const result = (otp === parseInt(typedNumber,10))

    const otpValid = document.getElementById("result-id")
    if(result){
        otpValid.innerText = "OTP has been validate successfuly"
        otpValid.classList.remove("fail")
        otpValid.classList.add("success")
      
    }else{
        otpValid.innerText = "OTP has been invalid "
        otpValid.classList.add("fail")
        otpValid.classList.remove("success")

    }
}



function init(){
    tackleOTPBoxes();
    setTimeout (generateOTP,800);
}

init();



// *****************************************


// function OTPBoxControler(){
//     const mainBox = document.getElementById("otp-box-list-id")
//     mainBox.addEventListener("input",function(e){
//         const target = e.target;
//         const value = target.value;
//         if(isNaN(value)){
//             target.value = ''
//             return
//         }
//         const nextElement = target.nextElementSibling
//         if (nextElement) {
//             nextElement.focus()
//         }

//     })

// }

// function OTPGenarator(){
//     const otp = Math.floor(1000+ Math.random()* 9000)
//     const showOtp = document.getElementById("genereted-otp-id")
//     showOtp.innerText = `Your OTP is ${otp}`
// }



// function Call_me(){
//     OTPBoxControler()
//     setTimeout(OTPGenarator,500)
//     otpCHeker()
    
// }

// Call_me()