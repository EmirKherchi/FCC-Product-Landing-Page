



// Wrap every letter in a span
const textWrapper = document.querySelector('.description .fword');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='fword'>$&</span>");

anime.timeline({loop: true})//animation ajax
  .add({
    targets: '.description .fword',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.fword',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  

  //arrow video show

const arrow = document.querySelector('.arrow');

const video = document.querySelector('.video');

arrow.addEventListener('click',function(e){
    e.target.style.display = "none";//enleve aussi la div par propagation
    video.classList.replace("invisible", "show");
    
});