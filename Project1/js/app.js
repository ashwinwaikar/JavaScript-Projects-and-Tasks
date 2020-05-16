console.log("Welcome to notes app. This is app.js");
showNotes(); //to display all the notes as soon as website loads

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes"); //getting value of key notes into notes variable
  if (notes == null) {
    notesObj = []; //if string is empty we are storing it into object
  } else {
    notesObj = JSON.parse(notes); //coverting string into array and storing it into object
  }
  notesObj.push(addTxt.value); //pushing new note at the last of the notesObj array
  localStorage.setItem("notes", JSON.stringify(notesObj)); //converting notesObj from array to string and storing to local storage key->notes //we always store string in the local storage
  addTxt.value = ""; //making addTxt element value empty so that we can add new node without pressing backspace in the textbox!
  //console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = ""; //just a name of variable
  notesObj.forEach(function (element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  }); //storing new note(element) and index number HTML format sting into html variable

  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html; //whatever is present in html variable will be assign to inner HTML of notesElm
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`; //if there were no notes
  }
}

// Function to delete a note
function deleteNote(index) {
  //console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1); //it will delete note a perticular index(end index is 1 because we want only 1(i.e that perticular) index to be deleted)
  localStorage.setItem("notes", JSON.stringify(notesObj)); //updating key-> notes
  showNotes();
}

//for search bar
let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function () {
  let inputVal = searchTxt.value.toLowerCase(); //value--whatever we will write will convert to lower case so that we can compare it easily
  // console.log('Input event fired!', inputVal);
  let noteCards = document.getElementsByClassName("noteCard"); //extracting all cards for getting compared to the value of textbox using foreach loop
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText; //storing inner text of the p tag into cardTxt variable
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    // console.log(cardTxt);
  });
});

/*
Future added features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/
