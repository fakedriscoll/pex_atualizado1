// Login Functionality
const loginScreen = document.getElementById("login-screen");
const appScreen = document.getElementById("app");
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const usernameDisplay = document.getElementById("username-display");
const logoutBtn = document.getElementById("logout-btn");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    // Basic validation (can be expanded)
    if (username.trim() === "" || emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    loginScreen.classList.add("hidden");
    appScreen.classList.remove("hidden");
    usernameDisplay.textContent = username;
    usernameDisplay.classList.remove("hidden");
    localStorage.setItem("cyberUser", username);
});

logoutBtn.addEventListener("click", () => {
    appScreen.classList.add("hidden");
    loginScreen.classList.remove("hidden");
    usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    usernameDisplay.textContent = "";
    usernameDisplay.classList.add("hidden");
    localStorage.removeItem("cyberUser");
    // Reset quiz state if needed
    resetQuiz();
    showReadingSection(); 
});

// Check if user is already logged in
const storedUser = localStorage.getItem("cyberUser");
if (storedUser) {
    loginScreen.classList.add("hidden");
    appScreen.classList.remove("hidden");
    usernameDisplay.textContent = storedUser;
    usernameDisplay.classList.remove("hidden");
}

// Tab Navigation
const readingTab = document.getElementById("reading-tab");
const quizTab = document.getElementById("quiz-tab");
const readingSection = document.getElementById("reading-section");
const quizCategoriesSection = document.getElementById("quiz-categories-section");
const quizSection = document.getElementById("quiz-section");
const resultsSection = document.getElementById("results-section");
const startQuizBtn = document.getElementById("start-quiz-btn");
const startSelectedQuizBtn = document.getElementById("start-selected-quiz");

function showReadingSection() {
    readingSection.classList.remove("hidden");
    quizCategoriesSection.classList.add("hidden");
    quizSection.classList.add("hidden");
    resultsSection.classList.add("hidden");
    readingTab.classList.add("border-blue-600", "text-blue-600");
    readingTab.classList.remove("text-gray-500", "hover:text-gray-700");
    quizTab.classList.add("text-gray-500", "hover:text-gray-700");
    quizTab.classList.remove("border-blue-600", "text-blue-600");
}

function showQuizCategoriesSection() {
    readingSection.classList.add("hidden");
    quizCategoriesSection.classList.remove("hidden");
    quizSection.classList.add("hidden");
    resultsSection.classList.add("hidden");
    quizTab.classList.add("border-blue-600", "text-blue-600");
    quizTab.classList.remove("text-gray-500", "hover:text-gray-700");
    readingTab.classList.add("text-gray-500", "hover:text-gray-700");
    readingTab.classList.remove("border-blue-600", "text-blue-600");
}

function showQuizSection() {
    readingSection.classList.add("hidden");
    quizCategoriesSection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    resultsSection.classList.add("hidden");
}

function showResultsSection() {
    readingSection.classList.add("hidden");
    quizCategoriesSection.classList.add("hidden");
    quizSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");
}

readingTab.addEventListener("click", showReadingSection);
quizTab.addEventListener("click", showQuizCategoriesSection);
startQuizBtn.addEventListener("click", showQuizCategoriesSection);

