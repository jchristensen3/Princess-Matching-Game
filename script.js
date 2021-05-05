let cardArray = [ 
    { name: "snowwhite", img: "snowwhite.PNG", }, 
    { name: "snowwhite", img: "snowwhite.PNG", },
    { name: "cinderella", img: "cinderella.PNG", },
    { name: "cinderella", img: "cinderella.PNG", }, 
    { name: "aurora", img: "aurora.PNG", },
    { name: "aurora", img: "aurora.PNG", }, 
    { name: "ariel", img: "ariel.PNG", },
    { name: "ariel", img: "ariel.PNG", },
    { name: "belle", img: "belle.PNG", },
    { name: "belle", img: "belle.PNG", },
    { name: "jasmine", img: "jasmine.PNG", },
    { name: "jasmine", img: "jasmine.PNG", }, 
    { name: "pocahontas", img: "pocahontas.PNG", }, 
    { name: "pocahontas", img: "pocahontas.PNG", }, 
    { name: "mulan", img: "mulan.PNG", }, 
    { name: "mulan", img: "mulan.PNG", }, 
    { name: "tiana", img: "tiana.PNG", }, 
    { name: "tiana", img: "tiana.PNG", }, 
    { name: "rapunzel", img: "rapunzel.PNG", }, 
    { name: "rapunzel", img: "rapunzel.PNG", }, 
    { name: "merida", img: "merida.PNG", }, 
    { name: "merida", img: "merida.PNG", }, 
    { name: "moana", img: "moana.PNG", }, 
    { name: "moana", img: "moana.PNG", }, 
    ]; 
    
    //define variables and get DOM element
    
    let gameBoard= document.querySelector(".gameBoard");
    let audio = document.querySelector("audio")
    let source = document.querySelector("#source")
    let scoreBoard = document.querySelector(".scoreBoard"); 
    let popup = document.querySelector(".popup"); 
    let playAgain = document.querySelector(".playAgain"); 
    let clickBoard = document.querySelector(".clickBoard"); 
    let imgs; 
    let cardsId = []; 
    let cardsSelected = []; 
    let cardsWon = 0; 
    let clicks = 0;
    document.addEventListener("DOMContentLoaded", function () {
    //define functions 
    
    createBoard(gameBoard, cardArray); 
    arrangeCard();
    playAgain.addEventListener("click", replay); 
    
    //add a click functions for images 
    
    imgs = document.querySelectorAll("img");
    Array.from(imgs).forEach(img => 
    img.addEventListener("click", flipCard)
    ) 
    });
    //createBoard function
    
    function createBoard(gameBoard, array) { 
    popup.style.display = "none"; 
    array.forEach((arr, index) => { 
    let img = document.createElement("img"); 
    img.setAttribute("src", "princess cards.PNG");
    img.setAttribute("data-id", index); 
    gameBoard.appendChild(img); 
    })
    }
    
    // arrangeCard function
    
    function arrangeCard() { 
    cardArray.sort(() => 0.2 - Math.random())
    }
    
    // flip Card function
    
    function flipCard() { 
    let selected = this.dataset.id;
      let clicked =cardArray[selected].name
    cardsSelected.push(clicked); 
     
    // Play sound
       source.src=`${clicked}.wav`
      audio.play()
      
      
    cardsId.push(selected); 
    this.classList.add("flip"); 
    this.setAttribute("src", cardArray[selected].img); 
    if (cardsId.length === 2) { 
    setTimeout(checkForMatch, 3000);
    } 
    }
    // checkForMatch function
 
    function checkForMatch() { 
    let imgs = document.querySelectorAll(".gameBoard img"); 
    let firstCard = cardsId[0];
    let secondCard = cardsId[1];
    console.log(firstCard)
    console.log(secondCard)
    if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
    alert("Good Job, you got a match!"); 
    cardsWon += 1; 
    scoreBoard.innerHTML = cardsWon; 
    setTimeout(checkWon,3000) 
    } 
    else { 
      console.log(imgs)
    imgs[secondCard].setAttribute("src", "princess cards.PNG"); 
    imgs[firstCard].setAttribute("src", "princess cards.PNG");
   
    alert("Sorry, try again."); 
     
    imgs[firstCard].classList.remove("flip"); 
    imgs[secondCard].classList.remove("flip");
  
    
    
    source.src="click.wav"
    audio.load()
    audio.play()
     
    } 
    cardsSelected = []; 
    cardsId = []; 
    clicks += 1; 
    clickBoard.innerHTML = clicks; 
    }
    
    function checkWon() {
    if (cardsWon == cardArray.length / 2) {
    alert("You won") 
    setTimeout(()=> popup.style.display = "flex" ,300); 
    }
    }
    // The replay function
    
    function replay() { 
    arrangeCard(); 
    gameBoard.innerHTML = "";
    createBoard(gameBoard, cardArray);
    cardsWon = 0;
    clicks = 0; 
    clickBoard.innerHTML = 0; 
    scoreBoard.innerHTML = 0; 
    popup.style.display = "none"; 
    }