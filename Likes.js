let imgLike = document.querySelector('.imglike');
let likeNumber = document.querySelector('.likenumber');

imgLike.onclick = function(){
	if (likeNumber.classList.contains('added')) {
		likeNumber.textContent--;
	} else {
		likeNumber.textContent++;
	}
	likeNumber.classList.toggle('added');
};