function closeSpan() {
    var modal = document.querySelector(".modal");
    var modalContent = document.querySelectorAll(".modal-content");
    modal.style.display = "none"; //alert("crazy")
    for (var i = 0; i < modalContent.length; i++) {
        modalContent[i].style.display = "none !important";
    }
}
function showModal(div) {
    var modal = document.querySelector(".modal");
    var modalContent = document.querySelectorAll(".modal-content");
    modal.style.display = "block";
    for (var i = 0; i < modalContent.length; i++) {
        modalContent[i].style.display = "none";
    }
    document.querySelector(div).style.display = "block";

    if(screen.availWidth < 767){
        modal.style.paddingLeft = "10%";
        document.querySelector(div).style.width = "80%";
    }
}
function closeSpan2() {
    var modal = document.querySelector(".modal2");
    var modalContent = document.querySelectorAll(".modal-content2");
    modal.style.display = "none"; //alert("crazy")
    for (var i = 0; i < modalContent.length; i++) {
        modalContent[i].style.display = "none !important";
    }
}
function showModal2(div) {
    var modal = document.querySelector(".modal2");
    var modalContent = document.querySelectorAll(".modal-content2");
    modal.style.display = "block";
    for (var i = 0; i < modalContent.length; i++) {
        modalContent[i].style.display = "none";
    }
    document.querySelector(div).style.display = "block";
}
function logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("userN");
    location.reload();
}
window.onclick = function (event) {
    var modal = document.querySelector(".modal");
    var modalContent = document.querySelectorAll(".modal-content");
    if (event.target == modal) {
        modal.style.display = "none";
        for (var i = 0; i < modalContent.length; i++) {
            modalContent[i].style.display = "none";
        }
    }
    var modal = document.querySelector(".modal2");
    var modalContent = document.querySelectorAll(".modal-content2");
    if (event.target == modal) {
        modal.style.display = "none";
        for (var i = 0; i < modalContent.length; i++) {
            modalContent[i].style.display = "none";
        }
    }
}