function Model() {
  this.heading = "Hello";
}

function Controller(model) {
  var self = this;
  this.model = model;
  // EVENTLISTENER INTERFACE
  this.handleEvent = function (e) {
    e.stopPropagation();
    switch (e.type) {
      case "click":
        self.clickHandler(e.target);
        break;
      default:
        console.log(e.target);
    }
  };
  // GET MODEL HEADING
  this.getModelHeading = function () {
    return self.model.heading;
  };
  // CHANGE THE MODEL
  this.clickHandler = function (target) {
    self.model.heading = 'World';
    target.innerText = self.getModelHeading();
  }
}

function View(controller) {
  this.controller = controller;
  this.heading = document.getElementById('heading');
  this.heading.innerText = controller.getModelHeading();
  this.heading.addEventListener('click', controller);
}

function main(){
  var model = new Model();
  var controller = new Controller(model);
  var view = new View(controller);
}

main()
