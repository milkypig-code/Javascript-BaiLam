let banKinh = Number(prompt("Nhập vào bán kính hình tròn:"));

if (banKinh <= 0) {
  alert("Bán kính phải là số dương lớn hơn 0!");
  throw new Error("Dữ liệu không hợp lệ!");
}

let chuVi = 2 * Math.PI * banKinh;

let dienTich = Math.PI * banKinh * banKinh;

alert(`1. Chu vi hình tròn là: ${chuVi.toFixed(2)}`);
alert(`2. Diện tích hình tròn là : ${dienTich.toFixed(2)}`);
