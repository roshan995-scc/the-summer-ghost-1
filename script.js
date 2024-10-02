document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transition = 'opacity 3s ease-in-out';
    setTimeout(() => {
        container.style.opacity = '1';
    }, 500);
});
