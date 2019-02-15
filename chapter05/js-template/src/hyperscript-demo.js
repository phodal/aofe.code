var h = require('virtual-dom/h');
var createElement = require('virtual-dom/create-element');

var result = h('a', {href: 'https://aofe.phodal.com/'}, 'aofe');
var node = createElement(result);
document.body.appendChild(node);
