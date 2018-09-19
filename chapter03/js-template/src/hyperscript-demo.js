var h = require('virtual-dom/h');
var createElement = require('virtual-dom/create-element');

var result = h('a', {href: 'https://npm.im/hyperscript'}, 'hyperscript');
var node = createElement(result);
document.body.appendChild(node);
