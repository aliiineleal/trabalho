// Rolagem suave para links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Exemplo de interatividade: Botão de Denuncie
document.querySelector('.btn-denuncie').addEventListener('click', () => {
    alert('Redirecionando para página de denúncia...');
});

console.log("Site carregado com sucesso!");