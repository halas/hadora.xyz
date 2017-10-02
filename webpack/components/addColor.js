// add one of three decorative colors to elements

let currentColor = 1;

function addColor(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].classList.add('color-'+currentColor);
    if (currentColor < 3) {
      currentColor ++
    } else {
      currentColor = 1;
    }
  }
}

module.exports = addColor;
