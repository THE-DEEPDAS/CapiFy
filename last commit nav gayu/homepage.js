var loader = document.querySelector("#loader")
// set timeout basically dalay in execution
setTimeout(function(){
    loader.style.top = "-100%";
},3500)


// document.addEventListener("DOMContentLoaded", () => {
//     const scrollContainer = document.getElementById('scrollContainer');


//     const emptySpace = document.createElement('div');
//     emptySpace.style.height = '2000px'; // Set this to the desired scrollable height
//     scrollContainer.appendChild(emptySpace);


//     document.body.style.overflow = 'auto';
// });
window.addEventListener('load', () => {
    const gradientDiv = document.getElementById('gradientBackground');

    // Example function to change gradient dynamically
    function changeGradient(color1, color2) {
        gradientDiv.style.background = `radial-gradient(${color1}, ${color2})`;
    }

    // Change the gradient after 3 seconds for demonstration
    // setTimeout(() => {
    //     changeGradient( "#000000","#000000");
    // }, 3000);
});





document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(this);

    // Send form data using Fetch API
    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Show success message
            document.getElementById('formResponse').style.display = 'block';
            document.getElementById('formResponse').innerHTML = '<h4 class="text-success">Thank you for your message. We will get back to you soon!</h4>';
            this.reset(); // Reset form fields
        } else {
            // Show error message
            document.getElementById('formResponse').style.display = 'block';
            document.getElementById('formResponse').innerHTML = '<h4 class="text-danger">There was a problem with the submission. Please try again later.</h4>';
        }
    }).catch(error => {
        console.error('Error:', error);
        // Show error message
        document.getElementById('formResponse').style.display = 'block';
        document.getElementById('formResponse').innerHTML = '<h4 class="text-danger">There was an error sending your message. Please try again later.</h4>';
    });
});