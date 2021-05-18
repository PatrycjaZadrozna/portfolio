const photo = document.querySelector('.headshot');
const photo2 = 'src/img/me2.jpg';

function changeImg(){
    photo.src = photo2;
}
function changeImgBack(){
    photo.src = 'src/img/me.jpg';
}

photo.addEventListener('mouseover', changeImg);
photo.addEventListener('mouseout', changeImgBack);
