let counter = 1;
const maxValue = 10;
const secondMaxValue = 30;

function increment() {
  counter = counter + 1;
  document.getElementById("counterText").innerHTML = counter;
}

function decrement() {
  counter = counter - 1;
  document.getElementById("counterText").innerHTML = counter;
}

function updateCounter() {
  if (counter < maxValue) { // if counter is smaller than 10
    counter = counter + 1; // add 1
  } else if (counter >= maxValue && counter < secondMaxValue) { // counter is between 10 and 30
    counter = counter + 2; // add 2
  } else {
    alert("Max is reached!")
  }
  document.getElementById("counterText").innerHTML = counter;
}
