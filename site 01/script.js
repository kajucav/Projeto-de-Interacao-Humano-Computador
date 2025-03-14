document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            console.log(`Redirecionando para: ${e.target.href}`);
        });
    });
});