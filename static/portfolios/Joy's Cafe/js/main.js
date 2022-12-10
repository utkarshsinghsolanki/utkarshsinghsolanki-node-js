var btn = document.querySelector(".menu-btn")
document.querySelector('.menu-btn').addEventListener("click", () => {
    document.querySelector('.nav').classList.toggle('nav-go')
    if (document.querySelector('.nav').classList.contains('nav-go')) {
        btn.style.transform = 'rotate(0deg)'
    }
    else {
        btn.style.transform = 'rotate(180deg)'
    }
})
function navgo(){
    document.querySelector('.nav').classList.add('nav-go')
    btn.style.transform = 'rotate(0deg)'
    
}

function requried(){
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let date = document.getElementById('date').value;
    name = name.length;
    phone = phone.length;
    date = date.length;
    if((!name==0) && (phone==10) && (!date==0)){
        alert("Reservation Recived");
    }
    if(name==0){
        alert("Please Fill Up Your Name.");
    }
    if(phone==0){
        alert("Please Fill Up Your Phone No.");
    }
    if(date==0){
        alert("Please Fill Up Date.");
    }
    if(phone!=10){
        alert("Please Enter Vaild Phone No.");
    }
}
function loaded(){
        let time = Math.random() * (2000 - 500) + 500;
        setInterval(() => {
            document.querySelector('.preloader').style.display = 'none';
            
        }, time);
}