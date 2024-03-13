//for contactus
const Name = document.getElementById('name');
const Mail = document.getElementById('mail');
const Phone = document.getElementById('phone');
const sub = document.getElementById('subject');
const msg = document.getElementById('message');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let suub = `subject :${sub.value}`;
    let ebody = `
    <h1>First Name: </h1>${Name.value}
    <br>
    <h1>mail: </h1>${Mail.value}
    <br>
    <h1>Phone No: </h1>${Phone.value}
    <br>
    <h1>Message: </h1>${msg.value}
    `;

    Email.send({
        SecureToken : "d4b9980b-d086-4b7e-8a15-c5fcf19d4692", 
        To : 'soumyajitobama@gmail.com', 
        From : "soumyajitobama@gmail.com",
        Subject : suub,
        Body : ebody
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Done...",
                text: "Message sent successfully.",
                icon: "success"
            });
        }
    });
});
    
