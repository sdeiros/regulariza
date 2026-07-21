// ============================================================
// CONFIGURAÇÃO CENTRAL DO SITE — Regulariza Visa
// Edite aqui: data do workshop, preço, checkout, fotos e Instagram.
// ============================================================

export const site = {
  nome: 'Regulariza Visa',
  titulo: 'Método Estética Blindada — Regulariza Visa',
  descricao:
    'O passo a passo para regularizar seu estabelecimento de estética na Vigilância Sanitária. Workshop ao vivo com quem foi fiscal da VIGILÂNCIA SANITÁRIA por 25 anos.',
  url: 'https://regularizavisa.com.br',
  // >>> INSTAGRAM — troque pelo @ certo <<<
  instagram: 'https://instagram.com/regularizavisa',
};

// ============================================================
// NAVEGAÇÃO — hoje o site é só a página de vendas, então fica vazia.
// Quando o site crescer, basta adicionar itens aqui que o header
// já renderiza tudo (e vira menu hambúrguer no mobile):
//   { rotulo: 'Serviços', href: '/servicos' },
//   { rotulo: 'Blog', href: '/blog' },
//   { rotulo: 'Contato', href: '/contato' },
// ============================================================
export const nav: { rotulo: string; href: string }[] = [];

export const workshop = {
  // >>> ATUALIZE A DATA AQUI (texto exibido) <<<
  data: '23/07',
  horario: '20h00',
  formato: '100% online',
  // >>> DATA/HORA REAL para a contagem regressiva (fuso de Brasília) <<<
  dataISO: '2026-07-23T20:00:00-03:00',
};

export const oferta = {
  precoDe: 'R$ 49,90',
  precoPor: 'R$ 19,90',
  // >>> LINK DE CHECKOUT (Hotmart) <<<
  checkoutUrl: 'https://pay.hotmart.com/L106039840O?sck=orbt-vst-8cRJesDF3kxj_juPksTR&bid=1784128321347',
};

// >>> TEXTO DO BOTÃO COMPARTILHAR (vai junto com o link do site) <<<
export const compartilhar = {
  titulo: 'Workshop Estética Blindada — Regulariza Visa',
  texto:
    'Sua clínica passaria numa inspeção da VIGILÂNCIA SANITÁRIA hoje? 👀 Workshop com quem foi fiscal da Vigilância Sanitária por 25 anos, ensinando o passo a passo da regularização. Olha isso:',
};

// >>> FOTOS — substitua pelas definitivas depois (podem ficar em /public) <<<
export const fotos = {
  hero: 'https://img.imageboss.me/orbitpages/width/900/withoutEnlargement:true/sites/527676/2026/05/MG_6080-1-scaled-1-1.jpg',
  equipe:
    'https://img.imageboss.me/orbitpages/width/900/withoutEnlargement:true/sites/527676/2025/04/MG_0503-Foto-folder-1-scaled-1.jpg',
};
