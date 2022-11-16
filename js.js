var newArry = []
var $ = function (id) {
    return document.getElementById(id);
}
var valid = function () {
    var check = true
    var ten = $("ten").value;
    var basic = $("basic").value;
    if (ten.length == 0) {
        $("ten_error").innerHTML = "Bắt buộc nhập";
        check = false;
    }
    if (basic.length == 0) {
        $("basic_error").innerHTML = "Bắt buộc nhập";
        check = false;
    } else if (basic.length = 0) {
        $("basic_error").innerHTML = "Bắt buộc nhập";
        check = false;
    }
    return check
}
function add(){
    var ten = $('ten').value;
    var basic = $('basic').value;
    var reward = $('reward').value;
    var fine = $('fine').value;
    list_new ={
        ten: ten,
        basic: basic,
        reward: reward,
        fine: fine,
    }
    basic_data = localStorage.getItem("dt_basic") || [];
    var vl = valid();
    if (vl) {
        if (basic_data.length != 0) {
            basic_js = JSON.parse(basic_data);
          
            var check = true;
            for (var i in basic_js) {
                if (ten == basic_js[i].ten) {
                    basic_js[i].basic =basic ;
                    basic_js[i].reward = reward;
                    basic_js[i].fine = fine;
                    check = false;
                    break;
                }
            }
            if (check == true) {
                basic_js.push(list_new);
                localStorage.setItem("dt_basic", JSON.stringify(basic_js)) || [];
            } else {
                localStorage.setItem("dt_basic", JSON.stringify(basic_js)) || [];
            }

        } else {
            newArry.push(list_new);
            localStorage.setItem("dt_basic", JSON.stringify(newArry)) || [];
        }
        reset()
    }

    show();
    
}

function show() {
    var basic_data = localStorage.getItem("dt_basic") || null;
    basic_data = localStorage.getItem("dt_basic") || [];
    if (basic_data.length != 0){
        var list_ten = JSON.parse(basic_data);
        list_ten.sort((a, b) => {
            return a.basic - b.basic;
        });
        html = "<tr><th>Name</th><th>basic</th><th>reward</th><th>fine</th></tr>";
        for (var i in list_ten) {
            html = html +
                "<tr><td>" + list_ten[i].ten + "</td>" +
                "<td>" + list_ten[i].basic + "</td>" +
                "<td>" + list_ten[i].reward + "</td>" +
                "<td>" + list_ten[i].fine + "</td> </tr>"
    }
    
    $("newArry").innerHTML =html
    
  }
}
var reset = function () {
    $("ten").value = "";
    $("basic").value = "";
    $("ten_error").value ="";
    $("basic_error").value ="";

}
window.onload = function(){
    show();
    $("add").onclick = add;
}