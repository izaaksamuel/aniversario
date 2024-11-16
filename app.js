/**
 * Sorteio de uma carta
 * @author samuel
 */

// Array de cartas com objetos
const cartas = [
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Double take- Dhruv", imagem: "./img/doubletake.jpg "},
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Perfect - Ed Sheeran", imagem: "./img/perfect.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "galway girl - Ed Sheeran", imagem: "./img/galway.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Beautiful girls - Bruno Mars", imagem: "./img/beautiful.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Disco - Surf Curse", imagem: "./img/disco.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Supersticiosa -Dody ", imagem: "./img/supersticiosa.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Cabelo arco íris - Kamaitachi", imagem: "./img/arcoiris.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "505 - Artic monkeys", imagem: "./img/505.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "We fell in love in october - Girl in red", imagem: "./img/october.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Love nwantiti- Ckay", imagem: "./img/love.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "As it was - Harry Styles", imagem: "./img/harry.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Running up that Hill - Kate Bursh", imagem: "./img/kate.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Flores de papel- Matheus Blc", imagem: "./img/papel.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Perfect Girl - Mareux", imagem: "./img/0.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Heart break anniversary - Giveon", imagem: "./img/hear.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Liga pra mim - Thru, Erix", imagem: "./img/pramiim.jpg" },
    { nome: "Elogio criativo", atributos: "Você é tão linda quanto o desenvolvevimento da Pam e do Jim em the office", imagem: "./img/pam.jpg" },
    { nome: "Elogio criativo", atributos: "Pesquise Shrek 1h.04min.20seg", imagem: "./img/shrek.jpg" },
    { nome: "Elogio criativo", atributos: "Pesquise Aladin 45min.25seg", imagem: "./img/aladin.jpg" },
    { nome: "Elogio criativo", atributos: "Tanto o universo quanto a  sua beleza são infinitos, mas tenho minhas duvidas sobre o universo", imagem: "./img/universo.jpg" },
    { nome: "Elogio criativo", atributos: "É incrível como quando a gente saiu eu olhava pra vc exatamente assim", imagem: "./img/flork.png" },
    { nome: "Feliz vidaa", atributos: "Que todos os seus sonhos se realizem, sempre vou estar torcendo por vc viu", imagem: "./img/aniversario.jpg" },
    { nome: "Elogio criativo", atributos: "Não sei pq, mas sempre que lembro de você falando comigo olhando direto nos meus olhos e eu gaguejando, eu lembro dessa cena ", imagem: "./img/peter.jpg" },
    { nome: "Elogio criativo", atributos: "A sua beleza é tão incomensurável que consegue ser mais bonita que a trilha sonora desse filme", imagem: "./img/interestelar.jpg" },
    { nome: "Elogio criativo", atributos: "Coversar com você é mais interessante que ler qualquer obra do Stephen King", imagem: "./img/stephen-king.jpg" },
    { nome: "Elogio criativo", atributos: "Naquele dia, enquanto você se aventurava andando de patins, eu tava literalmente assim olhando pra vc do lado de fora da pista", imagem: "./img/gatinho.jpg" },
    { nome: "Elogio criativo", atributos: "Você é muito boa em bolar coisas em um papelzinho, vi isso naquele dia ", imagem: "./img/bolar.jpg" },
    { nome: "Elogio criativo", atributos: "Eu juro que eu queria que o trem quebrasse aquele dia, só pra eu continuar conversando mais tempo com vc aquele dia kk ", imagem: "./img/trem.jpg" },
    { nome: "Elogio criativo", atributos: "Eu sei que aquele dia vc esperava que eu te beijasse, e eu realmente queria, na proxima vai ser diferente, prometo", imagem: "./img/fofo.jpg" }
];

function sortear() {
    // Lógica principal do sorteio da carta
    const indice = Math.floor(Math.random() * cartas.length);
    const carta = cartas[indice]; // Obtém a carta sorteada

    // Renderizar o canto superior esquerdo da carta
    document.getElementById('sup').innerHTML = `<div class="nome">${carta.nome}</div>`;

    // Renderizar o centro da carta
    const cc = document.getElementById('centro');
    cc.innerHTML = `<img src="${carta.imagem}">`;

    // Renderizar lado inferior da carta
    document.getElementById('inf').innerHTML = `<div class="card">${carta.atributos}</div>`;
}