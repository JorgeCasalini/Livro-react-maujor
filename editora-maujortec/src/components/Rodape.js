import React from "react";

function atualizarAno() {
    // Obtém o ano atual
    const anoAtual = new Date().getFullYear();

    // Seleciona o elemento HTML onde o ano será exibido
    const elementoAno = document.getElementById("ano-atual");

    // Verifica se o elemento existe antes de tentar atualizá-lo
    if (elementoAno) {
        elementoAno.textContent = anoAtual;
    } else {
        console.error("Elemento com ID 'ano-atual' não encontrado.");
    }
}

// Chama a função para atualizar o ano quando a página é carregada
window.addEventListener("load", atualizarAno);

// Chama a função para atualizar o ano quando a página é carregada
window.onload = atualizarAno;

const Rodape = () => {
    return(
        <footer className="rodape">
            <p>
                Conteúdos cedidos pela Editora Novatec &#8212; &copy; Copyright <span id="ano-atual"></span>
            </p>
        </footer>
    );
}
export default Rodape;