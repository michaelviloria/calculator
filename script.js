const screen = document.getElementById('screen');
let operator;
let numbers1 = 0;
let numbers2 = 0;
let resultado = 0;
let initial = screen.classList.add('show-numbers1');

initial;

function showNumbers(number)
{
  if (screen.classList.contains('show-numbers1'))
  {
    numbers1 = parseFloat(screen.innerText + number);
  }

  if (screen.classList.contains('show-numbers2'))
  {
    numbers2 = parseFloat(screen.innerText + number);
  }

  screen.innerText += number;
}

function operation(symbol)
{
  if (screen.classList.contains('show-numbers1') && numbers1 > 0)
  {
    screen.classList.remove('show-numbers1');
    screen.classList.add('show-numbers2');
    screen.innerText = "";
  }
  operator = symbol;
}

function result()
{
  if (numbers1 > 0 && numbers2 > 0)
  {
    switch (true)
    {
      case operator === '+':
        resultado = numbers1 + numbers2;
        break;
      case operator === '-':
        resultado = numbers1 - numbers2;
        break;
      case operator === '*':
        resultado = numbers1 * numbers2;
        break;
      case operator === '/':
        resultado = numbers1 / numbers2;
        break;
    }
  }
  screen.innerText = resultado;
}

function reset()
{
  initial;
  screen.innerText = "";
  operator;
  numbers1 = 0;
  numbers2 = 0;
  resultado = 0;
  initial = screen.classList.add('show-numbers1');
}