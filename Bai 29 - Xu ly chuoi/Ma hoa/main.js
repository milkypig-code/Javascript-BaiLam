const a = "abcdefghijklmnopqrstuvwxyz";
const b = "zxcvbnmasdfghjklqwertyuiop";

function maHoa(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index = a.indexOf(char);
    if (index !== -1) {
      result += b[index];
    } else {
      result += char;
    }
  }
  return result;
}
let input = prompt("Nhập vào chuỗi cần mã hoá:");
alert(`Chuỗi sau khi mã hoá: ${maHoa(input)}`);
