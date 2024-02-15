const inputElement=document.getElementsByClassName('inputclass');
const inputbox=document.getElementsByClassName('inputwicon');


// For email box
inputElement[0].addEventListener('focus', (event) => {
    inputbox[0].style.borderBottom="2px solid #43cdf0";
})

inputElement[0].addEventListener('blur', (event) => {
    inputbox[0].style.borderBottom="2px solid #0a0403";
})

// For username box
inputElement[1].addEventListener('focus', (event) => {
    inputbox[1].style.borderBottom="2px solid #43cdf0";
})

inputElement[1].addEventListener('blur', (event) => {
    inputbox[1].style.borderBottom="2px solid #0a0403";
})

//for password box

inputElement[2].addEventListener('focus', (event) => {
    inputbox[2].style.borderBottom="2px solid #43cdf0";
})

inputElement[2].addEventListener('blur', (event) => {
    inputbox[2].style.borderBottom="2px solid #0a0403";
}   )