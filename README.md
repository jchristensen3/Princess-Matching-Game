# Princess-Matching-Game

Project 1-Code for Good

## Inroduction

This is a simple card matching game using HTML, CSS, and Javascript. When clicking on two cards if you get a match the cards stay flipped and you receive an alert. If you do not get a match the cards flip back over. Each click is counted and your match score is provided. 
 

### Requirements

-Render in the browser

-Include separate HTML / CSS / JavaScript files

-Use Javascript for DOM manipulation

-Use semantic markup for HTML and CSS (adhere to best practices)

-Show a good commit history with frequent commits

-KISS (Keep It Stupid Simple) and DRY (Don't Repeat    Yourself) principles.



#### CSS Validation
W3C CSS Validator results for https://jchristensen3.github.io/Princess-Matching-Game/ (CSS level 3 + SVG)
Congratulations! No Error Found.

#### html Validation 
The document is valid HTML5 + ARIA + SVG 1.1 + MathML 2.0 (subject to the utter previewness of this service).


#### Explanation

I used a basic HTML layout including my header, body, divs and buttons calling my JS code. I included CSS for every ID, Class, and header that needed to be called. I then used javascript to do DOM manipulation. 

I plan to work on the user experience of my page and move everything to the maximum screen size. I want to include more chalenges such as levels or letting the user pick the ammount of cards. I want to create my own pop up that goes away rather then the windows alert. I want to display animation when a match is found. 

I plan to get the page to reset 
I was able to get a popup but was not able to get it to timeout
I plan to adjust the click wav. and freeze my cards so they can not be selected out of order. 

I struggled with getting my cards to flip properly. 
I included all images in my querySelector rather then just my board images which then called my backgroung image. 

I have had my children test and discovered many issues which I corrected such as the windows alert being very repetative and annoying. Other then freezing cards I am happy with the outcome and it filled my heart watching my kids play a game that created with many resources. 


#### Resources


Used to find out how to count my data. 
https://www.codegrepper.com/code-examples/javascript/javascript+counting+when+clicking+a+button

Used for Match Game Example
https://codepen.io/brad4au57/pen/zLgJyj

Alert information
https://www.w3schools.com/jsref/met_win_alert.asp

Used positioning
https://stackoverflow.com/questions/17057997/using-css-to-align-a-button-bottom-of-the-screen-using-relative-positions/17058183

Utilezed the Reload function for my button.
https://stackoverflow.com/questions/32015936/reload-page-with-hash-on-it

Used this site to help with margin for my game board images.
https://www.javatpoint.com/how-to-center-images-in-css#:~:text=To%20center%20an%20image%2C%20we,to%20center%20in%20the%20div

Created game from this example.
https://dev.to/fakorededamilola/create-a-memory-game-with-js-1l9j
