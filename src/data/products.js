import { getAssetUrl } from '../utils/asset.js';

// Informações Comerciais Confirmadas — Doces do Guga
export const BRAND = {
  name: "Doces do Guga",
  tagline: "Doceria Artesanal em São Paulo",
  whatsapp: "(11) 96977-5104",
  whatsappRaw: "5511969775104",
  instagramUser: "doces_doguga",
  instagramUrl: "https://www.instagram.com/doces_doguga/",
  address: "Rua Eugênio Falk, 530",
  neighborhood: "Cursino / Jardim da Saúde",
  cityState: "São Paulo - SP",
  fullAddress: "Rua Eugênio Falk, 530 - Cursino, São Paulo - SP",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Eug%C3%AAnio+Falk+530+Cursino+S%C3%A3o+Paulo+SP",
  deliveryPartners: ["WhatsApp Próprio", "Retirada no Local", "99Food (histórico)"],
  categories: [
    { id: "todos", label: "Cardápio Completo" },
    { id: "brigadeiros", label: "Brigadeiros Gourmet" },
    { id: "especiais", label: "Doces Especiais & Duplas" },
    { id: "potes", label: "Bolos de Pote & Sobremesas" },
    { id: "eventos", label: "Festas & Revenda" }
  ]
};

// Gerador de links para WhatsApp com mensagem personalizada e codificada
export const getWhatsAppLink = (customMessage = "") => {
  const defaultText = "Olá, Doces do Guga! Vim pelo site e gostaria de fazer uma encomenda dos seus doces artesanais.";
  const text = customMessage ? encodeURIComponent(customMessage) : encodeURIComponent(defaultText);
  return `https://wa.me/${BRAND.whatsappRaw}?text=${text}`;
};

export const PRODUCTS = [
  {
    id: "caixa-4-brigadeiros",
    category: "brigadeiros",
    name: "Caixa Degustação de Brigadeiros Gourmet (4 Unidades)",
    tag: "Favorito da Casa",
    shortDescription: "Quatro sabores consagrados em uma embalagem blister cristal que preserva a textura fresca.",
    flavors: [
      "Brigadeiro Tradicional Belga com granulado split nobre",
      "Brigadeiro de Leite Ninho com roseta generosa de Nutella cremosa",
      "Beijinho Tradicional com flocos de coco fresco selecionado",
      "Brigadeiro Gourmet coberto com confeitos crocantes coloridos"
    ],
    priceText: "Sob consulta no WhatsApp",
    image: getAssetUrl("assets/brigadeiros-box-4.jpg"),
    badge: "Foto Real do Produto",
    highlights: ["Preparo diário 100% fresco", "Embalagem individual protetora", "Ideal para presente ou sobremesa individual"],
    orderMessage: "Olá! Gostaria de consultar os valores e disponibilidade da Caixa com 4 Brigadeiros Gourmet da Doces do Guga."
  },
  {
    id: "dupla-especial-gourmet",
    category: "especiais",
    name: "Dupla Especial Gourmet (Ninho com Nutella & Tradicional)",
    tag: "Mais Vendido",
    shortDescription: "Doces generosos em formato especial, com acabamento impecável e recheio marcante.",
    flavors: [
      "Doce Gourmet de Leite Ninho com acabamento artístico em onda de Nutella",
      "Doce Gourmet Tradicional coberto por granulado nobre de chocolate ao leite"
    ],
    priceText: "Sob consulta no WhatsApp",
    image: getAssetUrl("assets/dupla-especial.jpg"),
    badge: "Foto Real do Produto",
    highlights: ["Textura aveludada incomparável", "Combinação clássica que nunca erra", "Embalagem duo prática"],
    orderMessage: "Olá! Vi a Dupla Especial Gourmet no site e gostaria de saber o valor e pedir uma unidade."
  },
  {
    id: "bolo-de-pote-chocolate",
    category: "potes",
    name: "Bolo de Pote Artesanal de Chocolate Supremo",
    tag: "Cremoso & Macio",
    shortDescription: "Massa fofinha e molhadinha de chocolate artesanal, intercalada com camadas abundantes de brigadeiro de colher.",
    flavors: [
      "Bolo de cacau artesanal molhadinho",
      "Brigadeiro cremoso de ponto suave",
      "Cobertura farta de granulado split de chocolate nobre"
    ],
    priceText: "Sob consulta no WhatsApp",
    image: getAssetUrl("assets/bolo-pote.jpg"),
    badge: "Foto Real do Produto",
    highlights: ["Camadas generosas", "Pote lacrado e higienizado", "Para comer de colherada sem moderação"],
    orderMessage: "Olá! Gostaria de encomendar o Bolo de Pote Artesanal de Chocolate da Doces do Guga. Quais os tamanhos e valores?"
  },
  {
    id: "morango-cravejado-especial",
    category: "especiais",
    name: "Morango Cravejado & Sensações de Morango",
    tag: "Sensação Viral",
    shortDescription: "A febre artesanal: morangos frescos e suculentos envolvidos no brigadeiro artesanal da casa, com casquinha crocante e acabamento especial.",
    flavors: [
      "Morangos frescos e higienizados",
      "Brigadeiro gourmet aveludado",
      "Casquinha crocante de chocolate nobre com textura especial"
    ],
    priceText: "Sob consulta no WhatsApp",
    image: getAssetUrl("assets/dupla-especial.jpg"), // Foto ilustrativa da linha especial artesanal
    badge: "Especialidade da Confeitaria",
    highlights: ["Frutas frescas do dia", "Equilíbrio perfeito entre o doce e a fruta", "Edições limitadas conforme safra"],
    orderMessage: "Olá! Gostaria de saber a disponibilidade dos doces com Morango (Morango Cravejado / Coxinha de Morango) hoje!"
  },
  {
    id: "cento-festas-eventos",
    category: "eventos",
    name: "Doces para Festas, Eventos & Aniversários",
    tag: "Celebrações",
    shortDescription: "Transforme a sua mesa de doces em uma experiência inesquecível para os seus convidados com brigadeiros padronizados e deliciosos.",
    flavors: [
      "Cento ou meio cento de brigadeiros tradicionais",
      "Brigadeiro de Ninho, Beijinho, Bicho de Pé e sabores especiais",
      "Forminhas personalizadas sob consulta"
    ],
    priceText: "Orçamento sob medida no WhatsApp",
    image: getAssetUrl("assets/brigadeiros-box-4.jpg"),
    badge: "Encomendas Programadas",
    highlights: ["Pontualidade garantida", "Apresentação impecável", "Ideal para festas infantis, casamentos e empresas"],
    orderMessage: "Olá! Estou organizando um evento/festa e gostaria de solicitar um orçamento para encomenda de doces em quantidade."
  },
  {
    id: "revenda-parcerias",
    category: "eventos",
    name: "Doces do Guga para Revenda & Parcerias Comerciais",
    tag: "Parcerias B2B",
    shortDescription: "Tenha produtos artesanais de alta saída em seu café, empório, lanchonete ou restaurante no Cursino e região.",
    flavors: [
      "Bolos de pote com rotulagem personalizada",
      "Caixinhas duo e individuais para vitrine refrigerada",
      "Margem de lucro atrativa e reposição programada"
    ],
    priceText: "Condições especiais para revendedores",
    image: getAssetUrl("assets/bolo-pote.jpg"),
    badge: "Revenda Confirmada na Bio",
    highlights: ["Produtos que encantam clientes", "Entrega programada em São Paulo", "Apoio comercial direto"],
    orderMessage: "Olá! Tenho um comércio / empresa e tenho interesse em revender os produtos da Doces do Guga. Como funcionam as condições?"
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Caixa com 4 Brigadeiros Gourmet",
    subtitle: "Variedade de texturas e coberturas finas",
    image: getAssetUrl("assets/brigadeiros-box-4.jpg"),
    category: "Brigadeiros"
  },
  {
    id: 2,
    title: "Dupla Especial Ninho com Nutella e Tradicional",
    subtitle: "Roseta de Nutella e acabamento nobre",
    image: getAssetUrl("assets/dupla-especial.jpg"),
    category: "Especiais"
  },
  {
    id: 3,
    title: "Bolo de Pote Artesanal de Chocolate",
    subtitle: "Massa úmida, brigadeiro cremoso e muito granulado",
    image: getAssetUrl("assets/bolo-pote.jpg"),
    category: "Potes"
  },
  {
    id: 4,
    title: "Identidade Visual Oficial Doces do Guga",
    subtitle: "Adesivo e selo oficial de qualidade",
    image: getAssetUrl("assets/logo.jpg"),
    category: "Marca"
  },
  {
    id: 5,
    title: "Perfil Oficial no Instagram",
    subtitle: "Confeitaria artesanal no Cursino - São Paulo",
    image: getAssetUrl("assets/bio-instagram.png"),
    category: "Comunidade"
  }
];

