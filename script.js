const subscribeButton = document.querySelector('.flex-cont button');
const emailInput = document.querySelector('.flex-cont input');

subscribeButton.addEventListener('click', (event) => {
    event.preventDefault();
    const email = emailInput.value;

    if (validateEmail(email)) {
        alert("Thank you for subscribing! Stay tuned for updates.");
        emailInput.value = '';
    } else {
        alert("Please enter a valid email address.");
    }
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

