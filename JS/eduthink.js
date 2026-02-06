//---------------------------------//
// 🤖 ChatBot EduThink V1.0
//--------------------------------//
const conhecimentoEdutech = {
  palavrasChave: {
    'sobre': ['empresa', 'companhia', 'organização', 'instituição', 'negócio'],
    'quem somos': ['identidade', 'origem', 'fundação', 'história', 'background'],
    'missão': ['propósito', 'objetivo', 'intenção', 'finalidade', 'razão de ser'],
    'visão': ['futuro', 'perspectiva', 'aspiração', 'desejo', 'meta'],
    'valores': ['princípios', 'ética', 'crenças', 'ideais', 'filosofia'],

    'produtos': ['equipamentos', 'hardware', 'computadores', 'laptops', 'tablets', 'dispositivos'],
    'serviços': ['consultoria', 'suporte', 'assistência', 'treinamento', 'formação', 'desenvolvimento'],

    'contactos': ['telefone', 'email', 'whatsapp', 'contato', 'comunicação', 'falar', 'ligar'],
    'localização': ['endereço', 'morada', 'local', 'sede', 'escritório', 'onde', 'mapa'],
    
    'suporte': ['ajuda', 'assistência', 'problema', 'dificuldade', 'erro', 'técnico'],
    'horário': ['atendimento', 'funcionamento', 'horas', 'abertura', 'fechamento', 'expediente'],
    
    'site': ['website', 'portal', 'página', 'online', 'internet', 'web'],
    'parceiros': ['colaboradores', 'aliados', 'associados', 'parcerias', 'cooperação'],
    'preços': ['custo', 'valor', 'orçamento', 'orçamentação', 'quanto custa', 'tabela'],
    'vagas': ['emprego', 'trabalho', 'oportunidades', 'carreira', 'recrutamento', 'contratação'],
    'blog': ['notícias', 'artigos', 'publicações', 'conteúdo', 'informações'],
  },
  
//--------------------- Respostas Detalhadas ---------------------//
  respostas: {
    'sobre': {
      titulo: "📊 Sobre a Edutech, Lda",
      conteudo: `A <b>Edutech, Lda</b> é uma empresa moçambicana especializada em soluções tecnológicas para educação. Fundada com o propósito de transformar o setor educacional através da tecnologia, oferecemos produtos e serviços inovadores que capacitam instituições de ensino, professores e estudantes.

<b>✨ O que nos torna únicos:</b>
• Foco exclusivo em tecnologia educacional
• Soluções personalizadas para realidade moçambicana
• Equipe especializada em TIC e pedagogia
• Compromisso com a qualidade e acessibilidade

<b>🎯 Nossa abordagem:</b>
Combinamos expertise técnica com conhecimento pedagógico para desenvolver soluções que realmente fazem a diferença na sala de aula e além dela.`
    },
    
    'quem somos': {
      titulo: "👥 Quem Somos",
      conteudo: `Somos uma equipa apaixonada por tecnologia e educação, unida pela missão de transformar o cenário educacional em Moçambique.

<b>🏢 Nossa Equipe:</b>
• Especialistas em Tecnologia da Informação
• Consultores pedagógicos
• Desenvolvedores de software educacional
• Técnicos de suporte especializados

<b>🤝 Nosso Compromisso:</b>
Trabalhamos em estreita colaboração com escolas, universidades e instituições governamentais para entender suas necessidades específicas e oferecer soluções que realmente funcionam.

<b>🌍 Nossa Presença:</b>
Atuamos em todo território moçambicano, com sede em Maluana, Manhiça, e atendemos clientes em todas províncias.`
    },
    
    'missão': {
      titulo: "🎯 Nossa Missão",
      conteudo: `Nossa missão é <b>impulsionar a educação através da tecnologia</b>, proporcionando soluções inovadoras, acessíveis e de qualidade que transformem o processo de ensino-aprendizagem em Moçambique.

<b>📚 Como cumprimos nossa missão:</b>
1. <b>Fornecendo equipamentos tecnológicos</b> adequados ao contexto educacional
2. <b>Desenvolvendo software educacional</b> personalizado
3. <b>Oferecendo formação</b> a professores e gestores educacionais
4. <b>Prestar suporte técnico</b> contínuo e especializado
5. <b>Criar parcerias estratégicas</b> com instituições de ensino

<b>💡 Objetivo Final:</b>
Democratizar o acesso à tecnologia educacional e contribuir para a formação de cidadãos preparados para os desafios do século XXI.`
    },
    
    'visão': {
      titulo: "🔭 Nossa Visão",
      conteudo: `Ser a <b>referência nacional em soluções tecnológicas educacionais</b> até 2030, reconhecida pela inovação, qualidade e impacto positivo no sistema educacional moçambicano.

<b>🚀 Nossas Aspirações:</b>
• <b>Liderança no mercado</b> de tecnologia educacional em Moçambique
• <b>Reconhecimento internacional</b> pelas nossas soluções
• <b>Expansão para outros países</b> da África Lusófona
• <b>Inovação contínua</b> em produtos e serviços

<b>🏆 Metas Específicas:</b>
→ Atender 500 instituições de ensino até 2026
→ Desenvolver 50 softwares educacionais personalizados
→ Formar 5.000 professores em tecnologias educativas
→ Expandir para 3 novas províncias até 2025`
    },
    
    'valores': {
      titulo: "⚖️ Nossos Valores",
      conteudo: `<b>1. QUALIDADE</b> - Excelência em tudo o que fazemos, desde o atendimento ao produto final.
<b>2. ACESSIBILIDADE</b> - Soluções que todos podem utilizar, independentemente de limitações técnicas ou financeiras.
<b>3. SUSTENTABILIDADE</b> - Práticas ambientalmente responsáveis e soluções duradouras.
<b>4. INOVAÇÃO</b> - Busca constante por novas ideias e melhorias.
<b>5. COMPROMISSO COM A EDUCAÇÃO</b> - Paixão por transformar vidas através do conhecimento.
<b>6. INTEGRIDADE</b> - Transparência e honestidade em todas as nossas relações.
<b>7. COLABORAÇÃO</b> - Trabalho em equipe e parcerias estratégicas.
<b>8. RESPONSABILIDADE SOCIAL</b> - Contribuição para o desenvolvimento da comunidade.

Estes valores guiam cada decisão e ação da nossa empresa.`
    },
    
    'produtos': {
      titulo: "📦 Nossos Produtos",
      conteudo: `Oferecemos uma gama completa de equipamentos tecnológicos especialmente selecionados para o contexto educacional:

<b>💻 LAPTOPS EDUCACIONAIS</b>
• Modelos robustos e duráveis
• Configurações otimizadas para aplicações educacionais
• Preços especiais para instituições de ensino
• Garantia estendida e suporte técnico

<b>🖥️ DESKTOPS INSTITUCIONAIS</b>
• Computadores para laboratórios de informática
• Soluções para administração escolar
• Configurações personalizadas
• Manutenção preventiva

<b>📱 TABLETS EDUCACIONAIS</b>
• Dispositivos resistentes para uso escolar
• Aplicativos educativos pré-instalados
• Controle parental e monitoramento
• Acessórios específicos para educação

<b>🛠️ EQUIPAMENTOS ESPECIALIZADOS</b>
• Projetores interativos
• Quadros digitais
• Sistemas de áudio para salas de aula
• Equipamentos de rede escolar

<b>🎯 VANTAGENS:</b>
• Financiamento facilitado para escolas
• Pacotes completos (hardware + software)
• Instalação e configuração inclusas
• Treinamento de utilização`
    },
    
    'serviços': {
      titulo: "💡 Nossos Serviços",
      conteudo: `<b>🛠️ SUPORTE TÉCNICO ESPECIALIZADO</b>
• Assistência técnica presencial e remota
• Manutenção preventiva e corretiva
• Monitoramento 24/7 de sistemas críticos
• Resposta rápida a emergências

<b>👨‍🏫 CONSULTORIA EM TECNOLOGIAS EDUCACIONAIS</b>
• Diagnóstico tecnológico institucional
• Planeamento de infraestrutura tecnológica
• Seleção de equipamentos e softwares
• Implementação de projetos educacionais digitais

<b>📚 FORMAÇÃO E CAPACITAÇÃO</b>
• Treinamento de professores em ferramentas digitais
• Workshops de tecnologia educacional
• Certificação em competências digitais
• Acompanhamento pedagógico

<b>💻 DESENVOLVIMENTO DE SOFTWARE</b>
• Sistemas de gestão escolar personalizados
• Aplicativos educacionais móveis
• Plataformas de e-learning
• Soluções de avaliação digital

<b>🌐 INFRAESTRUTURA DE REDE</b>
• Instalação de redes escolares
• Sistemas de segurança digital
• Soluções de conectividade
• Gestão de servidores educacionais`
    },

    'contactos': {
      titulo: "📞 Nossos Contactos",
      conteudo: `<b>📍 SEDE PRINCIPAL</b>
Maluana, Manhiça, Maputo, Moçambique

<b>📱 TELEFONES</b>
• Geral: +258 83 335 5955
• Suporte Técnico: +258 84 335 5955
• Comercial: +258 85 335 5955

<b>📧 EMAILS</b>
• Geral: info@edutech.co.mz
• Suporte: suporte@edutech.co.mz
• Comercial: comercial@edutech.co.mz
• Recursos Humanos: rh@edutech.co.mz

<b>💬 WHATSAPP</b>
• Atendimento: +258 83 335 5955
• Suporte: +258 84 335 5955

<b>🕒 HORÁRIO DE ATENDIMENTO</b>
Segunda a Sexta: 08h00 às 17h00
Sábado: 09h00 às 13h00
Domingo: Fechado

<b>🌐 WEBSITE</b>
https://edutech.co.mz

<b>📱 REDES SOCIAIS</b>
• Facebook: @EdutechMoz
• LinkedIn: Edutech Mozambique
• Instagram: @edutech_moz`
    },
    
    'localização': {
      titulo: "📍 Nossa Localização",
      conteudo: `<b>🏢 SEDE PRINCIPAL</b>
Edifício Edutech
Maluana, Distrito de Manhiça
Província de Maputo
Moçambique

<b>🗺️ COMO CHEGAR</b>
• A 45km do centro de Maputo
• Na estrada principal para Manhiça
• Próximo ao Centro de Formação de Maluana

<b>🚗 ACESSO</b>
• Estrada asfaltada
• Estacionamento disponível
• Acesso para pessoas com deficiência

<b>📡 OUTRAS LOCALIZAÇÕES</b>
• <b>Maputo Cidade</b>: Escritório comercial na Av. 25 de Setembro
• <b>Beira</b>: Centro de distribuição na Estrada Nacional Nº 6
• <b>Nampula</b>: Ponto de apoio na Rua dos Combatentes

<b>📍 COORDENADAS GPS</b>
• Sede: -25.4025°, 32.7908°
• Maputo: -25.9692°, 32.5732°`
    },
    
    'suporte': {
      titulo: "🛠️ Suporte Técnico",
      conteudo: `<b>🔧 TIPOS DE SUPORTE</b>
1. <b>Suporte Remoto</b> (via TeamViewer/AnyDesk)
2. <b>Assistência Telefônica</b> (orientação por telefone)
3. <b>Visita Técnica</b> (presencial)
4. <b>Chat Online</b> (atendimento em tempo real)

<b>⏰ HORÁRIOS DE SUPORTE</b>
• Segunda a Sexta: 07h00 às 20h00
• Sábado: 08h00 às 16h00
• Domingo: 09h00 às 13h00 (apenas emergências)

<b>📞 CONTACTOS DE SUPORTE</b>
• Telefone: +258 84 335 5955
• WhatsApp: +258 84 335 5955
• Email: suporte@edutech.co.mz
• Portal: suporte.edutech.co.mz

<b>🎯 NÍVEIS DE SUPORTE</b>
• <b>Nível 1</b>: Resolução básica (até 2 horas)
• <b>Nível 2</b>: Problemas técnicos (até 8 horas)
• <b>Nível 3</b>: Especializado (até 24 horas)
• <b>Crítico</b>: Resposta imediata

<b>📋 PROCEDIMENTO</b>
1. Contacte nosso suporte
2. Descreva o problema
3. Forneça número de série (se aplicável)
4. Receba orientação ou agendamento`
    },
    
    'horário': {
      titulo: "🕒 Horário de Funcionamento",
      conteudo: `<b>🏢 ATENDIMENTO GERAL</b>
Segunda a Sexta-feira: 08h00 às 17h00
Sábado: 09h00 às 13h00
Domingo: Fechado

<b>🛠️ DEPARTAMENTO TÉCNICO</b>
Segunda a Sexta: 07h00 às 20h00
Sábado: 08h00 às 16h00
Domingo: 09h00 às 13h00 (apenas emergências)

<b>📞 CENTRAL TELEFÔNICA</b>
Segunda a Sexta: 07h30 às 18h30
Sábado: 08h00 às 14h00

<b>🌐 ATENDIMENTO ONLINE</b>
Portal: 24 horas por dia
Chat: Seg-Sex 08h00-17h00
Email: Resposta em até 24 horas úteis

<b>🎯 FERIADOS</b>
Atendimento reduzido em feriados nacionais
Consulte nosso site para informações específicas

<b>📅 AGENDAMENTO</b>
Visitas técnicas devem ser agendadas com antecedência mínima de 24 horas.`
    },
    
    'site': {
      titulo: "🌐 Nosso Website",
      conteudo: `<b>🔗 ENDEREÇO OFICIAL</b>
https://edutech.co.mz

<b>📱 SITE RESPONSIVO</b>
• Acessível em computadores, tablets e smartphones
• Design moderno e intuitivo
• Carregamento rápido

<b>📂 SEÇÕES DO SITE</b>
1. <b>Início</b> - Apresentação da empresa
2. <b>Produtos</b> - Catálogo completo
3. <b>Serviços</b> - Detalhes dos nossos serviços
4. <b>Sobre Nós</b> - História e equipe
5. <b>Blog</b> - Artigos e notícias
6. <b>Contactos</b> - Formas de nos contactar
7. <b>Área do Cliente</b> - Acesso exclusivo

<b>🎯 RECURSOS DISPONÍVEIS</b>
• <b>Catálogo digital</b> de produtos
• <b>Solicitação de orçamento</b> online
• <b>Portal de suporte</b> técnico
• <b>Área de downloads</b> (manuais, drivers)
• <b>Blog educativo</b> sobre tecnologia
• <b>Galeria de projetos</b> realizados

<b>📧 NEWSLETTER</b>
Inscreva-se para receber novidades, dicas e ofertas especiais!

<b>🔒 SEGURANÇA</b>
Site protegido com certificado SSL
Proteção de dados conforme Lei de Proteção de Dados`
    },
    
    'parceiros': {
      titulo: "🤝 Nossos Parceiros",
      conteudo: `<b>🏫 INSTITUIÇÕES DE ENSINO</b>
• Ministério da Educação e Desenvolvimento Humano
• Universidade Eduardo Mondlane
• Universidade Pedagógica de Maputo
• Instituto Superior de Ciências e Tecnologia
• Escolas públicas e privadas de todo Moçambique

<b>💼 PARCEIROS TECNOLÓGICOS</b>
• Microsoft (Parceiro Educacional)
• HP (Distribuidor Autorizado)
• Dell (Parceiro de Soluções)
• Intel (Parceiro de Inovação)
• Cisco (Parceiro de Rede)

<b>🏛️ INSTITUIÇÕES GOVERNAMENTAIS</b>
• Ministério da Ciência e Tecnologia
• Instituto Nacional de Tecnologias de Informação e Comunicação
• Administração Nacional do Parque de Ciência e Tecnologia

<b>🌍 ORGANIZAÇÕES INTERNACIONAIS</b>
• UNESCO (Projetos educacionais)
• Banco Mundial (Iniciativas de capacitação)
• União Europeia (Programas de desenvolvimento)

<b>🤲 COMUNIDADE</b>
• Associações de professores
• Organizações não-governamentais
• Iniciativas comunitárias de educação

<b>🎯 BENEFÍCIOS DAS PARCERIAS</b>
• Descontos especiais para parceiros
• Prioridade no suporte técnico
• Acesso a formação exclusiva
• Co-marketing e visibilidade
• Desenvolvimento conjunto de soluções`
    },
    
    'preços': {
      titulo: "💰 Nossos Preços",
      conteudo: `<b>🎯 POLÍTICA DE PREÇOS</b>
Oferecemos preços competitivos e flexíveis, adaptados às necessidades de cada cliente, especialmente instituições de ensino.

<b>📊 FATORES QUE INFLUENCIAM OS PREÇOS</b>
1. <b>Quantidade</b> - Descontos progressivos para grandes encomendas
2. <b>Destino</b> - Preços diferenciados por tipo de instituição
3. <b>Localização</b> - Custos de transporte e instalação
4. <b>Configuração</b> - Personalização de equipamentos
5. <b>Pacote</b> - Combinação de produtos e serviços

<b>🏫 PREÇOS PARA INSTITUIÇÕES DE ENSINO</b>
• <b>Escolas Públicas</b>: Preços especiais com financiamento facilitado
• <b>Universidades</b>: Planos corporativos com condições especiais
• <b>Escolas Privadas</b>: Pacotes completos com instalação inclusa

<b>💳 FORMAS DE PAGAMENTO</b>
• Transferência bancária
• Cheque
• Financiamento bancário (até 36 meses)
• Parcerias com instituições de crédito
• Leasing operacional

<b>📝 SOLICITAÇÃO DE ORÇAMENTO</b>
Para receber um orçamento personalizado:
1. Contacte nosso departamento comercial
2. Descreva suas necessidades
3. Informe quantidade e localização
4. Receba proposta em até 48 horas

<b>ℹ️ NOTA</b>
Todos os preços incluem garantia e suporte técnico básico.`
    },

    'vagas': {
      titulo: "💼 Oportunidades de Trabalho",
      conteudo: `<b>👨‍💼 POR QUE TRABALHAR CONNOSCO?</b>
• Ambiente de trabalho inovador e dinâmico
• Oportunidades de crescimento profissional
• Formação contínua e desenvolvimento
• Equipa jovem e motivada
• Impacto real na educação moçambicana

<b>🎯 ÁREAS DE CONTRATAÇÃO FREQUENTES</b>
1. <b>Técnicos de Suporte</b>
2. <b>Desenvolvedores de Software</b>
3. <b>Consultores Pedagógicos</b>
4. <b>Vendedores Técnicos</b>
5. <b>Gestores de Projeto</b>

<b>📋 PROCESSO SELETIVO</b>
1. <b>Candidatura</b> via email ou site
2. <b>Análise de currículo</b> (7 dias úteis)
3. <b>Entrevista inicial</b> (online ou presencial)
4. <b>Testes técnicos</b> (quando aplicável)
5. <b>Entrevista final</b> com gestor
6. <b>Proposta</b> e contratação

<b>📧 ENVIO DE CURRÍCULOS</b>
Envie seu CV para: rh@edutech.co.mz
Assunto: "Candidatura - [Cargo desejado]"

<b>🌐 VAGAS ATUAIS</b>
Consulte nossa página de carreiras no site para ver as vagas em aberto.

<b>🎓 ESTÁGIOS</b>
Oferecemos programas de estágio para estudantes de:
• Engenharia Informática
• Ciências da Computação
• Educação
• Administração`
    },
    
    'blog': {
      titulo: "📚 Nosso Blog Educativo",
      conteudo: `<b>✍️ SOBRE O BLOG</b>
Um espaço dedicado a compartilhar conhecimento sobre tecnologia educacional, dicas para professores, novidades do setor e cases de sucesso.

<b>📂 CATEGORIAS DO BLOG</b>
1. <b>Tecnologia na Sala de Aula</b> - Dicas práticas
2. <b>Inovação Educacional</b> - Novas tendências
3. <b>Cases de Sucesso</b> - Projetos realizados
4. <b>Dicas Técnicas</b> - Manutenção e otimização
5. <b>Notícias Edutech</b> - Novidades da empresa
6. <b>Entrevistas</b> - Conversas com especialistas

<b>🎯 CONTEÚDO REGULAR</b>
• 2 artigos novos por semana
• Webinars mensais
• E-books gratuitos
• Tutoriais em vídeo
• Infográficos educativos

<b>👨‍🏫 AUTORES</b>
• Nossa equipe técnica
• Professores parceiros
• Especialistas convidados
• Estudantes destacados

<b>🔗 ACESSO AO BLOG</b>
• Site: https://edutech.co.mz/blog
• Newsletter: Inscreva-se para receber artigos
• Redes sociais: Siga-nos para atualizações

<b>📱 PLATAFORMAS</b>
• Site responsivo
• Aplicativo móvel (em breve)
• Podcast "Edutech em Foco"
• Canal YouTube com tutoriais`
    },
  },
  
//--------------------- Sistema de Busca Inteligente ---------------------//
  buscarResposta: function(textoUsuario) {
    const textoLower = textoUsuario.toLowerCase().trim();
    
    const textoNormalizado = textoLower
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s]/g, ' ')
      .replace(/\s+/g, ' ');
    
    const palavras = textoNormalizado.split(' ');
    
    for (const [chavePrincipal, sinonimos] of Object.entries(this.palavrasChave)) {
 
      if (textoLower.includes(chavePrincipal)) {
        return this.respostas[chavePrincipal];
      }
      
      for (const sinonimo of sinonimos) {
        if (textoLower.includes(sinonimo)) {
          return this.respostas[chavePrincipal];
        }
      }
    }
    
    const contextoDetectado = this.detectarContexto(textoNormalizado);
    if (contextoDetectado) {
      return this.respostas[contextoDetectado];
    }
    
    return null;
  },
  
