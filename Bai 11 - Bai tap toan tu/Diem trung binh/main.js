let diemVan = Number(prompt("Nhập vào điểm văn của sinh viên:"));
let diemToan = Number(prompt("Nhập vào điểm toán của sinh viên:"));
let diemAnh = Number(prompt("Nhập vào điểm anh của sinh viên:"));

if (
  diemVan < 0 ||
  diemVan > 10 ||
  diemToan < 0 ||
  diemToan > 10 ||
  diemAnh < 0 ||
  diemAnh > 10
) {
  alert("Điểm số phải nằm trong khoảng từ 0 đến 10");
  throw new Error("Dữ liệu không hợp lệ!");
}

let diemTrungBinh = (diemVan + diemToan + diemAnh) / 3;

alert(`1. Điểm trung bình của sinh viên là: ${diemTrungBinh.toFixed(2)}`);
