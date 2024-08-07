document.getElementById('contactForm').addEventListener('submit', function(event) {
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
            document.getElementById('formResponse').style.display = 'block'; // Show success message
            this.reset(); // Reset form fields
        } else {
            alert('There was a problem with the submission.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
    });
});
// for resouce section
