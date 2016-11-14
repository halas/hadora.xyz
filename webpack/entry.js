import instantClick from 'instantclick'
let decorate = require('./components/decorate');

instantClick.init()
decorate()
instantClick.on('change', () => {
  decorate()
});
