let clearAll = document.getElementById('clearAll');

submit.addEventListener('click', function(){    
    let doing = document.createElement('li');
    doing.classList.add('li')
    list.appendChild(doing);
    doing.innerHTML = toDo.value;
    toDo.value = "";

    doing.addEventListener('click', function(){
        doing.classList.add('liComplete');
    })
    
    doing.addEventListener('dblclick', function(){
        list.removeChild(doing)
    })

    clearAll.addEventListener('click', function(){
        doing.remove();
    })

})

