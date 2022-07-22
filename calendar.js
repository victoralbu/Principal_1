const months = [January = {
    name: "January",
    monthNumber: 0,
    numberOfDays: 31,
    startingDay: "Saturday",
    startingDayNumeric: 6,
    lastDay: "Monday",
    lastDayNumeric: 1,
},

    February = {
        name: "February",
        monthNumber: 1,
        numberOfDays: 28,
        startingDay: "Tuesday",
        startingDayNumeric: 2,
        lastDay: "Monday",
        lastDayNumeric: 1,
    },

    March = {
        name: "March",
        monthNumber: 2,
        numberOfDays: 31,
        startingDay: "Tuesday",
        startingDayNumeric: 2,
        lastDay: "Thursday",
        lastDayNumeric: 4,
    },

    April = {
        name: "April",
        monthNumber: 3,
        numberOfDays: 30,
        startingDay: "Friday",
        startingDayNumeric: 5,
        lastDay: "Friday",
        lastDayNumeric: 5,
    },

    May = {
        name: "May",
        monthNumber: 4,
        numberOfDays: 31,
        startingDay: "Sunday",
        startingDayNumeric: 7,
        lastDay: "Tuesday",
        lastDayNumeric: 2,
    },

    June = {
        name: "June",
        monthNumber: 5,
        numberOfDays: 30,
        startingDay: "Wednesday",
        startingDayNumeric: 3,
        lastDay: "Thursday",
        lastDayNumeric: 4,
    },

    July = {
        name: "July",
        monthNumber: 6,
        numberOfDays: 31,
        startingDay: "Friday",
        startingDayNumeric: 5,
        lastDay: "Sunday",
        lastDayNumeric: 7,
    },

    August = {
        name: "August",
        monthNumber: 7,
        numberOfDays: 31,
        startingDay: "Monday",
        startingDayNumeric: 1,
        lastDay: "Wednesday",
        lastDayNumeric: 3,
    },

    September = {
        name: "September",
        monthNumber: 8,
        numberOfDays: 30,
        startingDay: "Thursday",
        startingDayNumeric: 4,
        lastDay: "Friday",
        lastDayNumeric: 5,
    },

    October = {
        name: "October",
        monthNumber: 9,
        numberOfDays: 31,
        startingDay: "Saturday",
        startingDayNumeric: 6,
        lastDay: "Monday",
        lastDayNumeric: 1,
    },

    November = {
        name: "November",
        monthNumber: 10,
        numberOfDays: 30,
        startingDay: "Tuesday",
        startingDayNumeric: 2,
        lastDay: "Wednesday",
        lastDayNumeric: 3,
    },

    December = {
        name: "December",
        monthNumber: 11,
        numberOfDays: 31,
        startingDay: "Thursday",
        startingDayNumeric: 4,
        lastDay: "Saturday",
        lastDayNumeric: 6,
    }];
const arrowLeftElement = document.getElementById("arrow-left");
const arrowRightElement = document.getElementById("arrow-right");
const monthElement = document.getElementById("month");


let monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// arrowRightElement.addEventListener("click", function () {
//     for (let i = 0; i < 11; i++) {
//         if (monthElement.innerText.slice(0, -5) === months[i].name) {
//             monthElement.innerText = `${months[i + 1].name} 2022`;
//             document.getElementById("schedule-date").innerText = `Schedule for ${months[i + 1].name} 1, 2022`;
//             let k = 1;
//             for (const li of liElementCollection) {
//                 li.style.pointerEvents = "none";
//                 li.innerText = "";
//                 li.style.visibility = "visible";
//             }
//             for (let j = months[i + 1].startingDayNumeric - 1; j < liElementCollection.length; j++) {
//                 if (k <= months[i + 1].numberOfDays) {
//                     liElementCollection[j].innerText = k.toString();
//                     liElementCollection[j].style.pointerEvents = "auto";
//                 } else {
//                     liElementCollection[j].style.visibility = "hidden";
//                 }
//                 k++;
//             }
//             break;
//         }
//     }
// });
// arrowLeftElement.addEventListener("click", function () {
//     for (let i = 1; i < 12; i++) {
//         if (monthElement.innerText.slice(0, -5) === months[i].name) {
//             console.log(months[i].name)
//             monthElement.innerText = `${months[i - 1].name} 2022`;
//             document.getElementById("schedule-date").innerText = `Schedule for ${months[i - 1].name} 1, 2022`;
//             let k = 1;
//             for (const li of liElementCollection) {
//                 li.style.pointerEvents = "none";
//                 li.innerText = "";
//                 li.style.visibility = "visible";
//             }
//             for (let j = months[i - 1].startingDayNumeric - 1; j < liElementCollection.length; j++) {
//                 if (k <= months[i - 1].numberOfDays) {
//                     liElementCollection[j].innerText = k.toString();
//                     liElementCollection[j].style.pointerEvents = "auto";
//                 } else {
//                     liElementCollection[j].style.visibility = "hidden";
//                 }
//                 k++;
//             }
//             break;
//         }
//     }
// });

