const checkbox=document.getElementById('suspectcheck');
const supectbox=document.getElementById('suspectdetails');

checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
        supectbox.style.display = "block";
    } else {
        supectbox.style.display = "none";
    }
    });