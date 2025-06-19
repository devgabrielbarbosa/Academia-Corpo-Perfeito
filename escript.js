// Chatbot
const respostas = {
    "ola": "Saudação: Olá! Tudo bem? Como posso ajudar?",
    "oi": "Saudação: Olá! Tudo bem? Como posso ajudar?",
    "bom dia": "Saudação: Bom dia! Como posso te ajudar hoje?",
    "boa tarde": "Saudação: Boa tarde! Precisa de algo?",
    "boa noite": "Saudação: Boa noite! Como posso te ajudar?",
    "obrigado": "Agradecimento: Por nada! Passar bem.",
    "planos": "Planos: Temos planos mensal, trimestral, semestral e anual. Cada um com benefícios exclusivos!",
    "mensal": "Planos: O plano mensal custa R$ 99,90 e inclui aulas coletivas.",
    "matricular": "Matrícula: Basta clicar em 'Contratar' no plano desejado e preencher o formulário de matrícula.",
    "pagamento": "Pagamento: Aceitamos cartão de crédito/débito, PIX, boleto e dinheiro.",
    "spinning": "Aulas: Sim! Temos aulas de spinning de segunda a sexta, das 7h às 8h.",
    " funcionamento": "Funcionamento: Funcionamos das 08h às 23h, de segunda a sexta, e das 08h às 14h aos sábados.",
    "academia": "Localização: Estamos localizados na Av Conêgo João Lima N 15, Araguaína - TO.",
    "xperimental": "Aulas: Sim! Agende sua aula experimental pelo nosso site ou na recepção.",
    " indicacao": "Promoção: Sim! Indicando um amigo, ambos ganham desconto na mensalidade.",
    "plano anual": "Planos: O plano anual oferece o melhor custo-benefício, aulas coletivas e descontos especiais.",
    " pix": "Pagamento: Sim, aceitamos PIX como forma de pagamento.",
    "estacionamento": "Estrutura: Sim, temos estacionamento gratuito para alunos.",
    "personal": "Serviço: Sim! Temos profissionais qualificados para acompanhamento personalizado.",
    "luta ": "Aulas: Oferecemos boxe, muay thai e jiu-jitsu.",
    "pilates": "Aulas: Sim, temos aulas de pilates em horários variados.",
    "experimental": "Aulas: Você pode agendar pelo site, pelo chat ou diretamente na recepção.",
    " chuveiro": "Estrutura: Sim, nossos vestiários são equipados com chuveiros.",
    " kids": "Estrutura: Sim, temos espaço kids para as crianças se divertirem enquanto você treina.",
    " telefone": "Contato: Nosso telefone é (63) 98116-6505.",
    "nutricionista": "Serviço: Temos parceria com nutricionistas. Consulte horários na recepção.",
    " zumba": "Aulas: As aulas de zumba acontecem às segundas e quartas, das 19h às 20h.",
    " yoga": "Aulas: Sim, temos aulas de yoga para relaxamento e flexibilidade.",
    "semestrais": "Planos: Sim, o plano semestral custa R$ 699,90/ano e pode ser parcelado.",
    "trimestral": "Planos: O plano trimestral custa R$ 269,90 a cada 3 meses e pode ser parcelado em até 3x.",
    "estudantes": "Promoção: Sim, apresentando comprovante, você ganha desconto especial.",
    "fisica": "Serviço: Sim, oferecemos avaliação física gratuita para todos os alunos.",
    "suplementos": "Serviço: Sim, temos uma seleção de suplementos à venda na recepção.",
    "lanchonete": "Estrutura: Sim, temos lanchonete com opções saudáveis.",
    " movimento": "Dica: Os horários de menor movimento são das 09h às 11h e das 16h às 19h.",
    "bicicletas": "Estrutura: Sim, temos bicicletário disponível.",
    "empresas": "Promoção: Sim, consulte condições especiais para empresas parceiras.",
    "cancelamento": "Planos: O cancelamento pode ser feito na recepção, conforme regras do contrato.",
    "hiit": "Aulas: Sim, temos aulas de HIIT para quem busca alta intensidade.",
    "vocês tem aulas para terceira idade": "Aulas: Sim, temos turmas especiais para a melhor idade.",
    "ritbox": "Aulas: Sim, ritbox é uma das nossas aulas mais animadas!",
    "levar um amigo": "Promoção: Sim, consulte condições para treinos avulsos ou convide para uma aula experimental.",
    "armario": "Estrutura: Sim, oferecemos armários individuais. Traga seu cadeado.",
    " familia": "Planos: Sim, temos planos especiais para famílias. Consulte valores.",
    " vista": "Promoção: Sim, pagamento à vista tem desconto especial.",
    "coletivas": "Aulas: Consulte nossa grade de horários no site ou na recepção.",
    "jump": "Aulas: Sim, temos aulas de jump para todos os níveis.",
    "fidelidade": "Planos: Temos planos com e sem fidelidade.",
    "renovar ": "Planos: A renovação pode ser feita online ou na recepção.",
    " domingos": "Funcionamento: Não, abrimos de segunda a sábado.",
    " a": "Serviço: Sim, baixe nosso app para acompanhar treinos e novidades.",
    "como funciona o plano anual": "Planos: O plano anual custa R$ 999,90 e pode ser parcelado em até 6x.",
    "tem estacionamento gratuito": "Estrutura: Sim, estacionamento gratuito para alunos.",
    "vocês aceitam cartao de debito": "Pagamento: Sim, aceitamos cartões de débito e crédito.",
    "funcional": "Aulas: Sim, treinamento funcional todos os dias.",
    " apostural": "Serviço: Sim, avaliação postural inclusa na matrícula.",
    "alongamento": "Aulas: Sim, alongamento faz parte da nossa grade semanal.",
    " suporte": "Serviço: Sempre há professores de plantão para te ajudar.",
    "ar livre": "Estrutura: Sim, temos área externa para treinos funcionais.",
    " strutura ":" Não temos sauna no momento.",
    " piscina": "Estrutura: Não temos piscina.",
    "onsultoria online": "Serviço: Sim, consulte nossos planos de consultoria online.",
    "grupos": "Promoção: Sim, grupos acima de 3 pessoas têm desconto.",
    "danca": "Aulas: Sim, temos aulas de dança variadas.",
    "novos": "Estrutura: Sim, nossos equipamentos são modernos e revisados.",
    "musculacao": "Estrutura: Sim, área ampla e completa para musculação.",
    "   casal": "Planos: Sim, consulte condições especiais para casais.",
    "estacionamento coberto": "Estrutura: Sim, parte do estacionamento é coberta.",
    " nutricionistas": "Serviço: Sim, temos parceria com nutricionistas locais.",
    " convivencia": "Estrutura: Sim, temos espaço para descanso e convivência.",
    " fitness": "Serviço: Sim, confira nossa lojinha na recepção.",
    "alongamento": "Estrutura: Sim, área exclusiva para alongamento.",
    " bioimpedancia": "Serviço: Sim, oferecemos avaliação de bioimpedância.",
    "step": "Aulas: Sim, aulas de step disponíveis na grade.",
    "criancas": "Planos: Temos planos kids para crianças a partir de 7 anos.",
    "treino funcional": "Estrutura: Sim, área equipada para funcional.",
    " certificados": "Serviço: Todos os nossos instrutores são certificados.",
    " idosos": "Promoção: Sim, desconto especial para maiores de 60 anos.",
    "  corporativo": "Planos: Sim, consulte condições para empresas.",
    "crossfit": "Estrutura: Temos área para treinos de alta intensidade.",
    "  inastica localizada": "Aulas: Sim, aulas de ginástica localizada todos os dias.",
    " calistenia": "Estrutura: Sim, temos barras e equipamentos para calistenia.",
    "   universitarios": "Planos: Sim, desconto especial para universitários.",
    " boxe": "Estrutura: Sim, área equipada para boxe.",
    "   iniciantes": "Planos: Temos planos e acompanhamento para iniciantes.",
    " artes marciais": "Estrutura: Sim, área para artes marciais.",
    "   atletas": "Planos: Sim, planos especiais para atletas.",
    " corrida": "Estrutura: Temos esteiras e área externa para corrida.",
    "   gestantes": "Planos: Sim, consulte nossos programas para gestantes.",
    " ciclismo indoor": "Estrutura: Sim, sala exclusiva para spinning.",
    "   reabilitacao": "Planos: Sim, planos e acompanhamento para reabilitação.",
    " circuito": "Estrutura: Sim, área para circuitos funcionais.",
    "   emagrecimento": "Planos: Sim, planos focados em emagrecimento.",
    " resistencia": "Estrutura: Sim, equipamentos para resistência muscular e cardiovascular.",
    "   hipertrofia": "Planos: Sim, planos e treinos para ganho de massa muscular.",
    " forca": "Estrutura: Sim, área completa para treino de força.",
    " condicionamento": "Planos: Sim, planos para condicionamento físico geral.",
    " flexibilidade": "Estrutura: Sim, aulas e espaço para flexibilidade.",
    " manutencao": "Planos: Sim, planos para manutenção da saúde e forma física.",
    " equilibrio": "Estrutura: Sim, equipamentos e aulas para equilíbrio.",
    "performance": "Planos: Sim, planos para alta performance esportiva.",
    " potencia": "Estrutura: Sim, área e equipamentos para  potência.",
    "saude": "Planos: Sim, planos voltados para saúde e bem-estar.",
    " velocidade": "Estrutura: Sim, treinos específicos para velocidade.",
    "bem-estar": "Planos: Sim, planos para qualidade de vida e bem-estar.",
    " agilidade": "Estrutura: Sim, treinos e equipamentos para agilidade.",
    "qualidade de vida": "Planos: Sim, planos para melhorar sua qualidade de vida.",
    " coordenacao": "Estrutura: Sim, aulas e treinos para coordenação motora.",
    "prevencao": "Planos: Sim, planos para prevenção de lesões e saúde.",
    " mobilidade": "Estrutura: Sim, aulas e equipamentos para mobilidade.",
    "recuperacao": "Planos: Sim, planos para recuperação física.",
    " reabilitacao": "Estrutura: Sim, área e acompanhamento para reabilitação.",
    "fortalecimento": "Planos: Sim, planos para fortalecimento muscular.",
    "aparelhos funcionado":"",
    "aparelhos quebrados":"",

};

