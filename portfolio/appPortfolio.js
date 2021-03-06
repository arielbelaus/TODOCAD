/********************************portfolio.html***********************************************************************/

// Seleccionar la flecha para volver arriba
const scrollDown = document.querySelector('#scrollDown')
// Get the modal
const modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
document.querySelector('#picturesPortfolio').addEventListener("click", (e) => {
    const imagen = e.target
    const modalImg = document.getElementById('img01');
    if(imagen.classList.contains('imgPortfolio')){
      const src = e.target.src
      modal.style.display = "block";
      modalImg.src = src; //toma el src de img y lo pone en modalImg
      scrollDown.style.visibility= 'hidden'
    }
})

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  scrollDown.style.visibility= 'visible'
}

//Al apretar en el controno de la imagen se cierra el modal
modal.addEventListener('click', (e) => {
  if(e.target.tagName === 'DIV'){
    modal.style.display = "none";
    scrollDown.style.visibility= 'visible'
  }
})


//Ir a la foto anterior con click
document.querySelector('#anterior').addEventListener('click', (e) =>{
    const modalImg = document.querySelector('#img01')
    const imagenes = document.querySelector('#picturesPortfolio').querySelectorAll('img')
    Array.from(imagenes)
    for(i = 0; i<imagenes.length; i++){
      if(imagenes[i].src === modalImg.src){
        if(i === 0){
          const srcImgUltima = imagenes[imagenes.length-1].src
          modalImg.src = srcImgUltima
          break
        }
        const srcImgAnterior = imagenes[i-1].src
        modalImg.src = srcImgAnterior;
        break
      }
    }
})

//Ir a la foto siguiente con click
document.querySelector('#siguiente').addEventListener('click', (e) =>{
  const modalImg = document.querySelector('#img01')
  const imagenes = document.querySelector('#picturesPortfolio').querySelectorAll('img')
  Array.from(imagenes)
  for(i=0 ; i<imagenes.length; i++){
    if(imagenes[i].src === modalImg.src){
      if(i === imagenes.length-1){
        const srcImgPrimera = imagenes[0].src
        modalImg.src = srcImgPrimera
        break
      }
      const srcImgSiguiente = imagenes[i+1].src
      modalImg.src = srcImgSiguiente
      break
    }
  }
})

//Ir a la foto anterior con flecha
document.addEventListener('keydown', (e) =>{
  const key = e.key
  const modalImg = document.querySelector('#img01')
  const imagenes = document.querySelector('#picturesPortfolio').querySelectorAll('img')
  Array.from(imagenes)
  if(key === 'ArrowLeft'){
    for(i = 0; i<imagenes.length; i++){
      if(imagenes[i].src === modalImg.src){
        if(i === 0){
          const srcImgUltima = imagenes[imagenes.length-1].src
          modalImg.src = srcImgUltima
          break
        }
        const srcImgAnterior = imagenes[i-1].src
        modalImg.src = srcImgAnterior;
        break
      }
    }
  }
})

//Ir a la foto siguiente con flecha
document.addEventListener('keydown', (e) =>{
  const key = e.key
  const modalImg = document.querySelector('#img01')
  const imagenes = document.querySelector('#picturesPortfolio').querySelectorAll('img')
  Array.from(imagenes)
  if(key === 'ArrowRight'){
    for(i=0 ; i<imagenes.length; i++){
      if(imagenes[i].src === modalImg.src){
        if(i === imagenes.length-1){
          const srcImgPrimera = imagenes[0].src
          modalImg.src = srcImgPrimera
          break
        }
        const srcImgSiguiente = imagenes[i+1].src
        modalImg.src = srcImgSiguiente
        break
      }
    }
  }
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
  if(window.pageYOffset >= 200){
      scrollDown.style.opacity=0.9
  } else{
    scrollDown.style.opacity=0
  }
})


