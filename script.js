// Elemento do botão de toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Verifica tema salvo no localStorage ou prefere sistema operacional
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(theme);
}

// Define o tema
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateToggleButton(theme);
}

// Atualiza texto e ícone do botão
function updateToggleButton(theme) {
    const icon = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.textContent = icon;
}

// Toggle entre temas
function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Event listener para o botão
themeToggle.addEventListener('click', toggleTheme);

// Inicializa ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();

    // Animação de Intro
    const intro = document.getElementById('intro');
    const main = document.querySelector('main');

    // Após 3 segundos (duração da animação), esconder intro e mostrar main
    setTimeout(() => {
        intro.classList.add('hidden');
        main.classList.add('show');
    }, 3000); // Ajuste o tempo conforme necessário
});
