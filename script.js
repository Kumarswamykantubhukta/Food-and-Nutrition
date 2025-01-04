
let p=document.querySelector("#p1");
let b=document.querySelector("#b1");
let con2=document.querySelector(".con2");
let count=1;
let con=document.querySelector("#cahnge-con3");
let input=document.querySelector("#input1");
let searchbutton=document.querySelector("#b2");
b.addEventListener("click",(e)=>{
    if(count%2==0){
        con.setAttribute("id","cahnge-con3");
        con2.setAttribute("id","cahnge-con2");
        
        b.innerHTML='<i id="i2" class="fa-solid fa-toggle-on"></i>';
        p.textContent="DarkMode";
        count++;
    }
    else{
        con.setAttribute("id","change-con3");
        con2.setAttribute("id","change-con2");
        b.innerHTML='<i id="i2" class="fa-solid fa-toggle-off"></i>';
        p.textContent="LightMode";
        count++;
    } 
});
let selec=document.querySelector("#selc");
let selected=selec.value;
console.log(selected);
selec.addEventListener("change",(evt)=>{
   update(evt.target);
});
let update=function updated(element){
  selected=element.value;
}
let inputval;
searchbutton.addEventListener("click",(e)=>{
    e.preventDefault();
     inputval=input.value;
    console.log(inputval);
   redirect();
});
let newurl="index2.html";
let redirect=()=>{
    localStorage.setItem("key1",inputval);
    localStorage.setItem("key2",selected);
    window.location.href=newurl;
}
let banana=document.querySelector("#banana");
let  oats=document.querySelector("#oats");
let curd=document.querySelector("#curd");
let eggs=document.querySelector("#eggs");
let chicken=document.querySelector("#chicken");
let fish=document.querySelector("#fish");
let idli=document.querySelector("#idli");
let dosa=document.querySelector("#dosa");
banana.addEventListener("click",()=>{
    window.location.href="index2.html";
});
oats.addEventListener("click",()=>{
    window.location.href="index2.html";
});
curd.addEventListener("click",()=>{
    window.location.href="index2.html";
});
eggs.addEventListener("click",()=>{
    window.location.href="index2.html";
});
chicken.addEventListener("click",()=>{
    window.location.href="index2.html";
});
fish.addEventListener("click",()=>{
    window.location.href="index2.html";
});
idli.addEventListener("click",()=>{
    window.location.href="index2.html";
});
dosa.addEventListener("click",()=>{
    window.location.href="index2.html";
});
 
// let login=document.querySelector("#al");
// login.addEventListener("click",()=>{
//     window.location.href="index3.html";
// })

//`page2.html?data=${encodeURIComponent(inputValue)}`;

//const url = `https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&co2EmissionsClass=A%2B&field%5B0%5D=uri&beta=true&random=true&cuisineType%5B0%5D=American&imageSize%5B0%5D=LARGE&mealType%5B0%5D=${selected}&health%5B0%5D=alcohol-cocktail&diet%5B0%5D=balanced&dishType%5B0%5D=${inputval}`;




