/* Class Timer */
class Timer {
 constructor({timerElem, timeLeft}) {
  /* Arguements */
  this.timerElem = timerElem;
  this.timeLeft = timeLeft;

  /* Defaults */
  this.INTERVAL;
  this.COUNTER = 0;

  /* Auto run the setup */
  this.setup();

 }

 /* Setup of the Timer */
 setup() {
  
  const convertedTime = this.convertSeconds(this.timeLeft);

  this.timerElem.textContent = `${convertedTime}`;
  
  this.INTERVAL = setInterval(this.timeIt.bind(this), 1000);

 }


 /* Timer function */
 timeIt() {
  this.COUNTER++;

  /* As we increment the this.COUNTER, were subtracting it to the TIME LEFT */
  const total = this.timeLeft - this.COUNTER;

  const convertedTime = this.convertSeconds(total);

  this.timerElem.textContent = `${convertedTime}`;

  if(this.COUNTER == this.timeLeft){
   clearInterval(this.INTERVAL);
   alert(`Time is up!`);
  }
  

 }

 
 /* Converting to Seconds */
 convertSeconds(s){
  let min = Math.floor(s/60);
  let sec = s % 60;
  
  sec = this.formatTime(sec);
  min = this.formatTime(min);

  return `${min} : ${sec}`;
 }

 /* Prepend 0 to single digits, leaving 2 digits as is */
 formatTime(timeValue) {
  return (`0${timeValue}`).slice(-2);
}

}


/* Instantiating */

const timerElem = document.querySelector('#timer');

/* These arguments should be passed in order
1. timerElement (node)
2. timeLeft (number)
*/
const timer = new Timer({
 timerElem: timerElem,
 timeLeft:10
});
