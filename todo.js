let addbtn=document.querySelector('.btn-54');
let start;
addbtn.addEventListener('click',function(){
    let cont=document.getElementById('in').value;
    if(cont!=''){
    let stamp='<p class="txt">'+cont+'</p><div class="bts"><button class="start"><svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16"> <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/> </svg></button><button class="delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg></button></div>';
    let newDiv=document.createElement('div');
    newDiv.className='temp';
    newDiv.innerHTML=stamp;
    let todo=document.getElementById('todo');
    todo.appendChild(newDiv);
    document.getElementById('in').value="";
    let startButton = newDiv.querySelector('.start');
        startButton.addEventListener('click', function() {
            this.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="16" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="rgb(13.729858%, 12.159729%, 12.548828%)" d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero"/></g></svg>';
            startButton.className='started';
            let body = this.parentElement;
            let taskDiv = body.parentElement;
            let content = taskDiv.innerHTML;
            taskDiv.remove();
            let newTaskDiv = document.createElement('div');
            newTaskDiv.className = 'temp';
            newTaskDiv.innerHTML = content;
            let doing = document.getElementById('doing');
            doing.appendChild(newTaskDiv);
            let checkButton=newTaskDiv.querySelector('.started');
            checkButton.addEventListener('click',function(){
                let cont=this.parentElement.parentElement;
                checkButton.parentElement.className='newBts'
                console.log(checkButton.parentElement.innerHTML);
                let newDiv=document.createElement('div');
                newDiv.className='temp';
                newDiv.innerHTML=this.parentElement.parentElement.innerHTML;
                cont.remove();
                let done=document.getElementById('done');
                done.appendChild(newDiv);
                let canc=document.querySelector('.newBts');
                canc.remove();
            });
            let del=newTaskDiv.querySelector('.delete');
            del.addEventListener("click",function(){
                this.parentElement.parentElement.remove();
            });
        });
        let deleteButton = newDiv.querySelector('.delete');
        deleteButton.addEventListener('click',function(){
            let parent=this.parentElement.parentElement;
            parent.remove();
        });
    }
    else{
        alert("Please enter something")
    }
    
});








