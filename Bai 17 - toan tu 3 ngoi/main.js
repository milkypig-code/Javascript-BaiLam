let diemTrungBinh = prompt("Nhập vào điểm trung bình của sinh viên:");
if (
  diemTrungBinh < 0 ||
  diemTrungBinh > 10 ||
  isNaN(diemTrungBinh) ||
  diemTrungBinh === null ||
  diemTrungBinh.trim() === ""
) {
  alert("Điểm số phải nằm trong khoảng từ 0 đến 10");
  throw new Error("Dữ liệu không hợp lệ!");
}

let diemNum = Number(diemTrungBinh);

let xepLoai =
  diemNum >= 9
    ? "xuất sắc"
    : diemNum >= 8
    ? "giỏi"
    : diemNum >= 6.5
    ? "khá"
    : diemNum >= 5
    ? "trung bình"
    : "yếu";
alert(`Sinh viên đạt loại ${xepLoai}!`);
