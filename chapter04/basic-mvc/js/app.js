function Model() {
  this.heading = "hello";
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
  this.getModelHeading = function () {
    return that.model.heading;
  };
  this.clickHandler = function (target) {
    that.model.heading = 'world';
    target.innerText = that.getModelHeading();
  }
}

function View(controller) {
  this.controller = controller;
  this.heading = document.getElementById('heading');
  this.heading.innerText = controller.getModelHeading();
  this.heading.addEventListener('click', controller);
}

function main() {
  var model = new Model();
  var controller = new Controller(model);
  var view = new View(controller);
}

main()
