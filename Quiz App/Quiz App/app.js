var questions = [
    {
        question: "HTML stands for ____________",
        option: ["Hypertext Markup Language","Hypertest Markup Language","Hypertext Modren Lanhuage","None of the above"],
        correctAnswer:"Hypertext Markup Language"
    },
    {
        question: "CSS stands for ____________",
        option: ["Cascading Style Sheet","Cascading Spread Sheet","Creative Style Sheet","Common Style Sheet"],
        correctAnswer:"Cascading Style Sheet"
    },
    {
        question: "JS Stand for ____________",
        option: ["JavaScript","JavaSheet","JungleScout","Jungle Scene"],
        correctAnswer:"JavaScript"
    }
    
]


var questionIndex = 0;
var marks = 0;
var submitBtn = document.getElementById('submitBtn')
var nextButton = document.getElementById('nextButton')
var len = questions.length;

function nextQuestion(){
    //submitBtn.style.display = "none"
    var span1 = document.getElementById("span1");
    span1.innerHTML = questionIndex+1;
    var span2 = document.getElementById("span2");
    span2.innerHTML = questions.length;
    var displayQuestion = document.getElementById("displayQuestion");
    displayQuestion.innerHTML = questions[questionIndex].question;
    var optionDiv = document.getElementById("optionDiv");
    for (var i = 0; i <= questions[questionIndex].option.length - 1; i++){
        var div = document.createElement("div");
        div.setAttribute("class","col-md-6")
        var optionDisplay = document.createElement("button");
        optionDisplay.setAttribute("class","btn")
        optionDisplay.setAttribute("onClick","correctAnswer(this)")
        var optionShow = document.createTextNode(questions[questionIndex].option[i]);
        optionDisplay.appendChild(optionShow)
        div.appendChild(optionDisplay)
        optionDiv.appendChild(div)

    }
    btnDisplay()
    
}
function btnDisplay(){
   submitBtn.style.display = "none"
  if(questionIndex == questions.length-1){
    submitBtn.style.display = "block"
    nextButton.style.display = "none"
  }
 } 
 console.log(questionIndex)

nextQuestion()

function nextBtn(){
    questionIndex++
    optionDiv.innerHTML = ""
    nextQuestion()

}

function correctAnswer(e){
    var userResponse = e.innerHTML;
    // console.log(userResponse)
    if(userResponse == questions[questionIndex].correctAnswer){
        marks++
        console.log(marks)
    }else if(userResponse != questions[questionIndex].correctAnswer){
        marks--
        console.log(marks)
    }
    
    
}


    function submitbutton(){
    
       
        document.location.href = "result.html"
       
        storage()
    }
    function storage(){

        var totalMarks = localStorage.setItem("quizMarks", marks)
        console.log(totalMarks)
    }
