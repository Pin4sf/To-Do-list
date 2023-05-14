const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
var inputValue = document.getElementById("myInput").value;

const generateTemplate = todo => { 
    const html = `<li
    class="list-group-item d-flex justify-content-between align-items-center"
>
    ${todo}
    <i class="far fa-trash-alt delete"></i>
</li>`;
    
    list.innerHTML += html;
    if (inputValue === '') {
        alert("You must write something!");
    }
    document.getElementById("myInput").value = "";
}

addForm.addEventListener('submit', e => { 
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
})

var checker = document.querySelector('ul');
checker.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);

// delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLocaleLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));
    
    Array.from(list.children)
        .filter((todo) => todo.textContent.toLocaleLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));  
};



    // add keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});

    // Sidebar func.

function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
};
function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
};
