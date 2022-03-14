const video = document.getElementById("video");
const btn = document.getElementById("button");
const btnContainer = document.querySelector(".btn-container");

async function setMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (err) {
    window.alert("Error:", err);
  }
}

btn.addEventListener("click", async () => {
  btn.disabled = true;
  await video.requestPictureInPicture();
  btn.disabled = false;
});

setMediaStream();
