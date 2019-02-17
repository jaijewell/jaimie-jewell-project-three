const myApp = {}; //attempt to apply name spacing
myApp.$userName = ''; //empty space for $userName re: printNameToPage
myApp.$userQuestion = ''; //empty space for $userQuestion re: printToPage
myApp.$name = $('.intro'); //defining variable for html class
myApp.$fortune = $('.fortune'); //defining variable for html class
myApp.$question = $('.user-question'); //defining variable for html class

// array of possible answers .form-submit on submit
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

//event listener for submit buttons
    myApp.handleSubmit = function(){
        
        $('#name-button').on('click', function () {
            $('html, body').animate({
            scrollTop: $('#name').offset().top
             }, 1000);
        }); //smooth scroll from header a tag click to name entry, found on stack overflow

        $('#submit-name').on('click', function () {
            $('html, body').animate({
                scrollTop: $('#question').offset().top
            }, 1000);
        }) // smooth scroll from submit name to question

        $('#submit').on('click', function () {
            $('html, body').animate({
                scrollTop: $('#result').offset().top
            }, 1000);
        }) // smooth scroll from submit name to question
        
        //form submit for name
        $('.name-form').on('submit', function (e) {
            e.preventDefault();
            
            myApp.userNameInput = function () {
                if ($('.name-form input[type=text]').val() !== '') {
                    myApp.$nameInput = $('.name-form input[type=text]').val();
                    myApp.$userName = myApp.$nameInput
                } else { //error handling blank myApp.$nameInput
                    myApp.$nameInput = "human"; 
                    myApp.$userName = myApp.$nameInput;
                }
            } //userNameInput function ends here

            
            myApp.printNametoPage = function () {
                //print to page, the user's question & Magic 8 Ball Fortune
                myApp.$name.html(`<p class="print-name">Is this your first time <span>${myApp.$userName} </span>? Nice. Ask questions that can be answered with yes, no or maybe.</p>`);
                };//printNameToPage function end here

            myApp.userNameInput();
            myApp.printNametoPage();
            }); // .submit-name on submit ends here
           
        //form submit for question
        $('.form-submit').on('submit', function (e) {
            e.preventDefault();

            //method on submit to randomize answers.
            myApp.randoNum = () => {
                return Math.floor(Math.random() * myApp.answers.length);
            };  //randoNum method ends here
   
            //conditional to determine if user left input box blank
            myApp.userInputValue = function() {
                if ($('.form-submit input[type=text]').val() !== '') {
                    //$questionInput is equal to the value of the user input
                    myApp.$questionInput = $('.form-submit input[type=text]').val();
                    //the empty $userQuestion variable defined at the top is equal to $questionInput
                    myApp.$userQuestion = myApp.$questionInput
                };    
                console.log(myApp.$userQuestion)
            }; //userInput ends here
            
            
            myApp.printToPage = function (item) {
                //variable to store value of myApp.randoNum()
                let random = myApp.randoNum();
                //print to page, the user's question & Magic 8 Ball Fortune
                myApp.$question.html(`<h3 class="print-question">You typed <span>${myApp.$userQuestion}</span>?</h3>`);
                myApp.$fortune.html(`<h3 class="answer">Magic 8 ball says: <span>${myApp.answers[random]}</span></h3>`);
            };
            
            myApp.randoNum(); // calling randoNum Function
            myApp.userInputValue(); //calling userInputValue Function
            myApp.printToPage(); // calling printToPage Function
        });
    } //handleSubmit ends here



    
// myApp.userNameValue = function () {
//     if ($('.name-form-container input[type=text]').val().length !== '') {
//         myApp.$nameInput = $('input[type=text]').val();
//         myApp.$userName = myApp.$nameInput
//     };
//     userNameValue()
//     console.log(myApp.$userName)
// }
    


    
    // () => {
    //     if ($('.name-form-container input[type=text]').val() !== '') {
    //         //$nameInput is equal to the value of the user input
    //         myApp.$nameInput = $('input[type=text]').val();
    //         //the empty $userName variable defined at the top is equal to $nameInput
    //         myApp.$userName = myApp.$nameInput
        // }; 
        // myApp.userNameInput();
   





//clear fortune, and clear users printed input so they can enter something else into the input field. 
    myApp.clearInput = function () {
        $('.re-submit').on('submit', function () {
            $('.intro').val('');
            $('.user-input').val('');
            $('.fortune').empty('')
            
            $('html, body').animate({
                scrollTop: $('#question').offset().top
            }, 2000);
        });
    }; 
    
//initializing everything on page load
    myApp.init = function(){
        myApp.handleSubmit(); //calling handleSubmit Function
        myApp.clearInput(); // calling clearInput Function
        // myApp.userNameInput();
    };

    //animation
    // $(window).scroll(function() {
    //     $('.animated').each(function () {
    //         let imagePos = $(this).offset().top;

    //         let topOfWindow = $(window).scrollTop();
    //         if (imagePos < topOfWindow + 400) {
    //             $(this).addClass("slideUp");
    //         }
    //     });
    // });

$(function(){
    myApp.init();
}) //doc ready