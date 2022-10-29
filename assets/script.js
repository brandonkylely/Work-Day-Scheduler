var container = document.querySelector(".container");
// var hours = ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];
var hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12 ,13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];


for (var i=0; i < hours.length; i++) {
    var hourDisplay = document.createElement("div");
    hourDisplay.textContent = moment(hours[i], "HH").format ('h a');
    container.appendChild(hourDisplay)
}