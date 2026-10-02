// Conteúdo da página da Ana Sampaio Bahia.
// Para atualizar a página, basta editar este ficheiro. Todo o texto deve estar em português de Portugal
// (Acordo Ortográfico de 1990): o `npm run build` corre o validador de português e falha se encontrar erros.

export const perfil = {
  nome: 'Ana Sampaio Bahia',
  iniciais: 'AS',
  profissao: 'Psicóloga',
  cedulaOPP: '23399',
  localizacao: 'Porto · Santo Tirso',
  email: 'anasampaiobahia@gmail.com',
  // Colar aqui o link do Google Forms quando estiver criado. Enquanto estiver vazio, a página mostra
  // um aviso de «formulário disponível em breve» e o email.
  formularioContactoUrl: '',
  // Fotografias: colocar os ficheiros em `public/img/` e indicar aqui o caminho (por exemplo, 'img/ana.jpg').
  // Enquanto estiverem vazios, a página mostra um espaço reservado com as iniciais.
  fotos: {
    retrato: '',
    secundaria: '',
  },
  inicioDaCarreira: 2012,
  resumo:
    'Acompanha adultos, adolescentes, casais e famílias, com especial atenção à parentalidade e aos primeiros anos de vida. Dá consultas no Porto, em Santo Tirso e online.',
  lema: 'O que sei? Onde está a necessidade? Como posso ajudar?',
};

export const destaques = [
  { icone: '🎓', texto: 'Mestrado em Psicologia · Universidade do Porto' },
  { icone: '🌱', texto: 'Formação em Terapia Sistémica e Familiar' },
  { icone: '📍', texto: 'Porto · Santo Tirso · Online' },
];

export const areas = [
  {
    icone: '🧭',
    titulo: 'Consulta psicológica de adultos',
    texto:
      'Um espaço para compreender e enfrentar dificuldades emocionais, momentos de mudança, ansiedade, cansaço ou questões nas relações.',
  },
  {
    icone: '🌿',
    titulo: 'Consulta psicológica de adolescentes',
    texto:
      'Acompanhamento de jovens nas questões próprias desta fase — identidade, relações, escola e autonomia —, em articulação com a família sempre que faz sentido.',
  },
  {
    icone: '🤝',
    titulo: 'Terapia familiar e de casal',
    texto:
      'Uma abordagem sistémica, que olha para a família e para o casal como um todo, para melhorar a comunicação e ajudar a resolver conflitos.',
  },
  {
    icone: '👪',
    titulo: 'Aconselhamento parental',
    texto:
      'Apoio a mães e pais nos desafios de educar, desde os primeiros meses até à adolescência, com base na parentalidade positiva e na vinculação.',
  },
  {
    icone: '🤰',
    titulo: 'Saúde mental na gravidez e no pós-parto',
    texto:
      'Acompanhamento num período de grandes mudanças para a mãe, o bebé e toda a família, desde a preparação para o nascimento até aos primeiros meses.',
  },
  {
    icone: '📋',
    titulo: 'Avaliação psicológica de crianças e adolescentes',
    texto:
      'Avaliação psicológica e do desenvolvimento, com relatório e orientações claras para a família e, quando necessário, para a escola.',
  },
];

export const abordagem = [
  'A Ana trabalha numa perspetiva sistémica: cada pessoa é compreendida no contexto das suas relações — a família, o casal, a escola, o trabalho. Na consulta, procura criar um espaço seguro e próximo, onde seja possível perceber o que está a acontecer e encontrar, em conjunto, caminhos concretos de mudança.',
  'À formação de base juntou formação em terapia familiar, terapia de aceitação e compromisso, parentalidade e vinculação e no modelo Touchpoints, dedicado ao desenvolvimento das crianças e à relação com os pais.',
];

export const locais = [
  {
    cidade: 'Porto',
    nome: 'ID Clinics',
    morada: 'Rua do Marechal Saldanha, 99 · 4150-025 Porto',
    mapa: 'https://www.google.com/maps/search/?api=1&query=ID+Clinics+Rua+do+Marechal+Saldanha+99+Porto',
  },
  {
    cidade: 'Santo Tirso',
    nome: 'Gabinete de Psicologia das Termas das Caldas da Saúde',
    morada: 'Caldas da Saúde · Santo Tirso',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Termas+das+Caldas+da+Sa%C3%BAde+Santo+Tirso',
  },
  {
    cidade: 'Online',
    nome: 'Consultas por videochamada',
    morada: 'Para quem está longe ou prefere a comodidade de casa.',
    mapa: '',
  },
];

export const percurso = [
  {
    periodo: 'Desde 2026',
    local: 'ID Clinics · Porto',
    texto: 'Clínica privada: consulta psicológica de adultos e adolescentes, terapia familiar e de casal e aconselhamento parental.',
  },
  {
    periodo: 'Desde 2023',
    local: 'Gabinete de Psicologia das Termas das Caldas da Saúde · Santo Tirso',
    texto: 'Consulta psicológica de adultos e adolescentes, terapia familiar e de casal e aconselhamento parental.',
  },
  {
    periodo: 'Desde 2022',
    local: 'Associação Vida Norte',
    texto:
      'Acompanhamento de mães, bebés e famílias em situação de vulnerabilidade. Criou e coordena os projetos Mum on CV, Parentalidade Com Vida e Pré-Natal Psicológico.',
  },
  {
    periodo: '2016 – 2022',
    local: 'ASAS · Santo Tirso',
    texto:
      'Acompanhamento de jovens dos 12 aos 21 anos e das suas famílias em contexto de acolhimento: avaliação psicológica, planos de intervenção individual e programas de competências em grupo. Coordenou o projeto GruA (Grupo de Apoio à Autonomia) e orientou estágios de Psicologia.',
  },
  {
    periodo: '2014 – 2015',
    local: 'Mundos de Vida',
    texto: 'Psicóloga no Centro de Desenvolvimento Integral e no Serviço de Apoio à Família, na área do acolhimento familiar de crianças e jovens.',
  },
  {
    periodo: '2012 – 2013',
    local: 'Colégio das Escravas do Sagrado Coração de Jesus · Lisboa',
    texto:
      'Coordenou o gabinete de psicologia: acompanhamento individual de alunos, apoio psicoeducativo e projetos de desenvolvimento de competências para o pré-escolar e o 1.º ciclo.',
  },
];

