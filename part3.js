$(document).ready(function() {
    let count = 2;

    $("#appendBtn").click(function() {
        count++;
        $("#myList").append("<li class='list-group-item'>Appended Item " + count + "</li>");
    });

    $("#prependBtn").click(function() {
        count++;
        $("#myList").prepend("<li class='list-group-item'>Prepended Item " + count + "</li>");
    });

    $("#removeBtn").click(function() {
        $("#myList li:last-child").remove();
    });

    $("#changeSrcBtn").click(function() {
        $("#attrImg").attr("src", "https://picsum.photos/300/180?random=20");
    });

    $("#changeHrefBtn").click(function() {
        $("#attrLink").attr("href", "https://github.com").text("Go to GitHub");
    });

    $("#liveNameInput").keyup(function() {
        let nameVal = $(this).val();
        $("#nameDisplay").text(nameVal || "-");
    });

    $("#liveEmailInput").keyup(function() {
        let emailVal = $(this).val();
        $("#emailDisplay").text(emailVal || "-");
    });
});