// Quiz Data (Simplified - Expand with more questions and categories)
const quizData = {
    fundamentos: [
        { question: "O que é cibersegurança?", options: ["Proteger apenas computadores", "Proteger sistemas, redes e programas de ataques digitais", "Apenas sobre vírus", "Usar senhas fáceis"], answer: 1, explanation: "Cibersegurança é a prática de proteger sistemas, redes e programas de ataques digitais." },
        { question: "Qual destes é um exemplo de malware?", options: ["Firewall", "Antivírus", "Worm", "VPN"], answer: 2, explanation: "Worm é um tipo de malware que se replica para se espalhar para outros computadores." },
        { question: "O que significa 'phishing'?", options: ["Pescar informações online", "Um tipo de peixe raro", "Técnica para obter informações confidenciais enganando usuários", "Um software de proteção"], answer: 2, explanation: "Phishing é uma tentativa fraudulenta de obter informações sensíveis disfarçada de comunicação confiável." },
        { question: "Qual o objetivo principal de um ataque DDoS?", options: ["Roubar senhas", "Instalar spyware", "Tornar um serviço indisponível", "Criptografar arquivos"], answer: 2, explanation: "Ataques DDoS sobrecarregam sistemas com tráfego para torná-los indisponíveis." },
        { question: "O que é engenharia social em cibersegurança?", options: ["Desenvolver software social", "Manipulação psicológica para obter informações", "Criar redes sociais seguras", "Analisar o comportamento social de hackers"], answer: 1, explanation: "Engenharia social é a manipulação psicológica para que pessoas divulguem informações confidenciais." },
        { question: "Qual destes NÃO é uma boa prática para senhas?", options: ["Usar combinações de letras, números e símbolos", "Reutilizar a mesma senha em várias contas", "Criar senhas longas", "Usar um gerenciador de senhas"], answer: 1, explanation: "Reutilizar senhas é uma prática ruim, pois se uma conta for comprometida, outras também podem ser." },
        { question: "O que é autenticação de dois fatores (2FA)?", options: ["Usar duas senhas diferentes", "Uma camada extra de segurança além da senha", "Autenticar duas vezes ao dia", "Um tipo de firewall"], answer: 1, explanation: "2FA adiciona uma segunda forma de verificação, como um código enviado ao celular, para aumentar a segurança." },
        { question: "Por que é importante manter o software atualizado?", options: ["Para ter novos recursos visuais", "Para corrigir bugs e vulnerabilidades de segurança", "Para tornar o software mais rápido", "Não é tão importante"], answer: 1, explanation: "Atualizações frequentemente incluem correções para falhas de segurança que podem ser exploradas por atacantes." },
        { question: "O que fazer ao receber um e-mail com link suspeito?", options: ["Clicar para investigar", "Responder pedindo mais informações", "Excluir o e-mail sem clicar no link", "Encaminhar para amigos"], answer: 2, explanation: "Nunca clique em links suspeitos. Verifique o remetente e, na dúvida, exclua o e-mail." },
        { question: "Qual a principal desvantagem de usar Wi-Fi público sem proteção?", options: ["Velocidade lenta", "Anúncios excessivos", "Risco de interceptação de dados", "Limitação de tempo de uso"], answer: 2, explanation: "Redes Wi-Fi públicas não seguras podem permitir que hackers interceptem seus dados." }
    ],
    ameacas: [
        { question: "Qual tipo de malware se disfarça de software legítimo?", options: ["Vírus", "Worm", "Cavalo de Troia (Trojan)", "Spyware"], answer: 2, explanation: "Cavalos de Troia se passam por programas úteis para enganar o usuário e infectar o sistema." },
        { question: "O que é ransomware?", options: ["Software que otimiza o desempenho do PC", "Malware que bloqueia o acesso a dados e exige resgate", "Um tipo de antivírus avançado", "Ferramenta de backup de arquivos"], answer: 1, explanation: "Ransomware criptografa os arquivos da vítima e exige pagamento para liberá-los." },
        { question: "Como um worm se diferencia de um vírus?", options: ["Worms não causam danos", "Vírus precisam de um programa hospedeiro, worms se replicam sozinhos", "Worms são mais fáceis de remover", "Vírus são apenas para e-mail"], answer: 1, explanation: "Vírus precisam se anexar a um programa para se espalhar, enquanto worms podem se replicar e se espalhar de forma autônoma pela rede." },
        { question: "O que é spyware?", options: ["Software que espia o usuário sem seu consentimento", "Um tipo de jogo online", "Ferramenta de limpeza de sistema", "Um navegador seguro"], answer: 0, explanation: "Spyware coleta informações sobre as atividades do usuário, como senhas e histórico de navegação, sem que ele saiba." },
        { question: "Qual técnica de phishing usa SMS?", options: ["Vishing", "Smishing", "Whaling", "Spear phishing"], answer: 1, explanation: "Smishing é o phishing realizado através de mensagens SMS." },
        { question: "O que é 'baiting' em engenharia social?", options: ["Oferecer algo atraente para levar a vítima a uma armadilha", "Pescar em alto mar", "Um tipo de software de segurança", "Bloquear acesso a sites perigosos"], answer: 0, explanation: "Baiting (isca) envolve oferecer algo desejável (download gratuito, dispositivo USB 'achado') para atrair a vítima a comprometer sua segurança." },
        { question: "Um ataque que visa especificamente um indivíduo ou organização é chamado de:", options: ["Ataque genérico", "Ataque de força bruta", "Spear phishing", "Ataque de negação de serviço"], answer: 2, explanation: "Spear phishing é um ataque de phishing altamente direcionado e personalizado." },
        { question: "O que é um botnet?", options: ["Uma rede de robôs de limpeza", "Uma rede de computadores infectados controlados por um atacante", "Um software de automação de tarefas", "Um tipo de firewall"], answer: 1, explanation: "Botnets são redes de dispositivos 'zumbis' usados para realizar ataques DDoS, enviar spam, etc." },
        { question: "Qual o principal objetivo de um keylogger?", options: ["Registrar as teclas digitadas pelo usuário", "Bloquear o teclado", "Acelerar a digitação", "Corrigir erros de digitação"], answer: 0, explanation: "Keyloggers são malwares que capturam tudo que é digitado, incluindo senhas e informações bancárias." },
        { question: "O que é 'tailgating' ou 'piggybacking'?", options: ["Seguir alguém para uma festa", "Entrar em uma área restrita aproveitando o acesso de uma pessoa autorizada", "Um tipo de ataque de rede", "Compartilhar carona para o trabalho"], answer: 1, explanation: "Tailgating é uma técnica de engenharia social física onde o atacante segue uma pessoa autorizada para obter acesso a um local restrito." },
        { question: "Qual destes é um exemplo de ataque Man-in-the-Middle (MitM)?", options: ["Enviar um e-mail de phishing", "Interceptar a comunicação entre duas partes sem que elas saibam", "Adivinhar uma senha", "Infectar um computador com um vírus"], answer: 1, explanation: "Em um ataque MitM, o atacante se posiciona secretamente entre duas partes que estão se comunicando, podendo ler ou alterar as mensagens." },
        { question: "O que é 'dumpster diving' no contexto de segurança?", options: ["Mergulhar em uma piscina de lixo", "Procurar informações úteis em lixo descartado", "Um esporte radical", "Limpar arquivos desnecessários do computador"], answer: 1, explanation: "Dumpster diving é a prática de vasculhar o lixo de uma organização em busca de informações confidenciais descartadas incorretamente." }
    ],
    protecao: [
        { question: "Qual a importância de usar senhas diferentes para contas diferentes?", options: ["É mais fácil de lembrar", "Se uma senha for descoberta, as outras contas permanecem seguras", "Não é importante", "É uma exigência legal"], answer: 1, explanation: "Usar senhas únicas evita que o comprometimento de uma conta leve ao comprometimento de várias outras." },
        { question: "Um exemplo de informação pessoalmente identificável (PII) é:", options: ["Cor favorita", "Nome completo e CPF", "Opinião sobre um filme", "Marca de carro"], answer: 1, explanation: "PII são dados que podem ser usados para identificar um indivíduo específico, como nome, CPF, endereço." },
        { question: "O que é uma VPN e para que serve principalmente?", options: ["Vírus de Proteção de Rede, para bloquear malware", "Rede Privada Virtual, para criar uma conexão segura e criptografada à internet", "Verificador de Phishing de Notícias, para identificar notícias falsas", "Nenhuma das anteriores"], answer: 1, explanation: "VPNs criam um túnel criptografado para o tráfego da internet, aumentando a privacidade e segurança, especialmente em redes públicas." },
        { question: "Qual destes é um bom local para fazer backup de dados importantes?", options: ["Apenas no mesmo HD do computador", "Em um HD externo e na nuvem", "Em um pendrive deixado na mesa", "Não fazer backup"], answer: 1, explanation: "A regra 3-2-1 de backup sugere 3 cópias, em 2 mídias diferentes, com 1 fora do local. HD externo e nuvem são boas opções." },
        { question: "Ao usar um computador público, o que você deve sempre fazer ao terminar?", options: ["Deixar suas contas logadas para facilitar o próximo usuário", "Desligar o monitor", "Fazer logout de todas as suas contas e limpar o histórico de navegação", "Instalar seus programas favoritos"], answer: 2, explanation: "Sempre faça logout e limpe dados pessoais de computadores públicos para proteger sua privacidade." },
        { question: "O que significa HTTPS no início de um endereço web?", options: ["Hipertexto Transfer Protocol Seguro, indica uma conexão criptografada", "Site de Alta Performance e Tecnologia", "Host Transfer Protocol Standard", "Um site que não usa cookies"], answer: 0, explanation: "HTTPS indica que a comunicação entre seu navegador e o site é criptografada, tornando-a mais segura." },
        { question: "Qual o risco de conectar um pendrive desconhecido ao seu computador?", options: ["Nenhum, pendrives são sempre seguros", "Pode conter malware que infectará seu dispositivo", "Pode apagar seus arquivos", "Pode melhorar o desempenho do PC"], answer: 1, explanation: "Pendrives desconhecidos podem estar infectados com malware e comprometer seu sistema." },
        { question: "Por que é arriscado baixar software de fontes não oficiais?", options: ["O software pode ser mais caro", "Pode vir com malware embutido ou ser uma versão pirata com falhas", "Leva mais tempo para baixar", "Não há risco"], answer: 1, explanation: "Software de fontes não confiáveis frequentemente contém malware ou não possui as atualizações de segurança necessárias." }
    ],
    empresarial: [
        { question: "O que é um firewall em um ambiente corporativo?", options: ["Um sistema de alarme de incêndio", "Uma barreira que controla o tráfego de rede entre redes internas e externas", "Um software para apagar arquivos", "Um tipo de impressora de rede"], answer: 1, explanation: "Firewalls monitoram e filtram o tráfego de rede com base em regras de segurança para proteger a rede interna." },
        { question: "Qual o princípio do 'menor privilégio' no controle de acesso?", options: ["Dar a todos os usuários acesso total", "Conceder aos usuários apenas as permissões necessárias para realizar suas tarefas", "Privilegiar os gerentes com mais acesso", "Remover todos os privilégios"], answer: 1, explanation: "O princípio do menor privilégio limita o acesso dos usuários ao mínimo necessário, reduzindo o risco em caso de comprometimento da conta." },
        { question: "O que é um SIEM em segurança corporativa?", options: ["Sistema de Inteligência e Mapeamento de Emoções", "Software de Edição de Imagens Múltiplas", "Gerenciamento de Eventos e Informações de Segurança", "Serviço de Internet e Email Marketing"], answer: 2, explanation: "SIEM (Security Information and Event Management) coleta e analisa logs de segurança de várias fontes para detectar ameaças." },
        { question: "Por que o treinamento de conscientização em segurança é importante para funcionários?", options: ["Para que eles possam consertar computadores", "Para ajudá-los a identificar e evitar ameaças como phishing", "Para que possam desenvolver software seguro", "Não é muito importante"], answer: 1, explanation: "O treinamento ajuda os funcionários a se tornarem a primeira linha de defesa contra ataques, reconhecendo e reportando ameaças." },
        { question: "O que é uma política de segurança da informação?", options: ["Uma lei sobre crimes cibernéticos", "Um documento que define as regras e procedimentos de segurança de uma organização", "Um tipo de seguro contra ataques hacker", "Um software de antivírus"], answer: 1, explanation: "Políticas de segurança estabelecem as diretrizes que todos na organização devem seguir para proteger os ativos de informação." },
        { question: "O que é um teste de penetração (pentest)?", options: ["Um teste para verificar se canetas funcionam", "Uma simulação de ataque para identificar vulnerabilidades em um sistema", "Um exame médico para testar a pele", "Um teste de velocidade da internet"], answer: 1, explanation: "Testes de penetração são ataques simulados e autorizados para encontrar e corrigir falhas de segurança antes que criminosos as explorem." },
        { question: "Qual a finalidade de um Plano de Continuidade de Negócios (PCN)?", options: ["Garantir que a empresa continue operando durante e após um desastre", "Planejar as férias dos funcionários", "Aumentar as vendas da empresa", "Criar novos produtos"], answer: 0, explanation: "O PCN visa garantir a resiliência operacional da empresa diante de interrupções significativas." },
        { question: "O que é 'Zero Trust' como modelo de segurança?", options: ["Confiar em todos os usuários e dispositivos por padrão", "Nunca confiar, sempre verificar cada acesso, independentemente da origem", "Confiar apenas em dispositivos dentro da rede da empresa", "Não usar senhas"], answer: 1, explanation: "O modelo Zero Trust parte do princípio de que ameaças podem existir tanto fora quanto dentro da rede, exigindo verificação contínua." },
        { question: "Qual o papel da criptografia na segurança de dados corporativos?", options: ["Tornar os dados mais fáceis de ler", "Proteger a confidencialidade dos dados, tornando-os ilegíveis para quem não tem a chave", "Aumentar o tamanho dos arquivos", "Detectar vírus"], answer: 1, explanation: "A criptografia transforma dados em um formato ilegível para proteger sua confidencialidade contra acesso não autorizado." },
        { question: "O que é um 'incidente de segurança' em uma empresa?", options: ["Um funcionário chegando atrasado", "Qualquer evento que comprometa a confidencialidade, integridade ou disponibilidade dos dados ou sistemas", "Uma queda de energia", "Uma impressora quebrada"], answer: 1, explanation: "Um incidente de segurança é uma violação ou ameaça iminente de violação das políticas de segurança da informação." }
    ],
    lgpd: [
        { question: "O que significa a sigla LGPD?", options: ["Lei Geral de Proteção de Documentos", "Lei Geral de Proteção de Dados Pessoais", "Lei Global de Privacidade Digital", "Liga Geral de Programadores Dedicados"], answer: 1, explanation: "LGPD é a Lei Geral de Proteção de Dados Pessoais, que regula o tratamento de dados pessoais no Brasil." },
        { question: "Qual o principal objetivo da LGPD?", options: ["Punir empresas que usam dados", "Proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade da pessoa natural", "Coletar mais dados dos cidadãos", "Facilitar a venda de dados pessoais"], answer: 1, explanation: "A LGPD visa proteger os dados pessoais dos cidadãos, garantindo sua privacidade e controle sobre suas informações." },
        { question: "Quem é o 'titular' dos dados segundo a LGPD?", options: ["A empresa que coleta os dados", "O governo", "A pessoa natural a quem se referem os dados pessoais", "O encarregado de dados (DPO)"], answer: 2, explanation: "O titular é a pessoa física a quem os dados se referem." },
        { question: "O que é 'consentimento' no contexto da LGPD?", options: ["Uma ordem judicial para coletar dados", "Manifestação livre, informada e inequívoca pela qual o titular concorda com o tratamento de seus dados para uma finalidade determinada", "Um contrato de trabalho", "Uma taxa paga pela empresa"], answer: 1, explanation: "O consentimento é uma das bases legais para o tratamento de dados, e deve ser dado de forma clara e específica pelo titular." },
        { question: "Qual o papel do Encarregado de Proteção de Dados (DPO)?", options: ["Vender os dados da empresa", "Atuar como canal de comunicação entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD)", "Desenvolver software de segurança", "Investigar crimes cibernéticos"], answer: 1, explanation: "O DPO é o responsável por orientar sobre as práticas de proteção de dados e ser o ponto de contato com titulares e a ANPD." },
        { question: "Quais são alguns dos direitos dos titulares previstos na LGPD?", options: ["Direito de vender seus dados para quem quiser", "Acesso aos dados, correção de dados incompletos, anonimização, eliminação dos dados", "Direito de invadir sistemas para verificar seus dados", "Apenas o direito de ser esquecido"], answer: 1, explanation: "A LGPD garante diversos direitos aos titulares, como acesso, retificação, cancelamento ou oposição ao tratamento de seus dados." }
    ],
    carreira: [
        { question: "Qual destas NÃO é uma carreira comum em cibersegurança?", options: ["Analista de Segurança", "Engenheiro de Software Focado em IA", "Hacker Ético (Pentester)", "Consultor de Segurança"], answer: 1, explanation: "Embora IA possa ser usada em cibersegurança, 'Engenheiro de Software Focado em IA' é uma carreira mais ampla em desenvolvimento de IA, não especificamente cibersegurança." },
        { question: "Qual certificação é conhecida por focar em hacking ético?", options: ["CISSP", "CompTIA Security+", "CEH (Certified Ethical Hacker)", "CISM"], answer: 2, explanation: "A CEH é uma certificação popular para profissionais que desejam se especializar em testes de penetração e hacking ético." },
        { question: "Que tipo de habilidade é crucial para um analista de segurança além do conhecimento técnico?", options: ["Habilidade de cozinhar", "Pensamento crítico e resolução de problemas", "Habilidade de tocar um instrumento musical", "Conhecimento de jardinagem"], answer: 1, explanation: "Analistas de segurança precisam ser capazes de analisar situações complexas, identificar padrões e resolver problemas de forma eficaz." },
        { question: "O que um especialista em forense digital faz?", options: ["Previne ataques antes que aconteçam", "Investiga incidentes de segurança e crimes cibernéticos, coletando e analisando evidências digitais", "Desenvolve políticas de segurança", "Gerencia firewalls"], answer: 1, explanation: "Especialistas em forense digital são como detetives do mundo digital, recuperando dados e investigando a origem e o impacto de incidentes." }
    ]
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = {};
let selectedCategories = [];
let quizStartTime;

const quizContainer = document.getElementById("quiz-container");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const finishBtn = document.getElementById("finish-btn");
const scoreDisplay = document.getElementById("score");
const categoryResultsContainer = document.getElementById("category-results");
const scoreMessageContainer = document.getElementById("score-message");
const wrongAnswersContainer = document.getElementById("wrong-answers");
const retryBtn = document.getElementById("retry-btn");
const backToReadingBtn = document.getElementById("back-to-reading");
const quizCategoriesDisplay = document.getElementById("quiz-categories-display");

// Category Selection
const categoryBtns = document.querySelectorAll(".category-btn");
categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("ring-2");
        btn.classList.toggle("ring-blue-500");
        btn.classList.toggle("bg-blue-100"); // Visual feedback for selection
        const category = btn.dataset.category;
        if (selectedCategories.includes(category)) {
            selectedCategories = selectedCategories.filter(c => c !== category);
        } else {
            selectedCategories.push(category);
        }
    });
});

