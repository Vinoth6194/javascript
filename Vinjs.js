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
var myArray = ["Vinothkumar", "Selvan","Santhi","Kiruthika"];
document.getElementById("myArr").innerHTML = myArray;
myArray[4]= "Vijay";
document.getElementById("myNewArr").innerHTML = myArray;
myArray[0] = "Vinothkumar S";
document.getElementById("myModArr").innerHTML = myArray;
document.getElementById("myModArrLen").innerHTML = "Length  of the modified array is " + myArray.length;
document.getElementById("myModArrSort").innerHTML = "Sorted array is " + myArray.sort();
document.getElementById("myModFirst").innerHTML = "First element is " + myArray[0];
document.getElementById("myModLast").innerHTML = "Last element is " + myArray[myArray.length-1];;
myArray.push("master");
myArray[myArray.length] = "Bhavani"
document.getElementById("myupdArr").innerHTML = myArray;
console.log(typeof myArray);
console.log(Array.isArray(myArray));
document.getElementById("arrStr").innerHTML = "tostring ->" + myArray.toString();
document.getElementById("arrJoin").innerHTML = "join ->" + myArray.join(' * ');
var players = ["Virat","Dhoni","Sachin"];
document.getElementById("players"). innerHTML = "Original Array is " + players;
var del = players.pop();
document.getElementById("delEle").innerHTML ="Deleted elemet is " + del;
document.getElementById("players_1").innerHTML = "After deletion is " + players;
var newElem = players.push("Abd");
document.getElementById("addEle").innerHTML ="Deleted elemet is " + newElem;
document.getElementById("players_2").innerHTML = "After Adding " + players;
var shiftItem = players.shift();
document.getElementById("shiftItem").innerHTML = "Shifted element is " + shiftItem;
document.getElementById("shiftArray").innerHTML = "After shifting " + players;
var unshiftItem = players.unshift("Baz");
document.getElementById("unshiftItem").innerHTML = "Unshifted element is " + unshiftItem;
document.getElementById("unshiftArray").innerHTML = "After unshifting " + players;
document.getElementById("oriArray").innerHTML = "Original Array is " + players;
function addItems (){
    players.splice(2,0,"Gayle","Smith");
    document.getElementById("updArray").innerHTML = "Updated Array is " + players;
}
document.getElementById("beforeConcat").innerHTML = "Before array concatenation " + players;
function myConcatenation(){
    var newPlayers = ["Smudge","King","Captain Cool","Alien"];
   var afterConCat =  players.concat(newPlayers,"Hardik");
    document.getElementById("afterConcat").innerHTML = "After array concatenation " + afterConCat.join("->");

}
var fruits =["apple","mango","grapes","citrus","pomogranate"];
document.getElementById("befSli").innerHTML = "Before slicing :" + fruits;
function mySlice(){
    var newFruits = fruits.slice(2,4);
    document.getElementById("aftSli").innerHTML = "After slicing :" + newFruits;
}
document.getElementById("defArray").innerHTML = fruits;
function asceSorting(){
    document.getElementById("asceSort").innerHTML = "After Sorting : " +fruits.sort();
}
function descSorting(){
    fruits.sort();
    document.getElementById("descSort").innerHTML = "After Reverse Sorting : " +fruits.reverse();
}
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("defNumArray").innerHTML = "Default array of numbers " + points;
function numAscSort()
{
    document.getElementById("numAscSort").innerHTML = "Ascending order of the number array " +points.sort(function (a,b){return a-b});;

}
function numDesSort()
{
    document.getElementById("numDesSort").innerHTML = "Descending order of the number array " +points.sort(function (a,b){return b-a});;

}
function numRanSort()
{
    document.getElementById("numRanSort").innerHTML = "Random sorting of the number array " +points.sort(function (a,b){return 0.5-Math.random()});

}

function arrLowValue(){
    function lowValue(arr){
        return Math.min.apply(null,arr);
    }
    document.getElementById("arrLowVal").innerHTML =lowValue(points);
}
function arrLHigValue(){
    function highValue(arr){
        return Math.max.apply(null,arr);
    }
    document.getElementById("arrHigVal").innerHTML =highValue(points);
}
var myObjArr = [
    {
        name:"Vinoth",age:26,
    },
    {
        name:"Santhi",age:52,
    },
    {
        name:"Selvan",age:60,
    },
    {
        name:"Kiruthika",age:22,
    }
]
function myObjArrDis(){
    document.getElementById("defObjArr").innerHTML ="Default object array " +"<br>"+ myObjArr[0].name +" "+ myObjArr[0].age +"<br>"+
        myObjArr[1].name +" "+ myObjArr[1].age +"<br>"+myObjArr[2].name +" "+ myObjArr[2].age +"<br>"+myObjArr[3].name +" "+ myObjArr[3].age +"<br>";
}
myObjArrDis();

