const calc = (num1, num2, operator) => {
  let hasil =
    operator == "+"
      ? num1 + num2
      : operator == "-"
      ? num1 - num2
      : operator == "/"
      ? num1 / num2
      : operator == "*"
      ? num1 * num2
      : null;
  return hasil;
};

function runner(button) {
  var num1 = parseFloat(document.calculator.num1.value);
  var num2 = parseFloat(document.calculator.num2.value);
  var operator = button.value;
  var hasil = calc(num1, num2, operator);
  document.calculator.hasil.value = hasil;
}
