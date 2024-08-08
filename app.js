let addMore = document.querySelector('#more_button');
let row = document.querySelector('.notes_main .notes .container-fluid .row')

addMore.addEventListener('click', function(){
    addNote();
})


let SaveNote = () =>{
    let textarea = document.querySelectorAll('.card textarea')
    let data = [];
    textarea.forEach((textarea) => data.push(textarea.value))
    if(data.length === 0){
        localStorage.removeItem('textarea')
    }else{
        localStorage.setItem('textarea', JSON.stringify(data))
    }
}
 
let addNote = (text = '') =>{
    let notes = document.createElement('div');
    notes.classList.add('col-md-4');
    notes.innerHTML = `  <div class="card">
    <div class="line">
        <i class="save fa-regular fa-floppy-disk" id="save"></i>
        <i class="trash fas fa-regular fa-trash" id="trash"></i>
    </div>
    <textarea name="textarea" id="textarea" cols="30" rows="10">${text}</textarea>
</div>`;

notes.querySelector('.trash').addEventListener('click', function(){
    notes.remove();
    SaveNote();

})
notes.querySelector('.save').addEventListener('click', function(){
    SaveNote();
})
row.appendChild(notes)

}

(
    function(){

        let lstextarea = JSON.parse(localStorage.getItem('textarea'));
        if(lstextarea == null){
         addNote();   
        }else{
            lstextarea.forEach((lstextarea) =>{addNote(lstextarea);})
        }
    }
)()