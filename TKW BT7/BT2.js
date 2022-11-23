var a;
a = prompt("Nhập vào một con số bất kỳ", "0");
a = parseInt(a);
if (a % 2 == 0) {
  document.write("Đây là số chẵn");
} else {
  document.write("Đây là số lẻ");
}