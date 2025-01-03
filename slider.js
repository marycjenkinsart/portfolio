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
	const go = (direction) => {
		const directionString = direction === 1 ? 'right' : 'left';
		const directionRemoveString = direction === 1 ? 'left' : 'right';
		sequenceItems.forEach((_,i)=>{
			sequenceItems[i].classList.remove('outgoing');
		});
		sequenceItems[sequencePosition].classList.add('outgoing');
		sequenceItems[sequencePosition].classList.remove('incoming');
		sequencePosition += sequenceItemCount;
		sequencePosition += direction;
		sequencePosition %= sequenceItemCount;
		sequenceItems[sequencePosition].classList.remove(directionRemoveString);
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				sequenceItems[sequencePosition].classList.add(directionString);
				sequenceItems[sequencePosition].classList.add('incoming');
			});
		})
	};
	const goLeft = () => go(-1);
	const goRight = () => go(1);
	left.addEventListener('click', goLeft);
	right.addEventListener('click', goRight);
	rootNode.tabIndex = 0;
	rootNode.addEventListener('keydown', (event)=>{
		if (event.key === 'ArrowLeft') {
			goLeft();
		}
		if (event.key === 'ArrowRight') {
			goRight();
		}
	});
	rootNode.focus();
};
[...document.querySelectorAll('.process-sequence')].forEach(makeProcess);