//--------------------- Detector de Contexto ---------------------//
  detectarContexto: function(texto) {
    const contextoMap = {

      'empresa companhia negocio': 'sobre',
      'historia origem fundacao': 'quem somos',
      'proposito objetivo razao': 'missão',
      'futuro aspiracao meta': 'visão',
      'principios etica filosofia': 'valores',
      
      'computador laptop desktop tablet dispositivo equipamento hardware': 'produtos',
      'preco custo valor orcamento quanto': 'preços',
      'comprar adquirir encomendar pedir': 'produtos',
      
      'consultoria treinamento formacao desenvolvimento software': 'serviços',
      'manutencao reparacao conserto tecnico': 'suporte',
      
      'telefone email whatsapp contacto falar ligar': 'contactos',
      'endereco morada local sede mapa como chegar': 'localização',
      'horario funcionamento atendimento expediente': 'horário',
      
      'site website portal internet online': 'site',
      'parceiro colaborador associado': 'parceiros',
      'emprego trabalho vaga oportunidade carreira': 'vagas',
      'blog artigo noticia publicacao': 'blog',
      'ajuda suporte problema erro dificuldade': 'suporte',
    };
    
    for (const [palavras, contexto] of Object.entries(contextoMap)) {
      const palavrasArray = palavras.split(' ');
      for (const palavra of palavrasArray) {
        if (texto.includes(palavra)) {
          return contexto;
        }
      }
    }
    
    return null;
  },
  
