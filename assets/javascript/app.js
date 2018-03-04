
var userPick
var correctAnswer
var wrongAnswer
var timeDisplay
var counter

var musicQuestion = [ { 
    question: "Who sings the hit song Hello?", 
    answers:  ["Adele", "Justin Beiber", "Pink", "Beyonce"],
    rightAnswer: 0
}, {
    question: "Who created carpool Karaoke?",
    answers: ["Jimmy Fallon", "David Letterman", "James Cordon", "Dave Chappelle"],
    rightAnswer: 2
}, {
    question: "He is called the King of POP",
    answer: ["Prince", "Michael Jackson", "Justin Timberlake", "Drake"],
    rightAnswer: 1
}, {
    question: "Which artist released an album called Lemonade?",
    answer: ["Adele, Celine Dion", "Beyonce", "Demi Lovato"],
    rightAnswer: 2
}

function timer(){
    count--;
    if (count <= 0) {
     clearInterval(counter);
     return;

 $("#start_button").click(function(){
    $(this).hide();
    counter = setInterval(timer, 1000); //define timer function (displays to user time left)
    displayTrivia();
    setTimeout(function(){ alert("Times Up"); }, 30000);
    }); 

function displayTrivia(){
    $("#game").append("<div>" + musicQuestion[0].question + "</div>")
    //html form input
    //class for radio inputs(answer options)
    //.apped(musicquests.answers)

    
}
//function to check answers and displays score, once time is up
