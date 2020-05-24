
//Japheth
let list = document.getElementById('list');
let inputValue = document.getElementById("input");

function createTodo(){
    if (inputValue.value === '') {
        alert('Add todo');
    } else {
        let todo = document.createElement('li'); 
        let output = inputValue.value
        todo.innerHTML = `<input type="checkbox"/><span>${output}</span>`;
        console.log(output); //debug
        list.appendChild(todo);
    }
    inputValue.value = '';

}





