
var btn = document.querySelector('button');
var ul = document.querySelector('ul');
var controlToggle = true;

function slideToggle(boolControl, strText) {

    (strText === "show") ? ul.classList.remove('show') : ul.classList.add('show');
    controlToggle = boolControl;
    this.innerText = strText;

}

btn.addEventListener('click', function() {

    if(controlToggle) {
        slideToggle(false, 'hide');
    } else {
        slideToggle(true, 'show');
    }
    
})
