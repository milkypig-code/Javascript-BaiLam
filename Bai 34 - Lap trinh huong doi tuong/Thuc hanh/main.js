let nhanVien = {
  fullName: "Nguyen Nam Ha Thanh",
  birthYear: 2003,
  address: {
    city: "Danang",
    country: "Vietnam",
  },
  // Phương thức

  // VD: Phương thức để lấy tuổi
  //   getAge: function () {
  //     // Lấy năm hiện tại
  //     let currentYear = new Date().getFullYear();
  //     return currentYear - this.birthYear;
  //   },

  // Viết tắt (Shorthand method)

  // getAge() {
  //   return new Date().getFullYear() - this.birthYear;
  // }

  getAge() {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },
};

// console.log(nhanVien);

// console.log(`Tuổi của nhân viên: ${nhanVien.getAge()}`);

let nhanVienTest = {
  "1 fullName": "Nguyen Nam Ha Thanh",
  "@ddress": "Danang",
};

// console.log(nhanVienTest);

// console.log(nhanVien.fullName);
// console.log(nhanVien["getAge"]());

// let key = prompt("Nhập tên thuộc tính bạn muốn lấy: ");
// console.log(nhanVien[key]);

nhanVien.getAge();

// console.log(nhanVien.age);

nhanVien.email = "nguyennamhathanh@gmail.com";

// delete nhanVien.email;

// nhanVien.email = "hathanhnguyennam@gmail.com";
