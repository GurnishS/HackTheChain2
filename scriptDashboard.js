const newfir=document.getElementById('newfirbutton');
const profile=document.getElementById('profile');
const dropdown=document.getElementById('dropdown');
const para=profile.firstElementChild;

const width=profile.offsetLeft-130;
const height=profile.offsetTop+60;
dropdown.style.left=width+'px';
dropdown.style.top=height+'px';

newfir.addEventListener('click',()=>{
    window.location.href='form.html';
});

window.addEventListener('resize', () => {
    // const width_bar=searchandprofile.clientWidth;
    // const width=(window.innerWidth-width_bar)/2-130;
    const width=profile.offsetLeft-130;
    const height=profile.offsetTop+60;
    dropdown.style.left=width+'px';
    dropdown.style.top=height+'px';
});

profile.addEventListener('click',()=>{
    if(dropdown.style.display==='none'){
        dropdown.style.display='block';
    }
    else{
        dropdown.style.display='none';
    }
});

profile.addEventListener('blur',()=>{
    dropdown.style.display='none';
});

window.addEventListener('click',(event)=>{
    if(event.target!==profile && event.target!==para ){
        dropdown.style.display='none';
    }
});