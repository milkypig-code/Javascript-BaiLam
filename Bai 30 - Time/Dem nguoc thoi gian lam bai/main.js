let timeLamBai = prompt("Nhập vào thời gian làm bài (phút):");

while (
  timeLamBai === null ||
  isNaN(timeLamBai) ||
  timeLamBai.trim() === "" ||
  Number(timeLamBai) < 5
) {
  timeLamBai = prompt(
    "Thời gian làm bài không hợp lệ. Vui lòng nhập lại thời gian làm bài (phút):"
  );
}

timeLamBai = Number(timeLamBai);

let giayLamBai = timeLamBai * 60;
let timeConLai = timeLamBai;

let boDem = setInterval(() => {
  let phut = Math.floor(giayLamBai / 60);
  let giay = giayLamBai % 60;
  giayLamBai--;

  // Thêm số 0 vào đằng trước nếu số < 10 (Ví dụ: 9 -> 09)
  let phutHienThi = phut < 10 ? "0" + phut : phut;
  let giayHienThi = giay < 10 ? "0" + giay : giay;

  console.log(`Thời gian còn lại: ${phutHienThi} phút ${giayHienThi} giây`);

  if (giayLamBai <= 0) {
    clearInterval(boDem);
    alert("Hết thời gian làm bài!");
  }
}, 1000);
