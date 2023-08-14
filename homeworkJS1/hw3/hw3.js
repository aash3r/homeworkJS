const addDoings = () => {
    const doings = document.getElementById('doings')
    const ul = document.getElementById('ul')
    const li = document.createElement('li')
    const doingsNode = document.createTextNode(doings.value)
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML='delete'
    deleteBtn.onclick=function(){
        li.style.display='none'
    }
    li.appendChild(doingsNode)
    li.appendChild(deleteBtn)
    ul.appendChild(li)
    li.style.display = 'flex'
    li.style.justifyContent = 'space-around'
    
}