const myApp = {}; //attempt to apply name spacing
    myApp.$userName = ''; //empty space for $userName re: printNameToPage
    myApp.$userQuestion = ''; //empty space for $userQuestion re: printToPage
    myApp.$name = $('.intro'); //defining variable for html class
    myApp.$fortune = $('.fortune'); //defining variable for html class
    myApp.$question = $('.user-question'); //defining variable for html class
    myApp.$image = $('.image-container'); //defining variable for html class

    // array of possible answers .form-submit on submit
    myApp.answers = [
        'As I see it, yes 👍',
        'Ask again later ⏳',
        'Better not tell you now 🤫',
        'Cannot predict now 🧐',
        'Concentrate and ask again 🤷‍',
        'Don’t count on it 🙅‍♂️',
        'It is certain 👍 ',
        'It is decidedly so 👍',
        'Most likely 🤷‍',
        'My reply is no 👎',
        'My sources say no 👎',
        'Outlook good 🌟',
        'Outlook not so good 👎',
        'Reply hazy try again 📌',
        'Signs point to yes',
        'Very doubtful 👎',
        'Without a doubt 🦖 ',
        'Yes 👌',
        'Yes, definitely 🙌',
        'You may rely on it 😏',
        'Roll the dice 🎲'
    ];

    //saving user's input from .name-form 
    myApp.userNameInput = function () {
        if ($('.name-form input[type=text]').val() !== '') {
            //$nameInput is equal to the value of the user input if not blank
            myApp.$nameInput = $('.name-form input[type=text]').val();
            //myApp.$userName var is defined at line 2, here, we are giving it a value
            myApp.$userName = myApp.$nameInput
        } else { //error handling blank myApp.$nameInput. Name input is NOT requiured
            myApp.$nameInput = 'human'; //print "human" instead of name Input
            myApp.$userName = myApp.$nameInput;
        };
    }  //myApp.userNameInput function ends here

    //printing user's input from .name-form to the question section
    myApp.printNameToPage = function () {
        myApp.$name.html(`<p class="print-name">Is this your first time <span>${myApp.$userName} </span>? Nice. Ask questions that can be answered with yes, no or maybe.</p>`);
    }; //myApp.printNameToPage ends here

    //randomize array of answers
    myApp.randoNum = () => {
        return Math.floor(Math.random() * myApp.answers.length);
    };  //myApp.randoNum method ends here

    //saving user's input from .form-submit
    myApp.userInputValue = function () {
        if ($('.form-submit input[type=text]').val() !== '') {
            //$questionInput is equal to the value of the user input if not blank
            myApp.$questionInput = $('.form-submit input[type=text]').val();
            //myApp.$userQuestion var is defined at line 3, here, we are giving it a value
            myApp.$userQuestion = myApp.$questionInput

        
        } else if ($('.form-submit input[type=text]').val() === '') {
              Swal.fire({
                title: 'Error!',
                text: 'Enter your question',
                type: 'error',
                confirmButtonText: 'OK YEP'
            });
        };
    } //myApp.userInput ends here

    myApp.smoothScrollErrorHandling = function () {
        if ($('.form-submit input[type=text]').val() !== '') {
            $('#submit').on('click', function () {
                $('html, body').animate({
                    scrollTop: $('#re-submit').offset().top
                }, 1000);
            }); // smooth scroll from question -> fortune result
        } else if ($('.form-submit input[type=text]').val() === '') {
            $('#submit').on('click', function () {
                $('html, body').animate({
                scrollTop: $('#submit').offset().top
                }, 1000);
            });
        };
    } //myApp.smoothScrollErrorHandling ends here

    // myApp.shakeAnimation = function () {
    //     if ($('.form-submit input[type=text]').val() !== '') {
    //         $('#submit').on('click', function () {
    //             $("#shake").effect("shake");
    //         });
    //     };
    // } //shakeAnimation ends here

        
    myApp.printToPage = function (item) {
        //variable to store value of myApp.randoNum()
        let random = myApp.randoNum();
        //print to page, the user's question & Magic 8 Ball Fortune
        myApp.$question.html(`<h3 class="print-question"><span>${myApp.$userName}, </span> you asked: <span>${myApp.$userQuestion}</span>?</h3>`);
        myApp.$fortune.html(`<h3 class="answer">Magic 8 ball says: <span>${myApp.answers[random]}</span></h3>`);
        myApp.$image.html('<img id="shake" src="assets/noun-eight-ball.svg" alt="magic 8 ball"></img>')
    }; //myApp.printToPage ends here

    myApp.clearInput = function () {
        $('.intro').val('');
        $('.user-input').val('');
        $('.fortune').empty('')
    }; //myApp.clearInput ends here

    //smooth scrolling functions (adpated from stack overflow) this also applies to smooth scrool in the myApp.smoothScrollErrorHandling variable.
    myApp.smoothScroll = function(){        
        $('#name-button').on('click', function () {
            $('html, body').animate({
            scrollTop: $('#name').offset().top
                }, 1000);
        }); //smooth scroll from header a tag click -> name entry

        $('#submit-name').on('click', function () {
            $('html, body').animate({
                scrollTop: $('#question').offset().top
            }, 1000);
        }); // smooth scroll from submit name -> question


        $('.form-reset input[type=submit]').on('submit', function () {
            $('html, body').animate({
                scrollTop: $('#question').offset().top
            }, 2000); //this smoothscroll does not work for some reason?, tried button ID and form classname, tried targetting the input button through the submit
        });
} //myApp.smoothScroll ends here

    //form submit for name
    myApp.handleSubmitName = function () {
        $('.name-form').on('submit', function (e) {
            e.preventDefault(); //prevent default refresh
            myApp.userNameInput(); //calling global function
            // myApp.shakeAnimation(); // calling shakeAnmation
            myApp.printNameToPage(); //calling global function
        });
    } //myApp.handleSubmitName ends here

    //form submit for question
    myApp.handleSubmitQuestion = function () {          
        $('.form-submit').on('submit', function (e) {
            e.preventDefault(); //prevent default refresh
            myApp.randoNum(); // calling global function
            myApp.userInputValue(); //calling global  function
            myApp.smoothScrollErrorHandling(); // calling global function
            myApp.printToPage(); // calling global function



        });
    } //myApp.handleSubmitQuestion ends here

    myApp.handleSubmitReset = function () {
        $('#re-submit').on('submit', function () {
            myApp.clearInput();
        }); 
    } //handleSubmitReset ends here

    //initializing everything on page load
    myApp.init = function(){
        myApp.smoothScroll();
        myApp.handleSubmitName();
        myApp.handleSubmitQuestion();
        myApp.handleSubmitReset();
    };

$(function(){
    myApp.init()
}) //doc ready