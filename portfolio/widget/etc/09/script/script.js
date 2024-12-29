$(".list").slice(0, 3).show();

$(".read-more-btn").click(function () {
  if ($(this).text() === "Hide") {
    $(".list").hide().slice(0, 3).show();
    $(this).text("Read More");
  } else {
    $(".list:hidden").slice(0, 3).fadeIn();
    if ($(".list:hidden").length == 0) {
      $(this).text("Hide");
    }
  }
});
