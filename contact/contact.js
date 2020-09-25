function sendMail(){
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const subject = document.querySelector('#subject').value
    const body = document.querySelector('#textarea').value
    window.open(`mailto:info@todocad.com?subject=${subject}&body=${body}. Sent by: ${name}. Email to contact me: ${email}`);
    name.value = ''
    email.value = ''
    subject.value = ''
    body.value = ''
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