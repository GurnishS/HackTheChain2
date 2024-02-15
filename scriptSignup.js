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

//validation

const loginbutton=document.getElementsByClassName('signupbutton')[0];

loginbutton.addEventListener('click', (event) => {
    const email=inputElement[0].value;
    const username=inputElement[1].value;
    const password=inputElement[2].value;
    if((email=='' || email.length<11) & inputbox[0].lastChild.className!="fa-solid fa-circle-exclamation"){
        //alert('Please fill all the fields');
        const newele = document.createElement("i");
        newele.className="fa-solid fa-circle-exclamation";
        newele.style.color = 'red';
        newele.style.marginRight='10px';
        inputbox[0].appendChild(newele);
    }

    if((username=='' || username.length<8) & inputbox[1].lastChild.className!="fa-solid fa-circle-exclamation"){
        //alert('Please fill all the fields');
        const newele = document.createElement("i");
        newele.className="fa-solid fa-circle-exclamation";
        newele.style.color = 'red';
        newele.style.marginRight='10px';
        inputbox[1].appendChild(newele);
    }

    if((password=='' || password.length<8) & inputbox[2].lastChild.className!="fa-solid fa-circle-exclamation"){
        //alert('Please fill all the fields');
        const newele = document.createElement("i");
        newele.className="fa-solid fa-circle-exclamation";
        newele.style.color='red';
        newele.style.marginRight='10px';
        inputbox[2].appendChild(newele);
    }
})

loginbutton.addEventListener('blur', (event) => {
    if(inputbox[0].lastChild.className=="fa-solid fa-circle-exclamation"){
        inputbox[0].removeChild(inputbox[0].lastChild);}
    if(inputbox[1].lastChild.className=="fa-solid fa-circle-exclamation"){
        inputbox[1].removeChild(inputbox[1].lastChild);}
    if(inputbox[2].lastChild.className=="fa-solid fa-circle-exclamation"){
        inputbox[2].removeChild(inputbox[2].lastChild);}
})