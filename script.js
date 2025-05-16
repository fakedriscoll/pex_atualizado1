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
const sobreNosTab = document.getElementById("sobre-nos-tab");
const readingSection = document.getElementById("reading-section");
const quizCategoriesSection = document.getElementById("quiz-categories-section");
const quizSection = document.getElementById("quiz-section");
const resultsSection = document.getElementById("results-section");
const sobreNosSection = document.getElementById("sobre-nos-section");
const startQuizBtn = document.getElementById("start-quiz-btn"); // Note: This ID might not exist in current HTML
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

console.log("Attempting to find sobreNosTab:", sobreNosTab ? "Found" : "NOT Found");
if (sobreNosTab) {
    sobreNosTab.addEventListener("click", () => {
        console.log("Sobre Nós tab clicked");
        showSobreNosSection();
    });
} else {
    console.error("Sobre Nós tab (sobre-nos-tab) not found by getElementById.");
}

if (startQuizBtn) { // This button is from the original template, might not be in the user's current HTML for reading section
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
    if(sobreNosSection) sobreNosSection.classList.add("hidden");

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
    if(sobreNosTab) {
        sobreNosTab.classList.add("text-gray-500", "hover:text-gray-700");
        sobreNosTab.classList.remove("border-blue-600", "text-blue-600");
        console.log("Sobre Nós tab styled as inactive.");
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
    if(sobreNosSection) sobreNosSection.classList.add("hidden");
    
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
    if(sobreNosTab) {
        sobreNosTab.classList.add("text-gray-500", "hover:text-gray-700");
        sobreNosTab.classList.remove("border-blue-600", "text-blue-600");
        console.log("Sobre Nós tab styled as inactive.");
    }
}
        
function showQuizSection() {
    console.log("showQuizSection called.");
    if(readingSection) readingSection.classList.add("hidden");
    if(quizCategoriesSection) quizCategoriesSection.classList.add("hidden");
    if(quizSection) quizSection.classList.remove("hidden");
    if(resultsSection) resultsSection.classList.add("hidden");
    if(sobreNosSection) sobreNosSection.classList.add("hidden");
}

function showResultsSection() {
    console.log("showResultsSection called.");
    if(readingSection) readingSection.classList.add("hidden");
    if(quizCategoriesSection) quizCategoriesSection.classList.add("hidden");
    if(quizSection) quizSection.classList.add("hidden");
    if(resultsSection) resultsSection.classList.remove("hidden");
    if(sobreNosSection) sobreNosSection.classList.add("hidden");
}

function showSobreNosSection() {
    console.log("showSobreNosSection called.");
    if(readingSection) readingSection.classList.add("hidden");
    if(quizCategoriesSection) quizCategoriesSection.classList.add("hidden");
    if(quizSection) quizSection.classList.add("hidden");
    if(resultsSection) resultsSection.classList.add("hidden");
    if(sobreNosSection) sobreNosSection.classList.remove("hidden");
    
    if(sobreNosTab) {
        sobreNosTab.classList.add("border-blue-600", "text-blue-600");
        sobreNosTab.classList.remove("text-gray-500", "hover:text-gray-700");
        console.log("Sobre Nós tab styled as active.");
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
        { question: "Por que é arriscado baixar software de fontes não oficiais?", options: ["O software pode ser mais caro", "Pode vir com malware embutido ou ser uma versão pirata com falhas", "Leva mais tempo para baixar", "Não há risco"], answer: 1, explanation: "Software de fontes não confiáveis frequentemente contém malware ou não possui as atualizações de segurança necessárias." },
        { question: "O que é um 'patch' de segurança?", options: ["Um adesivo para cobrir a webcam", "Uma correção de software para uma vulnerabilidade conhecida", "Um tipo de programa de antivírus", "Uma senha muito forte"], answer: 1, explanation: "Um patch é uma atualização de software projetada para corrigir bugs ou vulnerabilidades de segurança." },
        { question: "Qual a melhor forma de descartar um HD antigo contendo dados sensíveis?", options: ["Simplesmente jogá-lo no lixo comum", "Formatar o HD uma vez", "Destruição física do HD ou uso de software de limpeza de dados seguro", "Vender o HD como está"], answer: 2, explanation: "Para garantir que dados sensíveis não sejam recuperados, a destruição física ou o uso de software especializado para apagar dados de forma segura são recomendados." },
        { question: "O que é 'shoulder surfing'?", options: ["Um esporte aquático", "Observar discretamente alguém digitando informações confidenciais", "Navegar na internet anonimamente", "Um tipo de ataque de rede"], answer: 1, explanation: "Shoulder surfing é a prática de espionar por cima do ombro de alguém para obter informações como senhas ou PINs." },
        { question: "Por que é importante ter cuidado com as permissões concedidas a aplicativos móveis?", options: ["Para economizar bateria", "Aplicativos podem solicitar acesso a dados e funcionalidades desnecessárias, comprometendo a privacidade", "Para liberar espaço de armazenamento", "Não é importante, todos os apps são seguros"], answer: 1, explanation: "Muitos aplicativos pedem mais permissões do que precisam, o que pode levar à coleta excessiva de dados e riscos à privacidade." }
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
        { question: "O que é um 'incidente de segurança' em uma empresa?", options: ["Um funcionário chegando atrasado", "Qualquer evento que comprometa a confidencialidade, integridade ou disponibilidade dos dados ou sistemas", "Uma queda de energia", "Uma impressora quebrada"], answer: 1, explanation: "Um incidente de segurança é uma violação ou ameaça iminente de violação das políticas de segurança da informação." },
        { question: "O que é um IDS (Intrusion Detection System)?", options: ["Um sistema que impede todas as intrusões", "Um sistema que detecta atividades suspeitas ou maliciosas na rede ou em um host", "Um software para instalar programas", "Um dispositivo de armazenamento seguro"], answer: 1, explanation: "Um IDS monitora o tráfego de rede ou atividades em um sistema para identificar possíveis ameaças e alertar os administradores." },
        { question: "Qual a diferença entre um IDS e um IPS (Intrusion Prevention System)?", options: ["Não há diferença, são a mesma coisa", "IDS apenas detecta, enquanto IPS pode detectar e bloquear ativamente as ameaças", "IPS é mais antigo que IDS", "IDS é para redes pequenas, IPS para grandes empresas"], answer: 1, explanation: "Enquanto um IDS (Sistema de Detecção de Intrusão) apenas alerta sobre ameaças, um IPS (Sistema de Prevenção de Intrusão) pode tomar medidas para bloquear ativamente essas ameaças." }
    ],
    lgpd: [
        { question: "O que significa a sigla LGPD?", options: ["Lei Geral de Proteção de Documentos", "Lei Geral de Proteção de Dados Pessoais", "Lei Global de Privacidade Digital", "Liga Geral de Programadores Dedicados"], answer: 1, explanation: "LGPD é a Lei Geral de Proteção de Dados Pessoais, que regula o tratamento de dados pessoais no Brasil." },
        { question: "Qual o principal objetivo da LGPD?", options: ["Punir empresas que usam dados", "Proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade da pessoa natural", "Coletar mais dados dos cidadãos", "Facilitar a venda de dados pessoais"], answer: 1, explanation: "A LGPD visa proteger os dados pessoais dos cidadãos, garantindo sua privacidade e controle sobre suas informações." },
        { question: "Quem é o 'titular' dos dados segundo a LGPD?", options: ["A empresa que coleta os dados", "O governo", "A pessoa natural a quem se referem os dados pessoais", "O encarregado de dados (DPO)"], answer: 2, explanation: "O titular é a pessoa física a quem os dados se referem." },
        { question: "O que é 'consentimento' no contexto da LGPD?", options: ["Uma ordem judicial para coletar dados", "Manifestação livre, informada e inequívoca pela qual o titular concorda com o tratamento de seus dados para uma finalidade determinada", "Um contrato de trabalho", "Uma taxa paga pela empresa"], answer: 1, explanation: "O consentimento é uma das bases legais para o tratamento de dados, e deve ser dado de forma clara e específica pelo titular." },
        { question: "Qual o papel do Encarregado de Proteção de Dados (DPO)?", options: ["Vender os dados da empresa", "Atuar como canal de comunicação entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD)", "Desenvolver software de segurança", "Investigar crimes cibernéticos"], answer: 1, explanation: "O DPO é o responsável por orientar sobre as práticas de proteção de dados e ser o ponto de contato com titulares e a ANPD." },
        { question: "Quais são alguns dos direitos dos titulares previstos na LGPD?", options: ["Direito de vender seus dados para quem quiser", "Acesso aos dados, correção de dados incompletos, anonimização, eliminação dos dados", "Direito de invadir sistemas para verificar seus dados", "Apenas o direito de ser esquecido"], answer: 1, explanation: "A LGPD garante diversos direitos aos titulares, como acesso, retificação, cancelamento ou oposição ao tratamento de seus dados." },
        { question: "O que é um 'Relatório de Impacto à Proteção de Dados Pessoais' (RIPD)?", options: ["Um relatório sobre o impacto financeiro de um vazamento de dados", "Documentação do controlador que contém a descrição dos processos de tratamento de dados pessoais que podem gerar riscos às liberdades civis e aos direitos fundamentais", "Um formulário para solicitar a exclusão de dados", "Uma lista de empresas que cumprem a LGPD"], answer: 1, explanation: "O RIPD é um documento exigido pela LGPD para operações de tratamento de dados que apresentam alto risco, detalhando medidas para mitigar esses riscos." },
        { question: "A LGPD se aplica apenas a dados online?", options: ["Sim, apenas dados em formato digital", "Não, aplica-se a qualquer operação de tratamento de dados pessoais, inclusive em meios físicos", "Sim, e apenas para grandes empresas de tecnologia", "Não, mas foca principalmente em redes sociais"], answer: 1, explanation: "A LGPD abrange o tratamento de dados pessoais em qualquer formato, seja digital ou físico." },
        { question: "O que são 'dados sensíveis' de acordo com a LGPD?", options: ["Qualquer dado pessoal", "Dados sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico", "Apenas dados financeiros", "Senhas e nomes de usuário"], answer: 1, explanation: "Dados sensíveis são aqueles que, por sua natureza, podem gerar discriminação e, por isso, recebem proteção especial da LGPD." },
        { question: "Qual a sanção mais severa prevista na LGPD para o descumprimento da lei?", options: ["Advertência simples", "Multa de até 2% do faturamento da empresa no Brasil, limitada a R$ 50 milhões por infração", "Publicização da infração", "Bloqueio dos dados pessoais a que se refere a infração"], answer: 1, explanation: "A LGPD prevê multas significativas para empresas que não cumprirem suas disposições, podendo chegar a 2% do faturamento, com teto de R$ 50 milhões por infração." }
    ],
    carreira: [
        { question: "Qual destas NÃO é uma carreira comum em cibersegurança?", options: ["Analista de Segurança", "Engenheiro de Software Focado em IA", "Hacker Ético (Pentester)", "Consultor de Segurança"], answer: 1, explanation: "Embora IA possa ser usada em cibersegurança, 'Engenheiro de Software Focado em IA' é uma carreira mais ampla em desenvolvimento de IA, não especificamente cibersegurança." },
        { question: "Qual certificação é conhecida por focar em hacking ético?", options: ["CISSP", "CompTIA Security+", "CEH (Certified Ethical Hacker)", "CISM"], answer: 2, explanation: "A CEH é uma certificação popular para profissionais que desejam se especializar em testes de penetração e hacking ético." },
        { question: "Que tipo de habilidade é crucial para um analista de segurança além do conhecimento técnico?", options: ["Habilidade de cozinhar", "Pensamento crítico e resolução de problemas", "Habilidade de tocar um instrumento musical", "Conhecimento de jardinagem"], answer: 1, explanation: "Analistas de segurança precisam ser capazes de analisar situações complexas, identificar padrões e resolver problemas de forma eficaz." },
        { question: "O que um especialista em forense digital faz?", options: ["Previne ataques antes que aconteçam", "Investiga incidentes de segurança e crimes cibernéticos, coletando e analisando evidências digitais", "Desenvolve políticas de segurança", "Gerencia firewalls"], answer: 1, explanation: "Especialistas em forense digital são como detetives do mundo digital, recuperando dados e investigando a origem e o impacto de incidentes." },
        { question: "Qual o papel de um CISO (Chief Information Security Officer) em uma organização?", options: ["Desenvolver código para aplicações seguras", "Liderar e gerenciar a estratégia de segurança da informação da empresa", "Realizar testes de penetração diários", "Vender soluções de segurança para clientes"], answer: 1, explanation: "O CISO é o executivo responsável por estabelecer e manter a visão, estratégia e programa para garantir que os ativos de informação e tecnologias sejam adequadamente protegidos." },
        { question: "O que é 'threat hunting' (caça a ameaças)?", options: ["Uma técnica de pesca esportiva", "Um processo proativo de busca por atividades maliciosas não detectadas nos sistemas e redes", "Desenvolver novas ferramentas de antivírus", "Responder a alertas de segurança já gerados"], answer: 1, explanation: "Threat hunting é uma abordagem proativa onde analistas buscam ativamente por sinais de comprometimento que podem ter passado despercebidos pelas defesas automatizadas." },
        { question: "Qual a importância de 'soft skills' como comunicação e trabalho em equipe para profissionais de cibersegurança?", options: ["São irrelevantes, apenas habilidades técnicas importam", "São cruciais para explicar riscos complexos, colaborar em investigações e educar usuários", "Apenas para cargos de gerência", "Ajudam a conseguir um salário maior, mas não no trabalho diário"], answer: 1, explanation: "Soft skills são essenciais para que profissionais de cibersegurança possam comunicar efetivamente os riscos, trabalhar em equipe durante incidentes e promover uma cultura de segurança." },
        { question: "Qual destas áreas de cibersegurança foca na proteção de sistemas de controle industrial (ICS) e SCADA?", options: ["Segurança de Aplicações Web", "Segurança em Nuvem", "Segurança OT (Tecnologia Operacional)", "Segurança de Redes Wireless"], answer: 2, explanation: "A Segurança OT (Operational Technology) é especializada na proteção de sistemas que controlam processos industriais, como SCADA e ICS, que têm requisitos e riscos distintos da TI tradicional." },
        { question: "O que é um SOC (Security Operations Center)?", options: ["Um tipo de software de criptografia", "Uma equipe centralizada responsável por monitorar, detectar, analisar e responder a incidentes de segurança cibernética", "Um padrão de segurança para sites de e-commerce", "Um local físico onde se guardam servidores"], answer: 1, explanation: "Um SOC é o centro nervoso da defesa cibernética de uma organização, operando 24/7 para proteger contra ameaças." },
        { question: "Qual a diferença entre 'Red Team' e 'Blue Team' em exercícios de segurança?", options: ["Red Team ataca, Blue Team defende", "Red Team usa software vermelho, Blue Team usa azul", "Red Team foca em hardware, Blue Team em software", "São apenas nomes diferentes para a mesma equipe"], answer: 0, explanation: "Em simulações de segurança, o Red Team simula atacantes tentando comprometer os sistemas, enquanto o Blue Team é responsável por defender e responder a esses ataques." }
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

// --- Seleção de Categoria do Quiz ---
const categoryBtns = document.querySelectorAll(".category-btn");
if (categoryBtns) {
    categoryBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("ring-2");
            btn.classList.toggle("ring-blue-500");
            btn.classList.toggle("bg-blue-100");
            const category = btn.dataset.category;
            if (selectedCategories.includes(category)) {
                selectedCategories = selectedCategories.filter(c => c !== category);
            } else {
                selectedCategories.push(category);
            }
        });
    });
}