// Normaliza o texto removendo acentos e deixando em minúsculas
function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Função de redirecionamento reutilizável
function redirecionarParaSecao(id, mensagem) {
    setTimeout(() => {
        window.location.href = `#${id}`;
    }, 1500);
    return `Boot: ${mensagem}`;
}

// Função para encontrar a resposta
function encontrarResposta(mensagem) {
    mensagem = normalizarTexto(mensagem);

    // Redirecionamentos
    if (mensagem.includes("plano") || mensagem.includes("planos")) {
        return redirecionarParaSecao("plano", "Vou te redirecionar para a seção de planos...");
    }

    if (mensagem.includes("matricula")) {
        return redirecionarParaSecao("matricula", "Vou te redirecionar para a seção de matrícula...");
    }

    if (mensagem.includes("mensalidade")) {
        return redirecionarParaSecao("plano", "Vou te redirecionar para a seção de planos...");
    }

    // Busca por resposta direta
    for (const chave in respostas) {
        if (mensagem.includes(chave)) {
            return respostas[chave];
        }
    }

    return "Desculpe, não entendi 😅. Poderia reformular ou tentar outra pergunta?";
}

// Enviar mensagem
function enviarMensagem() {
    const input = document.getElementById('chat-input');
    const mensagemOriginal = input.value.trim();
    if (mensagemOriginal === "") return;

    adicionarMensagem("Você", mensagemOriginal);

    setTimeout(() => {
        const resposta = encontrarResposta(mensagemOriginal);
        adicionarMensagem("Boot", resposta);
    }, 1200);

    input.value = "";
}

