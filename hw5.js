const changebgColor = () => {
    const inputColor = document.getElementById ('color').value; 
    const body = document.getElementById ('bgColor')
    body.style.backgroundColor = inputColor
    if (body.style.color === '') console.log ('wrong color')
}