let userEmail = $("#userEmail");
let userPw = $("#userPw");
let loginBtn = $("#login-btn");

loginBtn.click(function () {
  if (userEmail.val() == "") {
    userEmail.next("span").addClass("warning");
    setTimeout(function () {
      userEmail.next("span").removeClass("warning");
    }, 1000);
  }
  if (userPw.val() == "") {
    userPw.next("span").addClass("warning");
    setTimeout(function () {
      userPw.next("span").removeClass("warning");
    }, 1000);
  }
});
