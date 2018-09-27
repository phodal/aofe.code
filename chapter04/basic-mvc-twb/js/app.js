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
  var elements = document.querySelectorAll('[data-tw-bind]');
  elements.forEach(function (element) {
    if (element.type === 'button') {
      element.innerText = controller.getModelByKey("text");
      that.call = function (data) {
        element.innerText = data.text;
      };
      element.addEventListener('click', controller);
    }
  });
  this.controller.model.subscribe(this);

  setTimeout(function(){
    that.controller.model.text = "3s"
  }, 3000)
}

function main() {
  var model = new Model();
  var controller = new Controller(model);
  var view = new View(controller);
}

main();
