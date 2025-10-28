

const modal = document.getElementById('agendamentoModal');
const abrirModalBtn = document.getElementById('abrirModal');

abrirModalBtn.onclick = function(){
    modal.style.display = "block";
}
function fecharModal(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modal ){
        modal.style.display = "none";
    }
}

let eventos = [];

const mesAnoEl = document.getElementById('mesAno');
const diasDoMesEl = document.getElementById('diasDoMes');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let dataAtual = new Date();
let mesAtual = dataAtual.getMonth();
let anoAtual = dataAtual.getFullYear();

const nomeMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

function renderizarCalendario(){
    mesAnoEl.textContent = `${nomeMeses[mesAtual]} ${anoAtual}`;

    diasDoMesEl.innerHTML = '';

    const primeiroDiaMes = new Date(anoAtual, mesAtual, 1).getDay();
    const ultimoDia = new Date(anoAtual, mesAtual + 1, 0).getDate();

    for (let i = 0; i < primeiroDiaMes; i++){
        const diaVazio = document.createElement('div');
        diasDoMesEl.appendChild(diaVazio);
    }

    for(let dia = 1; dia <= ultimoDia; dia++){
        const diaEl = document.createElement('div');
        diaEl.classList.add('dia');

        const dataFormatada = `${anoAtual}-${String(mesAtual + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;

        diaEl.innerHTML = `<span>${dia}</span>`;

        if (dia === dataAtual.getDate() && mesAtual === new Date().getMonth() && anoAtual === new Date().getFullYear()){
            diaEl.classList.add('dia-atual');
        }
        const eventosDoDia = eventos.filter(evento => evento.data === dataFormatada);
        eventosDoDia.forEach(evento => {
            const eventoEl = document.createElement('div');
            eventoEl.classList.add('evento');
            eventoEl.textContent = `${evento.hora} - ${evento.nome}`;
            diaEl.appendChild(eventoEl);
            
        });

        diasDoMesEl.appendChild(diaEl);
    }
}

prevBtn.addEventListener('click', () => {
    mesAtual--;
    if (mesAtual < 0){
        mesAtual = 11;
        anoAtual--;
    }
    renderizarCalendario();
});

nextBtn.addEventListener('click', () => {
    mesAtual++;
    if (mesAtual >11){
        mesAtual = 0;
        anoAtual++;
    }
    renderizarCalendario();
});

function agendar(){
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    if (!nome || !data || !hora){
        alert("Preencha todos os campos!");
        return;
    }

    eventos.push({nome, data, hora});

    eventos.sort((a,b) => (a.data + a.hora).localeCompare(b.data + b.hora));

    document.getElementById('nome').value = '';
    document.getElementById('data').value = '';
    document.getElementById('hora').value = '';

    renderizarCalendario();
   
    fecharModal()
}

renderizarCalendario();