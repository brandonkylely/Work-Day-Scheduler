var container = document.querySelector(".container");
// var hours = ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];
var hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12 ,13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
var date = new Date();
// console.log(date)
// console.log(date.getHours())
// console.log(moment(hours[17], " HH").format('h a'))

function referenceTime (hour) {
    if (date.getHours() === hour) {
        return 1 // present
    } else if (date.getHours() > hour) {
        return 2 //past
    } else {
        return 3 //future
    };
}

for (var i = 0; i < hours.length; i++) {
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "row timeblock");
    if (referenceTime(hours[i]) === 1) {
        wrapper.classList.add("present")
    } else if (referenceTime(hours[i]) === 2)  {
        wrapper.classList.add("past")
    } else {
        wrapper.classList.add("future")
    }
    var hourDisplay = document.createElement("div");
    var textbox = document.createElement("textarea");
    textbox.setAttribute("class", "description col-md-10");
    hourDisplay.setAttribute("class", "hour");
    hourDisplay.textContent = moment(hours[i], "HH").format('h a');
    wrapper.appendChild(hourDisplay);
    wrapper.appendChild(textbox);
    container.appendChild(hourDisplay);
}