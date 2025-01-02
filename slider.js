const makeSlider = (selector) => {
	const slider = document.querySelector(selector + ' .slider');
	const left = document.querySelector(selector + ' .left');
	const right = document.querySelector(selector + ' .right');

	const sliderItemCount = slider.children.length;
	slider.style.width = sliderItemCount * 100 + '%';
	[...slider.children].forEach((imageContainer)=>{
		imageContainer.style.width = `calc(100% / ${sliderItemCount})`;
	});
	let sliderPosition = 0;
	left.addEventListener('click', () => {
		sliderPosition += sliderItemCount;
		sliderPosition -= 1;
		sliderPosition %= sliderItemCount;
		slider.style.left = -100*sliderPosition + '%';
	});
	right.addEventListener('click', () => {
		sliderPosition += 1;
		sliderPosition %= sliderItemCount;
		slider.style.left = -100*sliderPosition + '%';
	});
};

const makeProcess = (selector) => {
	const sequence = document.querySelector(selector + ' .sequence');
	const left = document.querySelector(selector + ' .left');
	const right = document.querySelector(selector + ' .right');

	const sequenceItemCount = sequence.children.length;
	const sequenceItems = [...sequence.children];
	let sequencePosition = 0;
	left.addEventListener('click', () => {
		sequenceItems[sequencePosition].removeAttribute('style');
		sequencePosition += sequenceItemCount;
		sequencePosition -= 1;
		sequencePosition %= sequenceItemCount;
		sequenceItems[sequencePosition].style = 'z-index: 100;'
	});
	right.addEventListener('click', () => {
		sequenceItems[sequencePosition].removeAttribute('style');
		sequencePosition += 1;
		sequencePosition %= sequenceItemCount;
		sequenceItems[sequencePosition].style = 'z-index: 100;'
	});

};
