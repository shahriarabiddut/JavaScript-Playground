const screenshotBtn = document.querySelector("#src-btn"),
closeBtn = document.querySelector("#close-btn"),
screenshotPreview = document.querySelector(".src-preview");
const captureScreen = async () =>{
    try{
        //Media Devices provides access to connected media input devices like cameras,microphones and screensharing
        //.getDisplayMedia() prompts the user to select and grant permission to capture the contents of the display or   tab
        //asking permission to use a media input to record current tab
        const stream = await navigator.mediaDevices.getDisplayMedia({ preferCurrentTab : true });
        // console.log(stream);
        const video = document.createElement("video");
        video.addEventListener('loadedmetadata',()=> {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            //passing video width and height as canvas width and height
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            video.play();//Playing th video so the drawn image won't be blank or black
            //drawing an image from the captured video Stream
            //drawImage() draws an image ,canvas or video onto the canvas
            //drawImage(image/video,xcoordinate,ycoordinate,width,height)
            ctx.drawImage(video,0,0,canvas.width,canvas.height)
            //videoTracks returns an array of tracks of this stream
            stream.getVideoTracks()[0].stop();//terminating first videotrack of the stream
            //Appending the canvas to the body for testing - document.body.appendChild(canvas);

            //passing canvas data url as screenshot preview
            screenshotPreview.querySelector("img").src=canvas.toDataURL();
            screenshotPreview.querySelector("a").href=canvas.toDataURL();
            screenshotPreview.classList.add("show");
            
        });
        video.srcObject = stream; // passing capture stream data as video source object
    }catch(error){
        alert("Failed to Capture Image");
    }
};
closeBtn.addEventListener("click",()=>{
    screenshotPreview.classList.remove("show");
});
screenshotBtn.addEventListener('click',captureScreen);