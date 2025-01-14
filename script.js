// Select the profile image element and prevent right-click context menu on it
const image = document.querySelector('.profile-image'); // Selects the element with the class 'profile-image'
image.addEventListener('contextmenu', (e) => { // Adds an event listener for the 'contextmenu' event (right-click)
    e.preventDefault(); // Prevents the default context menu from appearing
});

// Calculate age and insert into the presentation section
function calculateAge(birthdate) {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

document.addEventListener('DOMContentLoaded', function() {
    const ageElement = document.getElementById('age');
    const birthdate = '2001-01-03';
    ageElement.textContent = calculateAge(birthdate);
});

// Smooth scroll to top
document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default action
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
});

// Handle header resizing on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('small');
    } else {
        header.classList.remove('small');
    }
});

