const videoPlayer = document.getElementById("video");
const btn = document.getElementById("depth");


 async function pictureInPicture(){
    try{
       const media = await navigator.mediaDevices.getDisplayMedia();
       videoPlayer.srcObject = media;
       videoPlayer.onloadedmetadata = ()=>{
        videoPlayer.play();
       }
    }
    catch(e){
        console.log(e);
    }
}

btn.addEventListener("click",async ()=>{
    btn.disabled = true;
    await videoPlayer.requestPictureInPicture();
    btn.disabled = false;

});

pictureInPicture();