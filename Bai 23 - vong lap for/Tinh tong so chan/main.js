let n = prompt("Nhập vào số chẵn n:");

while (true) {
  if (n === null) {
    alert("Hủy bỏ thao tác nhập số.");
    break;
  }
  if (n.trim() === "" || isNaN(n) || !Number.isInteger(Number(n))) {
    alert("Dữ liệu không hợp lệ! Vui lòng nhập lại:");
  } else {
    break;
  }
}

let sum = 0;

for (let i = 0; i <= n; i += 2) {
  sum += i;
}

if (n % 2 !== 0) {
  alert("Tôi không tính số lẻ!");
} else {
  alert(`Tổng các số chẵn từ 0 đến ${n} là: ${sum}`);
}
