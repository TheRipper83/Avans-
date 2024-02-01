$(".inner-switch").on("click", function() {
    if($("body").hasClass("dark")) {
        $("body, .content").removeClass("dark");
        $(".inner-switch").html('<i class="fas fa-moon"></i>'); // استفاده از آیکون ماه
        $(".inner-switch i").removeClass("on-icon").addClass("off-icon"); // اضافه یا حذف کلاس برای آیکون
    } else {
        $("body, .content").addClass("dark");
        $(".inner-switch").html('<i class="fas fa-sun"></i>'); // استفاده از آیکون خورشید
        $(".inner-switch i").removeClass("off-icon").addClass("on-icon"); // اضافه یا حذف کلاس برای آیکون
    }
});
