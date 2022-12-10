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
  // let time = Math.random() * (2500 - 1000) + 500;
  //       setInterval(() => {
  //           document.querySelector('.preloader_parent').style.display = 'none';
  //       }, time);
}

window.addEventListener('scroll',()=>{
  //Experties
  let Bar = document.getElementsByClassName("skillContainer");
  if(scrollY>1200){
    Array.from(Bar).forEach((element)=>{
      element.classList.add('AppearBar');
      console.log('appear');
    })
  }
  if (window.width) {
    
  }
  
  // Services
  let Box = document.getElementsByClassName("servicesBox");
  if (scrollY>2250) {
    Array.from(Box).forEach((element)=>{
      element.classList.add('AppearBox')
    })
  }
})