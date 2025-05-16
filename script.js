// Elementos das Telas
console.log("Script execution started.");
const loginScreen = document.getElementById("login-screen");
const registerScreen = document.getElementById("register-screen");
const forgotPasswordScreen = document.getElementById("forgot-password-screen");
const appScreen = document.getElementById("app");

// Formulários
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const forgotPasswordForm = document.getElementById("forgot-password-form");

// Inputs do Login
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Inputs do Cadastro
const registerUsernameInput = document.getElementById("register-username");
const registerEmailInput = document.getElementById("register-email");
const registerPasswordInput = document.getElementById("register-password");
const registerPasswordConfirmInput = document.getElementById("register-password-confirm");

// Input do "Esqueceu a Senha"
const forgotEmailInput = document.getElementById("forgot-email");

// Links de Navegação
const showRegisterLink = document.getElementById("show-register-link");
const showLoginLinkFromRegister = document.getElementById("show-login-link-from-register");
const showForgotPasswordLink = document.getElementById("show-forgot-password-link");
const showLoginLinkFromForgot = document.getElementById("show-login-link-from-forgot");

// Elementos da Aplicação Principal
const usernameDisplay = document.getElementById("username-display");
const logoutBtn = document.getElementById("logout-btn");

// --- Lógica de Login ---
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = usernameInput.value;
        if (username.trim() === "" || emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
            alert("Por favor, preencha todos os campos de login.");
            return;
        }
        showAppScreen(username);
        loginForm.reset();
    });
}

// --- Lógica de Logout ---
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("cyberUser");
        showLoginScreen();
        resetQuiz();
        showReadingSection(); 
    });
}

// --- Lógica de Cadastro ---
if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const regUsername = registerUsernameInput.value.trim();
        const regEmail = registerEmailInput.value.trim();
        const regPassword = registerPasswordInput.value;
        const regPasswordConfirm = registerPasswordConfirmInput.value;

        if (regUsername === "" || regEmail === "" || regPassword === "" || regPasswordConfirm === "") {
            alert("Por favor, preencha todos os campos do cadastro.");
            return;
        }
        if (regPassword !== regPasswordConfirm) {
            alert("As senhas não coincidem. Por favor, verifique.");
            return;
        }
        alert(`Usuário ${regUsername} cadastrado com sucesso! Faça o login para continuar.`);
        registerForm.reset();
        showLoginScreen();
    });
}

// --- Lógica de "Esqueceu a Senha" ---
if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const forgotEmail = forgotEmailInput.value.trim();
        if (forgotEmail === "") {
            alert("Por favor, preencha o campo de e-mail.");
            return;
        }
        // Simulação de envio de e-mail (será alterado para envio real)
        alert(`Instruções de recuperação de senha foram enviadas para ${forgotEmail}. Verifique sua caixa de entrada.`);
        forgotPasswordForm.reset();
        showLoginScreen();
    });
}

// --- Funções de Exibição de Tela ---
function hideAllAuthScreens() {
    if(loginScreen) loginScreen.classList.add("hidden");
    if(registerScreen) registerScreen.classList.add("hidden");
    if(forgotPasswordScreen) forgotPasswordScreen.classList.add("hidden");
    if(appScreen) appScreen.classList.add("hidden");
}

function showLoginScreen() {
    hideAllAuthScreens();
    if(loginScreen) loginScreen.classList.remove("hidden");
}

function showRegisterScreen() {
    hideAllAuthScreens();
    if(registerScreen) registerScreen.classList.remove("hidden");
}

function showForgotPasswordScreen() {
    hideAllAuthScreens();
    if(forgotPasswordScreen) forgotPasswordScreen.classList.remove("hidden");
}

function showAppScreen(username) {
    hideAllAuthScreens();
    if(appScreen) appScreen.classList.remove("hidden");
    if(usernameDisplay) {
        usernameDisplay.textContent = username;
        usernameDisplay.classList.remove("hidden");
    }
    localStorage.setItem("cyberUser", username);
}

