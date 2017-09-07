/**
 * Created by yangyi on 2017/7/6.
 */

window.onblur = function () {
    document.title = "诶,憋走啊!回来啊~喵";//改变title内容
};
window.onfocus = function () {
    document.title = "杨轶的简历";
};

var message = "我是我";

(function (string) {
    console.log(string);
})(message);

function alertMe() {
    let name = document.getElementsByClassName("name")[0].innerHTML;
    let gender = document.getElementsByClassName("gender")[0].innerHTML;
    let age = document.getElementsByClassName("age")[0].innerHTML;
    let work_time = document.getElementsByClassName("work_time")[0].innerHTML;
    let working_location = document.getElementsByClassName("working_location")[0].innerHTML;
    let phone = document.getElementsByClassName("phone")[0].innerHTML;
    let wechat = document.getElementsByClassName("wechat")[0].innerHTML;
    let email = document.getElementsByClassName("email")[0].innerHTML;
    let my_home = document.getElementsByClassName("my_home")[0].innerText;
    let content = name + "\n" +
        gender + "\n" +
        age + "\n" +
        work_time + "\n" +
        working_location + "\n" +
        phone + "\n" +
        wechat + "\n" +
        email + "\n" +
        my_home + "\n"
    alert(content);
    window.show.show(content);
    return "isDone"
}