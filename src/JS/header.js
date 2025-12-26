document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('.head-hamburger .hambur');
    const overlay = document.getElementById('sitemapOverlay');
    const closeBtn = document.getElementById('sitemapClose');

    openBtn.addEventListener('click', () => {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // 스크롤 잠금
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
})