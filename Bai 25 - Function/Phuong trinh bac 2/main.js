let a = prompt("Nhập vào số a:");
let b = prompt("Nhập vào số b:");
let c = prompt("Nhập vào số c:");
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

function giaiPhuongTrinhBacHai(a, b, c) {
  if (a === 0) {
    if (b === 0) {
      return c === 0 ? "Phương trình vô số nghiệm" : "Phương trình vô nghiệm";
    }
    return "Phương trình có một nghiệm: x = " + -c / b;
  }
  let delta = b * b - 4 * a * c;
  if (delta < 0) {
    return "Phương trình vô nghiệm";
  } else if (delta === 0) {
    let x = -b / (2 * a);
    return "Phương trình có nghiệm kép: x1 = x2 = " + x;
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return "Phương trình có hai nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2;
  }
}

alert(giaiPhuongTrinhBacHai(a, b, c));
