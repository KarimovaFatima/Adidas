let headerTop = document.getElementById("header-top");
let headerDnone = document.getElementById("header-top-dnone");
let headerIcon = document.getElementById("xmark");

headerTop.onclick = function (){
    headerDnone.style.display = "block";
    this.style.display = "none";
}

headerIcon.onclick = function (){
    headerDnone.style.display = "none";
    headerTop.style.display = "block";
}