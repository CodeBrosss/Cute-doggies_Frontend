let navEl = document.getElementById("nav-toggle")
 if(navEl){
    navEl.addEventListener('click', () => {
        document.body.classList.toggle("nav-open")
    
    })
}   


const imageRenderBody = document.getElementById("image__render-body")
console.l0g
let data = [{itemNum: 1,
image: "images/image01.jpg",
Name: "Dog name",
details:"Lorem ipsum dolor sit." },


{itemNum: 1,
    image: "images/image02.jpg",
    Name: "Dog name",
    details:"Lorem ipsum dolor sit." },



{itemNum: 1,
    image: "images/image03.jpg",
    Name: "Dog name",
    details:"Lorem ipsum dolor sit." },



{itemNum: 1,
    image: "images/image04.jpg",
    Name: "Dog name",
    details:"Lorem ipsum dolor sit." },
            


]

let render = () =>{
    return (imageRenderBody.innerHTML = data.map((x) =>{
         let   {itemNum, image, Name, details} = x

        return  `  
         <div class="image__render-body-item">
                <img src="${image}" alt="">
                <div class="image-details">
                    <h3>${Name} </h3>
                    <p>${details}</p>
                </div>
            </div>
         
         
                 `

    }).join(""))
}
render()