let chieuDai = Number(prompt("Nhập vào chiều dài hình chữ nhật:"));
let chieuRong = Number(prompt("Nhập vào chiều rộng hình chữ nhật:"));

if (chieuDai <= 0 || chieuRong <= 0 || chieuDai < chieuRong) {
  alert(
    "Chiều dài và chiều rộng phải là số dương lớn hơn 0 hoặc chiều dài phải lớn hơn chiều rộng!"
  );
  throw new Error("Dữ liệu không hợp lệ!");
}

let chuVi = 2 * (chieuDai + chieuRong);
let dienTich = chieuDai * chieuRong;

alert(`1. Chu vi hình chữ nhật là: ${chuVi.toFixed(2)}`);
alert(`2. Diện tích hình chữ nhật là: ${dienTich.toFixed(2)}`);
