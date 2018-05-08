
var btn = document.querySelector('button');
var ul = document.querySelector('ul');
var controlToggle = true;
btn.addEventListener('click', function() {

    if(controlToggle) {
        ul.classList.add('show');
        controlToggle = false;
        this.innerText = "hide";
        console.log("bylem");
    } else {
        ul.classList.remove('show');
        controlToggle = true;
        this.innerText = "show";
        console.log("jestem");
    }
})
