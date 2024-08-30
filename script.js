let str = document.querySelector('h5')
let add = document.querySelector('#add')
let bd = document.querySelector('img')
let check=0;

add.addEventListener('click',function(){
    if(check==0){
        str.innerHTML = "Friends";
        str.style.color="green";
        bd.style.border="2px solid green";
        check=1;
    }
    else{
        str.innerHTML = "Stranger";
        str.style.color="coral";
        bd.style.border="2px solid coral";
        check=0;
    }
})