class Shape {
  constructor(name) {
    this.name = name;
  }

  calculateArea() {
    return 0;
  }
}

class Square extends Shape {
  constructor(name, side) {
    super(name);
    this.side = side;
  }

  calculateArea() {
    return this.side * this.side;
  }
}

class Rectangle extends Shape {
  constructor(side, width, height) {
    super(side);
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

// Hình vuông
const hinhVuong = new Square("Hình Vuông", 5);
console.log(`${hinhVuong.name} có diện tích: ${hinhVuong.calculateArea()}`);

// Hình chữ nhật
const hinhChuNhat = new Rectangle("Hình Chữ Nhật", 5, 10);
console.log(`${hinhChuNhat.name} có diện tích: ${hinhChuNhat.calculateArea()}`);
