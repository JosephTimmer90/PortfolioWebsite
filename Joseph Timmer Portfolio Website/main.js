const elementsArray = [];
let start = "";
let previousTimeStamp;
let done = false;
let xOffSet = '';
let yOffsetPositions = [3,6,9,12,15,18,21];
let currentYOffsetPositions = [];
let from = "original";
let nextFrom = "original"
let to = "";
let fromTo = "originalToAZ";
let yTranslatePositions = [9, 0, 6, -3, 6, 0, -18];
let word = 'thisOne';

function fillElementsArray() {
  for(let i=0; i<7; i++){
    elementsArray.push(document.getElementById(`skill-0${i}`));
  }
}
fillElementsArray()


function step(timeStamp) {
  if (start === "") {
    start = timeStamp;
  }
  const elapsed = timeStamp - start;

  if (previousTimeStamp !== timeStamp) {
    // Math.min() is used here to make sure the element stops at exactly the end
    const count = Math.min(0.1 * elapsed, 500);

    xOffSet = -1*(-250/10+count/10)**2 + 625;
    
    for( let i=0; i<7; i++){
      elementsArray[i].style.transform = `translate(${xOffSet}px, ${yTranslatePositions[i]*count/500}rem)`;
    }
    if (count === 500) done = true;
  }

  if (elapsed < 5000) {
    // Stop the animation after 5 seconds
    previousTimeStamp = timeStamp;
    if (!done) {
      window.requestAnimationFrame(step);
    }
  }
}

function newSwitchStatement(){
  switch(word){
    case 'thisOne':
      yTranslatePositions = [9, 0, 6, -3, 6, 0, -18];
      console.log('this one ran');
      break;
    case 'thatOne':
      yTranslatePositions = [0, 0, 0, 0, 0, 0, 0];
      currentYOffsetPositions = [12, 6, 15, 9, 21, 18, 3];
      for(i=0; i<currentYOffsetPositions.length; i++){
        elementsArray[i].style.cssText = `top: ${currentYOffsetPositions[i]}rem;`;
      }
      console.log('that one ran');
      break;
    default:
      console.log('the code did not run as expected');
  }
  if(word==='thisOne'){
    word = 'thatOne';
  }
  start = "";
  done = false;
  console.log(yTranslatePositions);
  console.log(currentYOffsetPositions);
  window.requestAnimationFrame(step);
}

document.getElementById("AZ").addEventListener("click", newSwitchStatement);

//Mobile dropdown menu
const mobileNavIcon = document.getElementById("mobile-nav-icon");
const mobileNavDropdown = document.getElementById("mobile-nav-dropdown");

function openOrCloseMenu(){
  if(mobileNavDropdown.classList.contains("closed")){
    mobileNavDropdown.classList.add("open");
    mobileNavDropdown.classList.remove("closed");
  }
  else if(mobileNavDropdown.classList.contains("open")){
    mobileNavDropdown.classList.add("closed");
    mobileNavDropdown.classList.remove("open");
  }
}

mobileNavIcon.addEventListener('click', openOrCloseMenu);

