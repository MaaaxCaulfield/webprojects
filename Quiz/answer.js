var j;
var i = 0;
var score = 0;
var container = document.getElementById("container");
var question = document.getElementById("question");
var Button;
function Score() {
    if (this.innerHTML === Questions[i].choice[Questions[i].correct]) {
        score++;
        i++;
        update();
    } else {
        i++;
        update();
    }
}
function ButtonCreate() {
    for (j = 0; j < Questions[0].choice.length; j = j + 1) {
        Button = document.createElement("div");
        container.appendChild(Button);
        Button.classList.add("panel", "panel--option");
        Button.innerHTML = Questions[0].choice[j];
        question.innerHTML = Questions[0].text;
        Button.addEventListener("click", Score);
    }
}
function update() {
    var Buttons = document.getElementsByClassName("panel--option");
    for (var h = 0; h < Buttons.length; h++) {
        if (i < Questions.length){
            question.innerHTML = Questions[i].text;
            Buttons[h].innerHTML = Questions[i].choice[h];
    }else{
        for (h = 0; h < Buttons.length; h++){
            Buttons[h].style.display = "none"; 
            question.style.display = "none";
        }
        var paragraph = document.createElement("p");
        paragraph.classList.add("paragraph");
        container.appendChild(paragraph);
        paragraph.innerHTML = "Всего правильных ответов:" +  score  + "/" + Questions.length;
    }
}
}
ButtonCreate();