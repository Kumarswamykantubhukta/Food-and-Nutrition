let con1=document.querySelector(".con1");
let con2=document.querySelector(".con2");
let con3=document.querySelector(".con3");
let con4=document.querySelector(".con4");
let signin=document.querySelector("#signin");
let signup=document.querySelector("#signup");
let signin2=document.querySelector("#signin2");
let signup2=document.querySelector("#signup2");
let h3=document.querySelector("#welcome");
let container=document.querySelector(".container");
let container2=document.querySelector(".container2");
let main=document.querySelector(".main-container");
let main2=document.querySelector(".main-container2");
signin.addEventListener("click",()=>{
   // con1.classList.add("trans1");
  
   container.style.visibility="hidden";
   container2.style.visibility="visible";

   main.setAttribute("class","main-container-change");
   main2.setAttribute("class","main-container2-change");
   
});
signup.addEventListener("click",(evn)=>{
   
});
signin2.addEventListener("click",(evn)=>{
   // con1.classList.add("trans1");
   
});
signup2.addEventListener("click",(evn)=>{
   container2.style.visibility="hidden"
   container.style.visibility="visible";
   // main2.style.top="500px";
   // // main2.stle.bottom="1px";
 
   // main.style.bottom="500px";
   main.setAttribute("class","main-container");
   main2.setAttribute("class","main-container2");
  
});
