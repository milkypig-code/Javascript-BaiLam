let n = prompt("Nhập vào số n:");

while (true) {
  if (n === null) {
    alert("Hủy bỏ thao tác nhập số.");
  }
  if (n.trim() === "" || isNaN(n) || !Number.isInteger(Number(n))) {
    alert("Dữ liệu không hợp lệ! Vui lòng nhập lại một số chẵn n:");
  } else {
    break;
  }
}

let sum = 0;

for (let i = 0; i <= n; i++) {
  if (i === 3) {
    continue;
  }
  sum += i;
}

alert(`Tổng các số từ 0 đến ${n} bỏ qua số 3 là: ${sum}`);
