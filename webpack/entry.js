import instantClick from 'instantclick'
let decorate = require('./components/decorate');

instantClick.init()

// initial decorate on hp load 
decorate()
instantClick.on('change', () => {
  decorate()
});
