// searchsystem

const searchopener = document.querySelector('#searchopener');
const searchtype = document.querySelector('.searchtype');
searchopener.onclick = function(){
    searchopener.classList.toggle('active')
}

document.getElementById("searchopener").addEventListener("click", () => {
    document.getElementById("searchplace").focus(); 
    
  });

// searchsystem/



//header

const header_toggler = document.querySelector(".header_toggler");
const headernav = document.querySelector(".headernav");

header_toggler.addEventListener("click", () => {
  header_toggler.classList.toggle("active");
  headernav.classList.toggle("active");
})


const header_toggler_close = document.querySelector(".header_toggler_close");

header_toggler_close.addEventListener("click", () => {
  headernav.classList.toggle("active");
})

// header/