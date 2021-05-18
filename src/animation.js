const reveals = document.querySelectorAll('.reveal');

function reveal(){
    reveals.forEach(function(item){
        let revealPosition = item.getBoundingClientRect().top;
        let revealPositionPercent = (revealPosition/ window.innerHeight) * 100;

        if(revealPositionPercent <= 70){
            item.classList.add('appear')
        }else {
            item.classList.remove('appear')
        }
    })
}
window.addEventListener('scroll', reveal)
