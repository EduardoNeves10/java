// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res)=> res.json())//transforma json em objeto
//     .then((res)=> {
//         console.log(res[7].name);
//         console.log(res[7].username);
            
//     })


let nome = document.getElementById("nome")
let username = document.getElementById("username")
let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data[0])
        
            nome.innerText = data[0].name
            username.innerText = data[0].username
        
        })
    })


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res)=> res.json())
//     .then((data)=>{
//         console.log(data[0])
      
//         nome.innerText = data[0].name
//         username.innerText = data[0].username

//     })