if (startSelectedQuizBtn) {
    startSelectedQuizBtn.addEventListener("click", () => {
        if (selectedCategories.length === 0) {
            alert("Por favor, selecione pelo menos uma categoria para o quiz.");
            return;
        }
        loadSelectedQuestions();
        startQuiz();
    });
}

function loadSelectedQuestions() {
    currentQuestions = [];
    selectedCategories.forEach(category => {
        if (quizData[category]) {
            currentQuestions = currentQuestions.concat(quizData[category]);
        }
    });
    currentQuestions.sort(() => Math.random() - 0.5); // Shuffle questions
    if (quizCategoriesDisplay) {
        const categoryNames = selectedCategories.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(", ");
        quizCategoriesDisplay.textContent = `Categorias: ${categoryNames}`;
    }
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
    if (!quizContainer || !currentQuestions[currentQuestionIndex]) return;
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
    if(prevBtn) prevBtn.classList.toggle("hidden", currentQuestionIndex === 0);
    if(nextBtn) nextBtn.classList.toggle("hidden", currentQuestionIndex === currentQuestions.length - 1 || currentQuestions.length === 0);
    if(finishBtn) finishBtn.classList.toggle("hidden", currentQuestionIndex !== currentQuestions.length - 1 || currentQuestions.length === 0);
}

