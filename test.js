let name = document.getElementById("name")
let username = document.getElementById("user")
let img = document.getElementById("img")

fetch("https://rickandmortyapi.com/api/character")
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data[0])
      
        name.innerText = data[0].name
        username.innerText = data[0].username
        img.innerText = data[0].username

    })