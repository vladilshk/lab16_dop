$(document).ready(function(){
    for (let li of list.querySelectorAll('.span')) {
       
        let span = document.createElement('span'); /* создание span */
        //span.classList.add('show'); /* добавление класса для span */
        li.prepend(span); /* вставить span внутри li */
        //span.append(span.nextSibling) /* присоединить к span следующий узел */

        //span.classList.add('hide');
        //span.classList.remove('show');
    }

    for(lable of list.querySelectorAll('.lable')){
        let span = document.createElement('span');
        lable.classList.add('show');
    }


    list.onclick = function(event) {
        //if (event.target.tagName != 'LABLE') return;
    
        let childrenList = event.target.parentNode.querySelector('ul');
        //let childrenList = event.target.parent.parentNode.querySelector('ul');
        if (!childrenList) return;
        childrenList.hidden = !childrenList.hidden;
    
        if (childrenList.hidden) {
            event.target.classList.add('hide');
            event.target.classList.remove('show');
        }
        else {
            event.target.classList.add('show');
            event.target.classList.remove('hide');
        }
    }   


    // submit.onclick = function(event){
    //     alert("sosi bibu");
    // }


});



function openr(event) {
    alert("hello");
    if (event.target.tagName != 'SPAN') return;
    
    let childrenList = event.target.parentNode.querySelector('ul');
    if (!childrenList) return;
        childrenList.hidden = !childrenList.hidden;
    
    if (childrenList.hidden) {
        event.target.classList.add('hide');
        event.target.classList.remove('show');
    }

    else {
        event.target.classList.add('show');
        event.target.classList.remove('hide');
    }
}  


function addView(){


    //var b = document.getElementById('hi').textContent;

    var text;
    for(let li of list.querySelectorAll('.span')) {
        for(let lable of li.querySelectorAll('.lable')){
            text += lable.textContent;
            text += " ("
            
        }
        var length = li.querySelectorAll('.word').length;
        var counter = 0;
        for(let ul of li.querySelectorAll('.word')){
            text += editstr(ul.textContent);
            if(counter != length -1){
                text += ", "
            }
            counter++;
        }
        text+= ")</br>";


    }

    

    text = edit(text);



    document.getElementById('here').innerHTML = text;

    //p.appendChild(document.getElementsByClassName("span"));
}

function edit(var1){
    var str = '';
    for(let i = 9; i < var1.length; i++){
        var letter = var1.charAt(i + 1);
        str += var1.charAt(i);  
    }


    return str;

}

function editstr(var1){
    var str = '';
    for(let i = 5; i < var1.length; i++){
        str += var1.charAt(i);
    }
    return str;
}
