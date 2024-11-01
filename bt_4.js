let btnCircumferenceArea = document.getElementById("btnCircumferenceArea");

btnCircumferenceArea.onclick = function () {
  // Lấy chiều dài và chiều rộng từ ô input
  let length = document.getElementById("length").value * 1;
  let width = document.getElementById("width").value * 1;

  // Kiểm tra nếu người dùng chưa nhập đầy đủ dữ liệu
  if (!length || !width) {
    alert("Vui lòng nhập đầy đủ chiều dài và chiều rộng!");
    return;
  }

  // Tính chu vi và diện tích
  let circumference = 2 * (length + width);
  let area = length * width;

  // Hiển thị kết quả
  let result = "Chu vi HCN: " + circumference + " cm , Diện tích HCN: " + area + " cm²";
  let pResult = document.getElementById("pInform3");
  pResult.innerText = result;

  // Thêm class cho thẻ p để thay đổi kiểu hiển thị
  pResult.classList.add("p-inform3");
};
