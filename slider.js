const makeSlider = (rootNode) => {
	const slider = rootNode.querySelector('.slider');
	const left = rootNode.querySelector('.left');
	const right = rootNode.querySelector('.right');

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
[...document.querySelectorAll('.hero-image')].forEach(makeSlider);

const makeProcess = (rootNode) => {
	const sequence = rootNode.querySelector('.sequence');
	const left = rootNode.querySelector('.left');
	const right = rootNode.querySelector('.right');

	const sequenceItemCount = sequence.children.length;
	const sequenceItems = [...sequence.children];
	let sequencePosition = sequenceItemCount-1;
	left.addEventListener('click', () => {
		sequenceItems.forEach((_,i)=>{
			sequenceItems[i].classList.remove('inactive');
			sequenceItems[i].classList.remove('right');
			sequenceItems[i].classList.add('left');
		});
		sequenceItems[sequencePosition].classList.add('inactive');
		sequenceItems[sequencePosition].classList.remove('active');
		sequencePosition += sequenceItemCount;
		sequencePosition -= 1;
		sequencePosition %= sequenceItemCount;
		sequenceItems[sequencePosition].classList.add('active');
	});
	right.addEventListener('click', () => {
		sequenceItems.forEach((_,i)=>{
			sequenceItems[i].classList.remove('inactive');
			sequenceItems[i].classList.remove('left');
			sequenceItems[i].classList.add('right');
		});
		sequenceItems[sequencePosition].classList.add('inactive');
		sequenceItems[sequencePosition].classList.remove('active');
		sequencePosition += 1;
		sequencePosition %= sequenceItemCount;
		sequenceItems[sequencePosition].classList.add('active');
	});

};
[...document.querySelectorAll('.process-sequence')].forEach(makeProcess);
