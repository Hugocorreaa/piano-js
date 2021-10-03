// get all keys
const keys = document.querySelectorAll(".key");
console.log(keys);

// play notes
function playNote(event) {
  // keyCode
  let audioKeyCode = getKeyCode(event);

  // typed or pressed key
  const keyTyped = document.querySelector(`.key[data-key="${audioKeyCode}"`);

  // if key exists
  const cantFoundAnyKey = !keyTyped;

  if (cantFoundAnyKey) {
    return;
  }

  playAudio(audioKeyCode);
  addPlayingClass(keyTyped);
}

function addPlayingClass(key) {
  key.classList.add("playing");
}

function removePlayingClass(event) {
  event.target.classList.remove("playing");
}

function getKeyCode(event) {
  let keyCode;

  const isKeyboard = event.type === "keydown"; // true or false
  if (isKeyboard) {
    keyCode = event.keyCode;
  } else {
    keyCode = event.target.dataset.key;
  }

  return keyCode;
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"`);
  audio.currentTime = 0;
  audio.play();
}

function registerEvents() {
  // click with mouse
  keys.forEach(function (key) {
    key.addEventListener("click", playNote);
    key.addEventListener("transitionend", removePlayingClass);
  });

  // keyboard type
  window.addEventListener("keydown", playNote);
}

window.addEventListener("load", registerEvents)