//--------------------- Gerar Resposta Formatada ---------------------//
  gerarResposta: function(textoUsuario) {
    const resposta = this.buscarResposta(textoUsuario);
    
    if (resposta) {
      return {
        encontrou: true,
        titulo: resposta.titulo,
        conteudo: resposta.conteudo,
        html: `<div class="resposta-detalhada">
          <h3>${resposta.titulo}</h3>
          <div class="conteudo-resposta">
            ${resposta.conteudo.replace(/\n/g, '<br>')}
          </div>
        </div>`
      };
    }
    
    return {
      encontrou: false,
      mensagem: "Não encontrei informações específicas sobre isso. Posso ajudar com informações sobre nossa empresa, produtos, serviços, contactos ou localização?"
    };
  },
  
//--------------------- Sugestoes Relacionadas ---------------------//
  sugerirTopicosRelacionados: function(tema) {
    const relacoes = {
      'sobre': ['quem somos', 'missão', 'visão', 'valores'],
      'quem somos': ['sobre', 'missão', 'história', 'equipa'],
      'missão': ['visão', 'valores', 'sobre'],
      'visão': ['missão', 'valores', 'metas'],
      'valores': ['missão', 'visão', 'ética'],
      'produtos': ['serviços', 'preços', 'orçamento'],
      'serviços': ['produtos', 'suporte', 'consultoria'],
      'contactos': ['localização', 'horário', 'site'],
      'localização': ['contactos', 'como chegar', 'horário'],
      'suporte': ['serviços', 'contactos', 'horário'],
      'horário': ['contactos', 'localização', 'suporte'],
      'site': ['contactos', 'blog', 'redes sociais'],
      'parceiros': ['sobre', 'serviços', 'colaborações'],
      'preços': ['produtos', 'orçamento', 'financiamento'],
      'vagas': ['sobre', 'equipa', 'carreiras'],
      'blog': ['site', 'notícias', 'artigos'],
    };
    
    return relacoes[tema] || ['sobre', 'produtos', 'serviços', 'contactos'];
  }
};

//--------------------- Funcionalidades Extras ---------------------//
function buscarRespostaInteligente(textoUsuario) {
  return conhecimentoEdutech.gerarResposta(textoUsuario);
}

function mostrarSugestoesRelacionadas(temaAtual) {
  const tema = extrairTemaDaResposta(temaAtual);
  const topicosRelacionados = conhecimentoEdutech.sugerirTopicosRelacionados(tema);
  
  if (topicosRelacionados && topicosRelacionados.length > 0) {
    const existingBlock = document.getElementById('sugestoesRelacionadas');
    if (existingBlock) existingBlock.remove();
    
    const sugestoesHTML = `
      <div id="sugestoesRelacionadas" class="bot-message sugestoes-relacionadas">
        <p><b>📌 Tópicos relacionados:</b></p>
        <div class="sugestoes-buttons">
          ${topicosRelacionados.map(topico => 
            `<button class="sugestao-btn" onclick="window.__eduthink_process_message('${topico}')">
              ${formatarTopicoParaDisplay(topico)}
            </button>`
          ).join('')}
        </div>
      </div>
    `;
    
    if (window.messages) {
      const div = document.createElement('div');
      div.innerHTML = sugestoesHTML;
      window.messages.appendChild(div.firstElementChild);
      window.scrollToBottom();
    }
  }
}

