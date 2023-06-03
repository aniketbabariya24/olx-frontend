let form= document.getElementById("addProduct");
let url="https://olx-9qd2.onrender.com"
form.onsubmit= async (event)=>{
event.preventDefault();

let name= form.name.value;
let image= form.image.value;
let description= form.description.value;
let location= form.location.value;
let category= form.category.value;
let postedAt= form.postedAt.value;
let price= form.price.value;


let obj={name,image,description,location,category,postedAt,price};
// console.log(obj);
let res= await fetch(`${url}/products/add`, {
    method:'POST',
    body:JSON.stringify(obj),
    headers:{
        'Content-Type':'application/json'
    }

   });
    let data= await res.json();
    window.alert("Successfully Added.")
    window.location.href="product.html"
    return false;
}