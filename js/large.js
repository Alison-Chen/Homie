// project.css

const large = document.querySelector("#large");
const small = document.querySelectorAll(".small img");

small.forEach(img=>img.addEventListener("click", function(){
        large.src = img.src;
}))


