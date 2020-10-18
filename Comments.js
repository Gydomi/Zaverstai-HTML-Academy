let commentForm = document.querySelector('.form-comments');
let comments = document.querySelector('.comments');
let name = document.querySelector('.user-name');
let input = document.querySelector('.text-comment');

commentForm.onsubmit = function (evt) {
	evt.preventDefault();

	let newCommentli = document.createElement('li');
	newCommentli.classList.add('user-comment');
	let newCommentimg = document.createElement('img');
	newCommentimg.src = "user.svg";
	newCommentimg.classList.add('user-photo');
	newCommentli.append(newCommentimg);
	let newCommenth3 = document.createElement('h3');
	newCommenth3.classList.add('user-nameh3');
	newCommenth3.textContent = name.value;
	name.value = '';
	newCommentli.append(newCommenth3);
	let newCommentp = document.createElement('p');
	newCommentp.classList.add('text-commentp');
	newCommentp.textContent = input.value;
	input.value = '';
	newCommentli.append(newCommentp);
	comments.append(newCommentli);
	console.log('newComment');
};