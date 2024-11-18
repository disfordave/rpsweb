const startButtonWrapper = document.getElementById('start-button-wrapper');
const multiPlayButtonsWrapper = document.getElementById('multi-play-buttons-wrapper');
const resultWrapper = document.getElementById('result-wrapper');

const startButton = document.getElementById('start-button');
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
const remainingTime = document.getElementById('remaining-time');
const backToStartButton = document.getElementById('back-to-start-button');
const waitMessage = document.getElementById('wait-message');
const chooseButtons = document.getElementById('choose-buttons');
const multiUserChoice = document.getElementById('multi-user-choice');
const resultImageWrapper = document.getElementById('result-image-wrapper');
const playAgainButton = document.getElementById('play-again-button');

function reset() {
    resultImageWrapper.innerHTML = '';
    multiUserChoice.innerText = 'NONE';
}
function setStart() {

    reset()
    startButtonWrapper.style.display = 'block';
    multiPlayButtonsWrapper.style.display = 'none';
    resultWrapper.style.display = 'none';
}

function setMultiPlay() {
    reset()
    startButtonWrapper.style.display = 'none';
    chooseButtons.style.display = 'flex';
    multiPlayButtonsWrapper.style.display = 'block';
    waitMessage.style.display = 'none';
    resultWrapper.style.display = 'none';

    let time = 3;
    remainingTime.innerText = time;
    const interval = setInterval(() => {
        time--;
        remainingTime.innerText = time;
        if (time === 0) {
            clearInterval(interval);
            setResult();
        }
    }, 1000);
}

function setResult() {
    // document.body.style.backgroundColor = 'rgb(239 68 68)';
    startButtonWrapper.style.display = 'none';
    chooseButtons.style.display = 'none';
    multiPlayButtonsWrapper.style.display = 'none';
    resultWrapper.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", setStart);

startButton.addEventListener('click', () => {
    setMultiPlay()
});

playAgainButton.addEventListener('click', () => {
    setMultiPlay();
});

const addImage = (rps) => {
    const img = document.createElement('img');
    img.src = `../img/rps/${rps.toLowerCase()}.svg`;
    img.alt = rps;
    resultImageWrapper.appendChild(img);
}

function userChose(rps) {
    chooseButtons.style.display = 'none';
    waitMessage.style.display = 'block';
    multiUserChoice.innerText = rps;
    addImage(rps);
}

rockButton.addEventListener('click', () => {
    userChose('ROCK');
});

paperButton.addEventListener('click', () => {
    userChose('PAPER');
});

scissorsButton.addEventListener('click', () => {
    userChose('SCISSORS');
});

backToStartButton.addEventListener('click', () => {
    setStart();
});
