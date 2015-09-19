// make the make librarry!

var elements = ['a', 'div', 'span', 'form', 'h1', 'h2', 'h3', 'h4', 'p'];

var make = {};

for(var i = 0, l = elements.length; i < l; i++) {
  (function(element){
    make[element] = function() {
      return document.createElement(element);
    }
  })(elements[i]);
}
