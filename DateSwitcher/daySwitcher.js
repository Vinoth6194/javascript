alert("Connected");
function myDaySwitcher(){
    var day, today;
    day = document.getElementById("day").value;
    console.log(day);
    console.log(typeof day);
    console.log(parseInt(day));
    console.log(typeof day);
    switch (parseInt(day)) {
        case 0:
        today = "Sunday";
        break;
        case 1:
            today = "Monday";
            break;
        case 2:
            today = "Tuesday";
            break;
        case 3:
            today = "Wednesday";
            break;
        case 4:
            today = "Thursday";
            break;
        case 5:
            today = "Friday";
            break;
        case 6:
            today = "Saturday";
            break;
        default:
            today="Invalid input";
    }
    document.getElementById("today").innerHTML = today;
}