function extrairTemaDaResposta(titulo) {
  const temasMap = {
    'sobre': 'sobre',
    'quem somos': 'quem somos',
    'missão': 'missão',
    'visão': 'visão',
    'valores': 'valores',
    'produtos': 'produtos',
    'serviços': 'serviços',
    'contactos': 'contactos',
    'localização': 'localização',
    'suporte': 'suporte',
    'horário': 'horário',
    'site': 'site',
    'parceiros': 'parceiros',
    'preços': 'preços',
    'vagas': 'vagas',
    'blog': 'blog',
  };
  
  for (const [chave, valor] of Object.entries(temasMap)) {
    if (titulo.toLowerCase().includes(chave)) {
      return valor;
    }
  }
  
  return 'sobre';
}

function formatarTopicoParaDisplay(topico) {
  const formatMap = {
    'sobre': '📊 Sobre',
    'quem somos': '👥 Quem Somos',
    'missão': '🎯 Missão',
    'visão': '🔭 Visão',
    'valores': '⚖️ Valores',
    'produtos': '📦 Produtos',
    'serviços': '💡 Serviços',
    'contactos': '📞 Contactos',
    'localização': '📍 Localização',
    'suporte': '🛠️ Suporte',
    'horário': '🕒 Horário',
    'site': '🌐 Website',
    'parceiros': '🤝 Parceiros',
    'preços': '💰 Preços',
    'vagas': '💼 Vagas',
    'blog': '📚 Blog',
  };
  
  return formatMap[topico] || topico;
}

//--------------------- Area de ChtaBot ---------------------//
document.addEventListener("DOMContentLoaded", () => {

  const chatboxButton = document.getElementById("chatbox-button");
  const chatbox = document.getElementById("chatbox");
  const startChatButton = document.querySelector(".chatbox-start");
  const chatboxBody = document.querySelector(".chatbox-body");
  const faqItems = document.querySelectorAll(".faq-item");
  const searchButton = document.getElementById("chatbox-search");
  const searchContainer = document.getElementById("chatboxSearchContainer");
  const searchInput = document.getElementById("chatboxSearchInput");
  const homeButton = document.getElementById("chatbox-home");
  const faqDetailScreen = document.querySelector('.faq-detail-screen');
  const detailTitle = document.querySelector('.faq-detail-title');
  const detailContent = document.querySelector('.faq-detail-content');
  const faqBackBtn = document.querySelector('.faq-back');

  let chatStarted = false;
  let input, sendBtn, messages, chatInputArea;
  let mediaMenuContainer, mediaMenuButton, closeMediaMenu;
  let currentOpenFAQ = null;
  let selectedFiles = [];
  let selectedEmojis = [];
  
  const contexto = {
    nomeUsuario: null,
    estado: 'AGUARDANDO_NOME',
    ultimaCategoria: null,
    historico: []
  };

//--------------------- Emojis ---------------------//
  const emojiCategoriesData = {
    smileys: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱', '😴', '🤤', '😪', '😵', '🤐', '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕'],
    animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦟', '🦗', '🕷', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🐘', '🦛', '🦏', '🐪', '🐫', '🦒', '🦘', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🦮', '🐕‍🦺', '🐈'],
    food: ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅', '🥔', '🍠', '🥐', '🥯', '🍞', '🥖', '🥨', '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🦴', '🌭', '🍔', '🍟', '🍕', '🫓', '🥪', '🥙', '🧆', '🌮', '🌯', '🫔', '🥗', '🥘', '🫕', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪', '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪'],
    travel: ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '🛴', '🚲', '🛵', '🏍', '🚨', '🚔', '🚍', '🚘', '🚖', '🚡', '🚠', '🚟', '🚃', '🚋', '🚞', '🚝', '🚄', '🚅', '🚈', '🚂', '🚆', '🚇', '🚊', '🚉', '✈️', '🛫', '🛬', '🛩', '💺', '🛰', '🚀', '🛸', '🚁', '🛶', '⛵', '🚤', '🛥', '🛳', '⛴', '🚢', '⚓', '🛟', '🚧', '⛽', '🚏', '🚦', '🚥', '🗺', '🗿', '🗽', '🗼', '🏰', '🏯', '🏟', '🎡', '🎢', '🎠', '⛲', '⛱', '🏖', '🏝', '🏜', '🌋', '⛰', '🏔', '🗻', '🏕', '⛺', '🏠', '🏡'],
    objects: ['⌚', '📱', '📲', '💻', '⌨️', '🖥', '🖨', '🖱', '🖲', '🕹', '🗜', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽', '🎞', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙', '🎚', '🎛', '🧭', '⏱', '⏲', '⏰', '🕰', '⌛', '⏳', '📡', '🔋', '🔌', '💡', '🔦', '🕯', '🪔', '🧯', '🛢', '💸', '💵', '💴', '💶', '💷', '💰', '💳', '💎', '⚖️', '🧰', '🔧', '🔨', '⚒', '🛠', '⛏', '🔩', '⚙️', '🧱', '⛓', '🧲', '🔫', '💣', '🧨', '🪓', '🔪', '🗡', '⚔️', '🛡', '🚬', '⚰️', '⚱️', '🏺', '🔮', '📿', '🧿'],
    symbols: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳', '🈶', '🈚', '🈸', '🈺', '🈷️', '✴️', '🆚', '💮', '🉐', '㊙️', '㊗️', '🈴', '🈵', '🈹', '🈲', '🅰️', '🅱️', '🆎', '🆑', '🅾️', '🆘', '❌', '⭕', '🛑', '⛔', '📛', '🚫', '💯', '💢', '♨️', '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❗', '❕', '❓', '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱', '⚜️', '🔰', '♻️', '✅', '🈯', '💹', '❇️', '✳️', '❎', '🌐', '💠', 'Ⓜ️', '🌀', '💤', '🏧', '🚾', '♿', '🅿️', '🈳', '🈂️']
  };

//--------------------- Inicializacao do ChatBot ---------------------//
  init();

  function init() {

    if (chatboxButton && chatbox) {
      chatboxButton.addEventListener("click", toggleChatbox);
    }
    
    if (startChatButton) startChatButton.addEventListener("click", iniciarChat);
    
    if (homeButton) {
      homeButton.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        voltarParaHomeChat();
      });
    }

    setupFAQEvents();
    setupSearchEvents();
  }

