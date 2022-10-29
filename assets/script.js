var container = document.querySelector(".container");
// var hours = ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];
var hours = [9, 10, 12 ,13, 14, 15, 16, 17,];
var date = new Date();
// console.log(date)
// console.log(date.getHours())
// console.log(moment(hours[17], " HH").format('h a'))
// var events = [];
var work ={}
// if (localStorage.getItem("events")) {
// 	events = localStorage.getItem("events", JSON.stringify(events));
// }

document.querySelector("#currentDay").textContent = moment().format("dddd, MMMM Do")

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
    var selection = this.getAttribute("data-id");
    var textGrab = document.getElementById(selection);

    // work.hour = hours[i]
    // events.push(work);
    localStorage.setItem(selection, textGrab.value);
}

for (var i = 0; i < hours.length; i++) {

    var block = document.createElement("div");
    block.setAttribute("class", "row time-block");


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

    textbox.value = localStorage.getItem(hours[i])

    textbox.setAttribute("class", "description col-md-10");
    textbox.setAttribute("id", hours[i]);
    hourDisplay.setAttribute("class", "hour col-1");
    hourDisplay.textContent = moment(hours[i], "HH").format('h a');
    block.appendChild(hourDisplay);
    block.appendChild(textbox);
    container.appendChild(block);


    var saveButton = document.createElement("button");
    saveButton.setAttribute("class", "saveBtn w-100 col-md-1");
    saveButton.setAttribute("data-id", hours[i]);
    saveButton.innerHTML = `
    <i class="fa-solid fa-floppy-disk"></i>
    `
    block.appendChild(saveButton);
    saveButton.addEventListener("click", saveEvent);

    // var block = document.querySelectorAll(".time-block");
    // console.log(block[i].textContent);
    // console.log(block.classList)
}

// var saveBtn = document.querySelectorAll(".saveBtn");

// for ( var i = 0; i < saveBtn.length; i++) {
//     saveBtn[i].addEventListener("click", saveEvent);
// }