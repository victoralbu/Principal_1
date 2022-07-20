function alert() {
    Swal.fire(this.innerText);
    document.getElementById("schedule-date").innerText = `Schedule for January ${this.innerText}, 2022`
    this.style.backgroundColor = ""
}

let liElementCollection = document.getElementById("table").getElementsByTagName("li");


for (const li of liElementCollection) {
    li.addEventListener("click", alert);
}


