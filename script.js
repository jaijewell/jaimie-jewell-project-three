

//step 2: create an array of standard answers
const answers = [
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

//stretch 1 - second array - funny answers
const alternativeAnswers = [
    "yes, but do it drunk AF",
    "my sources say no, but they also said Hilary would win",
    "don't swipe right it's your cousin",
    "that's an interesting question, a more interesting question: how is applebees still in business? wild.",
    "you have a therapist for this",
    "I'm not responsible for the consequences of this, but yes.",
    "heck you betcha!",
    "you should hire a lawyer",
    "does a bear shit in the woods?",
    "I am God's vessel - Kanye West",
    "When you're the absolute best, you get hated the most",
    "I will go down as the voice of this generation, of this decade, I will be the loudest voice",
    "you should only believe about 90% of what I say, as a matter of fact, dont' even believe anything I'm saying at all. I could be completeing [effing] with you, and the world, the entire time"
];

//step 2: on click prevent default refresh


//step 3a: if user enters nothing - print "you must neter a question"
//step 3b: on click, print user input

//step 4: on click, print random answer



//step 1: create global variable for user's input to go later, when we will print to the screen 
let userQuestion = '';

$(function () {
    $('.form-submit').on('submit', function (e) {
        e.preventDefault();
    
        // let userInput = $('input[name=question]').val();

    //    //check to determine if user left input box blank
        if ($('.form-submit input[type=text]').val() !== ''){
            const question = $('input[type=text]').val();
            //print users input to screen
            $('.user-question').html(`<h2 class="print-question">You typed ${question} ?</h2>`);
        };
    //     }  else {
    //         alert('enter a question');
    //     }

       

        //randomize answers array
        const randoNum = Math.floor(Math.random() * answers.length);
        //print answers array value to DOM
        $('.fortune').html(`<h2 class="answer">Magic 8 ball says: ${answers[randoNum]}</h2>`);
    });

    //clear fortune, and clear users input so it's clean and they can enter something else into the input field. 
    const clearInput = function () {
        $('.re-submit').on('click', function () {
            $('.user-input').val('');
            $('.fortune').empty('')
            });
        } 
        clearInput(); //call function
    
}) //doc ready