//--------------------- Funcoes do ChatBot ---------------------//
  function toggleChatbox() {
    chatbox.classList.toggle("show");
    
    if (chatbox.classList.contains("show")) {
      const icon = chatboxButton.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-robot');
        icon.classList.add('fa-times');
      }
    } else {
      const icon = chatboxButton.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-robot');
      }
 
      if (mediaMenuContainer && mediaMenuContainer.classList.contains('show')) {
        closeMediaMenuFunc();
      }
    }
  }

  function voltarParaHomeChat() {
    if (faqDetailScreen && faqDetailScreen.style.display !== 'none') {
      closeFAQDetail();
      faqDetailScreen.classList.remove('active');
      setTimeout(() => {
        faqDetailScreen.style.display = 'none';
      }, 300);
    }
    
    if (chatboxBody) {
      if (chatStarted) {
        resetChatToInitialState();
      } else {
        chatboxBody.style.display = 'flex';
      }
    }
    
    if (searchContainer) {
      searchContainer.classList.remove("show");
    }
    
    if (mediaMenuContainer && mediaMenuContainer.classList.contains('show')) {
      closeMediaMenuFunc();
    }
    
    if (searchInput) {
      searchInput.value = "";
      filterFaq("");
    }
  }

  function resetChatToInitialState() {
    document.getElementById('customInteractionBlock')?.remove();
    document.getElementById('sugestoesRelacionadas')?.remove();
    
    if (messages) {
      messages.innerHTML = '';
    }
    
    chatboxBody.innerHTML = `
      <h2 class="chatbox-welcome-title">🤖 Olá! Como podemos ajudar você hoje?</h2>
      <button class="chatbox-start">
        <i class="fa fa-comments" aria-hidden="true"></i>Começar conversa
      </button>
      <div class="faq-section">
        <h4><i class="fa-solid fa-circle-question"></i> FAQ - Perguntas Frequentes</h4>
      </div>`;
    
    chatStarted = false;
    contexto.estado = 'AGUARDANDO_NOME';
    contexto.nomeUsuario = null;
    
    const newStartButton = document.querySelector(".chatbox-start");
    if (newStartButton) {
      newStartButton.addEventListener("click", iniciarChat);
    }
  }

 //--------------------- Funcoes FAQ ---------------------//
  function setupFAQEvents() {
    faqItems.forEach(item => {
      item.addEventListener("click", (e) => {
        if (e.target.closest('.faq-question')) {
          openFAQDetail(item);
        }
      });
    });

    if (faqBackBtn) {
      faqBackBtn.addEventListener('click', voltarParaHome);
    }
  }

  function openFAQDetail(item) {
    if (currentOpenFAQ && currentOpenFAQ !== item) {
      closeFAQDetail();
    }
    
    const content = item.querySelector('.faq-answer');
    const question = item.querySelector('.faq-question span');
    
    if (content && question && faqDetailScreen) {
      currentOpenFAQ = item;
      
      item.classList.add('active');
      
      detailTitle.textContent = question.textContent;
      detailContent.innerHTML = content.innerHTML;
      
      detailContent.classList.add('faq-scrollable-content');
      
      if (chatboxBody) chatboxBody.style.display = 'none';
      
      faqDetailScreen.style.display = 'flex';
      
      setTimeout(() => {
        faqDetailScreen.classList.add('active');
        
        if (detailContent) {
          detailContent.scrollTop = 0;
          checkIfScrollNeeded();
        }
      }, 10);
    }
  }

  function checkIfScrollNeeded() {
    if (!detailContent) return;
    
    const hasScrollbar = detailContent.scrollHeight > detailContent.clientHeight;
    
    if (hasScrollbar) {
      detailContent.classList.add('has-scroll');
      detailContent.addEventListener('scroll', handleFAQScroll);
    } else {
      detailContent.classList.remove('has-scroll');
    }
  }

  function handleFAQScroll() {
    if (!detailContent) return;
    
    if (detailContent.scrollTop > 10) {
      detailContent.classList.add('scrolled');
    } else {
      detailContent.classList.remove('scrolled');
    }
  }

  function closeFAQDetail() {
    if (currentOpenFAQ) {
      currentOpenFAQ.classList.remove('active');
      currentOpenFAQ = null;
    }
    
    if (detailContent) {
      detailContent.removeEventListener('scroll', handleFAQScroll);
    }
  }

  function voltarParaHome() {
    closeFAQDetail();
    
    if (faqDetailScreen) {
      faqDetailScreen.classList.remove('active');
      setTimeout(() => {
        faqDetailScreen.style.display = 'none';
      }, 300);
    }
    
    if (chatboxBody) {
      chatboxBody.style.display = 'flex';
    }
    
    if (searchContainer) {
      searchContainer.classList.remove("show");
    }
    
    if (searchInput) {
      searchInput.value = "";
      filterFaq("");
    }
  }

  function setupSearchEvents() {
    if (searchButton && searchContainer && searchInput) {
      searchButton.addEventListener("click", toggleSearch);
      searchInput.addEventListener("input", e => filterFaq(e.target.value.toLowerCase()));
    }
  }

  function toggleSearch() {
    if (searchContainer && searchInput) {
      searchContainer.classList.toggle("show");
      if (searchContainer.classList.contains("show")) {
        searchInput.focus();
      } else {
        searchInput.value = "";
        filterFaq("");
      }
    }
  }

  function filterFaq(term) {
    faqItems.forEach(item => {
      const span = item.querySelector(".faq-question span");
      const text = span ? span.textContent.toLowerCase() : "";
      item.style.display = text.includes(term) ? "block" : "none";
    });
  }

//--------------------- Iniciar Chat ---------------------//
  function iniciarChat() {
    if (chatStarted) return;
    chatStarted = true;

    chatboxBody.innerHTML = `
      <div class="chat-messages" id="chatMessages">
        <div class="bot-message">
          👋Olá! Sou o <strong>eduThink</strong>, assistente virtual da Edutech, Lda.<br><br>
          Para começarmos nossa conversa, preciso saber como te chamas.<br>
          <em>Por favor, digita apenas o teu nome (exemplo: "Maria" ou "João Silva")</em>
        </div>
      </div>
      <div class="chat-input-area">
        <button class="media-menu-button" id="mediaMenuButton" title="Anexar mídia">
          <i class="fas fa-plus"></i>
        </button>
        <input type="text" id="userInput" placeholder="Digite seu nome aqui..." />
        <button id="sendMessage"><i class="fas fa-paper-plane"></i></button>
      </div>
      
      <!-- NOVO MENU DE MÍDIA COM DESIGN MELHORADO -->
      <div class="media-menu-container" id="mediaMenuContainer">
        <div class="media-menu-header">
          <div class="media-menu-title">Anexar mídia</div>
          <button class="close-media-menu" id="closeMediaMenu">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <!-- PRIMEIRA TELA: OPÇÕES PRINCIPAIS -->
        <div class="media-options-screen" id="mediaOptionsScreen">
          <div class="media-options-grid">
            <button class="media-option-card" data-type="emoji">
              <div class="media-option-icon">
                <i class="fas fa-smile"></i>
              </div>
              <span class="media-option-label">Emojis</span>
            </button>
            <button class="media-option-card" data-type="photo">
              <div class="media-option-icon">
                <i class="fas fa-camera"></i>
              </div>
              <span class="media-option-label">Foto</span>
            </button>
            <button class="media-option-card" data-type="video">
              <div class="media-option-icon">
                <i class="fas fa-video"></i>
              </div>
              <span class="media-option-label">Vídeo</span>
            </button>
            <button class="media-option-card" data-type="file">
              <div class="media-option-icon">
                <i class="fas fa-file"></i>
              </div>
              <span class="media-option-label">Ficheiro</span>
            </button>
            <button class="media-option-card" data-type="audio">
              <div class="media-option-icon">
                <i class="fas fa-microphone"></i>
              </div>
              <span class="media-option-label">Áudio</span>
            </button>
            <button class="media-option-card" data-type="location">
              <div class="media-option-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <span class="media-option-label">Localização</span>
            </button>
          </div>
        </div>
        
        <!-- SEGUNDA TELA: EMOJIS (OCULTA INICIALMENTE) -->
        <div class="content-screen" id="emojiScreen" style="display: none;">
          <div class="screen-header">
            <button class="back-to-menu" data-screen="emojiScreen">
              <i class="fas fa-arrow-left"></i>
              <span>Voltar</span>
            </button>
            <div class="screen-title">Emojis</div>
          </div>
          <div class="emoji-categories-tabs">
            <button class="emoji-tab active" data-category="smileys">😀 Smileys</button>
            <button class="emoji-tab" data-category="animals">🐶 Animais</button>
            <button class="emoji-tab" data-category="food">🍕 Comida</button>
            <button class="emoji-tab" data-category="travel">✈️ Viagem</button>
            <button class="emoji-tab" data-category="objects">💡 Objetos</button>
            <button class="emoji-tab" data-category="symbols">❤️ Símbolos</button>
          </div>
          <div class="emoji-grid-container">
            <div class="emoji-grid" id="emojiGrid"></div>
          </div>
        </div>
        
        <!-- TERCEIRA TELA: ARQUIVOS (OCULTA INICIALMENTE) -->
        <div class="content-screen" id="fileScreen" style="display: none;">
          <div class="screen-header">
            <button class="back-to-menu" data-screen="fileScreen">
              <i class="fas fa-arrow-left"></i>
              <span>Voltar</span>
            </button>
            <div class="screen-title">Enviar Arquivo</div>
          </div>
          <div class="file-upload-container">
            <div class="file-upload-area" id="fileUploadArea">
              <i class="fas fa-cloud-upload-alt"></i>
              <p>Arraste e solte ficheiros aqui</p>
              <span>ou</span>
              <button class="browse-files-btn">Procurar ficheiros</button>
              <input type="file" id="fileInput" multiple style="display: none;" />
            </div>
            <div class="file-info-container" id="fileInfoContainer"></div>
            <div class="selected-files" id="selectedFiles"></div>
          </div>
        </div>
        
        <!-- QUARTA TELA: FOTO/VIDEO (OCULTA INICIALMENTE) -->
        <div class="content-screen" id="mediaScreen" style="display: none;">
          <div class="screen-header">
            <button class="back-to-menu" data-screen="mediaScreen">
              <i class="fas fa-arrow-left"></i>
              <span>Voltar</span>
            </button>
            <div class="screen-title">Foto/Vídeo</div>
          </div>
          <div class="media-options-buttons">
            <button class="media-action-btn" id="takePhotoBtn">
              <i class="fas fa-camera"></i>
              <span>Tirar Foto</span>
            </button>
            <button class="media-action-btn" id="uploadMediaBtn">
              <i class="fas fa-upload"></i>
              <span>Carregar do Dispositivo</span>
            </button>
            <input type="file" id="mediaInput" accept="image/*,video/*" multiple style="display: none;" />
          </div>
        </div>
        
        <!-- QUINTA TELA: ÁUDIO (OCULTA INICIALMENTE) -->
        <div class="content-screen" id="audioScreen" style="display: none;">
          <div class="screen-header">
            <button class="back-to-menu" data-screen="audioScreen">
              <i class="fas fa-arrow-left"></i>
              <span>Voltar</span>
            </button>
            <div class="screen-title">Áudio</div>
          </div>
          <div class="audio-options">
            <button class="audio-action-btn" id="recordAudioBtn">
              <i class="fas fa-microphone"></i>
              <span>Gravar Áudio</span>
            </button>
            <button class="audio-action-btn" id="uploadAudioBtn">
              <i class="fas fa-upload"></i>
              <span>Carregar Áudio</span>
            </button>
            <input type="file" id="audioInput" accept="audio/*" style="display: none;" />
          </div>
        </div>
      </div>`;

    setupChatElements();
    setupMediaMenu();
  }

  function setupChatElements() {
    input = document.getElementById("userInput");
    sendBtn = document.getElementById("sendMessage");
    messages = document.getElementById("chatMessages");
    chatInputArea = document.querySelector(".chat-input-area");
    
    if (input) {
      input.focus();
      input.addEventListener("keypress", e => e.key === "Enter" && enviarMensagem());
    }
    
    if (sendBtn) sendBtn.addEventListener("click", enviarMensagem);
  }

  function enviarMensagem() {
    const texto = input.value.trim();
    if (!texto) return;

    if (contexto.estado === 'NORMAL' || contexto.estado === 'AGUARDANDO_NOME') {
      input.value = "";
    }
    
    addUserMsg(texto);
    processarMensagem(texto);

    if (contexto.estado === 'NORMAL') {
      input.placeholder = "Digite sua mensagem...";
    }
  }

  function addUserMsg(msg) {
    if (messages) {
      messages.innerHTML += `<div class="user-message">${escapeHtml(msg)}</div>`;
      scrollToBottom();
    }
  }

  function addBotMsg(msg) {
    if (messages) {
      messages.innerHTML += `<div class="bot-message">${msg}</div>`;
      scrollToBottom();
    }
  }

  function scrollToBottom() {
    if (messages) {
      messages.scrollTo({ top: messages.scrollHeight, behavior: "smooth" });
    }
  }

  function disableChatInput(shouldDisable) {
    if (!input || !sendBtn || !chatInputArea) return;
    
    if (shouldDisable) {
      input.setAttribute('disabled', 'true');
      sendBtn.setAttribute('disabled', 'true');
      chatInputArea.style.display = 'none';
    } else {
      input.removeAttribute('disabled');
      sendBtn.removeAttribute('disabled');
      chatInputArea.style.display = 'flex';
      input.placeholder = contexto.estado === 'NORMAL' ? "Digite sua mensagem..." : "Digite seu nome...";
    }
  }

