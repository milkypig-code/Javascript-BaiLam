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
  let diem = prompt(`Nhập vào điểm ${monHoc} của sinh viên:`);
  let diemSo = Number(diem);
  if (diem === null || diem.trim() === "" || !(diemSo >= 0 && diemSo <= 10)) {
    alert("Điểm số phải nằm trong khoảng từ 0 đến 10");
    throw new Error("Dữ liệu không hợp lệ!");
  }
  return diemSo;
}

let diemVan = nhapDiem("văn");
let diemToan = nhapDiem("toán");
let diemAnh = nhapDiem("anh");

let diemTrungBinh = (diemVan + diemToan + diemAnh) / 3;

if (diemTrungBinh < 5) {
  alert(
    `Điểm trung bình của sinh viên là: ${diemTrungBinh.toFixed(
      2
    )}. Sinh viên đạt loại yếu!`
  );
} else if (6.5 > diemTrungBinh) {
  alert(
    `Điểm trung bình của sinh viên là: ${diemTrungBinh.toFixed(
      2
    )}. Sinh viên đạt loại trung bình!`
  );
} else if (8 > diemTrungBinh) {
  alert(
    `Điểm trung bình của sinh viên là: ${diemTrungBinh.toFixed(
      2
    )}. Sinh viên đạt loại khá!`
  );
} else if (9 > diemTrungBinh) {
  alert(
    `Điểm trung bình của sinh viên là: ${diemTrungBinh.toFixed(
      2
    )}. Sinh viên đạt loại giỏi!`
  );
} else if (diemTrungBinh >= 9) {
  alert(
    `Điểm trung bình của sinh viên là: ${diemTrungBinh.toFixed(
      2
    )}. Sinh viên đạt loại xuất sắc!`
  );
}
