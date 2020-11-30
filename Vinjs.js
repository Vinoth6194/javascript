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
    const loc_var = "am a local variable";
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
function fullLoad (){
    alert("Page is loaded. Good to go");
}
var myString = "Vinothkumar Selvan";
document.getElementById("strName").innerHTML = "String is :" + myString;
document.getElementById("strLen").innerHTML = "String Length is :" + myString.length;
// document.getElementById("squote").innerHTML = "Virat \'The King\' Kohli";
document.getElementById("esseq").innerHTML = "Virat \b Kohli " +" ,"+ "Virat \'The King \'Kohli" + ","+"look \f up";
document.getElementById("strName").innerHTML = "String is :" + myString;
document.getElementById("strLen").innerHTML = "String Length is :" + myString.length;
var searchText = "Your Name, Name is Vinothkumar S";
document.getElementById("search-text").innerHTML = searchText;
document.getElementById("firInd").innerHTML = "First position for the text name is" + " "+searchText.indexOf("Name", 6);
document.getElementById("lastInd").innerHTML = "Last position for the text name is" + " "+searchText.lastIndexOf("Name", 2);
document.getElementById("slicedText").innerHTML = "Sliced text is" + "-: "+searchText.slice(2,13);
document.getElementById("subStringText").innerHTML = "Substring  text is" + "-: "+searchText.substring(6,11);
document.getElementById("subStrText").innerHTML = "Substr     text is" + "-: "+searchText.substr(6,2);
var newSearchText = searchText.replace("Vinothkumar","Selvan");
document.getElementById("oldText").innerHTML ="Old text is :" +searchText;
document.getElementById("replText").innerHTML = "Replaced Text is :"+ newSearchText;
document.getElementById("uppText").innerHTML = "Uppercase is :"+ searchText.toUpperCase();
document.getElementById("lowText").innerHTML = "Lowercase is :"+ searchText.toLowerCase();
var str1 = "Good";
var str2 = "Night";
document.getElementById("concatText").innerHTML = str1.concat(" ",str2);
document.getElementById("charAt").innerHTML = "Character at the given position in the " +str1+ " is -" + str1.charAt(0);
document.getElementById("charCode").innerHTML = "Character code at the given position in the " +str1+ " is -" + str1.charCodeAt(0);
document.getElementById("strArr").innerHTML = str1.split("");
var x = 100, y =NaN, z = x+y
// document.getElementById("noNum").innerHTML = 100/NaN;
document.getElementById("noNum").innerHTML = z;
var myNum = 62;
document.getElementById("bin").innerHTML = "Binary for "+ myNum +" is "+ myNum.toString(2);
document.getElementById("hex").innerHTML = "Hexadecimal for "+ myNum +" is "+ myNum.toString(16);
document.getElementById("oct").innerHTML = "Octal for "+ myNum +" is "+ myNum.toString(8);
document.getElementById("deci").innerHTML = "Decimal and Default for "+ myNum +" is "+ myNum.toString(10);
var xx = 123;
var yy = 23.23;
document.getElementById("numToStr").innerHTML = "Number to String is " + xx.toString();
// alert("Num");
document.getElementById("numToExp").innerHTML = "Number to Exponential is " + yy.toExponential(2);
var zz = 23.25;
var ccc = "Vinothkumar S";
document.getElementById("numToFix").innerHTML = "Number to Fixes is " + zz.toFixed(3);
console.log(typeof zz.toString());
document.getElementById("numToPrec").innerHTML = "Number to Precision is " + zz.toPrecision(3);
document.getElementById("numToValof").innerHTML = "Value of method for Num:" + zz.valueOf() +" " + "Value of for String is " + ccc.valueOf();
var aa = "23";
var bb = "12.232323";
var dd = "Hi";
var ee = "10 years";
document.getElementById("Number").innerHTML = "Number Method is " + Number(aa) + " for characters "+ Number(ccc);
document.getElementById("parseInt").innerHTML = "Parse Int " + parseInt(aa) +
    " Decimals "+parseInt(bb) +
    " String "+ parseInt(dd)+
" Num and String "+ parseInt(ee);
document.getElementById("parseFloat").innerHTML = "Parse Float " + parseFloat(bb);
document.getElementById("maxValue").innerHTML = Number.MAX_VALUE;
document.getElementById("minValue").innerHTML = Number.MIN_VALUE;
document.getElementById("posInf").innerHTML = Number.POSITIVE_INFINITY;
document.getElementById("negInf").innerHTML = Number.NEGATIVE_INFINITY;
document.getElementById("NAN").innerHTML = Number.NaN;
var xe = Number.EPSILON;
document.getElementById("Eps").innerHTML = xe;


