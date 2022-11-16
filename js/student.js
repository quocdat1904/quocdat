// mảng rỗng chứa thông tin
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
class Student {
    constructor(id, name, birthday, phone) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.phone = phone
    }
}
// hàm thêm sinh viên
var add_student = function () {
    var id = $("id").value;
    var name = $("name").value;
    var birthday = $("birthday").value;
    var phone = $("phone").value;
    const student_obj = new Student(id, name, birthday, phone)

    student_data = localStorage.getItem("dt_student") || [];

    var vl = valid();
    if (vl) {
        if (student_data.length != 0) {
            student_json = JSON.parse(student_data);
            var check = true;
            // kiểm tra id mới có trong id cũ hay không?
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
        reset();
    }

    show_student();
}


var show_student = function () {
    student_data = localStorage.getItem("dt_student") || [];

    if (student_data.length != 0) {
        var student_js = JSON.parse(student_data);
        student_js.sort((a, b) => {
            return a.id - b.id;
        });
        console.log(student_js)
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

}

window.onload = function () {
    show_student();
    $("add").onclick = add_student;
}