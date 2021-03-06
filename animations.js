var firstLineCard = document.querySelectorAll(".first-line");
var secondLineCard = document.querySelectorAll(".second-line");
var thirdLineCard = document.querySelectorAll(".third-line");
var card = document.querySelectorAll(".card");
var heighestFirstLineCard = 0;
var heighestSecondLineCard = 0;
var heighestThirdLineCard = 0;

firstLineCard.forEach((element) => {
	if (element.offsetHeight > heighestFirstLineCard) {
		heighestFirstLineCard = element.offsetHeight;
	}
});

secondLineCard.forEach((element) => {
	if (element.offsetHeight > heighestSecondLineCard) {
		heighestSecondLineCard = element.offsetHeight;
	}
});

thirdLineCard.forEach((element) => {
	if (element.offsetHeight > heighestThirdLineCard) {
		heighestThirdLineCard = element.offsetHeight;
	}
});

function setWindowSize() {
	if (window.innerWidth > 768) {
		firstLineCard.forEach((element) => {element.style.height = `${heighestFirstLineCard}px`;})
		secondLineCard.forEach((element) => {element.style.height = `${heighestSecondLineCard}px`;})
		thirdLineCard.forEach((element) => {element.style.height = `${heighestThirdLineCard}px`;})
	}
	else {
		card.forEach((element) => { element.style.height = "100%" })
	}
};

function changeWindowSize() {
	if (window.innerWidth > 768) {
		firstLineCard.forEach((element) => {
			if (element.style.height = heighestFirstLineCard) {
				element.style.height = null;
			}
			else {
				element.style.height = `${heighestFirstLineCard}px`;
			}
		})
		secondLineCard.forEach((element) => {
			if (element.style.height = heighestSecondLineCard) {
				element.style.height = null;
			}
			else {
				element.style.height = `${heighestSecondLineCard}px`;
			}
		})
		thirdLineCard.forEach((element) => {
			if (element.style.height = heighestThirdLineCard) {
				element.style.height = null;
			} else {
				element.style.height = `${heighestThirdLineCard}px`;
			}
		})
	}
	else {
		card.forEach((element) => { element.style.height = "100%" })
	}
};

setWindowSize();

window.addEventListener('resize', changeWindowSize);