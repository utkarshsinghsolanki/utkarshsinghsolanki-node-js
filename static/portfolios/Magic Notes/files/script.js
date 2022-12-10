// Declaring Variable
let text;
let addbtn = document.querySelector('.add-btn');
let notediv = document.querySelector('.notes-container');
let note;
let noteobj ;
let html;
let heading;
let noteheadobj;
displayNote();
// Adding Event listener
addbtn.addEventListener('click', function addnote(){
    heading = document.getElementById('note-heading').value;       //Text that user has enterd in heading
    text = document.getElementById('note').value;                  //Text that user has enterd in notes
    noteheading = localStorage.getItem('heading');                 //Getting Heading From Local Storage
    note = localStorage.getItem('notes');                          //Getting Text From Local Storage
//If user has not enter the value
    if(note == null){
        noteobj = [];
    }
//If user has enter the value
    else{
        noteobj = JSON.parse(note);
    }
    if(noteheading == null){
        noteheadobj = [];
    }
    else{
        noteheadobj = JSON.parse(noteheading);
    }
// Pushing values to variable
    noteheadobj.push(heading);
    noteobj.push(text);
// To display error message when user has not enter any value
    if(text.length == 0){
        noteobj.pop();
        noteheadobj.pop();
        alert('Cannot Create Empty Note');
    }
    if(heading.length == 0 && text.length != 0){
        noteheadobj.pop();
        noteheadobj.push('NOTE' + ' ' + (noteheadobj.length+1))
        // alert('Cannot Create Note Without Heading');
    }
// Uploading content to localStorage
    localStorage.setItem('heading', JSON.stringify(noteheadobj));
    localStorage.setItem('notes', JSON.stringify(noteobj));
// After Uploading setting input area value back to null
    document.getElementById('note').value = '';
    document.getElementById('note-heading').value = '';
// Run function showNotes
    displayNote();
});

// displayNote() Function
function displayNote(){
    noteheading = localStorage.getItem('heading');              //Getting Heading From Local Storage
    note = localStorage.getItem('notes');                       //Getting Text From Local Storage
// If user has not enter the value
    if (note == null) {
        noteobj = [];
    } 
// If user has enter the value
    else {
        noteobj = JSON.parse(note);
    }
    // if(noteheading == null){
    //     noteheadobj = [];
    // }
    // else{
    // }
    noteheadobj = JSON.parse(noteheading);
    html = '';                                                  //Declaring html as an empty string
// Running a forEach loop for noteobj so every element in an array could be displayed
    noteobj.forEach(function(element,index){
        // Declaring html to a html code
        html += `<div class="notes">
                        <h3>${noteheadobj[index].toUpperCase()}</h3>
                        <br>
                        <p>${element}</p> 
                        <br><br>
                        <button onclick="deleteNote(this.id)" id="${index}" >Delete Note</button>
                    </div>`
    });
// If user has not created any note before it will display a message.
    if(noteobj.length==0){
        notediv.innerText =  `Nothing to display here. Click on Add Note to create one.`;
    }
// If user already has created a note before it will add html code inside notediv
    else{
        notediv.innerHTML = html;
    }
}


// deleteNote() Function
function deleteNote(index){

    noteheading = localStorage.getItem('heading');              //Getting Heading From Local Storage
    note = localStorage.getItem('notes');                       //Getting Text From Local Storage
// If user has not enter the value
    if (note==null){
        noteobj = [];
    }
// If user has enter the value
    else{
       noteobj= JSON.parse(note);
    }
    if(noteheading == null){
        noteheadobj = [];
    }
    else{
        noteheadobj = JSON.parse(noteheading);
    }
// To delete a particular element from an array
    noteheadobj.splice(index, 1);
    noteobj.splice(index, 1);
// Updating localStorage and running displayNote() function to display changes.
    localStorage.setItem('heading', JSON.stringify(noteheadobj));
    localStorage.setItem('notes', JSON.stringify(noteobj));
    displayNote();
}


// Giving logic to search bar
let search = document.querySelector('.search-area');
// Adding event listener to searchbar
search.addEventListener("input", function(){
// Declaring Variables
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('notes');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        let cardHead = element.getElementsByTagName("h3")[0].innerText.toLowerCase();
        if((cardTxt.includes(inputVal)) || cardHead.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})
