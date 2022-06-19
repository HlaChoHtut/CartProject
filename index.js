const heartIcon = document.querySelectorAll('.heart_icon');
const heart = document.querySelector('.heart');
let heartCount = document.getElementById('heart_count');
let count = 0;

for (let i = 0; i < heartIcon.length; i++)
	heartIcon[i].addEventListener('click', () => {
		// heart.style.color = 'red';
		count += 1;
		heartCount.textContent = count;
	});
