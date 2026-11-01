$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#changeTextBtn").click(function() {
        $("#textTarget").text("Text changed successfully using jQuery .text()!");
    });

    $("#changeHtmlBtn").click(function() {
        $(".htmlTarget").html("<b>Bold content</b> changed using jQuery <u>.html()</u>!");
    });

    $("#changeCssBtn").click(function() {
        $("h6").css({
            "color": "pink",
            "font-size": "20px",
            "font-weight": "bold"
        });
    });
});
