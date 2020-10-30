function sendMail(contactForm) {
    emailjs.send("gmail2", "template_uqnku2p", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "form_content": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}