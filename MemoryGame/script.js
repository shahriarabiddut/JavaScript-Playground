const cardArray = [
    {
    name:'fries',
    img:'img/fries.png'
    },
     {
    name:'cheeseburger',
    img:'img/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'img/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'img/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'img/milkshake.png'
    },
    {
        name:'pizza',
        img:'img/pizza.png'
    },
    {
    name:'fries',
    img:'img/fries.png'
    },
        {
    name:'cheeseburger',
    img:'img/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'img/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'img/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'img/milkshake.png'
    },
    {
        name:'pizza',
        img:'img/pizza.png'
    }
]
cardArray.sort(()=> 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];
function createBoard(){
    for(let i=0;i<12;i++){
        const card = document.createElement('img');
        card.setAttribute('src','img/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        gridDisplay.appendChild(card);
    }
}
function flipCard(){
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch,100)
    }
}
function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    if(optionOneId == optionTwoId){
        alert('You Clicked The Same Card');
        cards[optionOneId].setAttribute('src','img/blank.png');
    }else if(cardsChosen[0] == cardsChosen[1]){
        alert('You Found A Match');
        cards[optionOneId].setAttribute('src','img/white.png');
        cards[optionTwoId].setAttribute('src','img/white.png');
        cards[optionOneId].removeEventListener('click',flipCard);
        cards[optionTwoId].removeEventListener('click',flipCard);
        cardsWon.push(cardsChosen);
        resultDisplay.innerHTML= cardsWon.length;
    }else{
        cards[optionOneId].setAttribute('src','img/blank.png');
        cards[optionTwoId].setAttribute('src','img/blank.png');
        alert('Sorry Try Again!');
    }
    cardsChosen = [];
    cardsChosenIds = [];
    if(cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML= `Congrat's You Found Them All!`;
        setTimeout(location.reload(),10000);
    }
}
createBoard()