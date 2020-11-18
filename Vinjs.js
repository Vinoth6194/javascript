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
var vinObj = {
    name:"vinothkumar S",
    age:26,
    designation:"Software Engineer",
    place:"Bengaluru",
    fullname: function () {
        return "Am an object function";
    }
}
document.getElementById("vobjname").innerHTML = vinObj.name;
document.getElementById("vobjage").innerHTML = vinObj.age;
document.getElementById("vobjdes").innerHTML = vinObj.designation;
document.getElementById("vobjplace").innerHTML = vinObj.place;
document.getElementById("vobjfun").innerHTML = vinObj.fullname();
function changeEvent (){
    var x = document.getElementById("mySelect").value;
    document.getElementById("selectValue").innerHTML = "Your Selecction is  " + x;
}
function myclickEvent() {
    // console.log("button clicked");
    // alert("Button Clicked");
   document.getElementById("clickValue").innerHTML = "Hai! You are welcome";
}
// function myclickEvent_two() {
//     // console.log("button clicked");
//     // alert("Button Clicked");
//     this.innerHTML = "Hai! You are welcome";
// }
function mouseOver(x) {
    x.style.color = "red";
}
function mouseOut(x) {
    x.style.color = "violet";
}
function myKeyUp() {
    var x = document.getElementById("input").value;
    console.log(x);
    document.getElementById("up").innerHTML = x;
}
function myKeyDown() {
    var x  = document.getElementById("input").style.backgroundColor = "green";
}
