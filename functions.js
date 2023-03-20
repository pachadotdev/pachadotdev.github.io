// hide all divs except the one with the id passed in
function showDiv(id) {
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].id == id) {
            divs[i].style.display = "block";
        } else {
            divs[i].style.display = "none";
        }
    }
}