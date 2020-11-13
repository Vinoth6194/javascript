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
function myModulus() {
    document.getElementById("mod").innerHTML = 13%3;
}
function myInc() {
    var x = 12;
    x++;
    z=x;
    document.getElementById("inc").innerHTML = z;
}
function myDec() {
    var x = 12;
    x--;
    z=x;
    document.getElementById("dec").innerHTML = z;
}
function myExpo() {
    document.getElementById("expo").innerHTML = 5**2;
}
function myFirstFunction() {
   return "Am a return keyword value";
}
document.getElementById("fun_one").innerHTML = myFirstFunction()
function eventFunction(a,b){
    document.getElementById('event'). innerHTML = a**b;
}
function operator() {
    return "Am a () operator to call the function";
}
document.getElementById("op").innerHTML = operator;
document.getElementById("op1").innerHTML = operator();
function locFun(){
    var loc_var = "am a local variable";
    document.getElementById("loc").innerHTML =loc_var;
}
locFun();
document.getElementById("loc_un").innerHTML =typeof (loc_var);
