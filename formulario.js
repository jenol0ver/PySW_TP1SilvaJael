document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.submit-btn');
    const modal = document.getElementById('confirmationModal');
    const closeBtn = modal.querySelector('.close-btn');

    // Validación en tiempo real
    form.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('input', function() {
            const isValid = this.validity.valid;
            const validationIcon = this.nextElementSibling;
            
            if (isValid) {
                validationIcon.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--success-color');
            } else {
                validationIcon.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--error-color');
            }
        });
    });

    // Manejo de envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar todos los campos
        const allValid = Array.from(this.elements).every(element => {
            if (element.type === 'submit') return true;
            if (element.required && !element.validity.valid) return false;
            return true;
        });

        if (!allValid) {
            alert('Por favor, complete todos los campos correctamente');
            return;
        }

        // Mostrar efecto de carga
        submitBtn.classList.add('loading');
        
        // Simular envío (en producción usarías una API real)
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            modal.style.display = 'flex';
            
            // Limpiar formulario después de enviar
            form.reset();
            
            // Restablecer validación
            form.querySelectorAll('input, select, textarea').forEach(field => {
                const validationIcon = field.nextElementSibling;
                validationIcon.style.opacity = '0';
            });
        }, 2000);
    });

    // Cerrar modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });

    // Cerrar modal al presionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    });
});