let spannify = require('./spannify');
let addColor = require('./addColor');

let decorate = () => {
  let toDecorate = document.querySelectorAll('.decorate');
  toDecorate.forEach((currentElement)=> {
    spannify(currentElement,'decorate')
  });
  let toDecorateWords = document.querySelectorAll('.decorate-word');
  addColor(toDecorateWords);

  setTimeout(()=>{
    toDecorate.forEach((currentElement)=> {
      currentElement.classList.add('addColors')
    });
    toDecorateWords.forEach((currentElement)=> {
      currentElement.classList.add('active');
    });
  },1000)
};

module.exports = decorate;
