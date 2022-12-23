function onTypeWord(e) {
  if (Object.keys(morseCode).includes(e.target.value.toUpperCase())) {
    wordInEl.value = e.target.value.toUpperCase();
    morseInEl.value = morseCode[e.target.value.toUpperCase()];
    setTimeout(() => {
      wordInEl.value = "";
    }, 250);
  } else {
    wordInEl.value = "VALUE NOT VALID!";
  }
}

function onTypeMorse(e) {
  const indexOfMorseSeq = Object.values(morseCode).indexOf(e.target.value);

  if (
    (e.target.value.includes(".") || e.target.value.includes("-")) &&
    indexOfMorseSeq >= 0
  ) {
    wordInEl.value = Object.keys(morseCode)[indexOfMorseSeq];
  } else {
    wordInEl.value = "VALUE NOT VALID!";
  }
}

const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

const wordInEl = document.querySelector("#word");
const morseInEl = document.querySelector("#morse");

wordInEl.addEventListener("focus", (e) => (e.target.value = ""));
morseInEl.addEventListener("focus", (e) => (e.target.value = ""));
wordInEl.addEventListener("input", onTypeWord);
morseInEl.addEventListener("input", onTypeMorse);
