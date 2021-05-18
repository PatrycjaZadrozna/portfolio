
const hobbyImg = document.querySelector('.hobby');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

function hobby1(){
    hobbyImg.src = 'src/img/hobby1.jpg';

}
function hobby2(){
    hobbyImg.src = 'src/img/hobby2.jpg';
}
function hobby3(){
    hobbyImg.src = 'src/img/hobby3.jpg';
}

btn1.addEventListener('click', hobby1);
btn2.addEventListener('click', hobby2);
btn3.addEventListener('click', hobby3);
