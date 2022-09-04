const startPauseButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");
const setButton = document.querySelector(".set");

let msec = 0;
let sec = 0;
let min = 0;
let timerInProgress = false;
let startTimer;

const startPauseHandler = () => {
	if (!timerInProgress) {
		startPauseButton.innerHTML = "Pause";
		setButton.style.display = "inline";
		resetButton.style.display = "none";
		startTimer = setInterval(() => {
			msec++;
			document.querySelector(".msec").innerHTML = msec;
			if (msec === 100) {
				msec = 0;
				document.querySelector(".msec").innerHTML = msec;
				sec++;
				document.querySelector(".sec").innerHTML = sec;
			}
			if (sec === 60) {
				sec = 0;
				document.querySelector(".sec").innerHTML = sec;
				min++;
				document.querySelector(".min").innerHTML = min;
			}
		}, 10);
		timerInProgress = true;
	} else {
		clearInterval(startTimer);
		timerInProgress = false;
		startPauseButton.innerHTML = "Resume";
		resetButton.style.display = "block";
	}
};

const resetHandler = () => {
	msec = sec = min = 0;
	document.querySelector(".msec").innerHTML = "00";
	document.querySelector(".sec").innerHTML = "00";
	document.querySelector(".min").innerHTML = "00";
};

const setHandler = () => {
	const timeList = document.querySelector(".timeList");
	timeList.style.display = "flex";
	const p = document.createElement("p");
	p.innerHTML = `${min}:${sec}:${msec}`;
	timeList.prepend(p);
};

startPauseButton.addEventListener("click", startPauseHandler);
resetButton.addEventListener("click", resetHandler);
setButton.addEventListener("click", setHandler);
