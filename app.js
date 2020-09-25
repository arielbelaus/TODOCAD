/********************************index.html***********************************************************************/

//Evento play/stop carousel
$('.btn-customized').on('click', function(){
 
     if( ! $(this).hasClass('paused') ) {
         $('.carousel').carousel('pause');
         $('.btn-customized').toggleClass('paused');
         $('.btn-customized i').removeClass('fa-pause').addClass('fa-play');
         $(this).blur();
     }
     else {
         $('.carousel').carousel('cycle');
         $('.btn-customized').toggleClass('paused');
         $('.btn-customized i').removeClass('fa-play').addClass('fa-pause');
         $(this).blur();
     }
  
 });

//Evento mouseover carousel 
document.querySelector('#carouselExampleFade').addEventListener('mouseover', (e) => {
     const botonesCarousel = document.getElementsByClassName('btn-carousel')
     botonesCarousel[0].style.visibility = 'visible'
     botonesCarousel[1].style.visibility = 'visible'
     botonesCarousel[2].style.visibility = 'visible' 
})

//Evento mouseleave carousel 
document.querySelector('#carouselExampleFade').addEventListener('mouseleave', (e) => {
     const botonesCarousel = document.getElementsByClassName('btn-carousel')
     botonesCarousel[0].style.visibility = 'hidden'
     botonesCarousel[1].style.visibility = 'hidden'
     botonesCarousel[2].style.visibility = 'hidden'
})


//Loader
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.querySelector('.content').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.querySelector('interactive');
           document.querySelector('.spinner').style.display="none";
           document.querySelector('.content').style.visibility="visible";
        },1000);
    }
  }

//ancla
window.addEventListener('scroll', () =>{
    const scrollDown = document.querySelector('#scrollDown')
    if(window.pageYOffset >= 200){
        scrollDown.style.opacity=0.9
    } else{
      scrollDown.style.opacity=0
    }
})