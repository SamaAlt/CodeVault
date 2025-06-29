document.addEventListener('DOMContentLoaded', () => {
    // Initialize all input fields to check their state
    document.querySelectorAll('.form-group input').forEach(input => {
        // Add placeholder-shown check for better UX
        input.setAttribute('placeholder', ' ');
        
        // Add focus/blur events for better animation control
        input.addEventListener('focus', () => {
            input.parentNode.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentNode.classList.remove('focused');
            }
        });
        
        // Check if inputs are pre-filled (like in form reload scenarios)
        if (input.value) {
            input.parentNode.classList.add('focused');
        }
    });
    
    console.log('%cFloating Labels Loaded', 'color: #41d8bf; font-weight: bold;');
});
