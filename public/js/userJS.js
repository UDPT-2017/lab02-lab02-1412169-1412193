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
    $('#contact-list li [data-search="names"]').each( function() {
        var s = $(this).text().toLowerCase();
        console.log(s);
        console.log("-------------------");
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
        console.log(s);
        console.log("-------------------");
        if (s.indexOf(g)!=-1) {
            $(this).parent().parent().show();
        }
        else {
            $(this).parent().parent().hide();
        }
    })
  });


}

$(function () {
  ScriptUser();
});
$("#refreshPagefriend").click(function () {
  $.ajax({
      url: "/friends",
      contentType : "application/json",
      success : function (res) {
              var string = "";
              var ul = $("#contact-list1");
              ul.html("");
              res.sinhvien.forEach(function (SV) {
                  ul.append('<li class="list-group-item">' + '<div class="col-xs-12 col-sm-12">' + '<p class="name" data-search="names"><span class="name glyphicon glyphicon-user" style="width:50px;"></span>' + SV.fullname + '</p> <p class="name"><span class="glyphicon glyphicon-envelope one" style="width:50px;"></span>' + SV.email + '</p> <p class="name"><span class="glyphicon glyphicon-earphone one" style="width:50px;"></span>' + SV.phone + '</p> <div class="pull-right">' + '<button type="button" class = "btn btn-success " href="#" data-toggle="tooltip" data-placement="top" title="Add Friends">' + '<span class="glyphicon glyphicon-plus"></span>' + '</button> </div> </div>  <div class="clearfix"></div> </li>');
              });
      },
      complete: function () {
        $('[data-toggle="tooltip"]').tooltip(); // cho phep hien thi cac cuc nho
      }
    });
});
