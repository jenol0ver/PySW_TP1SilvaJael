// Scroll Reveal Effect
function checkScrollReveal() {
    const elements = document.querySelectorAll('.scroll-reveal');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Si el elemento está en la vista
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// Evento al hacer scroll
document.addEventListener('scroll', checkScrollReveal);

// Iniciar el efecto cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar elementos visibles
    checkScrollReveal();

    // Evento para los filtros
    const filterInputs = document.querySelectorAll('input[type="radio"][name="filter"]');
    
    filterInputs.forEach(input => {
        input.addEventListener('change', () => {
            // Agregar clase de animación a los artículos
            const articles = document.querySelectorAll('.article-card');
            articles.forEach(article => {
                article.style.opacity = '0';
                article.style.transform = 'translateY(20px)';
                
                // Restaurar después de 100ms
                setTimeout(() => {
                    article.style.opacity = '1';
                    article.style.transform = 'translateY(0)';
                }, 100);
            });
        });
    });

    // Formulario de comentarios
    const commentForm = document.querySelector('.comment-form form');
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.querySelector('.comment-form input[type="text"]');
            const commentInput = document.querySelector('.comment-form textarea');
            
            if (nameInput.value.trim() && commentInput.value.trim()) {
                // Crear nuevo comentario
                const newComment = document.createElement('div');
                newComment.className = 'comment';
                
                // Avatar con iniciales
                const avatar = document.createElement('div');
                avatar.className = 'comment-avatar';
                const initials = document.createElement('div');
                initials.className = 'avatar-initials';
                initials.textContent = nameInput.value.trim().substring(0, 2).toUpperCase();
                avatar.appendChild(initials);
                
                // Contenido del comentario
                const content = document.createElement('div');
                content.className = 'comment-content';
                
                const header = document.createElement('div');
                header.className = 'comment-header';
                
                const author = document.createElement('span');
                author.className = 'comment-author';
                author.textContent = nameInput.value.trim();
                
                const date = document.createElement('span');
                date.className = 'comment-date';
                date.textContent = new Date().toLocaleDateString();
                
                header.appendChild(author);
                header.appendChild(date);
                
                const commentText = document.createElement('p');
                commentText.textContent = commentInput.value.trim();
                
                content.appendChild(header);
                content.appendChild(commentText);
                
                newComment.appendChild(avatar);
                newComment.appendChild(content);
                
                // Agregar al contenedor de comentarios
                const commentsContainer = document.querySelector('.comments-container');
                commentsContainer.insertBefore(newComment, commentForm);
                
                // Limpiar el formulario
                nameInput.value = '';
                commentInput.value = '';
            }
        });
    }

    /* Dark Mode Support 
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }*/
});