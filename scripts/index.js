
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let form = document.querySelector(".form-section");
let url=`https://olx-9qd2.onrender.com`
// let url=`https://olx-9qd2.onrender.com`
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    form.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    form.classList.remove("form-section-move");
});

let signupBtn= document.getElementById("signupBtn");

signupBtn.addEventListener("click", async (event)=>{
    event.preventDefault();

    let email= document.getElementById("email").value;
    let password= document.getElementById("pass").value;
    let confirmPassword= document.getElementById("cPass").value;

    let obj={email,password,confirmPassword};

    let res= await fetch(`${url}/users/signup`, {
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    
       });
       let data= await res.json();
       window.alert("Successfully registered.")
})

let loginBtn= document.getElementById("loginBtn")

loginBtn.addEventListener("click", async (event)=>{
    event.preventDefault();

    let email= document.getElementById("email2").value;
    let password= document.getElementById("pass2").value;
   

    let obj={email,password};

    let res= await fetch(`${url}/users/login`, {
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    
       });
       let data= await res.json();
       if(data.token){
        localStorage.setItem("olxToken", JSON.stringify(data.token))
       window.alert("Successfully Login")
       window.location.href="addproduct.html"
       return false;
    }else{
       window.alert("Wrong Credentials")
        
       }
})