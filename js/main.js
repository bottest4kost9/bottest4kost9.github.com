let elem = document.getElementById('arrow')
window.onscroll = function showArrow(){
    if(window.pageYOffset >300){
        elem.classList.remove('none')
    }
    else{
        elem.classList.add('none')
    }
}