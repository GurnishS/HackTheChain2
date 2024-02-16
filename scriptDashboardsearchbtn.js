const searchbar = document.querySelector('.searchbar');
const searchbtn = document.querySelector('.searchbutton');
const search = document.querySelector('.search');
const closebtn = document.querySelector('.closebutton');

searchbtn.addEventListener('click',function(){
    console.log(search.classList.contains('active'));
    if (search.classList.contains('active')) {
        searchbar.value = ''
    }
    else{
        search.classList.add('active');
        searchbar.focus();
    }
});

closebtn.addEventListener('click',function(){
    search.classList.remove('active');
    searchbar.value = '';
})