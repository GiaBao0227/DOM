let btnCalculate = document.getElementById("btnCalculate");

btnCalculate.onclick = function () {
  // Lấy giá trị lương 1 ngày và số ngày làm việc từ ô input
  let salaryPerDay = document.getElementById("salaryDays").value * 1;
  let workDays = document.getElementById("workDays").value * 1;

  // Kiểm tra nếu người dùng chưa nhập đầy đủ dữ liệu
  if (!salaryPerDay || !workDays) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  // Tính tiền lương
  let salary = salaryPerDay * workDays;

  // Hiển thị kết quả
  let result = "Tiền lương của nhân viên là: " + salary.toLocaleString() + " VND";
  let pResult = document.getElementById("pInform");
  pResult.innerText = result;

  // Thêm class cho thẻ p để thay đổi kiểu hiển thị
  pResult.classList.add("p-inform");
};
