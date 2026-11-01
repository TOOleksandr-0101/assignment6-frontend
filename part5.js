$(document).ready(function() {
    $(".panel-header").click(function() {
        let content = $(this).next(".panel-content");

        content.slideToggle(300);

        $(".panel-content").not(content).slideUp(300);
    });
});
