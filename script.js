const element = document.getElementById("open");
element.addEventListener("click", openlabel);
function openlabel(){
    let close = document.getElementById("close");
    element.style.display = 'none';
    close.style.display  = 'block';
    let ham = document.getElementById("ham");
    ham.style.display = 'block';
    ham.style.display = 'flex';
    console.log("open");
}

const close_element = document.getElementById("close");
close_element.addEventListener("click",closelabel);
function closelabel(){
    let open = document.getElementById("open");
    open.style.display = 'block';
    close_element.style.display = 'none';
    let ham = document.getElementById("ham");
    ham.style.display = 'none';
    console.log("close");
}

// document.getElementsByClassName("nav1").addEventListener("click",menu);
// function menu(){

// }
