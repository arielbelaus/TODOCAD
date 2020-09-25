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
          scrollDown.style.opacity=1
      } else{
        scrollDown.style.opacity=0
      }
  })