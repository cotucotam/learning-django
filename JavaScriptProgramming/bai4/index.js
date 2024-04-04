
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
console.log(messageEl)
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")


let player = {
    name : "Per",
    chips : 145,
    sayHello: function(){
        console.log("tam")
    }
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $"+player.chips
player.sayHello()

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1 // (0-12)+1
    if (randomNumber >10){
        return 10
    } else if(randomNumber ===1){
        return 11
    } else{
        return randomNumber
    }
}
function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards: "
    for( let i = 0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent = "Sum: "+sum
    if(sum<=20){
        message = "Do you want to draw a new card"
    }
    else if (sum ===21 ){
        message = "wohoo! you 're got blackjack!"
        hasBlackJack = true
    }
    else{
        message = "you 're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard(){
    if(isAlive === true && hasBlackJack === false){
        console.log("Drawing a new card from the deck!")
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }


}
