// Controle de Pontos
let pontos = 0;

// Função para adicionar pontos
function adicionarPontos(quantidade = 10) {
    pontos += quantidade;
    document.getElementById('pontos').textContent = pontos;
    alert(`Você ganhou ${quantidade} pontos! Total: ${pontos} pontos.`);
}

// Adicionando botões para ganhar pontos dinamicamente
document.addEventListener("DOMContentLoaded", function () {
    const botoes = [
        { texto: "🏋️ Completar Treino do Dia (+10 pts)", pontos: 10 },
        { texto: "🧘 Aula Especial (+15 pts)", pontos: 15 },
        { texto: "📢 Indicar um Amigo (+30 pts)", pontos: 30 },
        { texto: "💳 Assinar Plano Trimestral/Anual (+50 pts)", pontos: 50 }
    ];

    const container = document.getElementById("pontos-container");

    botoes.forEach(botaoInfo => {
        const botao = document.createElement("button");
        botao.textContent = botaoInfo.texto;
        botao.onclick = () => adicionarPontos(botaoInfo.pontos);
        container.appendChild(botao);
    });
});

// Chatbot
const respostas = {
    "oi": "Olá! tudo bem, Como posso ajudar?",
    "bom dia": "Bom dia! Como posso te ajudar hoje?",
    "boa tarde": "Boa tarde! Precisa de algo?",
    "boa noite": "Boa noite! Como posso te ajudar?",
    "obrigado" : "Por nada! passar bem.",
    "planos": "Oferecemos diferentes planos! Temos opções mensais, trimestrais, semestrais e anuais.",
    "valor": "O valor varia de acordo com o plano escolhido. Podemos te ajudar a escolher o melhor para você!",
    "horário": "Nosso horário de funcionamento é das 08h às 23h.",
    "spinning": "É uma aula de bike indoor cheia de energia!",
    "ritbox": "É uma mistura de dança e exercícios funcionais no ritmo da música.",
    "abs": "É um treino focado no fortalecimento do abdômen.",
    "luta": "Temos aulas de luta! Pergunte sobre as modalidades disponíveis.",
    "dinheiro": "Sim, aceitamos pagamento em dinheiro, cartão e pix.",
    "voces tem plano fidelidade": "Temos planos com e sem fidelidade.",
    "experimental": "Temos aulas experimentais! Você pode agendar uma para conhecer a academia.",
    "desconto": "Temos promoções para indicações! Entre em contato para mais detalhes.",
    "personal": "Temos professores para ajudar nos treinos e oferecemos serviço de personal trainer.",
    "fluxo": "Os horários de menor movimento são das 09h às 11h e das 16h às 19h.",
    "criança": "Depende! Se ele for aluno e estiver na faixa etária permitida, sim!",
    "kids" : "Se tivermos, você pode deixar seu pequeno se divertindo enquanto treina. Se não, podemos conversar sobre as opções disponíveis para pais que treinam aqui.",
    "banho" : "Sim! Temos vestiários equipados para você tomar aquele banho depois do treino.",
    "secador" : "Depende da unidade. Se precisar, pode perguntar na recepção!",
    "lanchonete" : "Sim! Temos opções saudáveis para você repor as energias depois do treino.",
    "suplementos" : "Sim, oferecemos uma seleção de suplementos para te ajudar a alcançar seus objetivos",
};

// Normaliza o texto removendo acentos e deixando em minúsculas
function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Função para encontrar a resposta e tratar redirecionamentos
function encontrarResposta(mensagem) {
    mensagem = normalizarTexto(mensagem);

    // Verifica se a pergunta é sobre planos
    if (
        mensagem.includes("plano") || 
        mensagem.includes("planos") || 
        mensagem.includes("quais sao os planos") || 
        mensagem.includes("me fale sobre os planos")
    ) {
        setTimeout(() => {
            window.location.href = "./pagina-academia/plano.html"; // Verifique se o arquivo está na mesma pasta
        }, 1500);
        return "Boot: Vou te redirecionar para a página de planos...";
    }

    // Verifica se a pergunta é sobre matrícula
    if (
        mensagem.includes("matricula") || 
        mensagem.includes("fazer matricula") || 
        mensagem.includes("como faco para me matricular") || 
        mensagem.includes("onde faco a matricula")
    ) {
        setTimeout(() => {
            window.location.href = "./pagina-academia/matricula.html"; // Verifique se o arquivo está na mesma pasta
        }, 1500);
        return "Boot: Vou te redirecionar para a página de matrícula...";
    }
    if(
        mensagem.includes("mensalidade") ||
        mensagem.includes("me fala sobre a mensalidade") ||
        mensagem.includes("qual é a mensalidade")
    ) {
        setTimeout(() => {
            window.location.href = "./pagina-academia/plano.html";
        }, 1500);
        return "Boot: Vou te redirecionar para a página de planos...";
    }

    // Se a pergunta não for sobre planos ou matrícula, responde normalmente
    for (const chave in respostas) {
        if (mensagem.includes(chave)) {
            return respostas[chave];
        }
    }

    return "Não entendi, pode repetir?";
}

// Função para processar a mensagem do usuário
function enviarMensagem() {
    const input = document.getElementById('chat-input');
    const mensagemOriginal = input.value.trim();
    if (mensagemOriginal === "") return; // Evita mensagens vazias

    adicionarMensagem("Você", mensagemOriginal);

    // Simulando tempo de resposta (1,8 segundos)
    setTimeout(() => {
        const resposta = encontrarResposta(mensagemOriginal);
        adicionarMensagem("Boot", resposta);
    }, 1800);

    input.value = "";
}

// Função para adicionar mensagens no chat
function adicionarMensagem(remetente, texto) {
    const chatBody = document.getElementById('chat-body');
    if (!chatBody) return; // Evita erros se o chat não estiver na página

    const msgDiv = document.createElement('div');
    msgDiv.classList.add(remetente === "Você" ? "usuario" : "boot");
    msgDiv.textContent = `${remetente}: ${texto}`;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Rolagem automática para a última mensagem
}

function contratarPlano(plano) {
    // Exibir o modal
    document.getElementById('modal').style.display = "block";

    // Atualizar o título do modal com o nome do plano
    const modalTitle = document.getElementById('modalTitle');
    const planoSelecionado = document.getElementById('planoSelecionado');
    
    if (plano === 'mensal') {
        modalTitle.innerHTML = "📋 Preencha seus dados para o Plano Mensal";
        planoSelecionado.value = 'mensal';
    } else if (plano === 'trimestral') {
        modalTitle.innerHTML = "📋 Preencha seus dados para o Plano Trimestral";
        planoSelecionado.value = 'trimestral';
    } else if (plano === 'anual') {
        modalTitle.innerHTML = "📋 Preencha seus dados para o Plano Anual";
        planoSelecionado.value = 'anual';
    }
}

// Fechar Modal
document.getElementById('closeModalBtn').onclick = function() {
    document.getElementById('modal').style.display = "none";
}

// Fechar Modal se o usuário clicar fora dele
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
}