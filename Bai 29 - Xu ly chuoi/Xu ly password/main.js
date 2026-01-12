let soLanSai = 0;
const GIOI_HAN = 5;

while (soLanSai < GIOI_HAN) {
  let password = prompt(`Bạn còn số lần nhập ${soLanSai + 1}/${GIOI_HAN}
Nhập vào mật khẩu thoả mãn các điều kiện sau:
- Ít nhất 6 kí tự
- Chứa ít nhất một chữ cái hoa (A-Z)
- Chứa ít nhất một chữ cái thường (a-z)
- Chứa ít nhất một chữ số (0-9)`);
  if (password.trim() === "") {
    alert("Bạn đã thoát cửa sổ nhập mật khẩu.");
    break;
  } else if (password.length < 6) {
    alert("Mật khẩu quá ngắn, phải có ít nhất 6 kí tự.");
  } else if (!/[A-Z]/.test(password)) {
    alert("Mật khẩu phải chứa ít nhất một chữ cái hoa.");
  } else if (!/[a-z]/.test(password)) {
    alert("Mật khẩu phải chứa ít nhất một chữ cái thường.");
  } else if (!/[0-9]/.test(password)) {
    alert("Mật khẩu phải chứa ít nhất một chữ số.");
  } else {
    alert("Mật khẩu hợp lệ.");
    break;
  }
  soLanSai++;
  if (soLanSai === GIOI_HAN) {
    alert("Bạn đã nhập sai quá 5 lần. Chương trình tự động thoát!");
  }
}
