const cardTrigger = document.querySelector('.buttons');
const cardsHolder = document.querySelector('#cards-holder');
const remover = document.querySelector('#remover');
const fetchUrl = 'https://jsonplaceholder.typicode.com/posts/';

let displayedCards = [];

//functions
const createCard = (title, body, id) => {
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
	closeCard.setAttribute('data-sku', id);
	closeCard.innerText = 'Remove this article';
	card.appendChild(closeCard);
};

const removeCard = event => {
	const { target } = event;
	if (target.classList[0] === 'close-card') {
		const id = target.getAttribute('data-sku');
		displayedCards = displayedCards.filter(itm => itm !== id);
		console.log(displayedCards);
		target.parentElement.remove();
	}
};

const removeAllCards = () => {
	const cards = document.querySelectorAll('.card');
	cards.forEach(itm => itm.remove());
	displayedCards = [];
};

const fetchPost = async event => {
	const { name } = event.target;

	const isAlreadyDisplayed = displayedCards.find(item => item === name);

	if (isAlreadyDisplayed) {
		return;
	}

	const response = await fetch(fetchUrl + name);
	const post = await response.json();
	displayedCards.push(name);
	const { title, body, id } = post;
	createCard(title, body, id);
};

//event listeners
cardTrigger.addEventListener('click', fetchPost);
remover.addEventListener('click', removeAllCards);
cardsHolder.addEventListener('click', removeCard);
