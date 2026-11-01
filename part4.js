$(document).ready(function() {
    $("#basicAnimBtn").click(function() {
        $("#boxBasic").animate({
            left: "200px",
            width: "120px",
            height: "120px"
        }, 600);
    });

    $("#resetBasicBtn").click(function() {
        $("#boxBasic").css({
            left: "0px",
            width: "80px",
            height: "80px"
        });
    });

    $("#seqAnimBtn").click(function() {
        let box = $("#boxSeq");
        box.animate({ left: "200px" }, 400);
        box.animate({ top: "100px" }, 400);
        box.animate({ width: "40px", height: "40px" }, 400);
        box.animate({ left: "0px", top: "0px", width: "80px", height: "80px" }, 500);
    });

    $("#combAnimBtn").click(function() {
        $("#boxComb").animate({
            left: "250px",
            opacity: 0.3,
            width: "130px",
            height: "130px"
        }, 800);
    });

    $("#resetCombBtn").click(function() {
        $("#boxComb").css({
            left: "0px",
            opacity: 1,
            width: "80px",
            height: "80px"
        });
    });
});
