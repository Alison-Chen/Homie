// explore/filter btn

const dpbtn = document.querySelector(".dpbtn");
const dpcontent =document.querySelector(".dpcontent");

dpbtn.addEventListener("click",function(){
    dpcontent.classList.toggle("dpbtn_show");

})






const click = document.querySelectorAll(".click");
const picAll = document.querySelectorAll(".pic-all");
const pic_explore = document.querySelector(".pic_explore");
click.forEach(clicked =>{
    clicked.addEventListener("click",function(){
    click.forEach(click => {
        click.className = "click" ;
    })
    clicked.className="clicked";
    let value = clicked.textContent;
    console.log(value)
    picAll.forEach(pic => {
        pic.style.display = "none";
        // console.log(pic.getAttribute("data-roomtype") == value);
        if(pic.getAttribute("data-roomtype") == value || pic.getAttribute("data-style") == value || value == "reset all"){
            pic.style.display = "block" ;
            // pic_explore.style.justifyContent = "flex-start";

        }
    })
    })
});

