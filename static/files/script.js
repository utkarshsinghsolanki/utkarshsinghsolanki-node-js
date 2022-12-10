let btn = document.querySelector(".menuBtn");
btn.addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("nav-go");
  document.querySelector(".menuBtn").style.transform = "rotate(180deg)";
  if (document.querySelector(".nav").classList.contains("nav-go")) {
    btn.style.transform = "rotate(0deg)";
  } else {
    btn.style.transform = "rotate(180deg)";
  }
});


function navgo() {
  document.querySelector(".nav").classList.add('nav-go')
  btn.style.transform = "rotate(0deg)"
}



function preloader(){
  let time = Math.random() * (2500 - 1000) + 500;
        setInterval(() => {
            document.querySelector('.preloader_parent').style.display = 'none';
        }, time);
}

window.addEventListener('scroll',()=>{
//Experties
let Bar = document.getElementsByClassName("skillContainer");
  

  if (screen.width<=600) {
    if(scrollY>2650){
      Array.from(Bar).forEach((element)=>{
        element.classList.add('AppearBar');
        console.log('appear x');
      })
    }
  }
  else if (screen.width<=850) {
    if(scrollY>1300){
      Array.from(Bar).forEach((element)=>{
        element.classList.add('AppearBar');
        console.log('appear b');
      })
    }
  }
  else{
    if(scrollY>1300){
      Array.from(Bar).forEach((element)=>{
        element.classList.add('AppearBar');
        console.log('appear b');
      })
    }
  }
  


  
// Services
let Box = document.getElementsByClassName("servicesBox");
if (screen.width<=600) {
  if(scrollY>3250){
    Array.from(Box).forEach((element)=>{
      element.classList.add('AppearBox');
      console.log('appear x');
    })
  }
}
else if (screen.width<=850) {
  if(scrollY>1500){
    Array.from(Box).forEach((element)=>{
      element.classList.add('AppearBox');
      console.log('appear b');
    })
  }
}
else{
  if(scrollY>1800){
    Array.from(Box).forEach((element)=>{
      element.classList.add('AppearBox');
      console.log('appear y');
    })
  }
}
})