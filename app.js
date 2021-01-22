const cardTrigger = document.querySelector('.buttons');
const cardsHolder = document.querySelector('#cards-holder');
const remover = document.querySelector('#remover');
const companyTitle = document.querySelector('#title');
const navBar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

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
		target.parentElement.remove();
	}
};

const removeAllCards = () => {
	const cards = document.querySelectorAll('.card');
	cards.forEach(itm => itm.remove());
	displayedCards = [];
};

const fetchPost = async event => {
	const identifier = event.target.getAttribute('data-sku');

	const isAlreadyDisplayed = displayedCards.find(item => item === identifier);

	if (isAlreadyDisplayed) {
		return;
	}

	const response = await fetch(fetchUrl + identifier);
	const content = await response.json();
	const { title, body, id } = content;

	displayedCards.push(identifier);
	createCard(title, body, id);
};

const slideNavbar = () => {
	navBar.classList.toggle('slide');
};

//event listeners
cardTrigger.addEventListener('click', fetchPost);
cardsHolder.addEventListener('click', removeCard);
remover.addEventListener('click', removeAllCards);
companyTitle.addEventListener('click', slideNavbar);
