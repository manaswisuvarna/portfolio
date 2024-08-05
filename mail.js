// function sendMail()
// {
//     var params ={

//         name : document.getElementById("name").value,
//         email : document.getElementById("email").value,
//         address : document.getElementById("address").value,
//         phone : document.getElementById("phone").value,
//         message :document.getElementById("message").value,
        
//     };



// const serviceId = "service_j4avyxg";
// const templateId = "template_b8g73ui";

// emailjs
// .send(serviceId,templateId,params)
// .then((res)=>{
//     // document.getElementById("name").value="";
//     // document.getElementById(".email").value="";
//     // document.getElementById(".address").value="";
//     // document.getElementById(".number").value="";
//     // document.getElementById(".text").value="";
//     console.log(res);
//     alert("successs");
// })
// .catch((err)=> console.log(err));
// }


function sendMail(event) {
    event.preventDefault(); // Prevent default form submission

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    const serviceId = "service_j4avyxg";
    const templateId = "template_b8g73ui";

    let para=document.getElementById("mess");

    emailjs.send(serviceId, templateId, params)
        .then((res) => {
            console.log(res);
            para.style.display="block";
            // alert("Success! Your message has been sent.");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("address").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";
        })
        .catch((err) => {
            console.log(err);
            alert("Failed to send the message. Please try again.");
        });
}