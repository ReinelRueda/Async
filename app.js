 const HTMLResponse = document.querySelector("#app")
 const ul = document.createElement('ul')


 const getNombreAsync = async () => {

try {
    const resPost = await fetch(`http://localhost:3000/api`)
    const post = await resPost.json()

    post.forEach(element => {
    let elem = document.createElement('li')
    elem.appendChild(document.createTextNode(`${element.nombre} ---- ${element.logo}`))   
    ul.appendChild(elem)     
    });
    HTMLResponse.appendChild(ul)
    // console.log(post)
    // const tpl = post.map(post => `<li>${post.nombre} ---- ${post.logo}</li>`)
    // HTMLResponse.innerHTML = `<ul>${tpl}</ul>`

} catch (error) {
    console.log(error)
}
}
getNombreAsync()