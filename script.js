
//step 1: create global variable for user's input to go later, when we will print to the screen 
//step 3a: if user enters nothing - print "you must neter a question"
//step 3b: on click, print user input
//step 4: on click, print random answer
const myApp = {};
myApp.$userQuestion = '';
myApp.$fortune = $('.fortune'); //defining variables for html class
myApp.$question = $('.user-question'); //defining variables for html class

//step 2: create an array of standard answers
myApp.answers = [
    "As I see it, yes",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don’t count on it",
    "It is certain",
    "It is decidedly so",
    "Most likely",
    "My reply is no",
    "My sources say no",
    "Outlook good",
    "Outlook not so good",
    "Reply hazy try again",
    "Signs point to yes",
    "Very doubtful",
    "Without a doubt",
    "Yes",
    "Yes, definitely",
    "You may rely on it"
];

//event listener for submit button
    myApp.handleSubmit = function(){
        $('.form-submit').on('submit', function (e) {
            e.preventDefault();

            //method on submit to randomize answers.
            myApp.randoNum = () => {
                // console.log(Math.floor(Math.random() * myApp.answers.length));
                
                return Math.floor(Math.random() * myApp.answers.length);
                
            };  //randoNum method ends here

            
            //conditional to determine if user left input box blank
            myApp.userInputValue = function() {
                if ($('.form-submit input[type=text]').val() !== '') {
                    //$questionInput is equal to the value of the user input
                    myApp.$questionInput = $('input[type=text]').val();
                    //the empty $userQuestion variable defined at the top is equal to $questionInput
                    myApp.$userQuestion = myApp.$questionInput
                };
            }; //userInput ends here
            
            
            myApp.printToPage = function (item) {
                //variable to store value of myApp.randoNum()
                let random = myApp.randoNum();
                //print to page, the user's question & Magic 8 Ball Fortune
                myApp.$question.html(`<h2 class="print-question">You typed ${myApp.$userQuestion} ?</h2>`);
                myApp.$fortune.html(`<h2 class="answer">Magic 8 ball says: ${myApp.answers[random]}</h2>`);
            };
            
            myApp.randoNum(); // calling randoNum Function
            myApp.userInputValue(); //calling userInputValue Function
            myApp.printToPage(); // calling printToPage Function
        });
    }

//clear fortune, and clear users printed input so they can enter something else into the input field. 
    myApp.clearInput = function () {
        $('.re-submit').on('click', function () {
            $('.user-input').val('');
            $('.fortune').empty('')
        });
    }; 
    
//initializing everything on page load
    myApp.init = function(){
        myApp.handleSubmit(); //calling handleSubmit Function
        myApp.clearInput(); // calling clearInput Function
    };

$(function(){
    myApp.init();
}) //doc ready