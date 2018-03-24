'use strict';

var name = "Deepak";

function greeting(word) {
  return word.toUpperCase();
}

var template = ' <h2>Hai! ' + greeting('Good Morning') + ' ' + name + ' You are using template</h2>\n  <p> This is just a sample showing the template example</p>\n';

document.getElementById('template').innerHTML = template;