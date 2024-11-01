let btnSum = document.getElementById("btnSum");

btnSum.onclick = function () {
  // Lấy số có 2 chữ số từ ô input
  let number = document.getElementById("number_9").value * 1;

  // Kiểm tra nếu số không phải là số có 2 chữ số
  if (number < 10 || number > 99) {
    alert("Vui lòng nhập một số có 2 chữ số!");
    return;
  }

  // Tính tổng 2 ký số
  let units = number % 10; // Lấy hàng đơn vị
  let tens = Math.floor(number / 10); // Lấy hàng chục
  let sum = units + tens;

  // Hiển thị kết quả
  let result = "Tổng của 2 ký số là: " + tens + " + " + units + " = " + sum;
  let pResult = document.getElementById("pInform4");
  pResult.innerText = result;

  // Thêm class cho thẻ p để thay đổi kiểu hiển thị
  pResult.classList.add("p-inform4");
};
