$(document).ready(function () {
  function check(id) {
    var check = true;
    var vl = $(id).val();
    err = id.substr(1, id.length);
    if (vl == "") {
      $("#err_" + err).text("Bắt buộc nhập");
      $("#loi").show();
      $("#send").addClass("do");
      check = false;
    } else {
      $("#err_" + err).text("");
      $("#loi").hide();
      // $("#send").removeClass("do");
      $("#send").addClass("xanh");
    }
    return check;
  }
  function f1() {
    if ((check("#name")) && (check("#email"))) {
      $("#rg_form").submit();
    }
  }
  function f2() {
    alert("đf")
  }
  $("#send").click(function () {
    f1();
    f2();
  });

  $("#name").blur(function () {
    check("#name");
  });
});