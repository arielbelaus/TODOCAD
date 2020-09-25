//ancla
window.addEventListener('scroll', () =>{
    const scrollDown = document.querySelector('#scrollDown')
    if(window.pageYOffset >= 200){
        scrollDown.style.opacity=0.9
    } else{
      scrollDown.style.opacity=0
    }
})