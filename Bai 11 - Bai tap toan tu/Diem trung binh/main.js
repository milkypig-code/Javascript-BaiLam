// let diemVan = Number(prompt("Nhập vào điểm văn của sinh viên:"));
// if (diemVan < 0 || diemVan > 10 || isNaN(diemVan)) {
//   alert("Điểm số phải nằm trong khoảng từ 0 đến 10");
//   throw new Error("Dữ liệu không hợp lệ!");
// }

// let diemToan = Number(prompt("Nhập vào điểm toán của sinh viên:"));
// if (diemToan < 0 || diemToan > 10 || isNaN(diemToan)) {
//   alert("Điểm số phải nằm trong khoảng từ 0 đến 10");
//   throw new Error("Dữ liệu không hợp lệ!");
// }

// let diemAnh = Number(prompt("Nhập vào điểm anh của sinh viên:"));
// if (diemAnh < 0 || diemAnh > 10 || isNaN(diemAnh)) {
//   alert("Điểm số phải nằm trong khoảng từ 0 đến 10");
//   throw new Error("Dữ liệu không hợp lệ!");
// }

function nhapDiem(monHoc) {
  let diem = Number(prompt(`Nhập vào điểm ${monHoc} của sinh viên:`));
  if (diem < 0 || diem > 10 || isNaN(diem)) {
    alert("Điểm số phải nằm trong khoảng từ 0 đến 10");
    throw new Error("Dữ liệu không hợp lệ!");
  }
  return diem;
}

let diemVan = nhapDiem("văn");
let diemToan = nhapDiem("toán");
let diemAnh = nhapDiem("anh");

let diemTrungBinh = (diemVan + diemToan + diemAnh) / 3;

alert(`Điểm trung bình của sinh viên là: ${diemTrungBinh.toFixed(2)}`);
