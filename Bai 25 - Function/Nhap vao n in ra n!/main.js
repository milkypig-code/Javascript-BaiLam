let n = prompt("Nhập vào một số nguyên n:");
n = parseInt(n);

function tinhGiaiThua(num) {
  if (num < 0) {
    return "Giai thừa không xác định cho số âm";
  }
  let giaiThua = 1;
  for (let i = 1; i <= num; i++) {
    giaiThua *= i;
  }
  return giaiThua;
}

console.log("Giai thừa của " + n + " là: " + tinhGiaiThua(n));
