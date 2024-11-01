let btnChangeMoney = document.getElementById("btnChangeMoney");

btnChangeMoney.onclick = function () {
  // Tỉ giá USD sang VND
  const tiGiaVND = 23500;

  // Lấy giá trị USD từ ô input
  let usdAmount = document.getElementById("number_8").value * 1;

  // Tính số tiền sau quy đổi
  let vndAmount = usdAmount * tiGiaVND;

  // Hiển thị kết quả
  let result = "Số tiền sau quy đổi là: " + vndAmount.toLocaleString() + " VND";
  let pResult = document.getElementById("pInform2");
  pResult.innerText = result;

  // Thêm class cho thẻ p để thay đổi kiểu hiển thị
  pResult.classList.add("p-inform");
};
