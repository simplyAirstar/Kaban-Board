const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");

//This function below is to change the background when a elmemt is drop or remove
for(const card of cards) {
 card.addEventListener("dragstart",dragStart)
 card.addEventListener("dragend",dragEnd)
}

for(const list of lists) {
 list.addEventListener("dragover",dragOver)
 list.addEventListener("dragenter",dragEnter)
 list.addEventListener("dragleave",dragLeave)
 list.addEventListener("drop",dragDrop)
}

function dragStart(e) {
//This allows the drop ocation to know which element is being moved when you release it
 e.dataTransfer.setData("text/plain",this.id)
}

function dragEnd() {
 console.log("Drag Ended");
}

function dragOver(e) {
//This line is important because by default, browser dont allow you to drop element onto other elments.
 e.preventDefault();
}

function dragEnter(e) {
 e.preventDefault();

 this.classList.add("over");
}

function dragLeave(e) {
 e.preventDefault()

 this.classList.remove("over");
}

function dragDrop(e) {
 const id = e.dataTransfer.getData("text/plain")

 const card = document.getElementById(id)

 this.appendChild(card);

 this.classList.remove("over");
}
