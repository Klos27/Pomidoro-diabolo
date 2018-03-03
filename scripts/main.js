//====================================================
//	COUNTER

var cntStarted = false;
var countdownFunctionFlag = false;
var actualTimeInSec = 1500;
var counter = document.querySelector('#countdown');

function displayCountdown(){
  var minutes = Math.floor(actualTimeInSec / 60);
  var seconds = actualTimeInSec - (minutes * 60);
  if(seconds < 10)
	  seconds = '0' + seconds.toString();	// display with 0
  counter.textContent = minutes.toString() + ":" + seconds;		
}

displayCountdown();	// Display correct time at start

function countdown(){
	if(cntStarted && actualTimeInSec > 0){
		countdownFunctionFlag = true;	// In case that somebody press stop and start button while this fcn is on Timeout
		actualTimeInSec = actualTimeInSec - 1;
		displayCountdown();
		setTimeout("countdown()",1000);
	}
	else{
		cntStarted = false;
		countdownFunctionFlag = false;
	}
}

var startBtnv = document.querySelector('#startBtn');
var stopBtnv = document.querySelector('#stopBtn');
var pauseBtnv = document.querySelector('#pauseBtn');

startBtnv.addEventListener('click', function() {
	if(cntStarted === false && countdownFunctionFlag === false){
		cntStarted = true;
		countdown();
	}
});

stopBtnv.addEventListener('click', function() {
	cntStarted = false;
	actualTimeInSec = 1500;
	displayCountdown();
});

pauseBtnv.addEventListener('click', function() {
	cntStarted = false;
});