export const formacaoAcademica = [
  {
    periodo: '2006 – 2011',
    titulo: 'Mestrado Integrado em Psicologia',
    instituicao: 'Faculdade de Psicologia e de Ciências da Educação da Universidade do Porto',
    texto:
      'Área de Psicologia do Comportamento Desviante e da Justiça. Dissertação sobre empoderamento familiar, aprovada com 18 valores e distinção. Um ano do mestrado feito na Universidade Autónoma de Barcelona.',
  },
];

export const formacaoComplementar = [
  {
    periodo: 'Desde 2023',
    titulo: 'Formação em Intervenção Sistémica e Familiar (360 h)',
    instituicao: 'Sociedade Portuguesa de Terapia Familiar',
  },
  {
    periodo: '2025 – 2026',
    titulo: 'Curso Intensivo em Touchpoints (30 h)',
    instituicao: 'Fundação Brazelton/Gomes-Pedro',
  },
  {
    periodo: '2025',
    titulo: 'Parentalidade e Vinculação — DROPI (25 h)',
    instituicao: 'Associação Unificar',
  },
  {
    periodo: '2024',
    titulo: 'Certificação de Profissionais de Saúde Neurocompatível (32 h)',
    instituicao: 'Movimento Neurocompatível',
  },
  {
    periodo: '2023',
    titulo: 'Skills4Parenting+ — intervenção psicológica com crianças em situação de adversidade (15 h)',
    instituicao: 'Escola de Psicologia da Universidade do Minho',
  },
  {
    periodo: '2022',
    titulo: 'Terapia de Aceitação e Compromisso (8 h)',
    instituicao: 'CPF · Centro de Psicologia e Formação',
  },
  {
    periodo: '2017',
    titulo: 'Pós-Graduação em Avaliação Psicológica de Crianças e Adolescentes (153 h)',
    instituicao: 'MDC · Psicologia e Formação',
  },
];

export const outrasFormacoes =
  'Formação em proteção de crianças e jovens, acolhimento residencial, intervenção terapêutica com famílias e comportamentos aditivos (Ordem dos Psicólogos Portugueses, Universidade do Porto, Segurança Social, 2010 – 2021) e formação pedagógica de formadores (110 h).';

export const projetos = [
  {
    periodo: 'Desde 2019',
    titulo: 'Tempo para Pais',
    texto: 'Projeto de aproximação entre a escola e a família, com encontros para pais.',
  },
  {
    periodo: 'Desde 2022',
    titulo: 'Mum on CV, Parentalidade Com Vida e Pré-Natal Psicológico',
    texto: 'Projetos da Associação Vida Norte dedicados à gravidez, à parentalidade positiva e ao apoio às mães.',
  },
  {
    periodo: '2016 – 2022',
    titulo: 'GruA · Grupo de Apoio à Autonomia',
    texto: 'Grupo de preparação para a vida autónoma de jovens em acolhimento, na ASAS.',
  },
];

export const escrita = {
  colaboracoes: [
    {
      periodo: 'Desde 2023',
      titulo: 'Revista Mensageiro',
      texto: 'Cronista na secção Família e Espiritualidade.',
    },
    {
      periodo: '2008 – 2016',
      titulo: 'Essejota.net',
      texto: 'Cronista e editora no site de espiritualidade, cultura e atualidade dos Jesuítas em Portugal, que deu origem ao Ponto SJ.',
    },
  ],
  artigos: [
    {
      titulo: 'Sobre a amizade',
      data: '2022-04-11',
      dataLegivel: '11 abr. 2022',
      fonte: 'Ponto SJ · Opinião',
      resumo: 'O que faz uma amizade durar: reciprocidade, constância e a certeza de que o outro está presente, mesmo quando o contacto é raro.',
      url: 'https://pontosj.pt/opiniao/sobre-a-amizade/',
    },
  ],
};

export const voluntariado = [
  {
    periodo: 'Desde 2010',
    titulo: 'A’Corda · Associação de Solidariedade Social',
    texto: 'Criou e dinamiza o plano de formação de voluntários, sobre o desenvolvimento das crianças e jovens e o impacto do trauma.',
  },
  {
    periodo: '2012 – 2019',
    titulo: 'Leigos para o Desenvolvimento',
    texto: 'Formadora de voluntários em autoconhecimento, relações interpessoais e comunicação.',
  },
  {
    periodo: '2005 – 2013',
    titulo: 'Campinácios',
    texto: 'Organização e animação de acampamentos de férias de dez dias, com cerca de 40 participantes, e de atividades ao longo do ano.',
  },
];
