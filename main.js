let toggle   = document.querySelector('#header .toggle-button');
let collapse = document.querySelectorAll('#header .collapse'); 



toggle.addEventListener('click',function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"))
});


// with masonary
new Masonry("#posts .grid",{
    itemSelector: '.grid-item',
    gutter:20
})

// Swiper Slider 
new Swiper('.swiper-container',{
    direction: 'horizontal',
    loop: true,
    slidesPerView:5,
    autoplay:{
        delay:3000
    },
    // Resonsive Breakpoints
    breakpoints : {
        '@0': {
            slidesPerView: 2,
          },
          // 888px
          '@1': {
            slidesPerView: 3,
          },
          // 1110
          '@1.25': {
            slidesPerView: 4,
          },
          //1330
          '@1.50':{
              slidesPerView : 5
          }
          }
})  
