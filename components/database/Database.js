export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};

export const Items = [
  {
    id: 1,
    category: 'product',
    productName: 'Fones de ouvido sem fio Bluetooth MI Super Bass',
    productPrice: 1799,
    description:
      'Até 20 horas de duração da bateria | Baixo super poderoso | Driver dinâmico de 40 mm | Protetores de ouvido com menos pressão | Bluetooth 5.0 | Controle de voz',
    isOff: true,
    offPercentage: 10,
    productImage: require('../database/images/products/Mi1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/Mi1.png'),
      require('../database/images/products/Mi2.png'),
      require('../database/images/products/Mi3.png'),
    ],
  },
  {
    id: 2,
    category: 'product',
    productName: 'BoAt Rockerz 450 Fone de ouvido Bluetooth',
    productPrice: 1499,
    description:
      'O boAt Rockerz 450 M é um fone de ouvido intra-auricular sem fio projetado ergonomicamente para atender às necessidades dos amantes da música.',
    isOff: false,
    productImage: require('../database/images/products/boat1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/boat1.png'),
      require('../database/images/products/boat2.png'),
      require('../database/images/products/boat3.png'),
    ],
  },
  {
    id: 3,
    category: 'accessory',
    productName: 'boAt Airdopes 441',
    productPrice: 1999,
    description:
      'Bluetooth: Possui Bluetooth v5.0 com alcance de 10m e é compatível com Android e iOS',
    isOff: true,
    offPercentage: 18,
    productImage: require('../database/images/accessories/boatairpods1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/accessories/boatairpods1.png'),
      require('../database/images/accessories/boatairpods2.png'),
      require('../database/images/accessories/boatairpods3.png'),
    ],
  },
  {
    id: 4,
    category: 'accessory',
    productName: 'boAt Bassheads 242',
    productPrice: 399,
    description:
      'Voe em seus treinos com tons precisos que inspiram e energizam seu sistema com seu som HD, o tempo todo.',
    isOff: false,
    productImage: require('../database/images/accessories/boatbassheads1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/accessories/boatbassheads1.png'),
      require('../database/images/accessories/boatbassheads2.png'),
      require('../database/images/accessories/boatbassheads3.png'),
    ],
  },
  {
    id: 5,
    category: 'accessory',
    productName: 'boAt Rockerz 255 Pro+',
    productPrice: 1499,
    description:
      'O som imbatível da assinatura boAt brilha, não importa o que você esteja tocando, cortesia de seus drivers de 10 mm.',
    isOff: false,
    productImage: require('../database/images/accessories/boatrockerz1.png'),
    isAvailable: false,
    productImageList: [
      require('../database/images/accessories/boatrockerz1.png'),
      require('../database/images/accessories/boatrockerz2.png'),
      require('../database/images/accessories/boatrockerz3.png'),
    ],
  },
  {
    id: 6,
    category: 'accessory',
    productName: 'Boult Audio AirBass Propods TWS',
    productPrice: 1299,
    description:
      'Controle de um toque e assistente de voz: com um botão multifuncional, você pode reproduzir/pausar, faixa anterior/seguinte e atender/desligar chamadas. A função de assistente de voz permite acessar o siri/Google Assistant',
    isOff: false,
    productImage: require('../database/images/accessories/boultairbass1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/accessories/boultairbass1.png'),
      require('../database/images/accessories/boultairbass2.png'),
      require('../database/images/accessories/boultairbass3.png'),
    ],
  },
];
