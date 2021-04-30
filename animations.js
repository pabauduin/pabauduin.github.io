var firstCard = document.querySelectorAll(".first-card")[0];
var secondCard = document.querySelectorAll(".second-card")[0];
var thirdCard = document.querySelectorAll(".third-card")[0];
var fourthCard = document.querySelectorAll(".fourth-card")[0];
var fifthCard = document.querySelectorAll(".fifth-card")[0];
var sixthCard = document.querySelectorAll(".sixth-card")[0];
var seventhCard = document.querySelectorAll(".seventh-card")[0];



if (window.innerWidth > 768) {
	secondCard.style.height = `${firstCard.offsetHeight}px`;
	thirdCard.style.height = `${fourthCard.offsetHeight}px`;
	fifthCard.style.height = `${sixthCard.offsetHeight}px`;
	seventhCard.style.height = `${sixthCard.offsetHeight}px`;
}
else {
	secondCard.style.height = "100%";
	thirdCard.style.height = "100%";
	fourthCard.style.height = "100%";
	fifthCard.style.height = "100%";
	sixthCard.style.height = "100%";
}

function reportWindowSize() {
	if (window.innerWidth > 768) {
		secondCard.style.height = `${firstCard.offsetHeight}px`;
		thirdCard.style.height = `${fourthCard.offsetHeight}px`;
		fifthCard.style.height = `${sixthCard.offsetHeight}px`;
		seventhCard.style.height = `${sixthCard.offsetHeight}px`;
	}
	else {
		secondCard.style.height = "100%";
		thirdCard.style.height = "100%";
		fourthCard.style.height = "100%";
		fifthCard.style.height = "100%";
		seventhCard.style.height = "100%";
	}
}

window.addEventListener('resize', reportWindowSize);