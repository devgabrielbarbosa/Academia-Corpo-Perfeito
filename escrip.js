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
    "mensalidade" : "O valor varia de acordo com o plano escolhido. Você pode nos chamar ou vir até a academia para conhecer todas as opções e escolher a que melhor se encaixa no seu bolso!",
    "ritbox": "É uma mistura de dança e exercícios funcionais no ritmo da música.",
    "abs": "É um treino focado no fortalecimento do abdômen.",
    "luta": "Temos aulas de luta! Pergunte sobre as modalidades disponíveis.",
    "dinheiro": "Sim, aceitamos pagamento em dinheiro, cartão e pix.",
    "voces tem plano fidelidade": "Temos planos com e sem fidelidade.",
    "experimental": "Temos aulas experimentais! Você pode agendar uma para conhecer a academia.",
    "desconto": "Temos promoções para indicações! Entre em contato para mais detalhes.",
    "personal": "Temos professores para ajudar nos treinos e oferecemos serviço de personal trainer.",
    "fluxo": "Os horários de menor movimento são das 09h às 11h e das 16h às 19h.",
    "criança": "Depende! Se ele for aluno e estiver na faixa etária permitida, sim!"
};

// Normaliza o texto removendo acentos e deixando em minúsculas
function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Função para encontrar a resposta mais próxima
function encontrarResposta(mensagem) {
    mensagem = normalizarTexto(mensagem);
    
    for (const chave in respostas) {
        if (mensagem.includes(chave)) {
            return respostas[chave]; // Retorna a resposta correspondente à palavra-chave encontrada
        }
    }
    return "Não entendi, pode repetir?"; // Se não encontrar nada, resposta padrão
}

function enviarMensagem() {
    const input = document.getElementById('chat-input');
    const mensagemOriginal = input.value.trim();
    if (mensagemOriginal === "") return; // Evita mensagens vazias

    adicionarMensagem("Você", mensagemOriginal);

    // Simulando tempo de resposta (2 segundos)
    setTimeout(() => {
        const resposta = encontrarResposta(mensagemOriginal);
        adicionarMensagem("Bot", resposta);
    }, 1800);

    input.value = "";
}

function adicionarMensagem(remetente, texto) {
    const chatBody = document.getElementById('chat-body');
    if (!chatBody) return; // Evita erros se o chat não estiver na página

    const msgDiv = document.createElement('div');
    msgDiv.classList.add(remetente === "Você" ? "usuario" : "bot");
    msgDiv.textContent = `${remetente}: ${texto}`;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Rolagem automática para a última mensagem
}