//--------------------- Interatividade ---------------------//
  function injectCustomInteraction(htmlContent) {
    let block = document.getElementById('customInteractionBlock');
    
    if (!block) {
      block = document.createElement('div');
      block.id = 'customInteractionBlock';
      block.className = 'bot-message custom-interaction-block';
      messages.appendChild(block);
    }
    
    block.innerHTML = htmlContent;
    scrollToBottom();
  }

  function displaySatisfactionButtons() {
    disableChatInput(true);
    const nome = contexto.nomeUsuario ? `<b>${contexto.nomeUsuario}</b>` : "amigo(a)";
    
    injectCustomInteraction(`
      <p>${nome}, ficou satisfeito com as informações que eu forneci?</p>
      <div class="chat-buttons">
        <button class="chat-button-option" onclick="window.__eduthink_process_message('SIM_SATISFACAO');">Sim</button>
        <button class="chat-button-option" onclick="window.__eduthink_process_message('NAO_SATISFACAO');">Não</button>
      </div>
    `);
    
    contexto.estado = 'AGUARDANDO_SATISFACAO';
  }

  function displaySupportButtons() {
    document.getElementById('customInteractionBlock')?.remove();
    document.getElementById('sugestoesRelacionadas')?.remove();
    
    injectCustomInteraction(`
      <p>Posso encaminhar a sua questão para um assistente de suporte?</p>
      <div class="chat-buttons">
        <button class="chat-button-option" onclick="window.__eduthink_process_message('SIM_ENCAMINHAR');">Sim</button>
        <button class="chat-button-option" onclick="window.__eduthink_process_message('NAO_ENCAMINHAR');">Não</button>
      </div>
    `);
    
    contexto.estado = 'AGUARDANDO_ENCAMINHAMENTO';
  }

  function displaySupportForm() {
    document.getElementById('customInteractionBlock')?.remove();
    document.getElementById('sugestoesRelacionadas')?.remove();
    
    injectCustomInteraction(`
      <p>Por favor, preencha o formulário abaixo. Um assistente entrará em contacto brevemente.</p>
      <div class="support-form">
        <input type="text" id="formNome" placeholder="Seu Nome" value="${contexto.nomeUsuario || ''}" required>
        <input type="email" id="formEmail" placeholder="Seu E-mail" required>
        <textarea id="formMensagem" placeholder="Sua Mensagem" rows="3" required></textarea>
        <button class="chat-button-send" onclick="window.submitSupportForm();">Enviar Formulário</button>
      </div>
    `);
    
    contexto.estado = 'EXIBINDO_FORMULARIO';
  }

  window.submitSupportForm = () => {
    const nome = document.getElementById('formNome')?.value || '';
    const email = document.getElementById('formEmail')?.value || '';
    const mensagem = document.getElementById('formMensagem')?.value || '';
    
    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    
    document.getElementById('customInteractionBlock')?.remove();
    addBotMsg(`✅ Formulário enviado com sucesso! Nossa equipe entrará em contato em breve.`);
    
    contexto.estado = 'NORMAL';
    disableChatInput(false);
    
    setTimeout(() => {
      displayCategoriaSugestoes();
    }, 500);
  };

