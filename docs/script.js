function contains(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1}function init(){console.log("init() run"),missed=0,letters=0,lives=triesLI.length,chosenLetters=qwerty.querySelectorAll(".chosen");for(var e=0;e<chosenLetters.length;e++)chosenLetters[e].classList.remove("chosen");for(;phraseUl.firstChild;)phraseUl.removeChild(phraseUl.firstChild);for(var t=0;t<lives;t++)triesLI[t].className="tries";curentPhraseLetters=getRandomPhraseAsArray(phrases),addPhraseToDisplay(curentPhraseLetters),qwerty.addEventListener("click",checkLetter),document.addEventListener("keypress",function(e){contains(chars,e.key)&&checkLetter(e.key.toLowerCase(),!0),console.log(e.key)})}function getRandomPhraseAsArray(e){var t=Math.floor(Math.random()*e.length),n=e[t],o=n.split("");return letters=o.length,o}function addPhraseToDisplay(e){console.log("addPhraseToDisplay() run");for(var t=0;t<curentPhraseLetters.length;t++){var n=document.createElement("li");n.appendChild(document.createTextNode(e[t]))," "===e[t]?(n.className+="space",letters--):n.className+="letter",phraseUl.appendChild(n)}}function checkLetter(e,t){if(console.log("checkLetter() run"),key=e.target,t&&(console.log("keyboard used"),key=findOSKKey(e)),("BUTTON"===key.tagName||t)&&"chosen"!==key.className){console.log(key.textContent),key.className+="chosen";for(var n=!1,o=0;o<curentPhraseLetters.length;o++){var s=curentPhraseLetters[o];if(s===key.textContent){console.log("is found!!!!!!!"),console.log(key),n=!0,Showetter(s),s="";break}}n||(console.log("DIE!!!!!!!"),missed++,removeLife())}}function findOSKKey(e){console.log("getRandomPhraseAsArray() run");for(var t=0;t<qwertyButtons.length;t++)if(qwertyButtons[t].textContent==e)return qwertyButtons[t]}function Showetter(e){console.log("Showetter() run"),console.log("removing "+e);for(var t=0;t<phraseUl.children.length;t++){var n=phraseUl.children[t];n.textContent==e&&(console.log(n),n.className+=" show",letters--)}checkWin()}function removeLife(){console.log("removeLife() run"),triesLI[missed-1].className+="-die",lives--,console.log("LOST A LIFE"),0===lives&&(console.log("YOU LOST ALL THE LIVES"),lose())}function checkWin(){console.log("checkWin() run"),0===letters&&(console.log("You win!"),win())}function win(){console.log("win() run"),Title.textContent="You were successful at the Wheel of Success :D",StartGameButton.textContent="Play Again!",overlay.style.display="",overlay.className="start win"}function lose(){console.log("lose() run"),Title.textContent="You lost at the wheel of success :(",StartGameButton.textContent="Try Again :)",overlay.style.display="",overlay.className="start lose"}const chars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],phrases=["curiosity killed the cat","alls well that ends well","a bird in the hand is worth two in the bush","religion is the opiate of the masses","all men die","even bad coffee is better than no coffee at all","i never laugh until i have had my coffee","decaffeinated coffee is the devils blend","Time is an illusion"],Title=document.querySelector(".title"),StartGameButton=document.querySelector(".btn__reset"),overlay=document.getElementById("overlay"),qwerty=document.getElementById("qwerty"),qwertyButtons=qwerty.getElementsByTagName("button"),phrase=document.getElementById("phrase"),phraseUl=phrase.getElementsByTagName("ul")[0],triesLI=document.querySelectorAll("li.tries");var lives=triesLI.length,curentPhraseLetters="",missed=0,letters=0;StartGameButton.addEventListener("click",function(){overlay.style.display="none",init()});
//# sourceMappingURL=./script.js.map