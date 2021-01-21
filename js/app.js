const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav =document.querySelector('.link_list');
    const navLinks = document.querySelectorAll('.link_list>li');

    burger.addEventListener('click',()=>{
     // Toggle nav    
        nav.classList.toggle('nav-active');

     //Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation =`navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`
            }
       });     
       //Burger Animationend
       burger.classList.toggle("toggle") ;
    });

}
navSlide();


 const how_block = document.querySelector('.how_block');

    how_block.addEventListener('click',()=>{
        const how_list = document.querySelector('.how_list1');
        how_list.classList.toggle('list') ;
        how_list.classList.remove("how_list");

    })
