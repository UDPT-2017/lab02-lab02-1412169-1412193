// dung de kiem tra truoc khi gui len server
function CheckMessage() {
    var thongbao = $("#error-inf");
    var id = $("#sel1").val();
    var chude = $("#chudeEMAIL").val();
    var noidung = $("#noidung").val();
    
    console.log(id + chude + noidung);
    if(id === null) {
      thongbao.css("display", "block");
      thongbao.html("<span> Please choose email friend you want to sent !!<span>");
      return false;
    }
    if(chude === "") {
      thongbao.css("display", "block");
      thongbao.html("<span> Please enter Topic you want to sent !!<span>");
      return false;
    }
    if(noidung === ""){
      thongbao.css("display", "block");
      thongbao.html("<span> Please enter Content you want to sent !!<span>");
      return false;
    }
    return true;
}
