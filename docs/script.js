function contains(e,t){for(var r=0;r<e.length;r++)if(e[r]===t)return!0;return!1}function win(){title.textContent="You were successful at the Wheel of Success :D",startGameButton.textContent="Play Again!",overlay.style.display="",overlay.className="start win"}function checkWin(){0===letters&&win()}function lose(){title.textContent="You lost at the wheel of success :(",startGameButton.textContent="Try Again :)",overlay.style.display="",overlay.className="start lose"}function removeLife(){triesLI[missed-1].className+="-die",0===--lives&&lose()}function showLetter(e){for(var t=0;t<phraseUl.children.length;t++){var r=phraseUl.children[t];r.textContent===e&&(r.className+=" show",letters--)}checkWin()}function findOSKKey(e){for(var t=0;t<qwertyButtons.length;t++)if(qwertyButtons[t].textContent===e)return qwertyButtons[t]}function checkLetter(e,t){let r=e.target;if(t&&(r=findOSKKey(e)),("BUTTON"===r.tagName||t)&&"chosen"!==r.className){r.className+="chosen";for(var s=!1,n=0;n<currentPhraseLetters.length;n++){var a=currentPhraseLetters[n];if(a===r.textContent){s=!0,showLetter(a),a="";break}}s||(missed++,removeLife())}}function init(){missed=0,letters=0,lives=triesLI.length;const e=qwerty.querySelectorAll(".chosen");for(var t=0;t<e.length;t++)e[t].classList.remove("chosen");for(;phraseUl.firstChild;)phraseUl.removeChild(phraseUl.firstChild);for(var r=0;r<lives;r++)triesLI[r].className="tries";addPhraseToDisplay(currentPhraseLetters=getRandomPhraseAsArray(phrases)),qwerty.addEventListener("click",checkLetter),document.addEventListener("keypress",(function(e){contains(chars,e.key)&&checkLetter(e.key.toLowerCase(),!0)}))}function getRandomPhraseAsArray(e){var t,r,s=e[Math.floor(Math.random()*e.length)].split("");return letters=s.length,s}function addPhraseToDisplay(e){for(var t=0;t<currentPhraseLetters.length;t++){var r=document.createElement("li");r.appendChild(document.createTextNode(e[t]))," "===e[t]?(r.className+="space",letters--):r.className+="letter",phraseUl.appendChild(r)}}const chars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],phrases=["curiosity killed the cat","alls well that ends well","a bird in the hand is worth two in the bush","religion is the opiate of the masses","all men die","even bad coffee is better than no coffee at all","i never laugh until i have had my coffee","decaffeinated coffee is the devils blend","Time is an illusion"],title=document.querySelector(".title"),startGameButton=document.querySelector(".btn__reset"),overlay=document.getElementById("overlay"),qwerty=document.getElementById("qwerty"),qwertyButtons=qwerty.getElementsByTagName("button"),phrase=document.getElementById("phrase"),phraseUl=phrase.getElementsByTagName("ul")[0],triesLI=document.querySelectorAll("li.tries");var lives=triesLI.length,currentPhraseLetters="",missed=0,letters=0;startGameButton.addEventListener("click",(function(){overlay.style.display="none",init()}));