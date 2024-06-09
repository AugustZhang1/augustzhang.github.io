document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the entered information
    const dentalService = document.getElementById('dental-service').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Create the confirmation message
    const confirmationMessage = `
        <strong>Dental Service:</strong> ${dentalService} <br>
        <strong>Name:</strong> ${name} <br>
        <strong>Email:</strong> ${email} <br>
        <strong>Phone Number:</strong> ${phone}
    `;

    // Store the confirmation message in localStorage
    localStorage.setItem('confirmationMessage', confirmationMessage);

    // Redirect to the confirmation page
    window.location.href = 'confirmation.html';
});
