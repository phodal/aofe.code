class HelloElement extends HTMLElement {
  constructor() {
    super();
    var shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML += `
		<style>
			#tabs { background-color: red; }
			span { color: purple; }
		</style>
		<div id="tabs">
			hello,
		</div>
		<span>world</span>
		`;
  }
}

customElements.define('hello-element', HelloElement);
