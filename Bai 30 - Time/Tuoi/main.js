let namSinh = prompt("Nhập vào năm sinh của bạn:");

while (
  namSinh === null ||
  isNaN(namSinh) ||
  namSinh.trim() === "" ||
  Number(namSinh) > new Date().getFullYear() ||
  Number(namSinh) < 1900
) {
  namSinh = prompt(
    "Năm sinh không hợp lệ. Vui lòng nhập lại năm sinh của bạn:"
  );
}

namSinh = Number(namSinh);
const namHienTai = new Date().getFullYear();
let tuoi = namHienTai - namSinh;

alert(`Bạn hiện đang ${tuoi} tuổi.`);
