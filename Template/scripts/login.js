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
    return result;
    } catch (error) {
    const jsonError = await JSON.stringify(error);
    console.log(jsonError);
    }
};


let inputForm = document.getElementById('input-form') // get form element from html page


// run this function when form is filled
let loginUser = async (event) => {
    event.preventDefault() // prevent browser default
     
    // get input values
    let username = event.target.userName.value
    let password = event.target.password.value

    // check if all fields have been filled before registering.
    if(!username || !password) {
        alert("All fields required.");
        return;
    }

    // store values as obj to send to backend
    let userObj = {
        username,
        password
    };
    
    // send to backend using fetch API
    fetchAPI(userObj, 'auth/login', 'POST')
    .then((data) => { // if logged in, redirect to home page
        if(!data) {
            alert('User does not exist.');
            return;
        } else{
            
            localStorage.setItem('user data', data.user);
            localStorage.setItem('token', data.token);
            alert(data.message)
            window.location.href = "../Template/home.html"
        }
    })
}

inputForm.addEventListener('submit', loginUser); 