const task3Element = document.getElementById('task-3');

function callHello() {
  alert('Hello World');
}

function callName(name) {
  alert(name);
}

callHello();
callName('Vito');

task3Element.addEventListener('click', callHello);

function concatenateStrings(param1, param2, param3) {
  return `${param1}${param2}${param3}`;
}

alert(concatenateStrings('param1', 'param2', 'param3'));
