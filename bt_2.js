let btnAverage = document.getElementById("btnAverage");

btnAverage.onclick = function () {
  // Lấy giá trị từ các ô input và chuyển sang kiểu số
  let number_3 = document.getElementById("number_3").value * 1;
  let number_4 = document.getElementById("number_4").value * 1;
  let number_5 = document.getElementById("number_5").value * 1;
  let number_6 = document.getElementById("number_6").value * 1;
  let number_7 = document.getElementById("number_7").value * 1;

  // Tính trung bình cộng của 5 số
  let average = (number_3 + number_4 + number_5 + number_6 + number_7) / 5;

  // Hiển thị kết quả
  let result = "Trung bình cộng của 5 số là: " + average;
  let pResult = document.getElementById("pInform1");
  pResult.innerText = result;

  // Thêm class cho thẻ p để thay đổi kiểu hiển thị
  pResult.classList.add("p-inform1");
};
