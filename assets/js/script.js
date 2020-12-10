let allEvents = [
    { date: 10, month: 12, year: 2020, startTime: "10:00 AM", endTime: "12:00 PM", title: "Title 1", link: "https://www.google.com/" },
    { date: 01, month: 10, year: 2010, startTime: "08:32 AM", endTime: "12:00 PM", title: "Title 2", link: "https://www.facebook.com/" },
    { date: 05, month: 05, year: 2016, startTime: "09:20 AM", endTime: "12:30 PM", title: "Title 3", link: "https://www.youtube.com/" },
    { date: 01, month: 01, year: 2021, startTime: "01:00 PM", endTime: "02:00 PM", title: "Title 4", link: "https://www.google.com/" },
    { date: 31, month: 11, year: 2020, startTime: "11:00 AM", endTime: "04:00 PM", title: "Title 5", link: "https://www.facebook.com/" },
    { date: 05, month: 04, year: 2016, startTime: "05:30 PM", endTime: "10:30 PM", title: "Title 6", link: "https://www.youtube.com/" },
    { date: 05, month: 02, year: 2016, startTime: "02:30 PM", endTime: "10:30 PM", title: "Title 7", link: "https://www.youtube.com/" },
    { date: 05, month: 02, year: 2008, startTime: "02:30 PM", endTime: "10:30 PM", title: "Title 7", link: "https://www.youtube.com/" },
    { date: 01, month: 01, year: 2021, startTime: "10:00 PM", endTime: "02:00 PM", title: "Title 4", link: "https://www.google.com/" },

]

// day array
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// month array
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// grabbing elements
let banner = document.querySelector(".banner-wrapper");

// current date 
let dates = new Date();
// sorted All events
let sortedEvents = allEvents.sort((a, b) => (a.year > b.year) ? 1 : -1);
console.log(sortedEvents)

// function for removing duplicates OBJECT from an ALL EVENT array
function removeDuplicates(originalArray, property) {
    var newArray = [];
    var newObject = {};

    for (var i in originalArray) newObject[originalArray[i][property]] = originalArray[i];
   
    for (i in newObject) newArray.push(newObject[i]);
    return newArray;
}

var uniqueYear = removeDuplicates(allEvents, "year");
// console.log(uniqueYear);


for (let i = 0; i < allEvents.length; i++) {
    if (allEvents[i].year == 2020) {
        console.log(allEvents[i]);
    } else {
        console.log("Invalid Input")
    }
}
function display() {
    for (let i = 0; i < uniqueYear.length; i++) {
        // console.log(uniqueYear[i]);
        let createdDiv = document.createElement("div");
        createdDiv.setAttribute("class", "events");
        createdDiv.innerHTML = ` <h2 class="date-heading">${month[uniqueYear[i].month - 1]} ${uniqueYear[i].year}</h2>
            <ul class="event-box"></ul>`
        banner.appendChild(createdDiv);
        let dateHeading = document.querySelectorAll(".date-heading");
        if (dateHeading[i].innerHTML.includes("2021")) {
            // console.log(dateHeading[i]);
            let nextSibling = dateHeading[i].nextElementSibling;
            nextSibling.innerHTML = "I am 2021";
        } else if (dateHeading[i].innerHTML.includes("2020")) {
            let nextSibling = dateHeading[i].nextElementSibling;
            nextSibling.innerHTML = "I am 2020";
        }
    }
}

display();
