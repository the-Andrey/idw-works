texts = [
	'Ryan Dahl é conhecido por ter criado o Node.js em 2009, um ambiente de execução JavaScript no lado do servidor que revolucionou o desenvolvimento web. O Node.js introduziu um modelo de E/S não bloqueante e orientado a eventos, permitindo que aplicações web manipulassem muitas conexões simultâneas de forma eficiente. Isso significou um avanço significativo em comparação aos modelos tradicionais de E/S bloqueante. Com o Node.js, desenvolvedores puderam utilizar JavaScript tanto no cliente quanto no servidor, unificando o ambiente de desenvolvimento e oferecendo um ecossistema robusto de módulos e bibliotecas através do npm (Node Package Manager).',
	'Após o sucesso do Node.js, Ryan Dahl concentrou-se em resolver alguns desafios e críticas que surgiram com a popularização da plataforma. Ele lançou o Deno em 2018 como uma reimaginação do conceito inicial do Node.js, abordando questões como segurança, gerenciamento de dependências e arquitetura. Deno é construído em Rust e TypeScript, oferecendo segurança por padrão, onde cada módulo é executado em um sandbox, limitando o acesso aos recursos do sistema. Além disso, Deno simplifica o gerenciamento de módulos, eliminando a necessidade do arquivo package.json e adotando URLs como referências diretas para importações de código, tornando o desenvolvimento mais intuitivo e flexível.',
	'O JSR, idealizado por Ryan Dahl, criador do Node.js, é um registro de pacotes inovador para JavaScript e TypeScript. Destaca-se pela otimização para TypeScript, suporte a módulos ES, compatibilidade com diversos ambientes, foco na segurança e na simplicidade de publicação de pacotes. Posicionando-se como alternativa ao npm, o JSR visa aprimorar o gerenciamento de pacotes JavaScript, priorizando a segurança, a praticidade e o TypeScript. Ainda em desenvolvimento, o JSR demonstra grande potencial para se tornar um player importante no ecossistema JavaScript.'
]

function changeText(index) {
	document.getElementById('info-div').getElementsByTagName('p')[0].innerText = texts[index];
}