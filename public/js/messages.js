function Testing1() {
    $('#recieve-button').on('click', function() {
        $(this).css("background-color", "lightgrey");
        $(this).css("color", "black");
        $('#refresh-button').css("background-color", "#1abc9c");
        $('#refresh-button').css("color", "white");
        loadMess2();
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
        time1 = "refresh " + time;
        var timeUpdate = $(".menu-message");
        timeUpdate.html('');
        timeUpdate.append('\
             <tr>\
              <td>' + time1 + '</td>\
             </tr>\
          ');

    });
}
function loadMess2(){
  $.ajax({
      url: '/messages/messSend',
      contentType: 'application/json',
      success: function(response) {
          var theadEl = $('.title-table');
          theadEl.html('');
          theadEl.append('\
          <tr id="headersTable"> \
              <th><b>Subject</b></th>\
              <th><b>Receiver</b></th>\
              <th><b>Sending Time</b></th>\
              <th><b>Reading Time</b></th>\
          </tr>\
          ');

          var tbodyEl = $('.mess');
          tbodyEl.html('');
          response.messages.forEach(function(m) {
              if(m.thoigianxem !== null) {
                tbodyEl.append('\
                   <tr class="helloaction1">\
                       <td class="idRecieve" style="display:none">' + m.messageid + '</td>\
                       <td class="chude">' + m.chude + '</td>\
                       <td class="noidung" style="display:none;">' + m.noidung + '</td>\
                       <td class="email">' + m.email + '</td>\
                       <td>' + m.thoigiangui + '</td>\
                       <td>' + m.thoigianxem + '</td>\
                   </tr>\
                   ');
              }else {
                tbodyEl.append('\
                   <tr class="helloaction2">\
                       <td class="idRecieve" style="display:none">' + m.messageid + '</td>\
                       <td class="chude">' + m.chude + '</td>\
                       <td class="noidung" style="display:none;">' + m.noidung + '</td>\
                       <td class="email">' + m.email + '</td>\
                       <td>' + m.thoigiangui + '</td>\
                       <td>' + m.thoigianxem + '</td>\
                   </tr>\
               ');
              }
        });
      }
      , complete : function () {
        sortTable();
      }
  });
}

function Tesing2() {
    $("#refresh-button").on("click", function() {
        $(this).css("background-color", "lightgrey");
        $(this).css("color", "black");
        $('#recieve-button').css("background-color", "#1abc9c");
        $('#recieve-button').css("color", "white");
        loadMess();
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
        time1 = "refresh " + time;
        var timeUpdate = $(".menu-message");
        timeUpdate.html('');
        timeUpdate.append('\
             <tr>\
              <td>' + time1 + '</td>\
             </tr>\
          ');

    });
}
function loadMess() {
    $.ajax({
        url: '/messages/messRecieve',
        contentType: 'application/json',
        success: function(response) {
            var theadEl = $('.title-table');
            theadEl.html('');
            theadEl.append('<tr id="headersTable"> <th><b>Subject</b></th><th><b>Sender</b></th><th><b>Receiving Time</b></th></tr>');
            //--------------------
            var tbodyEl = $('.mess');
            tbodyEl.html('');
            response.messages.forEach(function(m) {
                if (m.thoigianxem !== null) {
                    tbodyEl.append('\
                      <tr class="helloaction1">\
                          <td class="idRecieve" style="display:none">' + m.messageid + '</td>\
                          <td class="chude">' + m.chude + '</td>\
                          <td class="noidung" style="display:none;">' + m.noidung + '</td>\
                          <td class="email">' + m.email + '</td>\
                          <td>' + m.thoigiangui + '</td>\
                      </tr>\
                  ');
                }
                else{
                    tbodyEl.append('\
                   <tr>\
                       <td class="idRecieve" style="display:none">' + m.messageid + '</td>\
                       <td class="chude">' + m.chude + '</td>\
                       <td class="noidung" style="display:none;">' + m.noidung + '</td>\
                       <td class="email">' + m.email + '</td>\
                       <td class="">' + m.thoigiangui + '</td>\
                   </tr>\
               ');
                }
            });
        }
        , complete : function () {
          sortTable();
        }
    });
}
function reload() {
  if($("#recieve-button").css("background-color") === "rgb(26, 188, 156)"){
    loadMess();
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    time1 = "refresh " + time;
    var timeUpdate = $(".menu-message");
    timeUpdate.html('');
    timeUpdate.append('\
         <tr>\
          <td>' + time1 + '</td>\
         </tr>\
      ');
  }
}
function reload1() {
  if($("#recieve-button").css("background-color") === "rgb(211, 211, 211)"){
    loadMess2();
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    time1 = "refresh " + time;
    var timeUpdate = $(".menu-message");
    timeUpdate.html('');
    timeUpdate.append('\
         <tr>\
          <td>' + time1 + '</td>\
         </tr>\
      ');
  }
}
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table1
    table = document.getElementById('table1');
    switching = true;
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName('tr');
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName('td')[4];
            y = rows[i + 1].getElementsByTagName('td')[4];
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
function processDC() {
  $(".mess").on("click", "tr", function () {
      var tr = $(this).closest("tr");
      $(".mess tr").attr("data-toggle", "modal");
      $(".mess tr").attr("data-target", "#enquirypopup");
      var chude = tr.find(".chude").text();
      var noidung = tr.find(".noidung").html();
      var email = tr.find(".email").text();
      var sel = $("#sel1");
      var chudes = $("#chudeEMAIL");
      var noidungs = $("#noidung");
      noidungs.html('');
      sel.html('');
      sel.append('<option readonly>' + email + '</option>');
      chudes.val(chude);
      noidungs.html(noidung);
      $("#sentButton").css("display", "none");
      chudes.attr("readonly", true);
      noidungs.attr("readonly", true);
      chudes.css("background-color", "black");
      noidungs.css("background-color", "black");
  });
}
function clickonrow() {
  $(".mess").on("click", "tr", function() {
      if ($(this).hasClass("helloaction1") || $(this).hasClass("helloaction2")) {
          return;
      }
      if ($(this).hasClass("helloaction")) {
          return;
      }
      $(this).css("color", "#1abc9c");
      var idRecieve = $(this).find('.idRecieve').text();
      var d = new Date();
      var n = d.getDate();
      var m = d.getMonth();
      var year = d.getYear();
      var string = (year + 1900) + "-" + m + "-" + n;
      var Messages = {
        id: idRecieve,
        Time: string
      }
      $.ajax({
              url:'/messages/updateMess',
              method: 'POST',
              contentType: 'application/json',
              data: JSON.stringify({Messages: Messages}),
              success: function(responce){}
      });
  });
}
$(function() {
    sortTable();
    Testing1();
    Tesing2();
    processDC();
    clickonrow();
    setInterval(reload,  10000);
    setInterval(reload1, 10000);
});
