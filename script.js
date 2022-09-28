
const btnMenu = document.querySelector(".btn-menu");
const links = document.querySelector(".links");
const nav = document.querySelector("#nav");
const navLink = document.querySelectorAll(".nav-link");


// BUTTON MENU

btnMenu.addEventListener("click", ()=>{
    links.classList.toggle('active');
    
})

navLink.forEach(el => el.addEventListener("click", function() {
    links.classList.toggle('active');
  }));


// SCROLL STYLES   

  function windowRemoveEvent(e){
    if(e){
        window.addEventListener("scroll", ()=>{
            let scrollY= this.scrollY;
            console.log("SCROLL NUMBRE: ", scrollY); 
            if(scrollY > 63){
                nav.style.backgroundColor="#0E1C26";
                navLink.forEach(el =>{
                    el.style.color="#00ffff"
                });
                nav.style.borderBottom="1px solid rgba(255, 255, 255, 0.10)";
                nav.style.boxShadow= "0 0 100px 10px #0a0a0a9e";
            }
            else{
                nav.style.backgroundColor="inherit";
                navLink.forEach(el =>{
                    el.style.color="#fff"
                });
                nav.style.borderBottom="none";
                nav.style.boxShadow= "none";
            }
        });
    }
    else{
        window.addEventListener("scroll", ()=>{
            let scrollY= this.scrollY;
            console.log("SCROLL 2 NUMBRE: ", scrollY); 
            if(scrollY > 0){
                nav.style.backgroundColor="inherit";
                navLink.forEach(el =>{
                    el.style.color="#fff"
                });
                nav.style.borderBottom="none";
                nav.style.boxShadow= "none";
            }
        });
    }

};
console.log(window.innerWidth)

    if(window.innerWidth >= 1024){
        let bol = innerWidth >= 1024;
        windowRemoveEvent(bol);
    }


    addEventListener('resize', (e) => {
        let width = e.target.innerWidth;
    
        console.log(width);
        let bol = width >= 1024;
        console.log("width >= 1024: ", bol)
        windowRemoveEvent(bol);
    
      });


// ACCORDION STYLES

const accordion = document.querySelector(".accordion");
const matAprobadas = document.querySelector(".mat-aprobadas");
const arrow = document.querySelector(".fa-chevron-down");

accordion.addEventListener('click', ()=>{
    matAprobadas.classList.toggle('open');

})

  

  