document.getElementById('menucontainer').addEventListener('wheel', function(event) {
    var scrollTop = this.scrollTop;
    this.scrollTop = scrollTop + event.deltaY;
    event.preventDefault();
});
