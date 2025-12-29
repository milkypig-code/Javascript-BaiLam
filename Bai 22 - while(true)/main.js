let number = prompt("Nhập vào một số nguyên từ 1 đến 99:");
while (true) {
  if (number === null) {
    alert("Hủy bỏ thao tác nhập số.");
    break;
  }
  if (
    number.trim() === "" ||
    isNaN(number) ||
    !Number.isInteger(Number(number)) ||
    Number(number) < 1 ||
    Number(number) > 99
  ) {
    number = prompt(
      "Dữ liệu không hợp lệ! Vui lòng nhập lại một số nguyên từ 1 đến 99:"
    );
  } else {
    alert(`Bạn đã nhập số: ${number}`);
    break;
  }
}