// --- Event Listeners para Navegação entre Telas de Autenticação ---
if (showRegisterLink) {
    showRegisterLink.addEventListener("click", (e) => { e.preventDefault(); showRegisterScreen(); });
}
if (showLoginLinkFromRegister) {
    showLoginLinkFromRegister.addEventListener("click", (e) => { e.preventDefault(); showLoginScreen(); });
}
if (showForgotPasswordLink) {
    showForgotPasswordLink.addEventListener("click", (e) => { e.preventDefault(); showForgotPasswordScreen(); });
}
if (showLoginLinkFromForgot) {
    showLoginLinkFromForgot.addEventListener("click", (e) => { e.preventDefault(); showLoginScreen(); });
}

// --- Lógica das Abas de Navegação da Aplicação Principal ---
const readingTab = document.getElementById("reading-tab");
const quizTab = document.getElementById("quiz-tab");
const aboutTab = document.getElementById("about-tab");
const readingSection = document.getElementById("reading-section");
const quizCategoriesSection = document.getElementById("quiz-categories-section");
const quizSection = document.getElementById("quiz-section");
const resultsSection = document.getElementById("results-section");
const aboutSection = document.getElementById("about-section");
const startQuizBtn = document.getElementById("start-quiz-btn");
const startSelectedQuizBtn = document.getElementById("start-selected-quiz");

console.log("Attempting to find readingTab:", readingTab ? "Found" : "NOT Found");
if (readingTab) {
    readingTab.addEventListener("click", () => {
        console.log("Reading tab clicked");
        showReadingSection();
    });
} else {
    console.error("Reading tab (reading-tab) not found by getElementById.");
}

console.log("Attempting to find quizTab:", quizTab ? "Found" : "NOT Found");
if (quizTab) {
    quizTab.addEventListener("click", () => {
        console.log("Quiz tab clicked");
        showQuizCategoriesSection();
    });
} else {
    console.error("Quiz tab (quiz-tab) not found by getElementById.");
}

console.log("Attempting to find aboutTab:", aboutTab ? "Found" : "NOT Found");
if (aboutTab) {
    aboutTab.addEventListener("click", () => {
        console.log("About tab clicked");
        showAboutSection();
    });
} else {
    console.error("About tab (about-tab) not found by getElementById.");
}

if (startQuizBtn) {
    console.log("Attempting to find startQuizBtn:", startQuizBtn ? "Found" : "NOT Found");
    startQuizBtn.addEventListener("click", () => {
        console.log("Start Quiz Button (start-quiz-btn) clicked");
        showQuizCategoriesSection();
    });
} else {
    console.log("Start Quiz Button (start-quiz-btn) not found or not used in current HTML.");
}

function showReadingSection() {
    console.log("showReadingSection called.");
    if(readingSection) {
        readingSection.classList.remove("hidden");
        console.log("Reading section made visible.");
    } else { console.error("readingSection element is null in showReadingSection."); }
    
    if(quizCategoriesSection) {
        quizCategoriesSection.classList.add("hidden");
        console.log("Quiz categories section hidden.");
    } else { console.error("quizCategoriesSection element is null in showReadingSection."); }
    
    if(quizSection) quizSection.classList.add("hidden");
    if(resultsSection) resultsSection.classList.add("hidden");
    if(aboutSection) aboutSection.classList.add("hidden");

    if(readingTab) {
        readingTab.classList.add("border-blue-600", "text-blue-600");
        readingTab.classList.remove("text-gray-500", "hover:text-gray-700");
        console.log("Reading tab styled as active.");
    }
    if(quizTab) {
        quizTab.classList.add("text-gray-500", "hover:text-gray-700");
        quizTab.classList.remove("border-blue-600", "text-blue-600");
        console.log("Quiz tab styled as inactive.");
    }
    if(aboutTab) {
        aboutTab.classList.add("text-gray-500", "hover:text-gray-700");
        aboutTab.classList.remove("border-blue-600", "text-blue-600");
        console.log("About tab styled as inactive.");
    }
}