//--------------------- Processar Mensagens ---------------------//
  function processarMensagem(texto) {
    let fraseNorm = normalizeKey(texto);
    const isButtonCommand = [
      'SIM_SATISFACAO',
      'NAO_SATISFACAO',
      'SIM_ENCAMINHAR',
      'NAO_ENCAMINHAR'
    ].includes(texto);

    if (!isButtonCommand) {
      contexto.historico.push(fraseNorm);
    }

    if (isButtonCommand) {
      handleButtonCommand(texto);
      return;
    }

    if (contexto.estado === 'AGUARDANDO_NOME') {
      const nomeMatch = texto.match(/(?:(?:ola|olá|oi)(?:\s+eu)?\s+(?:sou|chamo|meu\s+nome\s+é)|sou|eu\s+sou)\s*(\w+(?:\s+\w+)*)/i);
      
      let nomeEncontrado;

      if (nomeMatch && nomeMatch[1]) {
        nomeEncontrado = nomeMatch[1].trim();
      } else {
        const palavras = texto.split(/\s+/).filter(Boolean);
        nomeEncontrado = palavras.length > 0 ? palavras.join(" ") : null;
      }

      if (nomeEncontrado && nomeEncontrado.length > 0) {
        const palavrasNome = nomeEncontrado.split(/\s+/);
        const nomeFormatado = palavrasNome.map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(" ");
        
        contexto.nomeUsuario = nomeFormatado;
        contexto.estado = 'NORMAL';
        
        addBotMsg(`👋 Bem-vindo, <b>${contexto.nomeUsuario}</b>! Como posso ajudar-te hoje?`);
        displayCategoriaSugestoes();
        return;
      }
      
      addBotMsg("Por favor, digite seu nome para continuarmos.");
      return;
    }

    if (contexto.estado === 'NORMAL') {
      if (/\b(ola|olá|oi|bom dia|Good morning|Good afternoon|Good evening|boa tarde|boa noite)\b/.test(fraseNorm)) {
        let saudacao = "👋 Olá! Que bom ver-te por aqui!";
        if (contexto.nomeUsuario) {
          saudacao = `👋 Olá, <b>${contexto.nomeUsuario}</b>!`;
        }
        addBotMsg(`${saudacao} Como posso ajudar hoje?`);
        displayCategoriaSugestoes();
        return;
      }

      if (/\b(obrigad(?:o|a|os|as)?|ok(?:ay|e)?|valeu|vlw|thanks?|thx|ty|thank\s+you|foi\s+um\s+prazer|beleza|blz|grato|agradecido)\b/gi.test(fraseNorm)) {
        let resposta = "🤖 Fico feliz em ajudar! Sempre um prazer responder às tuas questões.";
        if (contexto.nomeUsuario) {
          resposta = `🤖 Fico feliz em ajudar, <b>${contexto.nomeUsuario}</b>! Sempre que precisar, estarei por aqui. Volte sempre! Será um prazer te atender novamente. 😊`;
        }
        addBotMsg(resposta);
        displaySatisfactionButtons();
        return;
      }

      handleNormalMessageComBancoDados(texto, fraseNorm);
    }
  }

  function handleButtonCommand(command) {
    switch (command) {
      case 'SIM_SATISFACAO':
        document.getElementById('customInteractionBlock')?.remove();
        document.getElementById('sugestoesRelacionadas')?.remove();
        addBotMsg(`🎉 Fico feliz em ter ajudado! Se precisar de mais alguma coisa, estou aqui.`);
        contexto.estado = 'NORMAL';
        disableChatInput(false);
        
        setTimeout(() => {
          displayCategoriaSugestoes();
        }, 500);
        break;
        
      case 'NAO_SATISFACAO':
        displaySupportButtons();
        break;
        
      case 'SIM_ENCAMINHAR':
        displaySupportForm();
        break;
        
      case 'NAO_ENCAMINHAR':
        document.getElementById('customInteractionBlock')?.remove();
        document.getElementById('sugestoesRelacionadas')?.remove();
        addBotMsg(`Entendi. Fico à disposição para outras dúvidas! 😊`);
        contexto.estado = 'NORMAL';
        disableChatInput(false);
        
        setTimeout(() => {
          displayCategoriaSugestoes();
        }, 500);
        break;
    }
  }

  function handleNormalMessageComBancoDados(textoOriginal, fraseNorm) {
    const respostaInteligente = buscarRespostaInteligente(textoOriginal);
    
    if (respostaInteligente.encontrou) {
      document.getElementById('customInteractionBlock')?.remove();
      document.getElementById('sugestoesRelacionadas')?.remove();
      
      addBotMsg(respostaInteligente.html);
      
      setTimeout(() => {
        mostrarSugestoesRelacionadas(respostaInteligente.titulo);
      }, 300);
      
      return;
    }
    
    handleNormalMessageOriginal(textoOriginal, fraseNorm);
  }

  function handleNormalMessageOriginal(textoOriginal, fraseNorm) {
    document.getElementById('customInteractionBlock')?.remove();
    document.getElementById('sugestoesRelacionadas')?.remove();
    
    // Lógica simplificada de fallback
    if (fraseNorm.includes("produtos") || fraseNorm.includes("equipamentos")) {
      addBotMsg(`📦 <b>Nossos Produtos:</b><br>Laptops, Desktops, Tablets educacionais, Softwares institucionais e personalizados.`);
    } else if (fraseNorm.includes("servicos") || fraseNorm.includes("serviços")) {
      addBotMsg(`💡 <b>Nossos Serviços:</b><br>Suporte técnico, Consultoria, Formação em tecnologias educativas, Desenvolvimento de software.`);
    } else if (fraseNorm.includes("contactos") || fraseNorm.includes("telefone") || fraseNorm.includes("email")) {
      addBotMsg(`📞 <b>Contactos:</b><br>Telefone: +258 83 335 5955 | Email: info@edutech.co.mz | Atendimento: Seg-Sex 08h00-17h00<br><br>💬 <b>WhatsApp Suporte:</b> +258 83 335 5955`);
    } else {
      const respostaNaoEntendi = contexto.nomeUsuario
        ? `🤔 Desculpe <b>${contexto.nomeUsuario}</b>, não entendi sua pergunta. Pode reformular ou clicar em uma das opções abaixo:`
        : `🤔 Desculpe, não entendi sua pergunta. Pode reformular ou clicar em uma das opções abaixo:`;
      
      addBotMsg(respostaNaoEntendi);
    }
    
    setTimeout(() => {
      displayCategoriaSugestoes();
    }, 300);
  }

  function displayCategoriaSugestoes() {
    const existingBlock = document.getElementById('customInteractionBlock');
    const existingSugestoes = document.getElementById('sugestoesRelacionadas');
    if (existingBlock) existingBlock.remove();
    if (existingSugestoes) existingSugestoes.remove();
    
    if (!messages) return;
    
    const block = document.createElement('div');
    block.id = 'customInteractionBlock';
    block.className = 'bot-message custom-interaction-block';
    block.innerHTML = `
      <p><b>Escolha uma categoria:</b></p>
      <div class="chat-buttons">
        <button class="chat-button-option" onclick="window.__eduthink_process_message('produtos')">📦 Produtos</button>
        <button class="chat-button-option" onclick="window.__eduthink_process_message('serviços')">💡 Serviços</button>
        <button class="chat-button-option" onclick="window.__eduthink_process_message('contactos')">📞 Contactos</button>
        <button class="chat-button-option" onclick="window.__eduthink_process_message('localização')">📍 Localização</button>
        <button class="chat-button-option" onclick="window.__eduthink_process_message('suporte')">🛠️ Suporte</button>
        <button class="chat-button-option" onclick="window.__eduthink_process_message('horário')">🕒 Horário</button>
        <button class="chat-button-option" onclick="window.__eduthink_process_message('preços')">💰 Preços</button>
        <button class="chat-button-option" onclick="window.__eduthink_process_message('parceiros')">🤝 Parceiros</button>
        <button class="chat-button-option" onclick="window.__eduthink_process_message('site')">🌐 Website</button>
        <button class="chat-button-option" onclick="window.__eduthink_process_message('blog')">📚 Blog</button>
        <button class="chat-button-option" onclick="window.__eduthink_process_message('vagas')">💼 Vagas</button>
        <button class="chat-button-option" onclick="window.__eduthink_process_message('quem somos')">🏢 Quem Somos</button>
        <button class="chat-button-option" onclick="window.__eduthink_process_message('missão')">🎯 Missão</button>
        <button class="chat-button-option" onclick="window.__eduthink_process_message('visão')">🔭 Visão</button>
        <button class="chat-button-option" onclick="window.__eduthink_process_message('valores')">⚖️ Valores</button>
      </div>
    `;
    
    messages.appendChild(block);
    scrollToBottom();
  }

