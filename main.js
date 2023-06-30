const display = document.getElementById('display');
let operand1 = '';
let operand2 = '';
let operator = null;

// 数値ボタンのイベントリスナー
Array.from(document.getElementsByClassName('num')).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (operator) {
      operand2 += e.target.textContent;
      display.value = operand1 + operator + operand2;
    } else {
      operand1 += e.target.textContent;
      display.value = operand1;
    }
  });
});

// 演算子ボタンのイベントリスナー
Array.from(document.getElementsByClassName('op')).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (!operator && operand1) {
      operator = e.target.textContent;
      display.value = operand1 + operator;
    }
  });
});

// =ボタンのイベントリスナー
document.getElementById('eq').addEventListener('click', () => {
  if (operand1 && operator && operand2) {
    operand1 = eval(operand1 + operator + operand2).toString();
    operator = null;
    operand2 = '';
    display.value = operand1;
  }
});

// Cボタンのイベントリスナー
document.getElementById('clear').addEventListener('click', () => {
  operand1 = '';
  operand2 = '';
  operator = null;
  display.value = '';
});
