/* PersonalWebsite */
/* Colours */
/* .JS */

const n = ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f",];

function generateRandomNumber() {
  return Math.floor(Math.random() * n.length);
}

function awsome() {
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += n[generateRandomNumber()];
  }
  document.body.style.backgroundColor = color;
  document.getElementById("color-text").textContent = color;
}
