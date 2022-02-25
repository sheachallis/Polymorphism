
function HtmlElement() {
  this.click = function() {
    console.log('clicked');
  }
};

HtmlElement.prototype.focus = function() {
  console.log('focused');
}

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function(value) {
    this.items.push(value);
  }
  this.removeItem = function(value) {
    this.items.pop(value);
  }
  this.render = function() {
    return `
<select>${this.items.map(item => `
  <option>${item}</option>`).join('')}
</select>`;
  }
};

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;
  this.render = function() {
    return `<img src="${this.src}" />`
  }
};

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

//const e = new HtmlElement(); 
//const s = new HtmlSelectElement(1, 2, 3); 
//const img = new HtmlImageElement('http://');

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement('http://')
];

for (let element of elements)
  console.log(element.render());
