
//hide text
$(document).ready(function () {
    $("#button1").click(function () {
        $("#hiddenMessage").hide();
        $("#toHide").show();
        $("#toHide2").show();
        $("#toHide3").show();
        document.getElementById("button1").style.backgroundColor = "#64FFDAFF";
        document.getElementById("button2").style.border = "0.2vh solid #64FFDAFF";
        document.getElementById("button2").style.backgroundColor = "#112240";
    });
});

//reveal text
$(document).ready(function () {
    $("#button2").click(function () {
        $("#toHide").hide();
        $("#toHide2").hide();
        $("#toHide3").hide();
        $("#hiddenMessage").fadeIn("slow");
        document.getElementById("button2").style.backgroundColor = "#64FFDAFF";
        document.getElementById("button1").style.border = "0.2vh solid #64FFDAFF";
        document.getElementById("button1").style.backgroundColor = "#112240";

    });
});

$(document).ready(function () {
    $("#button_01").click(function () {
        $("#hiddenMessage01").hide();
        $("#toHide_01").show();
        $("#toHide_02").show();
        $("#toHide_03").show();
        document.getElementById("button_01").style.backgroundColor = "#64FFDAFF";
        document.getElementById("button_02").style.border = "0.2vh solid #64FFDAFF";
        document.getElementById("button_02").style.backgroundColor = "#112240";
    });
});

//reveal text
$(document).ready(function () {
    $("#button_02").click(function () {
        $("#toHide_01").hide();
        $("#toHide_02").hide();
        $("#toHide_03").hide();
        $("#hiddenMessage01").fadeIn("slow");
        document.getElementById("button_02").style.backgroundColor = "#64FFDAFF";
        document.getElementById("button_01").style.border = "0.2vh solid #64FFDAFF";
        document.getElementById("button_01").style.backgroundColor = "#112240";
    });
});

$(document).ready(function () {
    $("#button_1_1").click(function () {
        $("#hiddenMessage02").hide();
        $("#toHide1_1").show();
        $("#toHide1_2").show();
        $("#toHide1_3").show();
        document.getElementById("button_1_1").style.backgroundColor = "#64FFDAFF";
        document.getElementById("button_1_2").style.border = "0.2vh solid #64FFDAFF";
        document.getElementById("button_1_2").style.backgroundColor = "#112240";
    });
});

//reveal text
$(document).ready(function () {
    $("#button_1_2").click(function () {
        $("#toHide1_1").hide();
        $("#toHide1_2").hide();
        $("#toHide1_3").hide();
        $("#hiddenMessage02").fadeIn("slow");
        document.getElementById("button_1_2").style.backgroundColor = "#64FFDAFF";
        document.getElementById("button_1_1").style.border = "0.2vh solid #64FFDAFF";
        document.getElementById("button_1_1").style.backgroundColor = "#112240";

    });
});

$(document).ready(function () {
    $("#button_2_1").click(function () {
        $("#hiddenMessage03").hide();
        $("#toHide_2_1").show();
        $("#toHide_2_2").show();
        $("#toHide_2_3").show();
        document.getElementById("button_2_1").style.backgroundColor = "#64FFDAFF";
        document.getElementById("button_2_2").style.border = "0.2vh solid #64FFDAFF";
        document.getElementById("button_2_2").style.backgroundColor = "#112240";
    });
});

//reveal text
$(document).ready(function () {
    $("#button_2_2").click(function () {
        $("#toHide_2_1").hide();
        $("#toHide_2_2").hide();
        $("#toHide_2_3").hide();
        $("#hiddenMessage03").fadeIn("slow");
        document.getElementById("button_2_2").style.backgroundColor = "#64FFDAFF";
        document.getElementById("button_2_1").style.border = "0.2vh solid #64FFDAFF";
        document.getElementById("button_2_1").style.backgroundColor = "#112240";

    });
});

$(document).ready(function () {

    $("#1").mouseover(function () {
        $("#project1").css("color", "#64FFDAFF").css("transition","400ms");
    });

    $("#1").mouseleave(function () {
        $("#project1").css("color", "white").css("transition","400ms");
    });


});

$(document).ready(function () {

    $("#2").mouseover(function () {
        $("#project2").css("color", "#64FFDAFF").css("transition","400ms");
    });

    $("#2").mouseleave(function () {
        $("#project2").css("color", "white").css("transition","400ms");
    });

});


$(document).ready(function () {

    $("#3").mouseover(function () {
        $("#project3").css("color", "#64FFDAFF").css("transition","400ms");
    });

    $("#3").mouseleave(function () {
        $("#project3").css("color", "white").css("transition","400ms");
    });
});

$(document).ready(function () {

    $("#4").mouseover(function () {
        $("#project4").css("color", "#64FFDAFF").css("transition","400ms");
    });

    $("#4").mouseleave(function () {
        $("#project4").css("color", "white").css("transition","400ms");
    });
});

$(document).ready(function () {

    $("#4").mouseover(function () {
        element.setAttribute("style", "background-color: red;");
    });

    $("#4").mouseleave(function () {

    });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//

