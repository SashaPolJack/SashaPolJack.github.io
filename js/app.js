const sliderMain = new Swiper('.slider_main',{
    freeMode:true,
    centeredSlides:true,
    mousewheel:true,
    parallax:true,
    breakpoints:{
        0:{
            slidesPerView:1,
            spaceBetween:10,
            freeMode:false
        }
        ,
        760:{
           slidesPerView:3.5,
            spaceBetween:60 ,
            freeMode:true
        }
        
        
    }
    
});


let desc = document.querySelector('.descrip');
sliderMain.on('slideChange', e =>{
    if(sliderMain.activeIndex>0){
        desc.classList.add('hidden')
    }else{
         desc.classList.remove('hidden')
    }
})