// Adicionar mensagens ao chat
function adicionarMensagem(remetente, texto) {
    const chatBody = document.getElementById('chat-body');
    if (!chatBody) return;

    const msgDiv = document.createElement('div');
    msgDiv.classList.add(remetente === "Você" ? "usuario" : "boot");
    msgDiv.textContent = `${remetente}: ${texto}`;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Função para abrir o modal de contratação de plano
function contratarPlano(plano) {
    document.getElementById('modal').style.display = "block";

    const modalTitle = document.getElementById('modalTitle');
    const planoSelecionado = document.getElementById('planoSelecionado');

    if (plano === 'mensal') {
        modalTitle.innerHTML = "📋 Preencha seus dados para o Plano Mensal";
        planoSelecionado.value = 'mensal';
    } else if (plano === 'trimestral') {
        modalTitle.innerHTML = "📋 Preencha seus dados para o Plano Trimestral";
        planoSelecionado.value = 'trimestral';
    } else if (plano === 'semestral') {
        modalTitle.innerHTML = "📋 Preencha seus dados para o Plano Semestral";
        planoSelecionado.value = 'semestral';
    } else if (plano === 'anual') {
        modalTitle.innerHTML = "📋 Preencha seus dados para o Plano Anual";
        planoSelecionado.value = 'anual';
    }
}

// Fechar o modal ao clicar no botão
document.getElementById('closeModalBtn').onclick = function () {
    document.getElementById('modal').style.display = "none";
};

// Fechar o modal ao clicar fora dele
window.onclick = function (event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
};
