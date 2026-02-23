
//sgjvihd
let hhv = document.getElementById("bar"); 
hhv.addEventListener("click" , () =>{
  const aside = document.getElementById("aside");
  const crc = document.getElementById("icon2");
  aside.style.left = 0;
  hhv.style.display = "none";
  crc.style.display = "block";
} )
const hhb = document.getElementById("ban"); 
hhb.addEventListener("click" , () =>{
  const aside = document.getElementById("aside");
  const crc = document.getElementById("icon2");
  aside.style.left= " -100%";
  hhv.style.display = "block";
  crc.style.display = "none";
} )
