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