function showQuizCategoriesSection() {
    console.log("showQuizCategoriesSection called.");
    if(readingSection) {
        readingSection.classList.add("hidden");
        console.log("Reading section hidden.");
    } else { console.error("readingSection element is null in showQuizCategoriesSection."); }
    
    if(quizCategoriesSection) {
        console.log("quizCategoriesSection classList BEFORE remove hidden:", quizCategoriesSection.classList.toString());
        quizCategoriesSection.classList.remove("hidden");
        console.log("Quiz categories section made visible. classList AFTER remove hidden:", quizCategoriesSection.classList.toString());
    } else { console.error("quizCategoriesSection element is null in showQuizCategoriesSection."); }
    
    if(quizSection) quizSection.classList.add("hidden");
    if(resultsSection) resultsSection.classList.add("hidden");
    if(aboutSection) aboutSection.classList.add("hidden");
    
    if(quizTab) {
        quizTab.classList.add("border-blue-600", "text-blue-600");
        quizTab.classList.remove("text-gray-500", "hover:text-gray-700");
        console.log("Quiz tab styled as active.");
    }
    if(readingTab) {
        readingTab.classList.add("text-gray-500", "hover:text-gray-700");
        readingTab.classList.remove("border-blue-600", "text-blue-600");
        console.log("Reading tab styled as inactive.");
    }
    if(aboutTab) {
        aboutTab.classList.add("text-gray-500", "hover:text-gray-700");
        aboutTab.classList.remove("border-blue-600", "text-blue-600");
        console.log("About tab styled as inactive.");
    }
}

function showAboutSection() {
    console.log("showAboutSection called.");
    if(readingSection) readingSection.classList.add("hidden");
    if(quizCategoriesSection) quizCategoriesSection.classList.add("hidden");
    if(quizSection) quizSection.classList.add("hidden");
    if(resultsSection) resultsSection.classList.add("hidden");
    if(aboutSection) aboutSection.classList.remove("hidden");
    
    if(aboutTab) {
        aboutTab.classList.add("border-blue-600", "text-blue-600");
        aboutTab.classList.remove("text-gray-500", "hover:text-gray-700");
        console.log("About tab styled as active.");
    }
    if(readingTab) {
        readingTab.classList.add("text-gray-500", "hover:text-gray-700");
        readingTab.classList.remove("border-blue-600", "text-blue-600");
        console.log("Reading tab styled as inactive.");
    }
    if(quizTab) {
        quizTab.classList.add("text-gray-500", "hover:text-gray-700");
        quizTab.classList.remove("border-blue-600", "text-blue-600");
        console.log("Quiz tab styled as inactive.");
    }
}
        
function showQuizSection() {
    console.log("showQuizSection called.");
    if(readingSection) readingSection.classList.add("hidden");
    if(quizCategoriesSection) quizCategoriesSection.classList.add("hidden");
    if(quizSection) quizSection.classList.remove("hidden");
    if(resultsSection) resultsSection.classList.add("hidden");
    if(aboutSection) aboutSection.classList.add("hidden");
}

function showResultsSection() {
    console.log("showResultsSection called.");
    if(readingSection) readingSection.classList.add("hidden");
    if(quizCategoriesSection) quizCategoriesSection.classList.add("hidden");
    if(quizSection) quizSection.classList.add("hidden");
    if(resultsSection) resultsSection.classList.remove("hidden");
    if(aboutSection) aboutSection.classList.add("hidden");
}

// --- Verificar se usuário já está logado (ao carregar a página) ---
const storedUser = localStorage.getItem("cyberUser");
console.log("Initial check for storedUser:", storedUser);
if (storedUser) {
    showAppScreen(storedUser);
    showReadingSection(); // Padrão para a seção de leitura após login
} else {
    showLoginScreen(); // Padrão para a tela de login se não estiver logado
}

