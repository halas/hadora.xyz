// put last three letters of elements text content
// in separate spans

function putInSpan(content,spanClass) {
  let textInSpan = `<span class="${spanClass}">${content}</span>`
  return textInSpan;
}

function lettersInSpan(arrayOfLetters,spanClass) {
  let arrayInSpan = [];
  for (let i = 0; i < arrayOfLetters.length; i++) {
    let className = spanClass+i;
    let letterInSpan = putInSpan(arrayOfLetters[i],className);
    arrayInSpan.push(letterInSpan);
  }
  return arrayInSpan
}

function spannify(element,classBase) {
    let word = element.textContent.split("");
    let lastLetters = [];
    for (let i = 0; i < 3; i++) {
      let letter = word.pop();
      lastLetters.push(letter);
    }

    let firstPart = word.join("");
    lastLetters.reverse();
    let lastLettersInSpan = lettersInSpan(lastLetters,classBase);
    element.innerHTML = firstPart + lastLettersInSpan.join("");
};

module.exports = spannify;
