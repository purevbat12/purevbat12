var questions = [
   {
        prompt: "What is html language used for ?\n(a) It is used for developing programm\n\ (b) It is used for creating a game\n(c) It is used for developing a web page" ,
        answer: "c",
   },
   {
        prompt: "What is purpose of css language ?\n(a) It's purpose is to do a specific task in the html\n\ (b) It's purpose is to embed media in html\n(c) It's purpose is to design the web page",
        answer: "c",
   },
   {
        prompt: "What does javascript do ?\n(a) It lets you create application\n\ (b) It creates a function into html\n(c) It styles the web page",
        answer: "b"
   }
]
var score = 0
for(var i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer)  {
    score++;
    alert("Right");
    }
    else {
        alert("Wrong");
    }
}
alert("you got " + score + "/" + questions.length);