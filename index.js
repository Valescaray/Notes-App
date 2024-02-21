const createBtn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".input-box");

function  showInput() {
    notesContainer.innerHTML = localStorage.getItem("input");
}

showInput(); 

function updateInput() {
    localStorage.setItem("input", notesContainer.innerHTML);
}




createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("Img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "notes-app-img/images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", (e) =>{

     if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateInput();
     }
     else if (e.target.tagName === "P") {
      
        let notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => (
            nt.onkeyup = () => {
                 updateInput();
            }
        ))


     }

})

notesContainer.addEventListener("keydown", Event => {
    if(Event.key === "Enter") {
        document.execCommand("insertLineBreak");
        Event.preventDefault();
    }
})