// --- Lógica do Quiz (mantida como estava, com as perguntas atualizadas) ---
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
        { question: "Qual a principal desvantagem de usar Wi-Fi público sem proteção?", options: ["Velocidade lenta", "Anúncios excessivos", "Risco de interceptação de dados", "Limitação de tempo de uso"], answer: 2, explanation: "Redes Wi-Fi públicas não seguras podem permitir que hackers interceptem seus dados." },
        { question: "O que são 'vulnerabilidades Zero-Day'?", options: ["Falhas de segurança que não têm correção disponível", "Vulnerabilidades que só existem no primeiro dia de uso de um software", "Sistemas que nunca foram atacados", "Softwares 100% seguros"], answer: 0, explanation: "Vulnerabilidades Zero-Day são falhas recém-descobertas pelos fabricantes e que ainda não possuem uma correção (patch) oficial, tornando-as muito perigosas." },
        { question: "Qual o conceito da Tríade CIA em segurança da informação?", options: ["Controle, Investigação, Ação", "Confidencialidade, Integridade, Disponibilidade", "Criptografia, Identificação, Autenticação", "Computador, Internet, Acesso"], answer: 1, explanation: "A Tríade CIA (Confidentiality, Integrity, Availability) representa os três pilares fundamentais da segurança da informação: Confidencialidade, Integridade e Disponibilidade." }
    ],
    ameacas: [
        { question: "Qual tipo de malware se disfarça de software legítimo?", options: ["Vírus", "Worm", "Cavalo de Troia (Trojan)", "Spyware"], answer: 2, explanation: "Cavalos de Troia se passam por programas úteis para enganar o usuário e infectar o sistema." },
        { question: "O que é ransomware?", options: ["Software que otimiza o desempenho do PC", "Malware que bloqueia o acesso a dados e exige resgate", "Um tipo de antivírus avançado", "Ferramenta de backup de arquivos"], answer: 1, explanation: "Ransomware criptografa os arquivos da vítima e exige pagamento para liberá-los." },
        { question: "Como um worm se diferencia de um vírus?", options: ["Worms não causam danos", "Vírus precisam de um programa hospedeiro, worms se replicam sozinhos", "Worms são mais fáceis de remover", "Vírus são apenas para e-mail"], answer: 1, explanation: "Vírus precisam se anexar a um programa para se espalhar, enquanto worms podem se replicar e espalhar independentemente." },
        { question: "O que é um ataque de 'Man-in-the-Middle'?", options: ["Quando alguém fisicamente se posiciona entre você e seu computador", "Quando um atacante intercepta comunicações entre duas partes", "Um tipo de ataque que só funciona em redes móveis", "Quando um hacker usa um computador intermediário para acessar o seu"], answer: 1, explanation: "Em ataques Man-in-the-Middle, o atacante intercepta secretamente a comunicação entre duas partes, podendo visualizar ou alterar os dados transmitidos." },
        { question: "Qual destas é uma técnica de phishing mais direcionada?", options: ["Vishing", "Smishing", "Spear phishing", "Whaling"], answer: 2, explanation: "Spear phishing é uma forma direcionada de phishing que visa indivíduos ou organizações específicas, usando informações personalizadas para parecer mais convincente." },
        { question: "O que é um 'keylogger'?", options: ["Um dispositivo para desbloquear portas", "Software que registra as teclas digitadas pelo usuário", "Um tipo de senha forte", "Um programa que corrige erros de digitação"], answer: 1, explanation: "Keyloggers são programas maliciosos que registram tudo o que um usuário digita, incluindo senhas e informações confidenciais." },
        { question: "Qual é o principal objetivo de um ataque de força bruta?", options: ["Sobrecarregar servidores", "Descobrir senhas testando todas as combinações possíveis", "Enganar usuários para revelar informações", "Danificar hardware"], answer: 1, explanation: "Ataques de força bruta tentam descobrir senhas ou chaves de criptografia testando sistematicamente todas as combinações possíveis." },
        { question: "O que é 'SQL Injection'?", options: ["Uma técnica para otimizar bancos de dados", "Um ataque que insere código malicioso em consultas SQL", "Um método para backup de dados", "Um tipo de banco de dados seguro"], answer: 1, explanation: "SQL Injection é uma técnica de ataque onde código SQL malicioso é inserido em campos de entrada para manipular bancos de dados." }
    ],
    protecao: [
        { question: "Qual é a melhor prática para criar senhas seguras?", options: ["Usar informações pessoais fáceis de lembrar", "Usar a mesma senha em todos os sites", "Combinar letras, números, símbolos e usar frases longas", "Mudar apenas um caractere quando precisar atualizar"], answer: 2, explanation: "Senhas seguras combinam diferentes tipos de caracteres, são longas e não contêm informações pessoais óbvias." },
        { question: "O que é um firewall?", options: ["Um tipo de vírus", "Uma barreira que monitora e controla o tráfego de rede", "Um software para acelerar a internet", "Um dispositivo que previne quedas de energia"], answer: 1, explanation: "Firewalls são sistemas de segurança que monitoram e controlam o tráfego de rede com base em regras de segurança predeterminadas." },
        { question: "Qual destas NÃO é uma boa prática de segurança para e-mails?", options: ["Verificar o remetente antes de abrir anexos", "Clicar em links para verificar se são legítimos", "Usar filtros de spam", "Não compartilhar sua senha por e-mail"], answer: 1, explanation: "Nunca clique em links suspeitos para 'verificá-los'. Use a passagem do mouse (hover) para ver o URL real ou digite-o manualmente no navegador." },
        { question: "O que é criptografia?", options: ["Um tipo de vírus", "Processo de converter informações em código para prevenir acesso não autorizado", "Software que remove arquivos permanentemente", "Um método para comprimir arquivos"], answer: 1, explanation: "Criptografia é o processo de codificar informações de forma que apenas pessoas autorizadas possam acessá-las." },
        { question: "Qual é a melhor forma de proteger dados em dispositivos móveis?", options: ["Nunca usar senha", "Usar apenas redes Wi-Fi públicas", "Usar bloqueio de tela, criptografia e manter o sistema atualizado", "Desativar todas as permissões de aplicativos"], answer: 2, explanation: "Proteger dispositivos móveis requer uma combinação de bloqueio de tela seguro, criptografia de dados e manter o sistema e aplicativos atualizados." },
        { question: "Por que é importante fazer backup de dados?", options: ["Apenas para economizar espaço no dispositivo principal", "Para recuperar dados em caso de perda, roubo ou ataque", "Não é importante se você tiver um bom antivírus", "Apenas empresas precisam de backups"], answer: 1, explanation: "Backups são essenciais para recuperar dados em caso de perda acidental, falha de hardware, roubo de dispositivo ou ataques como ransomware." },
        { question: "O que é um VPN e por que é útil?", options: ["Um tipo de vírus que afeta redes", "Uma rede virtual privada que criptografa sua conexão para maior privacidade", "Um software que acelera downloads", "Um tipo de firewall avançado"], answer: 1, explanation: "VPN (Virtual Private Network) cria uma conexão criptografada para maior privacidade e segurança, especialmente em redes Wi-Fi públicas." },
        { question: "Qual destas é uma boa prática para uso de mídias sociais?", options: ["Compartilhar sua localização em tempo real", "Aceitar todas as solicitações de amizade", "Revisar configurações de privacidade regularmente", "Usar a mesma senha em todas as plataformas"], answer: 2, explanation: "Revisar e ajustar regularmente as configurações de privacidade é essencial para controlar quem pode ver suas informações nas mídias sociais." }
    ]
};

