let n = parseInt(prompt("Nhập vào số nguyên n:"));
let giaiThua = 1;
let i = 1;

for (i; i <= n; i++) {
  giaiThua *= i;
}

alert(`Giai thừa của ${n} là: ${giaiThua}`);
