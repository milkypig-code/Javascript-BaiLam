let n;

while (true) {
  let input = prompt("Nhập vào số nguyên n:");
  if (input === null) {
    alert("Hủy bỏ thao tác nhập số.");
    break;
  }
  if (
    input.trim() === "" ||
    isNaN(input) ||
    !Number.isInteger(Number(input)) ||
    input <= 0
    // số 0 không phải số hoàn thiện
  ) {
    alert("Dữ liệu không hợp lệ! Vui lòng nhập lại:");
  } else {
    n = Number(input);
    break;
  }
}

let check = 1; // 1 là ước của mọi số nên khởi tạo check = 1 thay vì 0

if (n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      check += i;
      let uocLon = n / i;
      if (uocLon !== i) {
        check += uocLon;
      }
    }
  }

  if (check === n && n !== 1) {
    alert(`${n} là số hoàn thiện!`);
  } else {
    alert(`${n} không phải là số hoàn thiện. (Tổng ước thực tế là: ${check})`);
  }
}
