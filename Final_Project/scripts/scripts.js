document.addEventListener('DOMContentLoaded', () => {
    // Dynamic content for Fitness page
    const workoutPlan = [
        { day: 'Day 1', exercises: ['Push-ups', 'Bench Press', 'Tricep Dips'] },
        { day: 'Day 2', exercises: ['Pull-ups', 'Dumbbell Rows', 'Bicep Curls'] },
        { day: 'Day 3', exercises: ['Shoulder Press', 'Lateral Raises', 'Shrugs'] }
    ];

    const workoutContainer = document.getElementById('workout-plan');
    if (workoutContainer) {
        workoutPlan.forEach(day => {
            const daySection = document.createElement('div');
            const dayTitle = document.createElement('h3');
            dayTitle.textContent = day.day;
            daySection.appendChild(dayTitle);

            const exerciseList = document.createElement('ul');
            day.exercises.forEach(exercise => {
                const exerciseItem = document.createElement('li');
                exerciseItem.textContent = exercise;
                exerciseList.appendChild(exerciseItem);
            });
            daySection.appendChild(exerciseList);
            workoutContainer.appendChild(daySection);
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const contactData = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };
            localStorage.setItem('contactData', JSON.stringify(contactData));
            alert('Thank you for your message!');
            contactForm.reset();
        });
    }

    // Lazy loading images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
});
