document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profile-link');

    profileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            const nomePerfil = link.dataset.nome || link.querySelector('figcaption')?.textContent?.trim() || 'Perfil';
            const imagemPerfil = link.querySelector('img')?.src || '';

            localStorage.setItem('perfilAtivoNome', nomePerfil);
            localStorage.setItem('perfilAtivoImagem', imagemPerfil);
        });
    });
});