function updateProgress() {
    if (!progressBar || !progressText || currentQuestions.length === 0) return;
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestionIndex + 1}/${currentQuestions.length}`;
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
            updateProgress();
        }
    });
}

if (nextBtn) {
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
}

if (finishBtn) {
    finishBtn.addEventListener("click", () => {
        if (!userAnswers.hasOwnProperty(currentQuestionIndex) && currentQuestions.length > 0) {
            alert("Por favor, selecione uma resposta para a última pergunta.");
            return;
        }
        calculateResults();
        showResultsSection();
    });
}

function calculateResults() {
    let score = 0;
    let categoryScores = {};
    selectedCategories.forEach(cat => categoryScores[cat] = { correct: 0, total: 0 });
    if(wrongAnswersContainer) wrongAnswersContainer.innerHTML = "<h3 class='text-xl font-semibold text-red-700 mb-4'>Respostas Incorretas e Explicações:</h3>";
    let hasWrongAnswers = false;

    currentQuestions.forEach((q, index) => {
        const questionCategory = selectedCategories.find(cat => quizData[cat] && quizData[cat].includes(q));
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
            if(wrongAnswersContainer) {
                wrongAnswersContainer.innerHTML += `
                    <div class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p class="font-semibold text-gray-800"><strong>Questão ${index + 1}:</strong> ${q.question}</p>
                        <p class="text-red-600"><strong>Sua resposta:</strong> ${q.options[userAnswers[index]] || "Não respondida"}</p>
                        <p class="text-green-600"><strong>Resposta correta:</strong> ${q.options[q.answer]}</p>
                        <p class="text-sm text-gray-600 mt-1"><strong>Explicação:</strong> ${q.explanation}</p>
                    </div>
                `;
            }
        }
    });

    if(scoreDisplay) scoreDisplay.textContent = score;
    if(document.getElementById("score") && document.getElementById("score").nextElementSibling) {
        document.getElementById("score").nextElementSibling.textContent = `/${currentQuestions.length}`;
    }
    
    if(categoryResultsContainer) {
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
    }

    const quizEndTime = new Date();
    const timeTaken = Math.floor((quizEndTime - quizStartTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    if(document.getElementById("quiz-time")) document.getElementById("quiz-time").textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    let message = "";
    let messageClass = "";
    const percentageScore = currentQuestions.length > 0 ? (score / currentQuestions.length) * 100 : 0;
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
    if(scoreMessageContainer) {
        scoreMessageContainer.textContent = message;
        scoreMessageContainer.className = `max-w-2xl mx-auto mb-8 p-4 rounded-lg ${messageClass}`;
    }

    if (!hasWrongAnswers && wrongAnswersContainer) {
        wrongAnswersContainer.innerHTML = '<p class="text-green-600 font-semibold">Parabéns! Você acertou todas as questões!</p>';
    }
}

function resetQuiz() {
    selectedCategories = [];
    if(categoryBtns) {
        categoryBtns.forEach(btn => {
            btn.classList.remove("ring-2", "ring-blue-500", "bg-blue-100");
        });
    }
    // Não chama showQuizCategoriesSection() diretamente aqui para evitar conflito com logout
}

if (retryBtn) {
    retryBtn.addEventListener("click", () => {
        showQuizCategoriesSection(); // Agora o usuário volta para a seleção de categorias
    });
}

if (backToReadingBtn) {
    backToReadingBtn.addEventListener("click", () => {
        resetQuiz(); 
        showReadingSection();
    });
}
console.log("Script execution finished initial setup.");

document.getElementById("register-form").addEventListener("submit", function(event) {
    const password = document.getElementById("register-password").value;
    const confirm = document.getElementById("register-password-confirm").value;
    if (password !== confirm) {
        event.preventDefault();
        alert("As senhas não coincidem!");
    }
});
