// Testimonial Form Handler
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('testimonialForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            return;
        }

        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';

        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            position: document.getElementById('position').value.trim(),
            company: document.getElementById('company').value.trim(),
            linkedin: document.getElementById('linkedin').value.trim(),
            project: document.getElementById('project').value.trim(),
            duration: document.getElementById('duration').value.trim(),
            testimonial: document.getElementById('testimonial').value.trim(),
            rating: document.querySelector('input[name="rating"]:checked')?.value,
            consent: document.getElementById('consent').checked,
            submittedAt: new Date().toISOString()
        };

        try {
            // Option 1: Send to Formspree (Replace with your Formspree endpoint)
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                showSuccess();
                form.reset();
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            showError();
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Testimonial';
        }
    });

    function validateForm() {
        const testimonial = document.getElementById('testimonial').value.trim();
        const linkedin = document.getElementById('linkedin').value.trim();
        const rating = document.querySelector('input[name="rating"]:checked');

        // Validate testimonial length
        if (testimonial.length < 50) {
            alert('Please provide a more detailed testimonial (minimum 50 characters)');
            return false;
        }

        // Validate LinkedIn URL
        if (!linkedin.includes('linkedin.com')) {
            alert('Please provide a valid LinkedIn profile URL');
            return false;
        }

        // Validate rating
        if (!rating) {
            alert('Please provide a rating');
            return false;
        }

        return true;
    }

    function showSuccess() {
        successMessage.classList.add('show');
        errorMessage.classList.remove('show');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Hide success message after 10 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 10000);
    }

    function showError() {
        errorMessage.classList.add('show');
        successMessage.classList.remove('show');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Hide error message after 10 seconds
        setTimeout(() => {
            errorMessage.classList.remove('show');
        }, 10000);
    }

    // Character counter for testimonial
    const testimonialField = document.getElementById('testimonial');
    const testimonialGroup = testimonialField.closest('.form-group');
    
    const charCounter = document.createElement('small');
    charCounter.style.float = 'right';
    charCounter.style.color = 'var(--text-secondary)';
    testimonialGroup.querySelector('small').after(charCounter);

    testimonialField.addEventListener('input', () => {
        const length = testimonialField.value.length;
        charCounter.textContent = `${length} characters`;
        
        if (length < 50) {
            charCounter.style.color = '#ef4444';
        } else {
            charCounter.style.color = '#10b981';
        }
    });
});
