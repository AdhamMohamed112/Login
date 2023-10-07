let b1 = document.querySelector(".b2");
b1.onkeyup = function(){
    if(b1.value.length < 8){
        b1.style.border = '3px solid red';
        document.querySelector(".h3").style.display = 'block';
        document.querySelector(".h3").style.color = 'Red';
    }else{
        b1.style.border = '4px solid green';
        document.querySelector(".h3").style.display = 'block';
        document.querySelector(".h3").style.color = 'seagreen';
        
    }
    if(b1.value == ''){
        b1.style.border = 'none';
        document.querySelector(".h3").style.display = 'block';
        document.querySelector(".h3").style.color = '#ccc';
    }

}
b1.onblur = function(){
    if(b1.value.length < 8){
        b1.style.border = '3px solid red';
        document.querySelector(".h3").style.display = 'block';
        document.querySelector(".h3").style.color = 'Red';

    }else{
        b1.style.border = 'none';
        document.querySelector(".h3").style.display = 'block';
        document.querySelector(".h3").style.color = 'seagreen';
    }if(b1.value == ''){
        b1.style.border = 'none';
        document.querySelector(".h3").style.display = 'block';
        document.querySelector(".h3").style.color = '#ccc';
    }


}


let ico1 = document.querySelector(".eye");
let ico2 = document.querySelector(".eye1")
let b3 = document.querySelector(".b1");

ico1.onclick = function(){
    ico2.style.display = "block"
    ico1.style.display = "none"
    b3.type = 'text'
}
ico2.onclick = function(){
    ico2.style.display = "none"
    ico1.style.display = "block"
    b3.type = 'password'
}