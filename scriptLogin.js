const inputElement=document.getElementsByClassName('inputclass');
const inputbox=document.getElementsByClassName('inputwicon');


// For username box
inputElement[0].addEventListener('focus', (event) => {
    inputbox[0].style.borderBottom="2px solid #43cdf0";
})

inputElement[0].addEventListener('blur', (event) => {
    inputbox[0].style.borderBottom="2px solid #0a0403";
})

// For password box
inputElement[1].addEventListener('focus', (event) => {
    inputbox[1].style.borderBottom="2px solid #43cdf0";
})

inputElement[1].addEventListener('blur', (event) => {
    inputbox[1].style.borderBottom="2px solid #0a0403";
})