function objArrSortAscAge(){
     myObjArr.sort(function (a,b) {return a.age-b.age});
        document.getElementById("objArrNumAsc").innerHTML ="Sorting obj arrays by Age in Ascending order " +"<br>"+ myObjArr[0].name +" "+ myObjArr[0].age +"<br>"+
            myObjArr[1].name +" "+ myObjArr[1].age +"<br>"+myObjArr[2].name +" "+ myObjArr[2].age +"<br>"+myObjArr[3].name +" "+ myObjArr[3].age +"<br>";
}

function objArrSortDescAge(){
    myObjArr.sort(function (a,b) {return b.age-a.age});
    document.getElementById("objArrNumDesc").innerHTML ="Sorting obj arrays by Age in Descending order " +"<br>"+ myObjArr[0].name +" "+ myObjArr[0].age +"<br>"+
        myObjArr[1].name +" "+ myObjArr[1].age +"<br>"+myObjArr[2].name +" "+ myObjArr[2].age +"<br>"+myObjArr[3].name +" "+ myObjArr[3].age +"<br>";
}
myObjArrDis();

function objArrNameSort(){
    myObjArr.sort(function (a,b){
        var x =a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if(x>y){
            return 1;
        }if(x<y){
            return -1;
        }else return 0
    });
    document.getElementById("objArrNameSort").innerHTML ="Sorting obj arrays by Name in Alphabeical order " +"<br>"+ myObjArr[0].name +" "+ myObjArr[0].age +"<br>"+
        myObjArr[1].name +" "+ myObjArr[1].age +"<br>"+myObjArr[2].name +" "+ myObjArr[2].age +"<br>"+myObjArr[3].name +" "+ myObjArr[3].age +"<br>";
}
function objArrNameRevSort(){
    myObjArr.reverse(function (a,b){
        var x =a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if(x>y){
            return 1;
        }if(x<y){
            return -1;
        }else return 0
    });
    document.getElementById("objArrNameRevSort").innerHTML ="Sorting obj arrays by Name in Reverse Alphabeical order " +"<br>"+ myObjArr[0].name +" "+ myObjArr[0].age +"<br>"+
        myObjArr[1].name +" "+ myObjArr[1].age +"<br>"+myObjArr[2].name +" "+ myObjArr[2].age +"<br>"+myObjArr[3].name +" "+ myObjArr[3].age +"<br>";

}
var text= "";
var demoArray = ["Ele 1","Ele 2","Ele 3","Ele 4"];
function forEachDisp(value,index, array){
    text = text+value + "<br>";
    console.log(index);
    console.log(array.join("***"));
    // text = "Value is" + text+value +"<br>";
}
demoArray.forEach(forEachDisp);
document.getElementById("forEach").innerHTML = text;
var mapArray = [2,6,1,7];
var newMapArray = mapArray.map(myMap);
function myMap (value,index,array){
    return value;
}
document.getElementById("oriarrMap").innerText ="Original Array is " + mapArray;
document.getElementById("newarrMap").innerText = "By mapping through the array "+newMapArray;
var ages = [52,25,11,66,8,4,88];
var filterAges = ages.filter(myFilter);
function myFilter (value, index, array){
    return value > 11;
}
document.getElementById("ages").innerText = "Array values are " + ages;
document.getElementById("filArr").innerText = "Filtered values above 11 are "+filterAges.sort(function (a,b) {
    return a-b;
});
var demoNum = [1,2,3,4,5];
var reduceArray = demoNum.reduce(myReduce);
function myReduce (total,value,index, array){
    //return total+value;
    console.log(total);
    console.log(value);
    console.log(index);
    console.log(array);
    return total+value;
}
document.getElementById("demoNum").innerText = "Array before reduce() is "+demoNum;
document.getElementById("reduceArr").innerText = "Sum of the values in the array by reduce() is "+reduceArray;
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myReduceRight);
function myReduceRight(total,index,value,array){
    return total+value;
}
document.getElementById("num1").innerText = "Array before reduceRight() is "+numbers1;
document.getElementById("sum").innerText = "Array before reduceRight() is "+sum;
var everyArr = numbers1.every(myEveryFun);
function myEveryFun(index,value,array){
    return value > 25;
}
document.getElementById("every").innerText = "Result of every() is ->"+everyArr;
var someArray = numbers1.some(mySomeFunction);
function mySomeFunction(index,value, array){
    return value < 18;
}
document.getElementById("some").innerText = "Result of some() is ->"+someArray;
var searchArray = ["vinothkumar","vijay","kiru","gurmeet","kiru"];
document.getElementById("arrIndex").innerHTML = "Index of the searched element is "+searchArray.indexOf("kiru",1);
document.getElementById("lastarrIndex").innerHTML = "LastIndex of the searched element is "+searchArray.lastIndexOf("kiru",5);
document.getElementById("searchArray").innerHTML = "Array to be searched  is "+searchArray;
var numbers = [4, 9, 16, 55, 29];
var firstOver18 = numbers.find(over18);
function over18(value, index, array){
    return value > 18;
}
document.getElementById("over18").innerHTML = "First element over 18 is "+firstOver18;
var firstOver18Ind = numbers.findIndex(over18Index);
function over18Index(value, index, array){
    return value > 18;
}
document.getElementById("over18Ind").innerHTML = "First element's index of over 18 is "+firstOver18Ind;
document.getElementById("date").innerHTML = "Today's date is" + new Date();
document.getElementById("dateParams").innerHTML = "DOB is" + new Date(1994,10,6,12,00,00,00);
document.getElementById("prevCen").innerHTML = "Previous Century is " + new Date(4,10,6,12,00,00,00);
document.getElementById("dataString").innerHTML = "Date from the given string is  " + new Date("April 18, 1999 12:00:00");
var d = new Date(100000000000);
document.getElementById("dateMilli").innerHTML = "Date from the given milliseconds is  " + d;
var utsc = new Date().toUTCString();
document.getElementById("Utcs").innerHTML = "Date in UTCS is  " + utsc;
var dateString = new Date().toDateString();
document.getElementById("dateString").innerHTML = "Date in DateString is  " + dateString;
var iso = new Date().toISOString();
document.getElementById("iso").innerHTML = "Date in ISO is  " + iso;
var isoFormat = new Date("2020-12-26T12:34:06Z");
document.getElementById("iso_format").innerHTML = "Date in ISO Format is  " + isoFormat;
var datePar = Date.parse("March 21, 2012");
document.getElementById("data_parse").innerHTML = "Milliseconds after date parsing is  " + datePar;
var currentDate= new Date();
var currMilliSeconds = Date.parse(currentDate);
document.getElementById("today_data_parse").innerHTML = "Milliseconds after date parsing for Today is " + currMilliSeconds;
var today_full_date = new Date();
var todayDate = new Date().getDate();
var todayUTCDate = new Date().getUTCDate();
document.getElementById("today_date").innerHTML = "Today's Date is " + todayDate;
document.getElementById("today_full_date").innerHTML = "Today's Full Date is " + today_full_date;
document.getElementById("today_UTC_date").innerHTML = "Today's Full UTC Date is " + todayUTCDate;
document.getElementById("today_full_date_1").innerHTML = "Today's Full Date is " + today_full_date;
var setDate = new Date();
var setDate1 = new Date();
setDate.setDate(11);
setDate1.setDate(setDate.getDate()+ 100);
document.getElementById("setDate").innerHTML = "After set date " + setDate;
document.getElementById("setDate1").innerHTML = "After 100 days from today is " + setDate1;
var myNum = 6.5;
document.getElementById("math_object").innerHTML = "Math Obj functions are as follows  ->"+ "<br>"+"PI is " +Math.PI + "<br>" + "<p>"+ "Round is "+ Math.round(myNum)+"<br>"+"Floor is "+ Math.floor(myNum)+"<br>"+"Ceil is "+ Math.ceil(myNum)+"</p>";
document.getElementById("math_ran").innerHTML = "Random Number from 1 to 10 is "+Math.floor(Math.random()*10)+1;
document.getElementById("math_ran1").innerHTML = "Random Number from 0 to 99 is "+Math.floor(Math.random()*100) ;
document.getElementById("bool").innerHTML = "For the value of false is" + new Boolean(false) +"<br>" + "For the value of empty string is "+ new Boolean("") +"<br>"+
    "For the value of undefined is "+ new Boolean(undefined);
