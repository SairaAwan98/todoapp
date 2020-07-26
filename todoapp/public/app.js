var list = document.getElementById('list')
function addtodo(){
    var todoitem = document.getElementById('todoitem')
    var li = document.createElement('li')
    var litext = document.createTextNode(todoitem.value)


//delete button

    var delbtn = document.createElement("button")
    var deltext = document.createTextNode("Delete")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","delitem(this)")
    delbtn.appendChild(deltext)



// edit button

   var editbtn = document.createElement("button")
   var edittext = document.createTextNode("Edit")
   editbtn.setAttribute("class","btn")
   editbtn.setAttribute("onclick","edititem(this)")
   editbtn.appendChild(edittext)


    li.appendChild(litext)
    li.appendChild(delbtn)
    li.appendChild(editbtn)
    
    list.appendChild(li)
    todoitem.value=''
}


















function delitem(e){
    e.parentNode.remove()
}
function edititem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editvalue = prompt("Enter Updated Value ",val)
    e.parentNode.firstChild.nodeValue = editvalue
}
function delall(){
    list.innerHTML = ""
}
