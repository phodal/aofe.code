function Router() {
  this.routes = {};
  this.currentUrl = '';
}

Router.prototype.add = function (path, callback) {
  this.routes[path] = callback || function () {};
};
Router.prototype.refresh = function () {
  this.currentUrl = location.hash.replace(/^#*/, '');
  this.routes[this.currentUrl]();
};
Router.prototype.load = function () {
  window.addEventListener('load', this.refresh.bind(this), false);
  window.addEventListener('hashchange', this.refresh.bind(this), false);
};
Router.prototype.navigate = function (path) {
  path = path ? path : '';
  location.href = location.href.replace(/#(.*)$/, '') + '#' + path;
};

window.Router = new Router();
window.Router.load();
