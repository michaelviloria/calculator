const screen = document.getElementById('screen');
let numbers1 = [];
let numbers2 = [];
let equal = [];
let operator = "";
screen.classList.add('show-numbers1');

function showNumbers(number)
{
  if (screen.classList.contains('show-numbers1'))
  {
    newNumber = numbers1.push(number);
    screen.innerText = numbers1.join("");
  }
  if (screen.classList.contains('show-numbers2'))
  {
    newNumber = numbers2.push(number);
    screen.innerText = numbers2.join("");
  }
}

function operation(symbol)
{
  if (screen.classList.contains('show-numbers1') && numbers1.length > 0)
  {
    screen.classList.remove('show-numbers1');
    screen.classList.add('show-numbers2');
    screen.innerText = "";
  }

  if (screen.classList.contains('show-result'))
  {
    screen.classList.remove('show-result');
    screen.classList.add('show-numbers2');
    screen.innerText = "";
  }

  if (symbol === "+" || symbol === "-" || symbol === "*" || symbol === "/")
  {
    operator = symbol;
  }
}

function deleteNumber()
{
  if (screen.classList.contains('show-numbers1') && numbers1.length > 0)
  {
    delNumber = numbers1.pop();
    screen.innerText = numbers1.join("");
  }
  if (screen.classList.contains('show-numbers2') && numbers2.length > 0)
  {
    delNumber = numbers2.pop();
    screen.innerText = numbers2.join('');
  }
  if (screen.classList.contains('show-result') && equal.length > 0)
  {
    delNumber = equal.pop();
    initial();
  }
}

function result()
{
  newResult1 = parseFloat(numbers1.join(''));
  newResult2 = parseFloat(numbers2.join(''));
  newResult3 = parseFloat(equal.join(''));

  if (numbers1.length > 0 && numbers2.length > 0)
  {
    operationResult(newResult1, newResult2)
  }

  if (screen.classList.contains('show-numbers2') && numbers2.length > 0 && numbers1.length > 0)
  {
    equalOperator();
  }

  if (screen.classList.contains('show-numbers2') && equal.length > 0)
  {
    operationResult(newResult3, newResult2);

    equalOperator();
  }

  screen.innerText = equal.join('');
}

function equalOperator()
{
  screen.classList.remove('show-numbers2');
  screen.classList.add('show-result');
  numbers1 = [];
  numbers2 = [];
}

function operationResult(a, b)
{
  switch (true)
  {
    case operator === '+':
      res = equal.splice(0, 1, a + b);
      break;
    case operator === '-':
      res = equal.splice(0, 1, a - b);
      break;
    case operator === '*':
      res = equal.splice(0, 1, a * b);
      break;
    case operator === '/':
      res = equal.splice(0, 1, a / b);
      break;
    default:
      screen.innerText = "Error";
      break;
  }
}

function initial()
{
  screen.innerText = "";
  numbers1 = [];
  numbers2 = [];
  equal = [];
  screen.classList.add('show-numbers1');
  screen.classList.remove('show-numbers2');
  screen.classList.remove('show-result');
}