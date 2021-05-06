let cardArray = [ 
    { name: "snowwhite", img: "https://media.giphy.com/media/1u7OKD2p9ANAQ/giphy.gif", }, 
    { name: "snowwhite", img: "https://media.giphy.com/media/YFis3URdQJ6qA/giphy.gif", },
    { name: "cinderella", img: "https://media.giphy.com/media/f4cH0FXbUmogg/giphy.gif", },
    { name: "cinderella", img: "https://media.giphy.com/media/SHaQMBLjK6MvK/giphy.gif", }, 
    { name: "aurora", img: "https://media.giphy.com/media/uJh2K17LzvRPW/giphy.gif", },
    { name: "aurora", img: "https://media.giphy.com/media/YDH8Mf9bTBjgI/giphy.gif", }, 
    { name: "ariel", img: "https://media.giphy.com/media/DURM4hA9JhAZ2/giphy.gif", },
    { name: "ariel", img: "https://media.giphy.com/media/103R2H9RN2QZgc/giphy.gif", },
    { name: "belle", img: "https://media.giphy.com/media/6rQAkBvurR6CI/giphy.gif", },
    { name: "belle", img: "https://media.giphy.com/media/4BD89PUy7sNe8/giphy.gif", },
    { name: "jasmine", img: "https://media.giphy.com/media/xf9lBSY13kzx6/giphy.gif", },
    { name: "jasmine", img: "https://media.giphy.com/media/aUscLVo2WfSQE/giphy.gif", }, 
    { name: "pocahontas", img: "https://media.giphy.com/media/12fegBdilUKCRy/giphy.gif", }, 
    { name: "pocahontas", img: "https://media.giphy.com/media/l2JI1JzL6YS8z5KUM/giphy.gif", }, 
    { name: "mulan", img: "https://media.giphy.com/media/IwnMSkf9fRW0M/giphy.gif", }, 
    { name: "mulan", img: "https://media.giphy.com/media/yFIeZTiln3JYc/giphy.gif", }, 
    { name: "tiana", img: "https://media.giphy.com/media/11cwuBQ4TLa8FO/giphy.gif", }, 
    { name: "tiana", img: "https://media.giphy.com/media/akbme2WYZCNLW/giphy.gif", }, 
    { name: "rapunzel", img: "https://media.giphy.com/media/Td6lhWxeyet1u/giphy.gif", }, 
    { name: "rapunzel", img: "https://media.giphy.com/media/969ANhdEnVduw/giphy.gif", }, 
    { name: "merida", img: "https://media.giphy.com/media/8hrjKH6aJMcw0/giphy.gif", }, 
    { name: "merida", img: "https://media.giphy.com/media/yMGev5qpDZXb2/giphy.gif", }, 
    { name: "moana", img: "https://media.giphy.com/media/aBRi9FGnL6i3u/giphy.gif", }, 
    { name: "moana", img: "https://media.tenor.com/images/b3ee27969527f8abab6dcafdd7cfc9d1/tenor.gif", }, 
    ]; 
    
    //Setting Variables
    let playAgain = document.querySelector(".playAgain"); 
    let gameBoard= document.querySelector(".gameBoard");
    let clickBoard = document.querySelector(".clickBoard"); 
    let scoreBoard = document.querySelector(".scoreBoard"); 
    let source = document.querySelector("#source");
    let audio = document.querySelector("audio");
    
    let imgs; 
    let cardsId = []; 
    let cardsSelected = []; 
    let cardsWon = 0; 
    let clicks = 0;

    window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    });

    // Click replay 

    createBoard(gameBoard, cardArray); 
    arrangeCard();
    playAgain.addEventListener("click", replay); 

    
    // Click to flip card
    
    imgs = document.querySelectorAll("img");
    Array.from(imgs).forEach(img => 
    img.addEventListener("click", flipCard)) 

    // Game board
    
    function createBoard(gameBoard, array) { 
    array.forEach((arr, index) => { 
    let img = document.createElement("img"); 
    img.setAttribute("src", "princess cards.PNG");
    img.setAttribute("data-id", index); 
    gameBoard.appendChild(img); 
    })
    }
    
    // Shuffle Cards
    
    function arrangeCard() { 
    cardArray.sort(() => 0.2 - Math.random())
    }
    
    // flip Cards
    
    function flipCard() { 
    let selected = this.dataset.id;
      let clicked =cardArray[selected].name;
    cardsSelected.push(clicked); 
     
    // Click Sound
       source.src=`${clicked}.wav`
      audio.play()
      
      
    cardsId.push(selected); 
    this.classList.add("flip"); 
    this.setAttribute("src", cardArray[selected].img); 
    if (cardsId.length === 2) { 
    setTimeout(checkForMatch, 4000);
    } 
    }
    // Check for match
 
    function checkForMatch() { 
    let imgs = document.querySelectorAll(".gameBoard img"); 
    let firstCard = cardsId[0];
    let secondCard = cardsId[1];
    
    if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
    alert("Good Job, you got a match!"); 
    cardsWon += 1; 
    scoreBoard.innerHTML = cardsWon; 
    setTimeout(checkWon,4000) 
    source.src="click.wav"
    audio.load()
    audio.play()
    } 
    else { 
    console.log(imgs)
    imgs[firstCard].setAttribute("src", "princess cards.PNG");
    imgs[secondCard].setAttribute("src", "princess cards.PNG"); 
   
    imgs[firstCard].classList.remove("flip"); 
    imgs[secondCard].classList.remove("flip");
  
    
    
    
     
    } 
    cardsSelected = []; 
    cardsId = []; 
    clicks += 2; 
    clickBoard.innerHTML = clicks; 
    }
    
    function checkWon() {
    if (cardsWon == cardArray.length / 2) {
    alert("You won")  
    }
    }
    // Reload Game
    
    function replay() { 

    window.location.reload();
  

 
    }