// Variáveis para controle do quiz
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedCategories = [];

// Função para resetar o quiz
function resetQuiz() {
    currentQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    selectedCategories = [];
    
    // Resetar seleção de categorias
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.classList.remove('border-blue-500', 'border-2');
        btn.classList.add('border-blue-100', 'border-2');
    });
}

// Event listeners para categorias (se existirem)
const categoryButtons = document.querySelectorAll('.category-btn');
if (categoryButtons.length > 0) {
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            
            if (btn.classList.contains('border-blue-500')) {
                // Desselecionar
                btn.classList.remove('border-blue-500');
                btn.classList.add('border-blue-100');
                selectedCategories = selectedCategories.filter(cat => cat !== category);
            } else {
                // Selecionar
                btn.classList.remove('border-blue-100');
                btn.classList.add('border-blue-500');
                if (!selectedCategories.includes(category)) {
                    selectedCategories.push(category);
                }
            }
        });
    });
}

// Event listener para iniciar quiz com categorias selecionadas
if (startSelectedQuizBtn) {
    startSelectedQuizBtn.addEventListener('click', () => {
        if (selectedCategories.length === 0) {
            alert('Por favor, selecione pelo menos uma categoria para iniciar o quiz.');
            return;
        }
        
        // Combinar perguntas das categorias selecionadas
        currentQuestions = [];
        selectedCategories.forEach(category => {
            if (quizData[category]) {
                currentQuestions = [...currentQuestions, ...quizData[category]];
            }
        });
        
        // Embaralhar perguntas
        currentQuestions = shuffleArray(currentQuestions);
        
        // Limitar a 10 perguntas se houver mais
        if (currentQuestions.length > 10) {
            currentQuestions = currentQuestions.slice(0, 10);
        }
        
        currentQuestionIndex = 0;
        score = 0;
        showQuizSection();
        displayQuestion();
    });
}

