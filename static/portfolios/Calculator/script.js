let button = document.getElementsByTagName('button');
let screen = document.getElementById('value');
let str = '';
for(item of button){
    item.addEventListener('click', (e)=>{
        value = e.target.innerText;
        if(screen.innerText == '0' || screen.innerText == '00' ){
            str = screen.innerText;
            screen.innerText = value;
        }
        else if (value == '×') {
            str = screen.innerText;
            screen.innerText += '*';
        }
        else if(value == '÷') {
            str = screen.innerText;
            screen.innerText += '/';
        }
        else if(value == '<--'){
            let str = '';
            if(screen.innerText != 0){
                for(let i = 0; i < screen.innerText.length -1; i++){
                    str += screen.innerText[i]
                }
                screen.innerText = str;
            }
            if(str == ''){
                screen.innerText = 0;
            }
        }
        else if(value == '='){
            str = screen.innerText;
            screen.innerText = eval(screen.innerText);
        }
        else{
            str = screen.innerText;
            screen.innerText += value;
        }
        if(value == 'C'){
            screen.innerText = "0";
            str = '';
        }
        
    });
}