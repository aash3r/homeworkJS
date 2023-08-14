const displayData = () => {
    const dataUl = document.getElementById('data');
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const email = document.getElementById('email');
    const li = document.createElement('li')
    const nameNode = document.createTextNode(`Name: ${name.value}, `)
    const surnameNode = document.createTextNode(`Surname: ${surname.value}, `)
    const emailNode = document.createTextNode(`Email: ${email.value}`)
    li.appendChild(nameNode)
    li.appendChild(surnameNode)
    li.appendChild(emailNode)
    dataUl.appendChild(li)
}