// Função para embaralhar array (algoritmo Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para exibir a pergunta atual
function displayQuestion() {
    const quizSection = document.getElementById('quiz-section');
    if (!quizSection) return;
    
    const currentQuestion = currentQuestions[currentQuestionIndex];
    
    // Atualizar barra de progresso
    const progressBar = document.getElementById('quiz-progress-bar');
    if (progressBar) {
        const progressPercent = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }
    
    const questionCounter = document.getElementById('question-counter');
    if (questionCounter) {
        questionCounter.textContent = `Pergunta ${currentQuestionIndex + 1} de ${currentQuestions.length}`;
    }
    
    // Exibir pergunta e opções
    const questionText = document.getElementById('question-text');
    if (questionText) {
        questionText.textContent = currentQuestion.question;
    }
    
    const optionsContainer = document.getElementById('options-container');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        
        currentQuestion.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option bg-white p-4 rounded-lg border border-gray-200 cursor-pointer transition';
            optionDiv.innerHTML = `
                <div class="flex items-center">
                    <div class="option-marker w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                        <div class="option-marker-inner w-3 h-3 rounded-full bg-blue-500 hidden"></div>
                    </div>
                    <span>${option}</span>
                </div>
            `;
            
            optionDiv.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(optionDiv);
        });
    }
    
    // Esconder feedback e botão de próxima pergunta
    const feedbackDiv = document.getElementById('answer-feedback');
    if (feedbackDiv) {
        feedbackDiv.classList.add('hidden');
    }
    
    const nextBtn = document.getElementById('next-question-btn');
    if (nextBtn) {
        nextBtn.classList.add('hidden');
    }
}