//--------------------- File Inserter ---------------------//
  function setupMediaMenu() {
    mediaMenuContainer = document.getElementById('mediaMenuContainer');
    mediaMenuButton = document.getElementById('mediaMenuButton');
    closeMediaMenu = document.getElementById('closeMediaMenu');

    if (mediaMenuButton && mediaMenuContainer) {
      mediaMenuButton.addEventListener('click', toggleMediaMenu);
    }

    if (closeMediaMenu) {
      closeMediaMenu.addEventListener('click', closeMediaMenuFunc);
    }

    document.addEventListener('click', (e) => {
      if (mediaMenuContainer && mediaMenuContainer.classList.contains('show') && 
          !mediaMenuContainer.contains(e.target) && 
          e.target !== mediaMenuButton &&
          !e.target.closest('.media-menu-button')) {
        closeMediaMenuFunc();
      }
    });
    
    setupMediaOptions();
  }

  function toggleMediaMenu() {
    if (mediaMenuContainer) {
      mediaMenuContainer.classList.toggle('show');
      
      if (mediaMenuContainer.classList.contains('show')) {
       
        showScreen('mediaOptionsScreen');
        adjustMenuPosition();
      }
    }
  }

  function adjustMenuPosition() {
    if (!mediaMenuContainer) return;
    
    const chatboxRect = chatbox.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    
    let left = 30;
    let bottom = 70;
    
    if (chatboxRect.left + mediaMenuContainer.offsetWidth > viewportWidth - 20) {
      left = 'auto';
      mediaMenuContainer.style.right = '20px';
      mediaMenuContainer.style.left = 'auto';
    } else {
      mediaMenuContainer.style.left = left + 'px';
      mediaMenuContainer.style.right = 'auto';
    }
    
    mediaMenuContainer.style.bottom = bottom + 'px';
    mediaMenuContainer.style.top = 'auto';
  }

  function closeMediaMenuFunc() {
    if (mediaMenuContainer) {
      mediaMenuContainer.classList.remove('show');
  
      showScreen('mediaOptionsScreen');
    }
  }

  function setupMediaOptions() {

    const mediaOptionCards = document.querySelectorAll('.media-option-card');
    mediaOptionCards.forEach(card => {
      card.addEventListener('click', function() {
        const type = this.getAttribute('data-type');
        openMediaSection(type);
      });
    });
    

    const backButtons = document.querySelectorAll('.back-to-menu');
    backButtons.forEach(button => {
      button.addEventListener('click', function() {
        const screen = this.getAttribute('data-screen');
        showScreen('mediaOptionsScreen');
      });
    });
    
    const emojiTabs = document.querySelectorAll('.emoji-tab');
    emojiTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        emojiTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        loadEmojis(category);
      });
    });
    
    setupFileUpload();
    
    setupMediaButtons();
    
    setupAudioButtons();
  }

  function openMediaSection(type) {
    switch(type) {
      case 'emoji':
        showScreen('emojiScreen');
        loadEmojis('smileys');
        break;
        
      case 'photo':
      case 'video':
        showScreen('mediaScreen');
        break;
        
      case 'file':
        showScreen('fileScreen');
        break;
        
      case 'audio':
        showScreen('audioScreen');
        break;
        
      case 'location':
        sendLocationMessage();
        closeMediaMenuFunc();
        break;
    }
  }

  function showScreen(screenId) {

    document.querySelectorAll('.media-options-screen, .content-screen').forEach(screen => {
      screen.style.display = 'none';
    });
    
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
      targetScreen.style.display = 'block';
    }
  }

  function loadEmojis(category) {
    const emojiGrid = document.getElementById('emojiGrid');
    if (!emojiGrid) return;
    
    emojiGrid.innerHTML = '';
    
    const emojis = emojiCategoriesData[category] || [];
    
    const columns = 8;
    const emojisParaMostrar = emojis.slice(0, columns * 5); // 5 linhas
    
    emojiGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    
    emojisParaMostrar.forEach(emoji => {
      const button = document.createElement('button');
      button.className = 'emoji-grid-item';
      button.textContent = emoji;
      button.title = emoji;
      button.setAttribute('aria-label', `emoji ${emoji}`);
      
      button.style.fontSize = '24px';
      button.style.padding = '8px';
      button.style.borderRadius = '8px';
      button.style.background = 'transparent';
      button.style.border = 'none';
      button.style.cursor = 'pointer';
      button.style.transition = 'all 0.2s';
      
      button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#f0f2f5';
        button.style.transform = 'scale(1.1)';
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = 'transparent';
        button.style.transform = 'scale(1)';
      });
      
      button.addEventListener('click', () => {
        selectEmoji(emoji);
      });
      
      emojiGrid.appendChild(button);
    });
  }

  function selectEmoji(emoji) {
    if (input) {
      input.value += emoji;
      input.focus();
      closeMediaMenuFunc();
    }
  }

  function setupFileUpload() {
    const fileUploadArea = document.getElementById('fileUploadArea');
    const browseFilesBtn = document.querySelector('.browse-files-btn');
    const fileInput = document.getElementById('fileInput');
    const fileInfoContainer = document.getElementById('fileInfoContainer');
    const selectedFilesContainer = document.getElementById('selectedFiles');
    
    if (fileUploadArea && fileInput) {
      fileUploadArea.addEventListener('click', () => {
        fileInput.click();
      });
      
      fileUploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        fileUploadArea.style.borderColor = '#4285f4';
        fileUploadArea.style.background = '#f0f7ff';
      });
      
      fileUploadArea.addEventListener('dragleave', () => {
        fileUploadArea.style.borderColor = '#ddd';
        fileUploadArea.style.background = '#f8f9fa';
      });
      
      fileUploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        fileUploadArea.style.borderColor = '#ddd';
        fileUploadArea.style.background = '#f8f9fa';
        
        const files = e.dataTransfer.files;
        handleFiles(files);
      });
    }
    
    if (browseFilesBtn && fileInput) {
      browseFilesBtn.addEventListener('click', () => {
        fileInput.click();
      });
    }
    
    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        const files = e.target.files;
        handleFiles(files);
      });
    }
    
    function handleFiles(files) {
      selectedFiles = Array.from(files);
      updateFileInfo();
      updateSelectedFiles();
    }
    
    function updateFileInfo() {
      if (!fileInfoContainer) return;
      
      fileInfoContainer.innerHTML = '';
      
      if (selectedFiles.length > 0) {
        const info = document.createElement('div');
        info.className = 'file-info-message';
        info.innerHTML = `<p><i class="fas fa-info-circle"></i> ${selectedFiles.length} ficheiro(s) selecionado(s)</p>`;
        fileInfoContainer.appendChild(info);
      }
    }
    
    function updateSelectedFiles() {
      if (!selectedFilesContainer) return;
      
      selectedFilesContainer.innerHTML = '';
      
      selectedFiles.forEach((file, index) => {
        const fileItem = document.createElement('div');
        fileItem.className = 'selected-file-item';
        
        const icon = document.createElement('i');
        if (file.type.startsWith('image/')) {
          icon.className = 'fas fa-image';
        } else if (file.type.startsWith('video/')) {
          icon.className = 'fas fa-video';
        } else if (file.type.startsWith('audio/')) {
          icon.className = 'fas fa-volume-up';
        } else {
          icon.className = 'fas fa-file';
        }
        
        const fileName = document.createElement('span');
        fileName.className = 'selected-file-name';
        fileName.textContent = file.name.length > 20 ? file.name.substring(0, 20) + '...' : file.name;
        
        const fileSize = document.createElement('span');
        fileSize.className = 'selected-file-size';
        const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
        fileSize.textContent = `${sizeInMB} MB`;
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-selected-file';
        removeBtn.innerHTML = '<i class="fas fa-times"></i>';
        removeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          removeFile(index);
        });
        
        fileItem.appendChild(icon);
        fileItem.appendChild(fileName);
        fileItem.appendChild(fileSize);
        fileItem.appendChild(removeBtn);
        
        selectedFilesContainer.appendChild(fileItem);
      });
      
      if (selectedFiles.length > 0) {
        const sendButton = document.createElement('button');
        sendButton.className = 'send-files-btn';
        sendButton.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Arquivos';
        sendButton.addEventListener('click', sendSelectedFiles);
        
        selectedFilesContainer.appendChild(sendButton);
      }
    }
    
    function removeFile(index) {
      selectedFiles.splice(index, 1);
      updateFileInfo();
      updateSelectedFiles();
    }
    
    function sendSelectedFiles() {
      if (selectedFiles.length === 0) return;

      const fileNames = selectedFiles.map(file => file.name).join(', ');
      const message = `📎 Anexei ${selectedFiles.length} ficheiro(s): ${fileNames}`;
      
      if (input) {
        input.value = message;
        enviarMensagem();
        closeMediaMenuFunc();
        
        selectedFiles = [];
        updateFileInfo();
        updateSelectedFiles();
      }
    }
  }

  function setupMediaButtons() {
    const takePhotoBtn = document.getElementById('takePhotoBtn');
    const uploadMediaBtn = document.getElementById('uploadMediaBtn');
    const mediaInput = document.getElementById('mediaInput');
    
    if (takePhotoBtn) {
      takePhotoBtn.addEventListener('click', () => {

        alert('Funcionalidade de câmera será implementada em breve!');
      });
    }
    
    if (uploadMediaBtn && mediaInput) {
      uploadMediaBtn.addEventListener('click', () => {
        mediaInput.click();
      });
    }
    
    if (mediaInput) {
      mediaInput.addEventListener('change', (e) => {
        const files = e.target.files;
        if (files.length > 0) {

          const fileNames = Array.from(files).map(file => file.name).join(', ');
          const message = `🖼️ Enviando mídia: ${fileNames}`;
          
          if (input) {
            input.value = message;
            enviarMensagem();
            closeMediaMenuFunc();
          }
        }
      });
    }
  }

  function setupAudioButtons() {
    const recordAudioBtn = document.getElementById('recordAudioBtn');
    const uploadAudioBtn = document.getElementById('uploadAudioBtn');
    const audioInput = document.getElementById('audioInput');
    
    if (recordAudioBtn) {
      recordAudioBtn.addEventListener('click', () => {
     
        alert('Funcionalidade de gravação de áudio será implementada em breve!');
      });
    }
    
    if (uploadAudioBtn && audioInput) {
      uploadAudioBtn.addEventListener('click', () => {
        audioInput.click();
      });
    }
    
    if (audioInput) {
      audioInput.addEventListener('change', (e) => {
        const files = e.target.files;
        if (files.length > 0) {
          const file = files[0];
          const message = `🎤 Enviando áudio: ${file.name}`;
          
          if (input) {
            input.value = message;
            enviarMensagem();
            closeMediaMenuFunc();
          }
        }
      });
    }
  }

  function sendLocationMessage() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const locationMessage = `📍 Minha localização: https://maps.google.com/?q=${lat},${lon}`;
          
          if (input) {
            input.value = locationMessage;
            enviarMensagem();
          }
        },
        (error) => {
          addBotMsg('❌ Não foi possível obter a localização. Verifique as permissões do navegador.');
        }
      );
    } else {
      addBotMsg('❌ Seu navegador não suporta geolocalização.');
    }
  }

//--------------------- Funcoes Utilitarios ---------------------//
  function normalizeKey(s) {
    if (!s) return "";
    return s.toString().toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9\s]/g, "")
      .trim();
  }

  function escapeHtml(text) {
    if (!text) return "";
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return text.replace(/[&<>"']/g, c => map[c]);
  }

//--------------------- Exportar Funcoes Globais ---------------------//
  window.__eduthink_process_message = processarMensagem;
  window.submitSupportForm = submitSupportForm;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && chatbox.classList.contains('show')) {
      chatbox.classList.remove('show');
      if (mediaMenuContainer && mediaMenuContainer.classList.contains('show')) {
        closeMediaMenuFunc();
      }
    }
  });
  
  window.addEventListener('resize', () => {
    if (mediaMenuContainer && mediaMenuContainer.classList.contains('show')) {
      adjustMenuPosition();
    }
  });
});
