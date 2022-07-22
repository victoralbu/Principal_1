function alert() {
    Swal.fire(this.innerText);
    let monthElement = document.getElementById(("month")).innerText.slice(0,-5);
    document.getElementById("schedule-date").innerText = `Schedule for ${monthElement} ${this.innerText}, 2022`;
    this.style.backgroundColor = ""
}

let liElementCollection = document.getElementById("table").getElementsByTagName("li");

for (const li of liElementCollection) {
    li.addEventListener("click", alert);
}

let dateNow = new Date().getMonth();
let k = 0;

while (dateNow > k) {
    document.getElementById("arrow-right").click();
    k++;
}

