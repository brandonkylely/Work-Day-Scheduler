var container = document.querySelector(".container");
// var hours = ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];
var hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12 ,13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
var date = new Date();
// console.log(date)
// console.log(date.getHours())
// console.log(moment(hours[17], " HH").format('h a'))
var events = [];
var work ={}
localStorage.getItem("events", JSON.stringify(events));




function referenceTime (hour) {
    if (date.getHours() === hour) {
        return "present"
    } else if (date.getHours() > hour) {
        return "past"
    } else {
        return "future"
    };
}

function saveEvent() {
    work.text = textbox.value;
    // work.hour = hours[i]
    events.push(work);
    textarea.value = localStorage.setItem("events", JSON.parse(events));
}

for (var i = 0; i < hours.length; i++) {

    var block = document.createElement("div");
    block.setAttribute("class", "row time-block");



    // var block = document.querySelectorAll(".time-block");
    // console.log(block[i]);
    // if (referenceTime(hours[i]) === "present") {
    //     block[i].classList.add("present")
    // } else if (referenceTime(hours[i]) === "past")  {
    //     block[i].classList.add("past")
    // } else {
    //     block[i].classList.add("future")
    // }

    if (referenceTime(hours[i]) === "present") {
        block.classList.add("present")
    } else if (referenceTime(hours[i]) === "past")  {
        block.classList.add("past")
    } else {
        block.classList.add("future")
    }

    var hourDisplay = document.createElement("div");

    var textbox = document.createElement("textarea");
    textbox.setAttribute("class", "description col-md-10");

    hourDisplay.setAttribute("class", "hour");
    hourDisplay.textContent = moment(hours[i], "HH").format('h a');
    block.appendChild(hourDisplay);
    block.appendChild(textbox);
    container.appendChild(block);


    var saveButton = document.createElement("button");
    saveButton.setAttribute("class", "saveBtn");
    saveButton.addEventListener("click", saveEvent);
    // saveButton.appendChild(block);

    console.log(block.classList)
}
