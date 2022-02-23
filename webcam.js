"use strict";

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const snap = document.getElementById("snap");
const errMsgElement = document.getElementById("span#ErrorMsg");

const constraints = {
  audio: true,
  video: {
    width: window.innerWidth * 0.9,
    height: window.innerHeight * 0.9,
  },
};

// Access webcam
async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);

    window.stream = stream;
    video.srcObject = stream;
  } catch (err) {
    errMsgElement.innerHTML = `navigator.getUserMedia.error: ${err.toString()}`;
  }
}

// Call Init function to start webcam
init();

// Draw image
let context = canvas.getContext("2d");
snap.addEventListener("click", function () {
  context.drawImage(video, 0, 0, 648, 480);
});
