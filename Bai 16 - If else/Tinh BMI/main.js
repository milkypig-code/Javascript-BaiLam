let chieuCao = prompt("Nhập vào chiều cao của bạn (m):");
if (chieuCao <= 0 || isNaN(chieuCao) || chieuCao === null) {
  alert("Chiều cao phải là số dương lớn hơn 0!");
  throw new Error("Dữ liệu không hợp lệ!");
}
let chieuCaoMet = Number(chieuCao);

let canNang = prompt("Nhập vào cân nặng của bạn (kg):");
if (canNang <= 0 || isNaN(canNang) || canNang === null) {
  alert("Cân nặng phải là số dương lớn hơn 0!");
  throw new Error("Dữ liệu không hợp lệ!");
}
let canNangKg = Number(canNang);

let bmi = canNangKg / (chieuCaoMet * chieuCaoMet);

let category = "";
if (bmi < 18.5) {
  category = "Gầy";
} else if (bmi < 24.9) {
  category = "Bình thường";
} else if (bmi < 29.9) {
  category = "Thừa cân";
} else {
  category = "Béo phì";
}

alert(`Chỉ số BMI của bạn là: ${bmi.toFixed(2)} - Bạn thuộc nhóm: ${category}`);
