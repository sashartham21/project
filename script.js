document.getElementById("cb").addEventListener("click", function() {
    //document.body.style.backgroundColor=
    if (document.body.style.backgroundColor === "rgb(244, 244, 244)") {
        document.body.style.backgroundColor = "#0b0b0b";
        document.body.style.color = "#ffffff";
        document.querySelectorAll("h2").forEach(function (element) {
            element.style.color = "#ADD8E6";
        });
        document.querySelectorAll("h3").forEach(function (element) {
            element.style.color = "#F0E68C";
        });
    } else {
        document.body.style.backgroundColor = "#f4f4f4";
        document.body.style.color = "#000000";
        document.querySelectorAll("h2").forEach(function (element) {
            element.style.color = "darkblue";
        });
        document.querySelectorAll("h3").forEach(function (element) {
            element.style.color = "blue";
        });
    }
});
