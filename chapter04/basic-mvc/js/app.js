function Model() {
  this.text = "hello";
}

function Controller(model) {
  var that = this;
  this.model = model;
  this.handleEvent = function (e) {
    e.stopPropagation();
    switch (e.type) {
      case "click":
        that.clickHandler(e.target);
        break;
      default:
        console.log(e.target);
    }
  };
  this.getModelByKey = function (modelKey) {
    return that.model[modelKey];
  };
  this.clickHandler = function (target) {
    that.model.text = 'world';
    target.innerText = that.getModelByKey("text");
  }
}

function View(controller) {
  this.controller = controller;
  this.demoButton = document.getElementById('demo-button');
  this.demoButton.innerText = controller.getModelByKey("text");
  this.demoButton.addEventListener('click', controller);
}

function main() {
  var model = new Model();
  var controller = new Controller(model);
  var view = new View(controller);
}

main()
