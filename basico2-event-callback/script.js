"use strict";
const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event) {
    const nav = document.getElementById('nav');
    const button = event.currentTarget;
    if (button instanceof HTMLElement && nav) {
        nav?.classList.toggle('active');
        const active = nav.classList.contains('active');
        button.setAttribute('aria-expanded', active ? 'false' : 'true');
        button.setAttribute('aria-label', active ? 'Fechar Menu' : 'Abrir Menu');
    }
}
btnMobile?.addEventListener('pointerdown', toggleMenu);
