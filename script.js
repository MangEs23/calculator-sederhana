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
  if (isNaN(num1) || isNaN(num2)) {
    alert("Yang anda inputkan harus berupa angka!");
    location.reload();
  }
  var operator = button.value;
  var hasil = calc(num1, num2, operator);
  document.getElementById("hasil").innerHTML = hasil;
}

function rst() {
  document.getElementById("hasil").innerHTML = "";
}
