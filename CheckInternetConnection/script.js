const popup = document.querySelector(".popup"),
wifiIcon = document.querySelector(".icon i"),
popupTitle = document.querySelector(".popup .title"),
reconnectBtn = document.querySelector(".reconnect"),
popupDesc = document.querySelector(".desc");

let isOnline = true, intervalID,timer = 10;

const checkConnection = async () =>{
    try{
        //Try to Fetch random data from the API If the status code is between 200 and 300
        //The network connection is considered online 
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        isOnline = response.status >=200 &&  response.status <=300;
    }catch(error){
        isOnline = false;//IF there is an error , the connection is considered offline
    }
    // console.log(isOnline);
    timer = 10;
    clearInterval(intervalID);
    handlePopup(isOnline);
}
const handlePopup = (status_data)=>{
    if(status_data){
        // If the status is true means Online and update data
        wifiIcon.className = "uil uil-wifi";
        popupTitle.innerText = "Restored Connection";
        popupDesc.innerHTML = "Your device is now successfully connected to the Internet.";
        popup.classList.add("online");
        return setTimeout(()=> popup.classList.remove('show','online'),3000);
    }
    // If the status is false means Offline and update data
    wifiIcon.className = "uil uil-wifi-slash";
    popupTitle.innerText = "Lost Connection";
    popupDesc.innerHTML = "Your Network is Unavailable. We will attempt to reconnect in <b>10</b> seconds.";
    popup.className = "popup show";

        intervalID = setInterval(()=>{ //Set an Interval to decrease the timer by 1 every second
            timer--;
            if(timer===0) checkConnection();//If the timer reaches 0 , Check the connection again
            popup.querySelector('.desc b').innerText = timer;
        },1000);
}
//Check THe Internet Connection in every 3 Seconds
setInterval(()=> isOnline && checkConnection(), 3000);
reconnectBtn.addEventListener("click",checkConnection)