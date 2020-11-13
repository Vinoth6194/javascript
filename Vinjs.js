console.log("Vinothkumar Js");
function vinoth(){
    document.getElementById('ext').innerHTML = "From external js"
}
function myAlert() {
    alert("Alerted from external js");
}
function myPrint()  {
    window.print();
}
function varDisplay() {
    var myvar;
    myvar = "Vinothkumar";
    document.getElementById("var").innerHTML = "From variable " + " " +myvar;
}
function myAdd() {
    document.getElementById("add").innerHTML = 3+3;
}
function mySub() {
    document.getElementById("sub").innerHTML = 12-3;
}
function myMul() {
    document.getElementById("mul").innerHTML = 12*3;
}
function myDiv() {
    document.getElementById("div").innerHTML = 12/3;
}
