// designer_details.css

const d = document.querySelector('.d');
const info = document.querySelector('.info');
const pic_all = document.querySelector('.pic_all');
const profile_content = document.querySelector('.profile_content');

d.addEventListener("click",function(){
    pic_all.style.display = 'flex';
    profile_content.style.display = 'none';
    d.classList.add("d");
    info.classList.remove("d");

});

info.addEventListener("click",function(){
    pic_all.style.display = 'none';
    profile_content.style.display = 'flex';
    info.classList.add("d");
    d.classList.remove("d");

})
