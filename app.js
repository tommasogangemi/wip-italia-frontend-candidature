const cardTrigger = document.querySelector('.buttons');
const cardsHolder = document.querySelector('#cards-holder');
const remover = document.querySelector('#remover');

const tempPost = {
	userId: 1,
	id: 2,
	title: 'qui est esse',
	body:
		'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
};
const { title, body } = tempPost;

//functions
const createPostCard = () => {
	//card
	const card = document.createElement('div');
	card.classList.add('card');
	cardsHolder.appendChild(card);
	//title
	const cardTitle = document.createElement('h2');
	cardTitle.classList.add('card-title');
	cardTitle.innerText = title;
	card.appendChild(cardTitle);
	//body
	const cardBody = document.createElement('p');
	cardBody.classList.add('card-body');
	cardBody.innerText = body;
	card.appendChild(cardBody);
	//close card
	const closeCard = document.createElement('span');
	closeCard.classList.add('close-card');
	closeCard.innerText = 'Remove this article';
	card.appendChild(closeCard);
};

const removeCard = event => {
	const { target } = event;
	if (target.classList[0] === 'close-card') {
		target.parentElement.remove();
	}
};

const removeAllCards = () => {
	const cards = document.querySelectorAll('.card');
	cards.forEach(itm => itm.remove());
};

const fetchPost = event => {
	createPostCard();
};

//event listeners
cardTrigger.addEventListener('click', fetchPost);
remover.addEventListener('click', removeAllCards);
cardsHolder.addEventListener('click', removeCard);
