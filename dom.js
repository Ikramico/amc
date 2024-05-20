let menuItem = document.querySelectorAll(".meni-item");

function active(i){
    menuItem.forEach((item)=> item.classList.remove('active'));
    i.classList.add('active');
}