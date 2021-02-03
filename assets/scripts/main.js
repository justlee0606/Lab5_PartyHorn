// main.js

const slider = document.getElementById("volume-slider");
const volumeInput = document.getElementById("volume-number");
const horn = document.getElementById("horn-sound");
const airHorn = document.getElementById("radio-air-horn");
const carHorn = document.getElementById("radio-car-horn");
const partyHorn = document.getElementById("radio-party-horn");
const hornImage = document.getElementById("sound-image");
const playButton = document.getElementById("honk-btn");

const changeVolumeImage = function(volume) {
    const volumeImage = document.getElementById("volume-image");
    if(volume === 0)
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
    else if(volume <= 33)
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    else if(volume <= 66)
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    else
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
};

slider.addEventListener("change", () => {
    volumeInput.value = slider.value;
    changeVolumeImage(parseInt(volumeInput.value));
    horn.volume = parseInt(volumeInput.value) / 100;
    playButton.disabled = (parseInt(volumeInput.value) === 0);
});

volumeInput.addEventListener("change", () => {
    slider.value = volumeInput.value;
    changeVolumeImage(parseInt(slider.value));
    horn.volume = parseInt(slider.value) / 100;
    playButton.disabled = (parseInt(volumeInput.value) === 0);
});

airHorn.addEventListener("click", () => {
    horn.src = "./assets/media/audio/air-horn.mp3";
    hornImage.src = "./assets/media/images/air-horn.svg";
})

carHorn.addEventListener("click", () => {
    horn.src = "./assets/media/audio/car-horn.mp3";
    hornImage.src = "./assets/media/images/car.svg";
})

partyHorn.addEventListener("click", () => {
    horn.src = "./assets/media/audio/party-horn.mp3";
    hornImage.src = "./assets/media/images/party-horn.svg";
})

playButton.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("horn-sound").play();
})