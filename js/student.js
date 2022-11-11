var student = [];

var $ = function (id) {
    return document.getElementById(id);
}

var valid = function () {
    var check = true
    var id = $("id").value;
    var name = $("name").value;
    if (id.length == 0) {
        $("id_error").innerHTML = "Bắt buộc nhập";
        check = false;
    }
    if (name.length == 0) {
        $("name_error").innerHTML = "Bắt buộc nhập";
        check = false;
    } else if ((name.length < 5) || (name.length > 15)) {
        $("name_error").innerHTML = "Tên phải lớn hơn 5 và nhỏ hơn 15 kí tự";
        check = false;
    }
    return check
}

// hàm thêm sinh viên
var add_student = function () {

    var id = $("id").value;
    var name = $("name").value;
    var birthday = $("birthday").value;
    var phone = $("phone").value;

    // tạo đối tượng sinh viên
    student_obj = {
        id: id,
        name: name,
        birthday: birthday,
        phone: phone
    }

    student_data = localStorage.getItem("dt_student") || [];
    var vl = valid();
    if (vl) {
        if (student_data.length != 0) {
            student_json = JSON.parse(student_data);
            var check = true;
            for (var i in student_json) {
                if (id == student_json[i].id) {
                    student_json[i].name = name;
                    student_json[i].birthday = birthday;
                    student_json[i].phone = phone;
                    check = false;
                    break;
                }
            }
            if (check == true) {
                student_json.push(student_obj);
                localStorage.setItem("dt_student", JSON.stringify(student_json)) || [];
            } else {
                localStorage.setItem("dt_student", JSON.stringify(student_json)) || [];
            }

        } else {
            student.push(student_obj);
            localStorage.setItem("dt_student", JSON.stringify(student)) || [];
        }
        reset
    }

    show_student();
}


var show_student = function () {
    student_data = localStorage.getItem("dt_student") || [];
    if (student_data.length != 0) {
        var student_js = JSON.parse(student_data);
        html = "<tr><th>Id</th><th>Name</th><th>Birthday</th><th>Phone</th></tr>";
        for (var i in student_js) {
            html = html +
                "<tr><td>" + student_js[i].id + "</td>" +
                "<td>" + student_js[i].name + "</td>" +
                "<td>" + student_js[i].birthday + "</td>" +
                "<td>" + student_js[i].phone + "</td> </tr>"
        }
        $('table_student').innerHTML = html;
    }
}


var reset = function () {
    $("id").value = "";
    $("name").value = "";
    $("birthday").value = "";
    $("phone").value = "";
    $("id_error").innerHTML = ""
    $("name_error").innerHTML = ""
    $("birthday_error").innerHTML = ""
    $("phone_error").innerHTML = ""
}

window.onload = function () {
    show_student();
    $("add").onclick = add_student;
}