var xx = 18,yy="aa",zz = "18";
document.getElementById("comp_1").innerHTML = xx==zz;
document.getElementById("comp_2").innerHTML = xx===zz;
document.getElementById("comp_3").innerHTML = xx===yy;
var d = new Date();
var currTime = d.getHours();
console.log(currTime+"-->Your time");
if(currTime < 12){
    document.getElementById("if_con").innerHTML = "Good Morning"
}else if(currTime == 00){
    document.getElementById("if_con").innerHTML = "Exactly 00:00:00"
}
else{
    document.getElementById("if_con").innerHTML = "Good Night"

}
var currUTCTime = d. getUTCHours();
console.log(currUTCTime+"-->UTC Time");
if(currUTCTime > 12){
    document.getElementById("if_con_utc").innerHTML = "Good Night"
}
else if(currTime == 00){
    document.getElementById("if_con_utc").innerHTML = "Exactly 00:00:00"
}
else{
    document.getElementById("if_con_utc").innerHTML = "Good Morning"
}
function myForDemo () {

    var forDemo = ["Vinothkumar", "Kiruthika", "Sevlvan", "Santhi", "HCL", "Google", "Bangalore", "Salem", "Tirupur"];
    var i;
    var forText ="";
    for (i = 0; i < forDemo.length; i++) {
        forText = forText + forDemo[i] + "<br>";

    }
    document.getElementById("demoFor").innerHTML = forText;
}

function myForInDemo(){
    var forInDemo ={name:"Vinoth",age:"27",city:"Bengaluru"};
    var intext = "";
    var x;
    for (x in forInDemo){
        intext = intext+ forInDemo[x] +" ";
    }
    document.getElementById("forInDemo").innerHTML = intext;
}

