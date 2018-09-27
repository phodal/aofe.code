function Model() {
  var that = this;
  var text = "hello";
  this.listeners = [];

  Object.defineProperty(that, "text", {
    get: function () {
      return text;
    },
    set: function (value) {
      text = value;
      that.notify();
    }
  });
}
Model.prototype.subscribe = function (listener) {
  this.listeners.push(listener)
};
Model.prototype.notify = function (value) {
  var that = this;
  this.listeners.forEach(function (listener) {
    listener.call(that, value);
  });
};

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
    that.model.notify();
  }
}

function View(controller) {
  var that = this;
  this.controller = controller;
  this.demoButton = document.getElementById('demo-button');
  this.demoButton.innerText = controller.getModelByKey("text");
  this.demoButton.addEventListener('click', controller);
  this.call = function (data) {
    this.demoButton.innerText = data.text;
  };
  this.controller.model.subscribe(this);

  setTimeout(function(){
    that.controller.model.text = "1s"
  }, 3000)
}

function main() {
  var model = new Model();
  var controller = new Controller(model);
  var view = new View(controller);
}

main();
