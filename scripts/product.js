let proData;
let page=0;
let url="https://olx-9qd2.onrender.com"

async function getFree(proData){
    let res= await fetch(`${url}/products?page=${page}`)
     proData= await res.json();

    appendData(proData)
}
getFree(proData);

let prev= document.getElementById("prev");
let next= document.getElementById("next");

prev.addEventListener("click", function prevPage(){
 page--;
 getFree(proData);

})
next.addEventListener("click", function nextPage(){
 page++;
 getFree(proData);

})

let mainDiv= document.getElementById("container");

function appendData(myData){
mainDiv.innerHTML=null;

myData.forEach((el, index)=>{
    let card= document.createElement("div");

    let image= document.createElement("img");
    image.src= el.image

    let name= document.createElement("h3");
    name.textContent=el.name;
    let description= document.createElement("p");
    description.textContent=`description: ${el.description}`;

    let category= document.createElement("p");
    category.textContent=`category: ${el.category}`;

    let location= document.createElement("p");
    location.textContent=`location: ${el.location}`;
    
    let price= document.createElement("p");
    price.textContent=`price: ${el.price}`;

    let postedAt= document.createElement("p");
    postedAt.textContent=`postedAt: ${el.postedAt}`;

    let editBtn= document.createElement("button");
    editBtn.innerText="Edit";
    editBtn.style.backgroundColor="blue";
    editBtn.onclick=(event)=>{
        event.preventDefault();
        console.log("yes")
    
        myFun(el);

      }

    let deleteBtn= document.createElement("button");
    deleteBtn.innerText="Delete";
    deleteBtn.style.backgroundColor="red"
    deleteBtn.onclick= async()=>{
        let bookId= el.id;
        let res= await fetch(`${url}/products/delete/${bookId}`,{
          method:'DELETE',
          headers:{
            'Content-Type': 'application/json'
          }
        });
         proData= await res.json();
         getFree(proData);

      }
    card.append(image,name,description,category,location,price,postedAt,editBtn,deleteBtn)
    mainDiv.append(card);
})

}

function myPFChange(){
   
let myPf= document.getElementById("myPf").value;
console.log(myPf)

    if(myPf==""){
        getFree(proData);

    } 
    else if(myPf!="" ){

        let getData2=async(proData)=>{
            apiUrl=`${url}/products/filterdata?category=${myPf}`
            
                try {
                    let res= await fetch(apiUrl);
        
            proData=await res.json();

                    appendData(proData)
                } catch (error) {
                    console.log("Error while fetching data");
                }
            }
            
            getData2(proData);

    }
}

async function mysort(){
    try {
        let res= await fetch(`${url}/products/low`);

    proData=await res.json();

        appendData(proData)
    } catch (error) {
        console.log("Error while fetching data");
    }
}
async function mysort2(){
    try {
        let res= await fetch(`${url}/products/high`);

    proData=await res.json();

        appendData(proData)
    } catch (error) {
        console.log("Error while fetching data");
    }
}

//Update Data
let mid= document.getElementById("mid");
let upName = document.getElementById("upName");
let updescription = document.getElementById("updescription");
let upImage = document.getElementById("upImage");
let upPro = document.getElementById("upPro");
let uplocation = document.getElementById("uplocation");
let upRate = document.getElementById("upRate");
let upBook = document.getElementById("upBook");
let update = document.getElementById("update-btn");

function myFun(el){
  mid.value=el._id;
  upName.value=el.name;
  updescription.value=el.description;
  upImage.value=el.image;
  upPro.value=el.category;
  uplocation.value=el.location;
  upBook.value=el.postedAt
  upRate.value=el.price;
}

update.onclick=()=>{
  updateFree();
  }
  
  const updateFree= async()=>{
    let id= mid.value;
    let name= upName.value;
    let description= updescription.value;
    let image= upImage.value;
    let category= upPro.value;
    let location= uplocation.value;
    let price= +upRate.value;
    let postedAt= upBook.value;
  
    let sendData= {name,description,image,category,location,price,postedAt};
  
    let res= await fetch(`${url}/products/update/${id}`, {
      method:'PATCH',
      body: JSON.stringify(sendData),
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    proData= await res.json();
    getFree(proData);

  }

//   const myFun2= async(el)=>{
//     let hme= document.getElementsByClassName("hme");
//     hme.disabled=true;
//     let id= el.id;
//     let postedAt= true;
  
//     let sendData= {postedAt};
  
//     let res= await fetch(`${url}/products/${id}`, {
//       method:'PATCH',
//       body: JSON.stringify(sendData),
//       headers:{
//         'Content-Type': 'application/json'
//       }
//     });
//     proData= await res.json();
//     getFree(proData);
//   }

//   function check(proData){
//     for(let i=0;i<=proData.length-1;i++){
//         if(proData[i].postedAt==true){

//         }
//     }
//   }