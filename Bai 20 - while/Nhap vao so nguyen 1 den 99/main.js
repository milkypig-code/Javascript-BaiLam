let number = prompt("Nhập vào một số nguyên từ 1 đến 99:");

while (
  isNaN(number) ||
  number === null ||
  number.trim() === "" ||
  !Number.isInteger(Number(number)) ||
  Number(number) < 1 ||
  Number(number) > 99
) {
  number = prompt(
    "Dữ liệu không hợp lệ! Vui lòng nhập lại một số nguyên từ 1 đến 99:"
  );
}

alert(`Bạn đã nhập số: ${number}`);