// Função para selecionar uma opção
function selectOption(optionIndex) {
    // Verificar se já respondeu
    const feedbackDiv = document.getElementById('answer-feedback');
    if (feedbackDiv && !feedbackDiv.classList.contains('hidden')) {
        return; // Já respondeu, aguardando clicar em "Próxima"
    }
    
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const isCorrect = optionIndex === currentQuestion.answer;
    
    if (isCorrect) {
        score++;
    }
    
    // Marcar opção selecionada
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        const marker = option.querySelector('.option-marker');
        const markerInner = option.querySelector('.option-marker-inner');
        
        if (index === optionIndex) {
            // Opção selecionada
            markerInner.classList.remove('hidden');
            
            if (index === currentQuestion.answer) {
                // Resposta correta
                option.classList.add('border-green-500', 'bg-green-50');
                marker.classList.remove('border-blue-500');
                marker.classList.add('border-green-500');
                markerInner.classList.add('bg-green-500');
                markerInner.classList.remove('bg-blue-500');
            } else {
                // Resposta incorreta
                option.classList.add('border-red-500', 'bg-red-50');
                marker.classList.remove('border-blue-500');
                marker.classList.add('border-red-500');
                markerInner.classList.add('bg-red-500');
                markerInner.classList.remove('bg-blue-500');
            }
        } else if (index === currentQuestion.answer) {
            // Destacar resposta correta
            option.classList.add('border-green-500', 'bg-green-50');
            marker.classList.remove('border-blue-500');
            marker.classList.add('border-green-500');
        }
        
        // Desabilitar cliques
        option.classList.remove('cursor-pointer');
        option.classList.add('cursor-default');
    });
    
    // Mostrar feedback
    if (feedbackDiv) {
        feedbackDiv.classList.remove('hidden');
        feedbackDiv.innerHTML = `
            <div class="p-4 rounded-lg ${isCorrect ? 'bg-green-100 border-l-4 border-green-500' : 'bg-red-100 border-l-4 border-red-500'}">
                <p class="font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}">${isCorrect ? 'Correto!' : 'Incorreto!'}</p>
                <p class="mt-1 text-gray-700">${currentQuestion.explanation}</p>
            </div>
        `;
    }
    
    // Mostrar botão de próxima pergunta
    const nextBtn = document.getElementById('next-question-btn');
    if (nextBtn) {
        nextBtn.classList.remove('hidden');
        nextBtn.textContent = currentQuestionIndex < currentQuestions.length - 1 ? 'Próxima Pergunta' : 'Ver Resultados';
        
        // Remover event listeners anteriores
        const newBtn = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newBtn, nextBtn);
        
        newBtn.addEventListener('click', () => {
            if (currentQuestionIndex < currentQuestions.length - 1) {
                currentQuestionIndex++;
                displayQuestion();
            } else {
                showResults();
            }
        });
    }
}

// Função para mostrar resultados
function showResults() {
    showResultsSection();
    
    const resultsSection = document.getElementById('results-section');
    if (!resultsSection) return;
    
    const percentage = Math.round((score / currentQuestions.length) * 100);
    let resultMessage, resultClass, resultIcon;
    
    if (percentage >= 90) {
        resultMessage = "Excelente! Você é um especialista em segurança cibernética!";
        resultClass = "text-green-600";
        resultIcon = "trophy";
    } else if (percentage >= 70) {
        resultMessage = "Muito bom! Você tem um bom conhecimento sobre segurança cibernética.";
        resultClass = "text-blue-600";
        resultIcon = "award";
    } else if (percentage >= 50) {
        resultMessage = "Bom trabalho! Você está no caminho certo, mas ainda há espaço para melhorar.";
        resultClass = "text-yellow-600";
        resultIcon = "star-half-alt";
    } else {
        resultMessage = "Continue estudando! A segurança cibernética é um campo complexo que requer prática contínua.";
        resultClass = "text-red-600";
        resultIcon = "book";
    }
    
    resultsSection.innerHTML = `
        <div class="bg-white rounded-lg shadow-lg p-8 text-center">
            <i class="fas fa-${resultIcon} text-6xl ${resultClass} mb-4"></i>
            <h2 class="text-3xl font-bold text-blue-900 mb-2">Resultado do Quiz</h2>
            <div class="text-5xl font-bold ${resultClass} mb-4">${percentage}%</div>
            <p class="text-xl mb-2">Você acertou ${score} de ${currentQuestions.length} perguntas</p>
            <p class="text-lg text-gray-700 mb-6">${resultMessage}</p>
            
            <div class="flex justify-center space-x-4">
                <button id="retry-quiz-btn" class="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                    <i class="fas fa-redo mr-2"></i> Tentar Novamente
                </button>
                <button id="back-to-categories-btn" class="px-6 py-2 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition">
                    <i class="fas fa-th-list mr-2"></i> Outras Categorias
                </button>
            </div>
        </div>
    `;
    
    // Event listeners para botões de resultado
    const retryBtn = document.getElementById('retry-quiz-btn');
    if (retryBtn) {
        retryBtn.addEventListener('click', () => {
            currentQuestionIndex = 0;
            score = 0;
            showQuizSection();
            displayQuestion();
        });
    }
    
    const backToCategoriesBtn = document.getElementById('back-to-categories-btn');
    if (backToCategoriesBtn) {
        backToCategoriesBtn.addEventListener('click', () => {
            resetQuiz();
            showQuizCategoriesSection();
        });
    }
}
