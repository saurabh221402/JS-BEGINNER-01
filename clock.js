//  setInterval(fun,1000)
//  function fun()
//  {
//  let hour=document.querySelector('.h');
//  let minute=document.querySelector('.min');
//  let second=document.querySelector('.sec');
//  let currentTime= new Date();
//     hour.innerHTML=currentTime.getHours();
//     minute.innerText=currentTime.getMinutes();
//     second.innerHTML=currentTime.getSeconds();
//  } 

// setInterval(()=>{
//     let hour=document.querySelector('.h');
// let minute=document.querySelector('.min');
// let second=document.querySelector('.sec');
// let currentTime= new Date();
//    hour.innerHTML=currentTime.getHours();
//    minute.innerText=currentTime.getMinutes();
//    second.innerHTML=currentTime.getSeconds();
// },1000)
 
setInterval(function () {
    let hour=document.querySelector('.h');
let minute=document.querySelector('.min');
let second=document.querySelector('.sec');
let currentTime= new Date();
   hour.innerHTML=currentTime.getHours();
   minute.innerText=currentTime.getMinutes();
   second.innerHTML=currentTime.getSeconds();
},1000)