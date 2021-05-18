const icons = {
    choice: "",
    choiceTwo: ""
 }
 const skillsIcons = document.querySelectorAll('.fab');
 const adobeImg  = document.querySelectorAll('.adobe');

 function skillSelection() {
     icons.choice = this.dataset.option;
     skillsIcons.forEach(skill => skill.style.boxShadow = "");
     this.style.boxShadow = ' 0 0 0 10px yellow';
     document.querySelector('p.skillChoice').textContent = icons.choice;
 }

 function skillSelection2(){

     icons.choiceTwo = this.dataset.option2;
     adobeImg.forEach(img => img.style.boxShadow = "");
     this.style.boxShadow = ' 0 0 0 10px orange';
     document.querySelector('p.skillChoiceTwo').textContent = icons.choiceTwo;
 }
 skillsIcons.forEach(skill => skill.addEventListener('mousemove', skillSelection));
 adobeImg.forEach(img => img.addEventListener('mousemove', skillSelection2));
