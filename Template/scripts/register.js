let navEl = document.getElementById("nav-toggle")
 if(navEl){
    navEl.addEventListener('click', () => {
        document.body.classList.toggle("nav-open")
    
    })
 }   


 const API = "http://localhost:3000/api/v1";

 const fetchAPI  = async (data, endPoint, method) => {
     try {
        const response = await fetch(`${API}/${endPoint}`, {
            method: method,
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })

        const result = await response.json()
        console.log(result);
        return result;
     } catch (error) {
        const jsonError = await JSON.stringify(error);
        console.log(jsonError);
     }
 };


let inputForm = document.getElementById('input-form') // get form element from html page


// run this function when form is filled
let registerUser = async (event) => {
    event.preventDefault() // prevent browser default
     
    // get input values
    let firstName = event.target.firstName.value
    let lastName = event.target.secondName.value
    let username = event.target.userName.value
    let email = event.target.email.value
    let password = event.target.password.value

    // check if all fields have been filled before registering.
    if(!firstName || !lastName || !username || !email || !password) {
        alert("All fields required.");
        return;
    }

    // store values as obj to send to backend
    let userObj = {
        firstName,
        lastName,
        username,
        email,
        password
    };
    
    // send to backend using fetch API
    fetchAPI(userObj, 'auth/register', 'POST')
    .then((data) => { // if registered, redirect to login page
        if(!data) {
            alert('User already exists.');
            return;
        } else{
            alert(data.message)
            window.location.href = "../Template/login.html"
        }
    })
}

inputForm.addEventListener('submit', registerUser);