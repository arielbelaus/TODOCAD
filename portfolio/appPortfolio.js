/********************************portfolio.html***********************************************************************/

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
    }

})

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

//Ir a la foto anterior
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

//Ir a la foto siguiente
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