export const FAQS = [
  {
    question: "Onde a Doces do Guga está localizada?",
    answer: "Estamos localizados na Rua Eugênio Falk, 530, no bairro Cursino (região do Jardim da Saúde / Saúde), em São Paulo - SP. O endereço é ponto de referência para atendimento e retiradas combinadas previamente."
  },
  {
    question: "Como posso consultar os preços e fazer um pedido?",
    answer: "Como nossa produção é 100% artesanal e personalizada, os preços, disponibilidade de pronta-entrega e orçamentos para festas são informados com rapidez e atenção pelo nosso WhatsApp oficial: (11) 96977-5104. Basta clicar nos botões do site!"
  },
  {
    question: "A confeitaria realiza entregas (delivery)?",
    answer: "Sim! Realizamos entregas na região de São Paulo combinadas diretamente pelo WhatsApp. Além disso, você também pode optar por retirar sua encomenda pessoalmente na Rua Eugênio Falk, 530."
  },
  {
    question: "Vocês aceitam encomendas para festas, aniversários e revenda?",
    answer: "Com certeza! A Doces do Guga atende tanto pedidos individuais para o dia a dia quanto encomendas em grande escala para festas, casamentos, eventos corporativos e revenda para comércios locais parceiros."
  },
  {
    question: "Qual é a antecedência recomendada para fazer encomendas?",
    answer: "Para consumo do dia (pronta-entrega), consulte a disponibilidade pelo WhatsApp. Para festas, eventos ou quantidades maiores de cento de doces, recomendamos solicitar com pelo menos 3 a 7 dias de antecedência para garantir a sua data."
  },
  {
    question: "Quais são as opções de sabores disponíveis?",
    answer: "Trabalhamos com sabores clássicos como Brigadeiro Belga Tradicional, Beijinho de Coco, Ninho com Nutella, brigadeiro com confeitos crocantes, doces especiais com morango e bolos de pote. Consulte os sabores frescos do dia no WhatsApp!"
  }
];
