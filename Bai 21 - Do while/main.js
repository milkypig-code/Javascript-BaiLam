let number;
do {
  number = prompt("Nhập vào một số nguyên từ 1 đến 99:");
} while (
  isNaN(number) ||
  number.trim() === "" ||
  !Number.isInteger(Number(number)) ||
  Number(number) < 1 ||
  Number(number) > 99
);

alert(`Bạn đã nhập số: ${number}`);
