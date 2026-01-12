function giaiThua(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * giaiThua(n - 1);
}

let so = prompt("Nhập vào một số nguyên không âm:");
so = parseInt(so);

alert("Giai thừa của " + so + " là: " + giaiThua(so));