startSelectedQuizBtn.addEventListener("click", () => {
    if (selectedCategories.length === 0) {
        alert("Por favor, selecione pelo menos uma categoria para o quiz.");
        return;
    }
    loadSelectedQuestions();
    startQuiz();
});

function loadSelectedQuestions() {
    currentQuestions = [];
    selectedCategories.forEach(category => {
        if (quizData[category]) {
            currentQuestions = currentQuestions.concat(quizData[category]);
        }
    });
    // Shuffle questions for variety
    currentQuestions.sort(() => Math.random() - 0.5);
    const categoryNames = selectedCategories.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(", ");
    quizCategoriesDisplay.textContent = `Categorias: ${categoryNames}`;
}

function startQuiz() {
    currentQuestionIndex = 0;
    userAnswers = {};
    quizStartTime = new Date();
    showQuizSection();
    displayQuestion();
    updateProgress();
}

function displayQuestion() {
    const questionData = currentQuestions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <div class="quiz-card bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 class="text-xl font-semibold text-blue-800 mb-4">${currentQuestionIndex + 1}. ${questionData.question}</h3>
            <div class="space-y-3">
                ${questionData.options.map((option, index) => `
                    <div class="option border border-gray-200 rounded-lg p-3 hover:bg-blue-50 cursor-pointer flex items-center" data-index="${index}">
                        <input type="radio" id="option-${index}" name="quiz-option" value="${index}" class="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" ${userAnswers[currentQuestionIndex] === index ? "checked" : ""}>
                        <label for="option-${index}" class="text-gray-700 flex-1 cursor-pointer">${option}</label>
                    </div>
                `).join("")}
            </div>
        </div>
    `;

    document.querySelectorAll(".option").forEach(optionEl => {
        optionEl.addEventListener("click", () => {
            const radio = optionEl.querySelector("input[type='radio']");
            radio.checked = true;
            userAnswers[currentQuestionIndex] = parseInt(radio.value);
        });
    });

    updateNavigationButtons();
}

function updateNavigationButtons() {
    prevBtn.classList.toggle("hidden", currentQuestionIndex === 0);
    nextBtn.classList.toggle("hidden", currentQuestionIndex === currentQuestions.length - 1);
    finishBtn.classList.toggle("hidden", currentQuestionIndex !== currentQuestions.length - 1);
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestionIndex + 1}/${currentQuestions.length}`;
}

prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateProgress();
    }
});

nextBtn.addEventListener("click", () => {
    if (!userAnswers.hasOwnProperty(currentQuestionIndex)) {
        alert("Por favor, selecione uma resposta.");
        return;
    }
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateProgress();
    }
});

finishBtn.addEventListener("click", () => {
    if (!userAnswers.hasOwnProperty(currentQuestionIndex)) {
        alert("Por favor, selecione uma resposta para a última pergunta.");
        return;
    }
    calculateResults();
    showResultsSection();
});

function calculateResults() {
    let score = 0;
    let categoryScores = {};
    selectedCategories.forEach(cat => categoryScores[cat] = { correct: 0, total: 0 });
    wrongAnswersContainer.innerHTML = "<h3 class='text-xl font-semibold text-red-700 mb-4'>Respostas Incorretas e Explicações:</h3>";
    let hasWrongAnswers = false;

    currentQuestions.forEach((q, index) => {
        const questionCategory = selectedCategories.find(cat => quizData[cat].includes(q));
        if (questionCategory) {
            categoryScores[questionCategory].total++;
        }

        if (userAnswers[index] === q.answer) {
            score++;
            if (questionCategory) {
                categoryScores[questionCategory].correct++;
            }
        } else {
            hasWrongAnswers = true;
            wrongAnswersContainer.innerHTML += `
                <div class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p class="font-semibold text-gray-800"><strong>Questão ${index + 1}:</strong> ${q.question}</p>
                    <p class="text-red-600"><strong>Sua resposta:</strong> ${q.options[userAnswers[index]] || "Não respondida"}</p>
                    <p class="text-green-600"><strong>Resposta correta:</strong> ${q.options[q.answer]}</p>
                    <p class="text-sm text-gray-600 mt-1"><strong>Explicação:</strong> ${q.explanation}</p>
                </div>
            `;
        }
    });

    scoreDisplay.textContent = score;
    document.getElementById("score").nextElementSibling.textContent = `/${currentQuestions.length}`;

    categoryResultsContainer.innerHTML = "";
    for (const category in categoryScores) {
        const { correct, total } = categoryScores[category];
        if (total > 0) {
            const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
            categoryResultsContainer.innerHTML += `
                <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-700">${category.charAt(0).toUpperCase() + category.slice(1)}:</span>
                    <span class="font-medium ${percentage >= 70 ? "text-green-600" : percentage >= 40 ? "text-yellow-600" : "text-red-600"}">${correct}/${total} (${percentage}%)</span>
                </div>
            `;
        }
    }

    const quizEndTime = new Date();
    const timeTaken = Math.floor((quizEndTime - quizStartTime) / 1000); // in seconds
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    document.getElementById("quiz-time").textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    let message = "";
    let messageClass = "";
    const percentageScore = (score / currentQuestions.length) * 100;
    if (percentageScore >= 80) {
        message = "Excelente! Você demonstrou um ótimo conhecimento em cibersegurança!";
        messageClass = "bg-green-100 text-green-800";
    } else if (percentageScore >= 60) {
        message = "Muito bom! Continue estudando para aprimorar ainda mais seus conhecimentos.";
        messageClass = "bg-blue-100 text-blue-800";
    } else if (percentageScore >= 40) {
        message = "Bom esforço! Revise os tópicos onde teve mais dificuldade.";
        messageClass = "bg-yellow-100 text-yellow-800";
    } else {
        message = "Não desanime! A cibersegurança é um campo vasto. Revise o material e tente novamente.";
        messageClass = "bg-red-100 text-red-800";
    }
    scoreMessageContainer.textContent = message;
    scoreMessageContainer.className = `max-w-2xl mx-auto mb-8 p-4 rounded-lg ${messageClass}`;

    if (!hasWrongAnswers) {
        wrongAnswersContainer.innerHTML = '<p class="text-green-600 font-semibold">Parabéns! Você acertou todas as questões!</p>';
    }
}

function resetQuiz() {
    selectedCategories = [];
    categoryBtns.forEach(btn => {
        btn.classList.remove("ring-2", "ring-blue-500", "bg-blue-100");
    });
    showQuizCategoriesSection();
}

retryBtn.addEventListener("click", () => {
    // Go back to category selection, keeping selected categories
    showQuizCategoriesSection();
});

backToReadingBtn.addEventListener("click", () => {
    resetQuiz(); // Clear selected categories as well
    showReadingSection();
});

// Initial setup
showReadingSection(); // Show reading section by default if not logged in or no quiz in progress
if (storedUser) {
    // If user was logged in, keep them on the app screen, default to reading
    loginScreen.classList.add("hidden");
    appScreen.classList.remove("hidden");
    usernameDisplay.textContent = storedUser;
    usernameDisplay.classList.remove("hidden");
    showReadingSection();
} else {
    loginScreen.classList.remove("hidden");
    appScreen.classList.add("hidden");
}

