export type Dish = {
    id: string
    name: string
    nameJp?: string
    description: string
    image: string
    price: { label: string; amount: number }[]
    badges?: string[]
  }
  
  export type MenuCategory = {
    id: string
    label: string
    labelJp?: string
    dishes: Dish[]
  }
  
  const UNSPLASH = {
    misoRouge: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80',
    misoBlanc: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=600&q=80',
    shoyu: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&q=80',
    shio: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&q=80',
    yasai: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80',
    kaisen: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80',
    karanegi: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80',
    tsukemen: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80',
    donburiBeef: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
    donburiPork: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80',
    gyoza: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80',
    edamame: 'https://images.unsplash.com/photo-1564894809611-1742fc40ed80?w=600&q=80',
    mochi: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
  }
  
  export const menuCategories: MenuCategory[] = [
    {
      id: 'miso',
      label: 'Ramen Miso',
      labelJp: '味噌ラーメン',
      dishes: [
        {
          id: 'miso-rouge-classique',
          name: 'Miso Rouge Classique',
          nameJp: '赤練・クラシック',
          description: '1 tranche de porc rôti, porc haché, pousses de soja, ciboulette, bambou.',
          image: UNSPLASH.misoRouge,
          price: [{ label: 'Normal', amount: 13.50 }, { label: 'Grand', amount: 16.00 }],
          badges: ['Signature'],
        },
        {
          id: 'miso-rouge-royal',
          name: 'Miso Rouge Royal',
          nameJp: '赤練・ロワイヤル',
          description: '3 tranches de porc rôti, œuf, maïs, porc haché, pousses de soja, ciboulette, bambou.',
          image: UNSPLASH.misoRouge,
          price: [{ label: 'Normal', amount: 16.50 }, { label: 'Grand', amount: 19.00 }],
          badges: ['Signature', 'Royal'],
        },
        {
          id: 'miso-blanc-classique',
          name: 'Miso Blanc Classique',
          nameJp: '白練・クラシック',
          description: '1 tranche de porc rôti, porc haché, pousses de soja, ciboulette, bambou.',
          image: UNSPLASH.misoBlanc,
          price: [{ label: 'Normal', amount: 13.50 }, { label: 'Grand', amount: 16.00 }],
        },
        {
          id: 'miso-blanc-royal',
          name: 'Miso Blanc Royal',
          nameJp: '白練・ロワイヤル',
          description: '3 tranches de porc rôti, œuf, maïs, porc haché, pousses de soja, ciboulette, bambou.',
          image: UNSPLASH.misoBlanc,
          price: [{ label: 'Normal', amount: 16.50 }, { label: 'Grand', amount: 19.00 }],
          badges: ['Royal'],
        },
      ],
    },
    {
      id: 'autres-ramen',
      label: 'Autres Ramen',
      labelJp: 'ラーメン',
      dishes: [
        {
          id: 'shoyu',
          name: 'Shoyu Ramen Classique',
          nameJp: 'つたや正油',
          description: '1 tranche de porc rôti, naruto, algue Nori, ciboulettes, bambou.',
          image: UNSPLASH.shoyu,
          price: [{ label: 'Normal', amount: 13.50 }, { label: 'Grand', amount: 16.00 }],
        },
        {
          id: 'shio',
          name: 'Shio Ramen Classique',
          nameJp: 'つたや塩',
          description: '1 tranche de porc rôti, beurre, algue Nori, ciboulettes, bambou.',
          image: UNSPLASH.shio,
          price: [{ label: 'Normal', amount: 13.50 }, { label: 'Grand', amount: 16.00 }],
        },
        {
          id: 'yasai',
          name: 'Yasai Ramen',
          nameJp: '野菜',
          description: 'Pousses de soja, champignons noirs, chou chinois, brocolis, tomates, haricots plats.',
          image: UNSPLASH.yasai,
          price: [{ label: 'Normal', amount: 13.50 }, { label: 'Grand', amount: 16.00 }],
          badges: ['Végétarien'],
        },
        {
          id: 'kaisen',
          name: 'Kaisen Yasai Ramen',
          nameJp: '海鮮野菜',
          description: 'Légumes verts, brocolis, tomates, haricots plats, laitue, champignons, crevettes, coquilles Saint-Jacques.',
          image: UNSPLASH.kaisen,
          price: [{ label: 'Normal', amount: 16.50 }, { label: 'Grand', amount: 19.00 }],
          badges: ['Fruits de mer'],
        },
        {
          id: 'karanegi',
          name: 'Karanegi Ramen',
          nameJp: '辛ねぎ',
          description: '1 tranche de porc rôti, œuf mariné, mais, porc haché, poireaux pimentés, ciboulettes, bambou.',
          image: UNSPLASH.karanegi,
          price: [{ label: 'Normal', amount: 14.50 }, { label: 'Grand', amount: 17.00 }],
          badges: ['Épicé'],
        },
      ],
    },
    {
      id: 'tsukemen',
      label: 'Tsukemen',
      labelJp: 'つけ麺',
      dishes: [
        {
          id: 'tsukemen-froid',
          name: 'Tsukemen Froid Sauce Soja',
          nameJp: '冷やし醤油つけ麺',
          description: 'Nouilles japonaises froides à tremper dans une sauce soja savoureuse. Tranches de porc grillé, œuf mariné, ciboulette, bambous, algues.',
          image: UNSPLASH.tsukemen,
          price: [{ label: 'Normal', amount: 15.00 }, { label: 'Grand', amount: 17.00 }],
          badges: ['Froid', 'Nouveau'],
        },
      ],
    },
    {
      id: 'donburi',
      label: 'Donburi',
      labelJp: '丼',
      dishes: [
        {
          id: 'donburi-beef',
          name: 'Donburi au Bœuf Mijoté',
          nameJp: '牛丼',
          description: 'Bol de riz au bœuf mijoté, ciboulettes et gingembres marinés, servi avec une petite soupe.',
          image: UNSPLASH.donburiBeef,
          price: [{ label: 'Petit', amount: 13.00 }, { label: 'Grand', amount: 16.50 }],
        },
        {
          id: 'donburi-pork',
          name: 'Donburi au Porc Rôti',
          nameJp: '豚丼',
          description: 'Bol de riz au porc rôti, poireaux, algues Nori, servi avec une petite soupe.',
          image: UNSPLASH.donburiPork,
          price: [{ label: 'Petit', amount: 12.00 }, { label: 'Grand', amount: 15.50 }],
        },
      ],
    },
    {
      id: 'entrees',
      label: 'Entrées',
      labelJp: '前菜',
      dishes: [
        {
          id: 'gyoza-poulet',
          name: 'Gyoza au Poulet',
          nameJp: '餃子',
          description: '7 pièces. Raviolis japonais grillés au poulet.',
          image: UNSPLASH.gyoza,
          price: [{ label: 'Prix', amount: 7.00 }],
        },
        {
          id: 'gyoza-legumes',
          name: 'Yasai Gyoza',
          nameJp: '野菜餃子',
          description: '7 pièces. Raviolis japonais grillés aux légumes.',
          image: UNSPLASH.gyoza,
          price: [{ label: 'Prix', amount: 7.00 }],
          badges: ['Végétarien'],
        },
        {
          id: 'edamame',
          name: 'Edamame',
          nameJp: '枝豆',
          description: 'Fèves de soja japonaises salées.',
          image: UNSPLASH.edamame,
          price: [{ label: 'Prix', amount: 6.00 }],
          badges: ['Végétarien'],
        },
      ],
    },
    {
      id: 'desserts',
      label: 'Desserts',
      labelJp: 'デザート',
      dishes: [
        {
          id: 'mochi',
          name: 'Mochi au Lait de Soja',
          nameJp: '餅',
          description: 'Au choix : Fraise, Matcha, Sésame noir.',
          image: UNSPLASH.mochi,
          price: [{ label: 'Prix', amount: 3.80 }],
        },
      ],
    },
  ]
  
  export const saisonDish = {
    name: 'Hiyashi Tantan',
    nameJp: 'ひやし汁なしたんたん麺',
    subtitle: 'Ramen Froid Épicé Sans Soupe',
    description: 'Le Tantan est un ramen épicé japonais influencé par les nouilles Dandan de Sichuan. Poulet ou Porc, porc haché, coriandre, soja, concombre, poireaux, œuf, nouilles. Sauce épicée froide à base de sésame blanc.',
    image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&q=80',
    price: [
      { label: 'Poulet', amount: 16.50 },
      { label: 'Porc', amount: 16.50 },
      { label: 'Sans Viande', amount: 14.00 },
    ],
    badges: ['Été', 'Épicé', 'Froid'],
    saison: 'Été 2026',
  }