# Timer

A simple timer where you pass the following arguments:
1. Timer Element
2. Time Left


```Javascript
/* Timer element from HTML */
const timerElem = document.querySelector('#timer');

/* Instantiate */
const timer = new Timer({
 timerElem: timerElem,
 timeLeft:10
});
```