const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    document.getElementById('card-content').innerHTML = flashcards[currentIndex].term;
    
}

// The rest of the code you will write is apart of event listeners
let card = document.getElementById('flashcard');
card.addEventListener('click', flip);
function flip(){
    if(showingTerm){
        document.getElementById('card-content').innerHTML = flashcards[currentIndex].definition;
        showingTerm = false;
    }else{
        displayCard();
        showingTerm = true;
    }
}

let prev = document.getElementById('prev-btn');
prev.addEventListener('click', clickPrev);

function clickPrev(){
    if(currentIndex === 0){
        currentIndex = flashcards.length-1;
    }else{
        currentIndex--;
    }
    displayCard();
}

let next = document.getElementById('next-btn');
next.addEventListener('click', clickNext);

function clickNext(){
    if(currentIndex === flashcards.length-1){
        currentIndex = 0;
    }else{
        currentIndex++;
    }
    displayCard();

}

let addCard = document.getElementById('add-card-btn');
addCard.addEventListener('click', addCards);
function addCards(){
    let term = document.getElementById('new-term').value;
    let definition = document.getElementById('new-definition').value;
    flashcards.push({term, definition});
}

// This line will display the card when the page is refreshed
window.onload = displayCard;
