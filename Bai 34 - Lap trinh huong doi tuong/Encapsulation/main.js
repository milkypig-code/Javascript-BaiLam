class Wallet {
  constructor(bankName, pin) {
    this.bankName = bankName;
    this.pin = pin;
    this.balance = 0; // Tài khoản mới tạo thẻ bằng 0
  }

  // Helper: Hàm phụ để định dạng tiền cho nhanh (Đỡ phải viết lại nhiều lần)
  formatMoney(number) {
    return number.toLocaleString("vi-VN");
  }

  // Gửi tiền vào tài khoản
  deposit(value) {
    this.balance += value;
    console.log(
      `Bạn đã gửi ${this.formatMoney(value)} vào tài khoản ${this.bankName}`,
    );
  }

  // Rút tiền
  withdraw(value) {
    if (value > this.balance) {
      console.log(`Số tiền trong tài khoản không đủ`);
    } else {
      this.balance -= value;
      console.log(
        `Bạn đã rút ${this.formatMoney(value)} còn lại ${this.formatMoney(this.balance)}`,
      );
    }
  }
}

const ThanhWallet = new Wallet("MB Bank", 1234);

ThanhWallet.deposit(1000000);
ThanhWallet.withdraw(500000);