function surfNextMonth() {
    let monthDisplayed = monthElement.innerText.slice(0, -5);
    let year = monthElement.innerText.split(" ")[1];
    if (monthDisplayed === "December") {
        year++;
    }
    let nextMonth;
    if (monthDisplayed !== "December") {
        nextMonth = monthsArray[monthsArray.indexOf(monthDisplayed) + 1];
    } else {
        nextMonth = monthsArray[0];
        monthDisplayed = "January";
        monthElement.innerText = `${monthDisplayed} ${year}`;

    }
    let startingDayOfNextMonth = moment().year(parseInt(year)).month(monthsArray.indexOf(nextMonth)).startOf('month').day();
    //let endingDayOfNextMonth = moment().month(monthsArray.indexOf(nextMonth)).endOf('month').day();
    let numberOfDaysInNextMonth = moment().year(parseInt(year)).month(nextMonth).daysInMonth();
    console.log(numberOfDaysInNextMonth)

    for (let liElement of liElementCollection) {
        liElement.style.pointerEvents = "none";
        liElement.innerText = "";
        liElement.style.visibility = "hidden";

    }

    for (let i = 0; i < numberOfDaysInNextMonth + startingDayOfNextMonth; i++) {
        liElementCollection[i].style.visibility = "visible";
        if (i >= startingDayOfNextMonth) {
            liElementCollection.item(i).innerText = k.toString();
            liElementCollection[i].style.pointerEvents = "auto";
            k++;
        }
    }

    monthElement.innerText = `${nextMonth} ${year}`;
}

function surfPreviousMonth() {
    let monthDisplayed = monthElement.innerText.slice(0, -5);
    let year = monthElement.innerText.split(" ")[1];
    if (monthDisplayed === "January") {
        year--;
    }
    let previousMonth;
    if (monthDisplayed !== "January") {
        previousMonth = monthsArray[monthsArray.indexOf(monthDisplayed) - 1];
    } else {
        previousMonth = monthsArray[monthsArray.length - 1];
        monthDisplayed = "December";
        monthElement.innerText = `${monthDisplayed} ${year}`;
    }
    let startingDayOfPreviousMonth = moment().year(parseInt(year)).month(monthsArray.indexOf(previousMonth)).startOf('month').day();
    //let endingDayOfPreviousMonth = moment().month(monthsArray.indexOf(previousMonth)).endOf('month').day();
    let numberOfDaysInPreviousMonth = moment().year(parseInt(year)).month(previousMonth).daysInMonth();

    for (let liElement of liElementCollection) {
        liElement.style.pointerEvents = "none";
        liElement.innerText = "";
        liElement.style.visibility = "hidden";
    }

    for (let i = 0; i < numberOfDaysInPreviousMonth + startingDayOfPreviousMonth; i++) {
        liElementCollection[i].style.visibility = "visible";
        if (i >= startingDayOfPreviousMonth) {
            liElementCollection.item(i).innerText = k.toString();
            liElementCollection[i].style.pointerEvents = "auto";
            k++;
        }
    }

    monthElement.innerText = `${previousMonth} ${year}`;
}

arrowRightElement.addEventListener("click", surfNextMonth);
arrowLeftElement.addEventListener("click", surfPreviousMonth);