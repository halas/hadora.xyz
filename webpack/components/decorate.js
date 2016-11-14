let spannify = require('./spannify');

let decorate = () => {
  let toDecorate = document.querySelectorAll('.decorate');
  toDecorate.forEach((currentElement)=>{
    spannify(currentElement,'decorate')
  });

  setTimeout(()=>{
    toDecorate.forEach((currentElement)=> {
      currentElement.classList.add('addColors')
    })
  },1000)
};

module.exports = decorate;
