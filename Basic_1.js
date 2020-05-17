var today = new Date();
var day = today.getDay();
var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + week[day] + ".");
var hours = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var am_pm = (hours >= 12)? " PM ":" AM"
hours = (hours >= 12)? (hours - 12): hours;
console.log("Current time is : " + hours + am_pm + minute + " : " + second)
