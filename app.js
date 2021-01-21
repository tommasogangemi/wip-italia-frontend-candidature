const cardTrigger = document.querySelector('.buttons');
const removePosts = document.querySelector('#remover');

//functions
const createPostCard = () => {
	const cardContainer = document.createElement('div');
	cardContainer.classList.add('card-container');
};

const fetchPost = event => {
	console.log(event.target.name);
};

//event listeners
cardTrigger.addEventListener('click', fetchPost);
