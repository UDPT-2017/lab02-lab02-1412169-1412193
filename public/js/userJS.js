function ScriptUser() {
  $('[data-toggle="tooltip"]').tooltip(); // cho phep hien thi cac cuc nho

  $('[data-command="toggle-search"]').on('click', function(event) {
      event.preventDefault();
      $(this).toggleClass('hide-search'); // toggleClass dung de remove or add 1 class nao do

      if ($(this).hasClass('hide-search')) { // neu ma no class hide-search
          $('#row-frame').stop(true, true).delay(100).fadeOut(300);
      } else {
          $('#row-frame').stop(true, true).delay(100).fadeIn(300);
      }
  }); // tao su kien click cho nut kia thoi
  $('[data-command="toggle-search1"]').on('click', function(event) {
      $(this).toggleClass('hide-search'); // toggleClass dung de remove or add 1 class nao do

      if ($(this).hasClass('hide-search')) { // neu ma no class hide-search
          $('#row-frame1').stop(true, true).delay(100).fadeOut(300);
      } else {
          $('#row-frame1').stop(true, true).delay(100).fadeIn(300);
      }
  }); // tao su kien click cho nut kia thoi

  $("#contact-list-search").on("keyup", function() {

    var g = $(this).val().toLowerCase();
    console.log(g);
    $('#contact-list li [data-search="names"]').each( function() {
        var s = $(this).text().toLowerCase();
        console.log(s);
        if (s.indexOf(g)!=-1) {
            $(this).parent().parent().show();
        }
        else {
            $(this).parent().parent().hide();
        }
    })
  });

  $("#contact-list-search1").on("keyup", function() {
    var g = $(this).val().toLowerCase();
    $('#contact-list1 li [data-search="names"]').each( function() {
        var s = $(this).text().toLowerCase();
        if (s.indexOf(g)!=-1) {
            $(this).parent().parent().show();
        }
        else {
            $(this).parent().parent().hide();
        }
    })
  });
}
function clickbutton() {
  $('#contact-list1 li [button-add="addfriendBTN"]').click(function () {
      // minh se xu ly gi gio ?

  });
}

function UpdateUser() {

}
function AddUser() {
    // minh muon gi ?
    // when i press button addFriend then switch to table right
    $("#contact-list1").on('click', '[button-add="addfriendBTN"]', function () {
        var li = $(this).closest("li");
        var idClient = li.find(".idText").val();
        var fullnameClient = li.find(".fullname").text();
        var emailClient = li.find(".email").text();
        var phoneClient = li.find(".phone").text();
        var userFriendAdd = {
            id : idClient,
            fullname : fullnameClient,
            email : emailClient,
            phone : phoneClient
        }; // 1 doi tuong de gui len server
        console.log(userFriendAdd);
        $.ajax({
            url: "/users/addFriend",
            method: "POST",
            contentType : "application/json",
            data: JSON.stringify({friend : userFriendAdd}),
            success: function (res) {
              console.log(res);
              $("#refreshPagefriend").click(); // goi su kien
              $("#refreshfriend").click();
            }
        })
    });
}
function DeleteUser() {

}
function clickSendmail() {
    $("#contact-list").on("click", '[button-send="sendMail"]', function () {
      var li = $(this).closest("li");
      var idClient = li.find(".idText").val();
      $("#sel1").val(parseInt(idClient));
    });
}
$(function () {
  clickSendmail();
  ScriptUser();
  AddUser();
  $("#refreshPagefriend").click(function () {
    $.ajax({
        url: "/users/list",
        contentType : "application/json",
        success : function (res) {
                var string = "";
                var ul = $("#contact-list1");
                ul.html("");
                res.sinhvien.forEach(function (SV) {
                    ul.append('<li class="list-group-item">' + '<div class="col-xs-12 col-sm-12">' + '<input class="idText" type="hidden" name="id" value="' + SV.id + '">' + '<p class="fullname" data-search="names"><span class="name glyphicon glyphicon-user" style="width:50px;"></span>' + SV.fullname + '</p> <p class="email"><span class="glyphicon glyphicon-envelope one" style="width:50px;"></span>' + SV.email + '</p> <p class="phone"><span class="glyphicon glyphicon-earphone one" style="width:50px;"></span>' + SV.phone + '</p> <div class="pull-right">' + '<button type="button" class = "btn btn-success " href="#" data-toggle="tooltip" data-placement="top" title="Add Friends" button-add="addfriendBTN">' + '<span class="glyphicon glyphicon-plus"></span>' + '</button> </div> </div>  <div class="clearfix"></div> </li>');
                });
                $("#refreshfriend").click();
        },
        complete: function () {
          $('[data-toggle="tooltip"]').tooltip(); // cho phep hien thi cac cuc nho
          clickbutton(); // khoi dong lai
        }
      });
  });
  $("#refreshfriend").click(function () {
    $.ajax({
        url: "/users/friendlist",
        contentType : "application/json",
        success : function (res) {
                var string = "";
                var ul = $("#contact-list");
                var select = $("#sel1");
                ul.html("");
                select.html("");
                /*<select name="EmailID" class="form-control" id="sel1">
                  {{#if list.length}}
                      {{#each list}}
                        <option value="{{this.id}}">{{this.email}}</option>
                      {{/each}}
                  {{/if}}
                </select>*/
                res.listfriend.forEach(function (SV) {
                    select.append('<option value="'+ SV.id + '">' + SV.email + '</option>');
                    ul.append('<li class="list-group-item">' + '<div class="col-xs-12 col-sm-12">' + '<input class="idText" type="hidden" name="id" value="' + SV.id + '">' + '<p class="fullname" data-search="names"><span class="name glyphicon glyphicon-user" style="width:50px;"></span>' + SV.fullname + '</p> <p class="email"><span class="glyphicon glyphicon-envelope one" style="width:50px;"></span>' + SV.email + '</p> <p class="phone"><span class="glyphicon glyphicon-earphone one" style="width:50px;"></span>' + SV.phone + '</p> <div class="pull-right">' +  '<button type="button" class = "btn btn-danger " data-toggle="tooltip" data-placement="top" title="Romove Friends"> <span class="glyphicon glyphicon-remove"></span> </button> <button button-send="sendMail"  type="button" class="btn btn-success" data-toggle="modal" data-target="#enquirypopup" title="Send Mail"><span class="glyphicon glyphicon-envelope one"></span></button>'  +'</div> </div>  <div class="clearfix"></div></li>');
                });
        },
        complete: function () {
          $('[data-toggle="tooltip"]').tooltip(); // cho phep hien thi cac cuc nho
          clickSendmail();
        }
      });
  })
});
