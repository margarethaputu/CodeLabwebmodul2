function tambah() {
  var number1 = parseFloat(document.getElementById("number1").value);
  var number2 = parseFloat(document.getElementById("number2").value);

  if (!isNaN(number1) && !isNaN(number2)) {
    var result = number1 + number2;
    alert("Hasil penjumlahan = " + result);
  } else {
    alert("Masukkan bilangan yang valid!");
  }
}

function resetForm() {
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}
