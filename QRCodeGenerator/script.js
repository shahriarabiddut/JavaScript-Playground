const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qrcode img");
generateBtn.addEventListener("click", ()=>{
    let qrValue = qrInput.value ;
    if(!qrValue) return; // Return if input is empty
    // console.log(qrValue);
    generateBtn.innerText = "Generating QR Code....";
    //getting a QR Code of user entered value using th qrserver api and passing th api returned img source to string
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.alt = `${qrValue}`
    qrImg.addEventListener("load" , ()=>{
        //Once QR image isloaded then
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";

    });
    
});
qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value) {
    wrapper.classList.remove("active");}
});