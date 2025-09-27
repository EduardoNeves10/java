let name = document.getElementById("name")
let username = document.getElementById("usernam")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let street = document.getElementById("street")
let city = document.getElementById("city")
let company = document.getElementById("company")

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.json())
    .then((big)=> {
        console.log(big[0])
        
        name.innerTextt = big[0].name
        usernam.innerText = big[0].username
        email.innerText = big[0].email
        phone.innerText = big[0].phone
        street.innerText = big[0].street
        city.innerText = big[0].city
        company.innerText = big[0].company

})