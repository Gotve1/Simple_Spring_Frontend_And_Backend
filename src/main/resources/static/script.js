async function handleSubmit() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const password = document.getElementById('password').value;
    const button = document.getElementById('submitButton');

    if (firstName && lastName && password) {
        button.classList.add('success');
        button.textContent = 'Registered';

        // Create user object
        const user = {
            firstName: firstName,
            lastName: lastName,
            password: password
        };

        // Send POST request
        try {
            const response = await fetch('http://localhost:8080/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log('User registered successfully');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }

        setTimeout(() => {
            button.textContent = 'Submit';
        }, 1000);
    } else {
        button.classList.add('error');
        button.textContent = 'Fill the bars';
        setTimeout(() => {
            button.classList.remove('error');
            button.textContent = 'Submit';
        }, 1000);
    }
}