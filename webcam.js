"use strict";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (error) {
      console.log("Service worker registration failed, error:", error);
    });
}

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const snap = document.getElementById("snap");
const errMsgElement = document.getElementById("span#ErrorMsg");

const constraints = {
  audio: true,
  video: {
    width: document.documentElement.clientWidth * 0.9,
    height: document.documentElement.clientHeight * 0.9,
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
