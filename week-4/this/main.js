function log(msg) {
  document.querySelector('.msg').innerHTML += ("<p>" + msg + "</p>");
}

function experiment(a, b) {
  log(a);
  log(b);
  log(this.foo);
}

function main() {
  var obj = {
    foo: 'bar'
  };

  experiment.bind(obj)("a!", "b?");
  log("<hr>");
  experiment.call(obj, "a!", "b?");
  log("<hr>");
  experiment.apply(obj, ["a!", "b?"]);
}

document.addEventListener('DOMContentLoaded', main);
