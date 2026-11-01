$(document).ready(function() {
    $("#hideBtn").click(function() {
        $("#visParagraph").hide();
    });

    $("#showBtn").click(function() {
        $("#visParagraph").show();
    });

    $("#toggleBtn").click(function() {
        $("#visParagraph").toggle();
    });

    $("#fadeOutBtn").click(function() {
        $("#fadeImg").fadeOut(400);
    });

    $("#fadeInBtn").click(function() {
        $("#fadeImg").fadeIn(400);
    });

    $("#fadeToggleBtn").click(function() {
        $("#fadeImg").fadeToggle(400);
    });

    $("#slideUpBtn").click(function() {
        $("#slidePanelContent").slideUp(400);
    });

    $("#slideDownBtn").click(function() {
        $("#slidePanelContent").slideDown(400);
    });

    $("#slideToggleBtn, #slidePanelHeader").click(function() {
        $("#slidePanelContent").slideToggle(400);
    });
});
