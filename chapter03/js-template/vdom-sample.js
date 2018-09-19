var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

// 1: 创建一个函数来声明 DOM 对应的属性
function render(count)  {
  return h('div', {
    style: {
      textAlign: 'center',
      lineHeight: (100 + count) + 'px',
      border: '1px solid red',
      width: (100 + count) + 'px',
      height: (100 + count) + 'px'
    }
  }, [String(count)]);
}

// 2: 初始化 document
var count = 0;      // 创建应用 data，比如用于存储的 count

var tree = render(count);               // 初始化树
var rootNode = createElement(tree);     // 创建一个初始化的 DOM 节点
document.body.appendChild(rootNode);    // 将 DOM 节点添加到 document

// 3: 整合起来来更新逻辑
setInterval(function () {
  count++;

  var newTree = render(count);
  var patches = diff(tree, newTree);
  rootNode = patch(rootNode, patches);
  tree = newTree;
}, 1000);
