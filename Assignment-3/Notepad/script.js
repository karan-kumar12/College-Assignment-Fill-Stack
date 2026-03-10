const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes(){
    localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes(){
    notesContainer.innerHTML = "";

    notes.forEach((note,index)=>{
        const div = document.createElement("div");
        div.classList.add("note");

        const textarea = document.createElement("textarea");
        textarea.value = note;

        textarea.addEventListener("input",(e)=>{
            notes[index] = e.target.value;
            saveNotes();
        });

        const del = document.createElement("span");
        del.innerText = "❌";
        del.classList.add("delete");

        del.addEventListener("click",()=>{
            notes.splice(index,1);
            saveNotes();
            renderNotes();
        });

        div.appendChild(textarea);
        div.appendChild(del);

        notesContainer.appendChild(div);
    });
}

addBtn.addEventListener("click",()=>{
    notes.push("");
    saveNotes();
    renderNotes();
});

renderNotes();