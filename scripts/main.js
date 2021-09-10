const likeIconElements = document.querySelectorAll('.js__like');
const likeEmptyIconUrl = "https://res.cloudinary.com/intellectfox/image/upload/v1629752957/fe/foxgram/posts/like_xw2apm.svg"
const likeFillIconUrl = "https://res.cloudinary.com/intellectfox/image/upload/v1629752958/fe/foxgram/posts/like-filled_zurlii.svg"


likeIconElements.forEach((likeIconElement) => {
  likeIconElement.addEventListener('click', (event) => {
    const likeCounter = event.target.parentElement.querySelector('.js__like__counter');
    const counter = +likeCounter.textContent;
    
    if (event.target.src === likeEmptyIconUrl) {
      event.target.src = likeFillIconUrl;
      likeCounter.textContent = counter + 1;
    }
    else {
      event.target.src = likeEmptyIconUrl;
      likeCounter.textContent = counter - 1;
    }
  });
});
