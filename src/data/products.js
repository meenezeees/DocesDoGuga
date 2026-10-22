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
  deliveryPartners: ["WhatsApp Próprio", "Retirada no Local", "Encomendas & Festas"],
  founderImage: getAssetUrl("assets/518229172_18017070758740234_7685810548808780422_n.jpg"),
  categories: [
    { id: "todos", label: "Cardápio Completo" },
    { id: "brigadeiros", label: "Brigadeiros & Caixas" },
    { id: "morangos", label: "Morangos do Amor & Cravejados" },
    { id: "cones", label: "Cones, Brownies & Trufados" },
    { id: "potes", label: "Bolos de Pote & Sobremesas" },
    { id: "bolos", label: "Bolos, Festas & Eventos" }
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
    shortDescription: "Quatro sabores consagrados em uma embalagem blister cristal que preserva a maciez e o frescor de cada docinho.",
    flavors: [
      "Brigadeiro Tradicional Belga com granulado split nobre",
      "Brigadeiro de Leite Ninho com roseta generosa de Nutella",
      "Beijinho Tradicional com flocos de coco selecionado",
      "Brigadeiro Gourmet coberto com confeitos crocantes coloridos"
    ],
    priceText: "Sob consulta no WhatsApp",
    image: getAssetUrl("assets/brigadeiros-box-4.jpg"),
    images: [
      getAssetUrl("assets/brigadeiros-box-4.jpg"),
      getAssetUrl("assets/520207049_18017156366740234_5508755726970475589_n.jpg"),
      getAssetUrl("assets/dupla-especial.jpg")
    ],
    badge: "Foto Real",
    highlights: ["Preparo diário 100% fresco", "Embalagem individual protetora", "Ideal para presente ou sobremesa"],
    orderMessage: "Olá! Gostaria de consultar os valores e disponibilidade da Caixa com 4 Brigadeiros Gourmet da Doces do Guga."
  },
  {
    id: "dupla-especial-gourmet",
    category: "brigadeiros",
    name: "Dupla & Trio Especial Gourmet (Ninho c/ Nutella, Churros & Paçoca)",
    tag: "Mais Vendido",
    shortDescription: "Doces generosos em embalagens práticas de 2 ou 3 unidades, com rosetas de Nutella, Doce de Leite e coberturas artesanais.",
    flavors: [
      "Leite Ninho com acabamento artístico de Nutella pura",
      "Churros Gourmet com roseta generosa de Doce de Leite cremoso",
      "Brigadeiro de Paçoca e Brigadeiro Tradicional ao Leite"
    ],
    priceText: "Sob consulta no WhatsApp",
    image: getAssetUrl("assets/dupla-especial.jpg"),
    images: [
      getAssetUrl("assets/dupla-especial.jpg"),
      getAssetUrl("assets/520207049_18017156366740234_5508755726970475589_n.jpg")
    ],
    badge: "Foto Real",
    highlights: ["Textura aveludada incomparável", "Rosetas recheadas no capricho", "Embalagem prática para o dia a dia"],
    orderMessage: "Olá! Vi as Duplas e Trios de Brigadeiros Gourmet no site e gostaria de saber os sabores disponíveis hoje!"
  },
  {
    id: "morango-do-amor-cravejado",
    category: "morangos",
    name: "Morango do Amor & Morango Cravejado Artesanal",
    tag: "Sensação Viral",
    shortDescription: "Morangos frescos e suculentos envolvidos por uma camada generosa de brigadeiro branco cremoso, finalizados com calda crocante ou cristais caramelizados.",
    flavors: [
      "Morango Cravejado com cristais crocantes vermelhos e brigadeiro de Ninho",
      "Morango do Amor Tradicional com casquinha fina e crocante de caramelo vermelho",
      "Morango selecionado do dia com equilíbrio perfeito entre acidez e doçura"
    ],
    priceText: "Sob consulta no WhatsApp",
    image: getAssetUrl("assets/790512626_18069302783740234_6695528223466475880_n.jpg"),
    images: [
      getAssetUrl("assets/790512626_18069302783740234_6695528223466475880_n.jpg"),
      getAssetUrl("assets/503444415_18017858681740234_6786135216542445181_n.jpg"),
      getAssetUrl("assets/522627934_1047474277145339_3034613202250455861_n.jpg")
    ],
    badge: "Foto Real",
    highlights: ["Frutas frescas selecionadas", "Casquinha super crocante", "Sucesso absoluto de pedidos"],
    orderMessage: "Olá! Gostaria de saber a disponibilidade e o valor do Morango do Amor e do Morango Cravejado!"
  },
  {
    id: "cones-trufados-artesanais",
    category: "cones",
    name: "Cones Trufados Artesanais Super Recheados",
    tag: "Super Recheado",
    shortDescription: "Casquinha crocante banhada em chocolate por dentro e por fora, recheada até o topo com cremes artesanais e coberturas variadas.",
    flavors: [
      "Cone Trufado de Maracujá com Brigadeiro Cremoso",
      "Cone Trufado de Leite Ninho e Chocolate ao Leite",
      "Cone Trufado de Paçoca, Castanha e Granulado Nobre",
      "Opção de Cesta/Caixa Presenteável com Cones Sortidos"
    ],
    priceText: "Sob consulta no WhatsApp",
    image: getAssetUrl("assets/517974445_18016526873740234_1194488664687342246_n.jpg"),
    images: [
      getAssetUrl("assets/517974445_18016526873740234_1194488664687342246_n.jpg"),
      getAssetUrl("assets/497010284_18009542582740234_1733344401028597342_n.jpg"),
      getAssetUrl("assets/517875155_18016526402740234_8207012078684265356_n.jpg"),
      getAssetUrl("assets/518739289_18016526678740234_3026563431322804955_n.jpg")
    ],
    badge: "Foto Real",
    highlights: ["Recheio cremoso da ponta à base", "Casquinha blindada com chocolate", "Disponível avulso ou em caixa presente"],
    orderMessage: "Olá! Quero encomendar os Cones Trufados da Doces do Guga. Quais sabores estão disponíveis?"
  },
  {
    id: "bolos-de-pote-colecao",
    category: "potes",
    name: "Bolos de Pote Artesanais (Chocolate, Cenoura, Ninho c/ Morango & Coco)",
    tag: "Cremoso & Macio",
    shortDescription: "Massas caseiras fofinhas e molhadinhas intercaladas com camadas fartas de recheios artesanais para comer de colherada.",
    flavors: [
      "Chocolate Supremo com Brigadeiro de Colher e Granulado Nobre",
      "Bolo de Cenoura Fofinho com Camadas Generosas de Brigadeiro",
      "Leite Ninho Cremoso com Geleia Caseira de Morango",
      "Beijinho & Coco Cremoso com Flocos Selecionados"
    ],
    priceText: "Sob consulta no WhatsApp",
    image: getAssetUrl("assets/bolo-pote.jpg"),
    images: [
      getAssetUrl("assets/bolo-pote.jpg"),
      getAssetUrl("assets/545198545_18023698964740234_772588665020894520_n.jpg"),
      getAssetUrl("assets/524741686_18018750530740234_295422967821256385_n.jpg"),
      getAssetUrl("assets/520527568_18017302313740234_5349084622667742954_n.jpg")
    ],
    badge: "Foto Real",
    highlights: ["Camadas fartas de recheio", "Pote lacrado e higienizado", "Vários sabores artesanais"],
    orderMessage: "Olá! Gostaria de encomendar Bolos de Pote da Doces do Guga. Quais sabores você tem disponíveis hoje?"
  },
  {
    id: "sobremesas-no-pote-bombom-aberto",
    category: "potes",
    name: "Sobremesas no Pote: Surpresa de Uva, Sensação de Morango & Casadinho",
    tag: "Sobremesa de Colher",
    shortDescription: "Combinações irresistíveis de frutas frescas (uvas verdes sem semente ou morangos), cremes aveludados de Ninho, Bicho de Pé e ganache de chocolate.",
    flavors: [
      "Bombom Aberto de Uva Verde com Creme de Ninho e Ganache",
      "Pote Sensação de Morango com Bicho de Pé e Chocolate",
      "Pote Duo Casadinho com Ninho, Brigadeiro e Fios de Nutella"
    ],
    priceText: "Sob consulta no WhatsApp",
    image: getAssetUrl("assets/496479939_18009542243740234_1999382976708726864_n.jpg"),
    images: [
      getAssetUrl("assets/496479939_18009542243740234_1999382976708726864_n.jpg"),
      getAssetUrl("assets/536779108_18021219833740234_3596863429237112997_n.jpg"),
      getAssetUrl("assets/526744208_18018847238740234_5499409937042120749_n.jpg"),
      getAssetUrl("assets/536808257_18021219767740234_4642616486330047754_n.jpg")
    ],
    badge: "Foto Real",
    highlights: ["Frutas frescas e selecionadas", "Creme aveludado na medida certa", "Perfeito para sobremesa após o almoço"],
    orderMessage: "Olá! Gostaria de consultar a disponibilidade das Sobremesas no Pote (Surpresa de Uva / Morango / Casadinho)."
  },
  {
    id: "brownies-pao-de-mel-bombons",
    category: "cones",
    name: "Brownies Decorados, Coração Trufado & Bombons Caseiros",
    tag: "Chocolate Nobre",
    shortDescription: "Delícias banhadas em chocolate e decoradas artesanalmente: de corações trufados recheados a bandejas de mini brownies para eventos.",
    flavors: [
      "Mini Brownies Gourmet cobertos com rosetas de brigadeiro branco e preto",
      "Coração Trufado / Pão de Mel banhado no chocolate com recheio cremoso",
      "Brownie banhado com castanhas e morango fresco",
      "Bombons Trufados Artesanais embalados individualmente"
    ],
    priceText: "Sob consulta no WhatsApp",
    image: getAssetUrl("assets/825269877_18073031888740234_6133581483071309080_n.jpg"),
    images: [
      getAssetUrl("assets/825269877_18073031888740234_6133581483071309080_n.jpg"),
      getAssetUrl("assets/547965110_18024378827740234_534623752970344522_n.jpg"),
      getAssetUrl("assets/527886656_18019407251740234_3326886742314598721_n.jpg"),
      getAssetUrl("assets/526697390_18018971303740234_1472815905194471_n.jpg"),
      getAssetUrl("assets/651791500_18044410265740234_5474357857021882677_n.jpg")
    ],
    badge: "Foto Real",
    highlights: ["Ótima opção para festas e lembrancinhas", "Casquinha de chocolate e interior úmido", "Feito sob encomenda"],
    orderMessage: "Olá! Tenho interesse nos Brownies, Corações Trufados e Bombons da Doces do Guga. Pode me passar os valores?"
  },
  {
    id: "bolos-festivos-vulcao-fatias",
    category: "bolos",
    name: "Bolos no Acetato para Festas, Mini Vulcão & Fatias Generosas",
    tag: "Comemorações",
    shortDescription: "Bolos confeitados no acetato com laço para aniversários, mini bolos vulcão transbordando cobertura e fatias recheadas de dar água na boca.",
    flavors: [
      "Bolo no Acetato de Chocolate com Mousse e KitKat",
      "Bolo Festivo decorado com Brigadeiros Gourmet no topo",
      "Mini Bolo Vulcão de Leite Ninho com Nutella e Morango",
      "Fatias de Bolo Vulcão de Cenoura com Brigadeiro e Bolo de Chocolate"
    ],
    priceText: "Sob consulta no WhatsApp",
    image: getAssetUrl("assets/756858129_18063250409740234_3171982933394442438_n.webp"),
    images: [
      getAssetUrl("assets/756858129_18063250409740234_3171982933394442438_n.webp"),
      getAssetUrl("assets/640406084_18043177277740234_2988968060107083942_n.jpg"),
      getAssetUrl("assets/764800628_18064756715740234_7122916844842049510_n.webp"),
      getAssetUrl("assets/548030228_18024379868740234_7007698629393613307_n.jpg"),
      getAssetUrl("assets/547955119_18024377027740234_8161161698078999012_n.jpg")
    ],
    badge: "Foto Real",
    highlights: ["Acabamento impecável no acetato", "Massa caseira super fofinha", "Tamanhos para família ou eventos"],
    orderMessage: "Olá! Gostaria de consultar valores e sabores de Bolos para Festa e Mini Vulcão da Doces do Guga."
  },
  {
    id: "cento-docinhos-festas-eventos",
    category: "bolos",
    name: "Cento de Docinhos Gourmet para Festas, Eventos & Casamentos",
    tag: "Festas & Eventos",
    shortDescription: "Caixas com cento ou meio cento de brigadeiros padronizados, boleados à mão e dispostos em forminhas nas cores da sua comemoração.",
    flavors: [
      "Brigadeiro Belga, Beijinho de Coco e Bicho de Pé com carimbo de coração",
      "Amendoim com roseta de Nutella e Leite Ninho com Nutella",
      "Docinhos coloridos com Confetes/M&M's para festas infantis",
      "Forminhas personalizadas para batizados, formaturas e eventos"
    ],
    priceText: "Orçamento sob medida no WhatsApp",
    image: getAssetUrl("assets/567330691_18029035319740234_2912624652265857453_n.webp"),
    images: [
      getAssetUrl("assets/567330691_18029035319740234_2912624652265857453_n.webp"),
      getAssetUrl("assets/527598150_18019508312740234_513722122601753937_n.jpg"),
      getAssetUrl("assets/753648431_18063043229740234_2694051166338345641_n.webp"),
      getAssetUrl("assets/797597294_18069917678740234_5076735105397314756_n.webp"),
      getAssetUrl("assets/489578951_18006647405740234_5300290484381443940_n.webp")
    ],
    badge: "Foto Real",
    highlights: ["Padronização impecável", "Cores de forminhas combinando com a festa", "Atendimento para festas e revenda"],
    orderMessage: "Olá! Estou organizando uma festa/evento e gostaria de solicitar um orçamento de cento de docinhos com a Doces do Guga."
  },
  {
    id: "ovos-de-colher-kits-especiais",
    category: "cones",
    name: "Trio de Ovos de Colher & Kits Sazonais Presenteáveis",
    tag: "Edições & Presentes",
    shortDescription: "Caixas especiais com trio de ovos de colher recheados com brigadeiro gourmet, Ninho com Nutella, Oreo, Maracujá e Prestígio.",
    flavors: [
      "Ninho com Nutella e Brigadeiro Gourmet",
      "Creme de Maracujá com Brigadeiro e Oreo Cremoso",
      "Prestígio Artesanal com Coco Fresco"
    ],
    priceText: "Sob consulta no WhatsApp",
    image: getAssetUrl("assets/657349815_18046794452740234_446531898218502549_n.webp"),
    images: [
      getAssetUrl("assets/657349815_18046794452740234_446531898218502549_n.webp"),
      getAssetUrl("assets/656269748_1485846776498750_5695137112169096726_n.jpg")
    ],
    badge: "Foto Real",
    highlights: ["Caixa visor elegante para presente", "Casca de chocolate nobre", "Recheios fartos de colher"],
    orderMessage: "Olá! Gostaria de consultar sobre os Kits Presenteáveis e Ovos de Colher da Doces do Guga."
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Caixa de Cento de Docinhos Gourmet Sortidos",
    subtitle: "Brigadeiro Belga, Bicho de Pé carimbado, Amendoim c/ Nutella e Beijinho",
    image: getAssetUrl("assets/567330691_18029035319740234_2912624652265857453_n.webp"),
    category: "Festas & Centos"
  },
  {
    id: 2,
    title: "Morango Cravejado Artesanal",
    subtitle: "Morango fresco envolvido em brigadeiro branco e cristais crocantes",
    image: getAssetUrl("assets/790512626_18069302783740234_6695528223466475880_n.jpg"),
    category: "Morangos"
  },
  {
    id: 3,
    title: "Cones Trufados em 5 Sabores",
    subtitle: "Paçoca, Brigadeiro, Chocolate ao Leite, Ninho e Castanha",
    image: getAssetUrl("assets/517974445_18016526873740234_1194488664687342246_n.jpg"),
    category: "Cones & Trufados"
  },
  {
    id: 4,
    title: "Bolo Festivo no Acetato com Brigadeiros",
    subtitle: "Camadas de creme e chocolate decoradas com brigadeiros gourmet e laço",
    image: getAssetUrl("assets/756858129_18063250409740234_3171982933394442438_n.webp"),
    category: "Bolos & Fatias"
  },
  {
    id: 5,
    title: "Morango do Amor Cortado ao Meio",
    subtitle: "Interior suculento com brigadeiro cremoso e casquinha crocante de caramelo",
    image: getAssetUrl("assets/503444415_18017858681740234_6786135216542445181_n.jpg"),
    category: "Morangos"
  },
  {
    id: 6,
    title: "Bombom Aberto de Uva no Pote",
    subtitle: "Uvas verdes sem semente, creme de Leite Ninho e ganache de chocolate",
    image: getAssetUrl("assets/496479939_18009542243740234_1999382976708726864_n.jpg"),
    category: "Potes & Sobremesas"
  },
  {
    id: 7,
    title: "Bolo no Acetato com Mousse e KitKat",
    subtitle: "Massa de chocolate úmida, mousse aerado e pedaços de KitKat",
    image: getAssetUrl("assets/640406084_18043177277740234_2988968060107083942_n.jpg"),
    category: "Bolos & Fatias"
  },
  {
    id: 8,
    title: "Cone Trufado de Maracujá com Chocolate",
    subtitle: "Recheio cremoso transbordando do início ao fim da casquinha",
    image: getAssetUrl("assets/497010284_18009542582740234_1733344401028597342_n.jpg"),
    category: "Cones & Trufados"
  },
  {
    id: 9,
    title: "Mini Bolo Vulcão de Ninho com Nutella",
    subtitle: "Cobertura abundante de Leite Ninho, fios de Nutella e morango fresco",
    image: getAssetUrl("assets/764800628_18064756715740234_7122916844842049510_n.webp"),
    category: "Bolos & Fatias"
  },
  {
    id: 10,
    title: "Bandeja de Mini Brownies Gourmet para Festas",
    subtitle: "Brownies decorados com rosetas de brigadeiro branco e ao leite",
    image: getAssetUrl("assets/825269877_18073031888740234_6133581483071309080_n.jpg"),
    category: "Festas & Centos"
  },
  {
    id: 11,
    title: "Trio de Mini Ovos de Colher Gourmet",
    subtitle: "Maracujá com Brigadeiro, Ninho com Nutella e Oreo",
    image: getAssetUrl("assets/657349815_18046794452740234_446531898218502549_n.webp"),
    category: "Cones & Trufados"
  },
  {
    id: 12,
    title: "Cento de Docinhos em Forminhas Rosas",
    subtitle: "Brigadeiro tradicional, Beijinho, Ninho e Ninho com Nutella",
    image: getAssetUrl("assets/527598150_18019508312740234_513722122601753937_n.jpg"),
    category: "Festas & Centos"
  },
  {
    id: 13,
    title: "Bolo de Pote de Cenoura com Brigadeiro",
    subtitle: "Camadas generosas de bolo de cenoura fofinho e brigadeiro gourmet",
    image: getAssetUrl("assets/545198545_18023698964740234_772588665020894520_n.jpg"),
    category: "Potes & Sobremesas"
  },
  {
    id: 14,
    title: "Bolo de Pote de Ninho com Geleia de Morango",
    subtitle: "Equilíbrio suave do creme de Leite Ninho com geleia artesanal de morango",
    image: getAssetUrl("assets/524741686_18018750530740234_295422967821256385_n.jpg"),
    category: "Potes & Sobremesas"
  },
  {
    id: 15,
    title: "Fatia de Bolo Vulcão de Cenoura",
    subtitle: "Massa caseira macia coberta por calda farta de brigadeiro",
    image: getAssetUrl("assets/548030228_18024379868740234_7007698629393613307_n.jpg"),
    category: "Bolos & Fatias"
  },
  {
    id: 16,
    title: "Caixa Degustação com 4 Brigadeiros Gourmet",
    subtitle: "Belga, Ninho com Nutella, Beijinho de Coco e Confetes",
    image: getAssetUrl("assets/brigadeiros-box-4.jpg"),
    category: "Brigadeiros"
  },
  {
    id: 17,
    title: "Trio Gourmet de Churros e Paçoca",
    subtitle: "Brigadeiros finalizados com roseta de Doce de Leite",
    image: getAssetUrl("assets/520207049_18017156366740234_5508755726970475589_n.jpg"),
    category: "Brigadeiros"
  },
  {
    id: 18,
    title: "Cento de Docinhos Coloridos para Aniversário",
    subtitle: "Brigadeiros com Confetes e Leite Ninho em forminhas vibrantes",
    image: getAssetUrl("assets/753648431_18063043229740234_2694051166338345641_n.webp"),
    category: "Festas & Centos"
  },
  {
    id: 19,
    title: "Sobremesa no Pote Duo Casadinho",
    subtitle: "Creme de Ninho, Brigadeiro, bolo de chocolate e fios de Nutella",
    image: getAssetUrl("assets/536779108_18021219833740234_3596863429237112997_n.jpg"),
    category: "Potes & Sobremesas"
  },
  {
    id: 20,
    title: "Cesta Presenteável de Cones Trufados",
    subtitle: "Cones embalados com fitas coloridas e selo oficial Doces do Guga",
    image: getAssetUrl("assets/518739289_18016526678740234_3026563431322804955_n.jpg"),
    category: "Cones & Trufados"
  },
  {
    id: 21,
    title: "Docinhos Personalizados para Eventos",
    subtitle: "Forminhas especiais com acabamento dourado para celebrações",
    image: getAssetUrl("assets/797597294_18069917678740234_5076735105397314756_n.webp"),
    category: "Festas & Centos"
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
    question: "Quais produtos fazem parte do cardápio da Doces do Guga?",
    answer: "Produzimos Brigadeiros Gourmet (em caixas de 2, 3, 4 unidades e centos para festas), Morango do Amor e Morango Cravejado, Cones Trufados recheados, Bolos de Pote (Chocolate, Cenoura com Brigadeiro, Ninho com Morango, Coco), Sobremesas no Pote (Surpresa de Uva, Sensação, Casadinho), Mini Brownies, Corações Trufados, Bombons e Bolos Festivos no Acetato."
  },
  {
    question: "A confeitaria realiza entregas (delivery)?",
    answer: "Sim! Realizamos entregas na região de São Paulo combinadas diretamente pelo WhatsApp. Além disso, você também pode optar por retirar sua encomenda pessoalmente na Rua Eugênio Falk, 530."
  },
  {
    question: "Vocês aceitam encomendas para festas, aniversários e revenda?",
    answer: "Com certeza! A Doces do Guga atende tanto pedidos individuais para o dia a dia quanto encomendas em grande escala (centos de docinhos, bandejas de brownies e bolos no acetato) para festas, casamentos, eventos corporativos e revenda para comércios parceiros."
  },
  {
    question: "Qual é a antecedência recomendada para fazer encomendas?",
    answer: "Para consumo do dia (pronta-entrega), consulte a disponibilidade pelo WhatsApp. Para festas, bolos confeitados ou quantidades maiores de cento de doces, recomendamos solicitar com antecedência para garantir a sua data e personalização das forminhas."
  }
];
