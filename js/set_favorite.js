
function switchFavorite(){
    let heart = document.querySelectorAll(".fa-heart");
    // if(heart.src="images/heart _gray.png");
    heart.forEach(heart => heart.addEventListener("click", function(){
        heart.classList.toggle("heart");
    }))
    }
    switchFavorite();