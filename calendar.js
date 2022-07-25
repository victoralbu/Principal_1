const arrowLeftElement = document.getElementById("arrow-left");
const arrowRightElement = document.getElementById("arrow-right");
const monthElement = document.getElementById("month");

let monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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

    for (let liElement of liElementCollection) {
        liElement.style.pointerEvents = "none";
        liElement.innerText = "";
        liElement.style.visibility = "hidden";
    }
    let k = 1;
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
    let k = 1;
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