document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the default manner

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation check
    if (username === '' || password === '') {
        document.getElementById('message').textContent = 'Please fill in both fields.';
    } else {
        // Display a success message for now
        document.getElementById('message').textContent = 'Login successful!';
        // You can add further functionality here, such as sending the data to a server
    }
});
