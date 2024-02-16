// import { createHash } from 'crypto';

const checkbox=document.getElementById('suspectcheck');
const supectbox=document.getElementById('suspectdetails');
const declaration=document.getElementById('declaration');
const submit=document.getElementById('submit');
const inputclass=document.getElementsByClassName('inputclass');

checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
        supectbox.style.display = "block";
        console.dir(inputclass);
    } else {
        supectbox.style.display = "none";
        console.dir(inputclass);
        
    }
    });

declaration.addEventListener('change', (event) => {
    if (event.target.checked) {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
    });

function validateinput(){
    for(let i=0; i<inputclass.length; i++){
        if(inputclass[i].value==''){
            return false;
        }
    }
}

//read data from the form
submit.addEventListener('click', (event) => {

    const object={};
    for (let i=0; i<inputclass.length; i++) {
        object[i]=inputclass[i].value;
    }
    const stri=JSON.stringify(object);
    console.log(stri);

});


// function hashString(inputString) {
//   const hash = createHash('sha256');
//   hash.update(inputString);
//   return hash.digest('hex');
// }

// // Example usage:
// const inputString = "Hello, World!";
// const hashedString = hashString(inputString);
// console.log("Hashed String:", hashedString);

