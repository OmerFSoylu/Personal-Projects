let counter = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
function incrementR() {
  counter++;
  counter4++;
  document.getElementById("counter").textContent = counter;
  document.getElementById("counter4").textContent = counter4;
}

function decrementR() {
  if (counter > 0) {
    counter--;
    counter4--;
    document.getElementById("counter").textContent = counter;
    document.getElementById("counter4").textContent = counter4;
  }
}


function incrementK() {
  counter2++;
  counter4++;
  document.getElementById("counter2").textContent = counter2;
  document.getElementById("counter4").textContent = counter4;
}

function decrementK() {
  if (counter2 > 0) {
    counter2--;
    counter4--;
    document.getElementById("counter2").textContent = counter2;
    document.getElementById("counter4").textContent = counter4;
  }
}

function incrementG() {
  counter3++;
  counter4++;
  document.getElementById("counter3").textContent = counter3;
  document.getElementById("counter4").textContent = counter4;
}

function decrementG() {
  if (counter3 > 0) {
    counter3--;
    counter4--;
    document.getElementById("counter3").textContent = counter3;
    document.getElementById("counter4").textContent = counter4;
  }
}

function reset() {
  counter = 0;
  counter2 = 0;
  counter3 = 0;
  counter4 = 0;
  document.getElementById("counter").textContent = counter;
  document.getElementById("counter2").textContent = counter2;
  document.getElementById("counter3").textContent = counter3;
  document.getElementById("counter4").textContent = counter4;
}