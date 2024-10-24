document.getElementById('conviteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const local = document.getElementById('local').value;

    alert(`Convite solicitado com sucesso!\nNome: ${nome}\nData: ${data}\nLocal: ${local}`);
});

document.getElementById('contatoButton').addEventListener('click', function() {
    window.location.href = "mailto:vendedor@ddpersonalizados.com?subject=Solicitação%20de%20Convite";
});

// Lógica do Carrossel
const imagens = [
    { src: 'img/convite1.jpg', descricao: 'Convite 1 - Elegante e Sofisticado' },
    { src: 'img/convite2.jpg', descricao: 'Convite 2 - Divertido e Colorido' },
    { src: 'img/convite3.jpg', descricao: 'Convite 3 - Minimalista e Moderno' },
];

let index = 0;

document.getElementById('nextButton').addEventListener('click', function() {
    index = (index + 1) % imagens.length;
    atualizarCarrossel();
});

document.getElementById('prevButton').addEventListener('click', function() {
    index = (index - 1 + imagens.length) % imagens.length;
    atualizarCarrossel();
});

function atualizarCarrossel() {
    document.getElementById('carrosselImg').src = imagens[index].src;
    document.getElementById('carrosselDescription').textContent = imagens[index].descricao;
}
// Array com as imagens dos estilos de convites
const convites = {
    elegante: [
        'img/elegante1.jpg', 'img/elegante2.jpg', 'img/elegante3.jpg', 'img/elegante4.jpg', 'img/elegante5.jpg',
        'img/elegante6.jpg', 'img/elegante7.jpg', 'img/elegante8.jpg', 'img/elegante9.jpg', 'img/elegante10.jpg'
    ],
    divertido: [
        'img/divertido1.jpg', 'img/divertido2.jpg', 'img/divertido3.jpg', 'img/divertido4.jpg', 'img/divertido5.jpg',
        'img/divertido6.jpg', 'img/divertido7.jpg', 'img/divertido8.jpg', 'img/divertido9.jpg', 'img/divertido10.jpg'
    ],
    minimalista: [
        'img/minimalista1.jpg', 'img/minimalista2.jpg', 'img/minimalista3.jpg', 'img/minimalista4.jpg', 'img/minimalista5.jpg',
        'img/minimalista6.jpg', 'img/minimalista7.jpg', 'img/minimalista8.jpg', 'img/minimalista9.jpg', 'img/minimalista10.jpg'
    ],
    moderno: [
        'img/moderno1.jpg', 'img/moderno2.jpg', 'img/moderno3.jpg', 'img/moderno4.jpg', 'img/moderno5.jpg',
        'img/moderno6.jpg', 'img/moderno7.jpg', 'img/moderno8.jpg', 'img/moderno9.jpg', 'img/moderno10.jpg'
    ],
    rustico: [
        'img/rustico1.jpg', 'img/rustico2.jpg', 'img/rustico3.jpg', 'img/rustico4.jpg', 'img/rustico5.jpg',
        'img/rustico6.jpg', 'img/rustico7.jpg', 'img/rustico8.jpg', 'img/rustico9.jpg', 'img/rustico10.jpg'
    ]
};

// Função para exibir as imagens do estilo selecionado
function mostrarEstilo(estilo) {
    const galeriaDiv = document.getElementById('galeria');
    galeriaDiv.innerHTML = ''; // Limpa as imagens anteriores

    convites[estilo].forEach(imagem => {
        const imgElement = document.createElement('img');
        imgElement.src = imagem;
        imgElement.alt = `Convite ${estilo}`;
        galeriaDiv.appendChild(imgElement);
    });
}
