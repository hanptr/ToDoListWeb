let ul = document.querySelector('#list ul');
let btn = document.querySelector('#add-new-todo-btn');
let input = document.querySelector('#new-todo-input');

btn.addEventListener('click', addHandler);

input.addEventListener('keypress', addHandler);

function addHandler(e){
    if (e.key == 'Enter' || e.type == 'click') {
        if (input.value != '') {
            let newLi = document.createElement('li');
            newLi.innerHTML = input.value;
            ul.appendChild(newLi);
    
            newLi.addEventListener('click',function(){
                this.classList.toggle('ready');
            })
    
            input.value = '';
        }
    }
}
