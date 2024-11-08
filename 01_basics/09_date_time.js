let currentDate = new Date()
// console.log("Current Date: ", currentDate);

let specificDate = new Date(2024, 11, 8, 9, 43, 0);
// console.log("Specific Date:", specificDate);

let timeStamp = Date.parse("September 14, 2024 10:30:00")

let year = currentDate.getFullYear();
// console.log("Year:", year);

let month = currentDate.getMonth();
// console.log("Month:", month);

let day = currentDate.getDate();
// console.log("Day of the month:", day);

let weekDay = currentDate.getDay();
// console.log("Day of the week:", weekDay);

let hours = currentDate.getHours();
// console.log("Hours:", hours);

let minutes = currentDate.getMinutes();
// console.log("Minutes:", minutes);

let seconds = currentDate.getSeconds();
// console.log("Seconds:", seconds);

let milliseconds = currentDate.getMilliseconds();
// console.log("Milliseconds:", milliseconds);

let time = currentDate.getTime();
// console.log("Time (Timestamp):", time);

let utcHours = currentDate.getUTCHours();
// console.log("UTC Hours:", utcHours);

let newDate = new Date();
newDate.setFullYear(2025)
// console.log("Set year to 2025:", newDate);

newDate.setMonth(1);
// console.log("Set month to February:", newDate);

newDate.setDate(1);
// console.log("Set day of the month:", newDate);

newDate.setHours(8);
// console.log("Set hours to 8:", newDate);

newDate.setSeconds(15)
console.log("Set seconds to 15:", newDate);

newDate.setMilliseconds(300)
console.log("Set milliseconds to 300:", newDate);

newDate.setTime(1726350600000)
console.log("Set time using timestamp:", newDate);

console.log("toString():", newDate.toString());
console.log("toDateString():", newDate.toDateString());
console.log("toTimeString():", newDate.toTimeString());
console.log("toLocaleDateString():", newDate.toLocaleDateString);
console.log("toLocateTimeString():", newDate.toLocaleTimeString());
console.log("toISOString():", newDate.toISOString());
console.log("toUTCString():", newDate.toUTCString());

let nowTimeStamp = Date.now();
console.log("Current Timestamp (Date.now()):", nowTimeStamp);

console.log("valueOf():", newDate.valueOf());
