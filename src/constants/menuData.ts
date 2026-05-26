export interface Dish {
    id: string
    name: string
    nameJp?: string
    description: string
    image: string
    price: { label: string; amount: number }[]
    badges?: string[]
  }
  
  export interface MenuCategory {
    id: string
    label: string
    labelJp?: string
    dishes: Dish[]
  }
  
  const UNSPLASH = {
    misoRouge: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80',
    misoBlanc: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=600&q=80',
    shoyu: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&q=80',
    shio: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=600&q=80',
    yasai: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
    kaisen: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80',
    karanegi: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80',
    tsukemen: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80',
    donburiBeef: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80',
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
    {
      id: 'boissons',
      label: 'Boissons',
      labelJp: '飲み物',
      dishes: [
        {
          id: 'asahi-pression-25',
          name: 'Bière Asahi Pression 25cl',
          nameJp: 'アサヒ生ビール',
          description: 'Bière japonaise Asahi en pression, verre 25cl.',
          image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80',
          price: [{ label: 'Prix', amount: 5.00 }],
          badges: ['Alcool'],
        },
        {
          id: 'asahi-pression-50',
          name: 'Bière Asahi Pression 50cl',
          nameJp: 'アサヒ生ビール',
          description: 'Bière japonaise Asahi en pression, verre 50cl.',
          image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80',
          price: [{ label: 'Prix', amount: 7.00 }],
          badges: ['Alcool'],
        },
        {
          id: 'asahi-bouteille',
          name: 'Bière Asahi Bouteille 33cl',
          nameJp: 'アサヒビール瓶',
          description: 'Bière japonaise Asahi en bouteille 33cl.',
          image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80',
          price: [{ label: 'Prix', amount: 5.50 }],
          badges: ['Alcool'],
        },
        {
          id: 'sake',
          name: 'Saké Japonais SHO CHIKU BAI',
          nameJp: '松竹梅',
          description: 'Saké japonais en bouteille 18cl. Chaud ou froid.',
          image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80',
          price: [{ label: 'Prix', amount: 7.80 }],
          badges: ['Alcool'],
        },
        {
          id: 'umai',
          name: 'Umai — Alcool de Riz',
          nameJp: 'うまい',
          description: 'Alcool de riz japonais, verre 12cl.',
          image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80',
          price: [{ label: 'Prix', amount: 5.80 }],
          badges: ['Alcool'],
        },
        {
          id: 'the-vert',
          name: 'Thé Vert Chaud',
          nameJp: '緑茶',
          description: 'Thé vert japonais chaud.',
          image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
          price: [{ label: 'Prix', amount: 1.80 }],
        },
        {
          id: 'the-vert-froid',
          name: 'Thé Vert Froid 33cl',
          nameJp: '緑茶アイス',
          description: 'Thé vert japonais froid en bouteille 33cl.',
          image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
          price: [{ label: 'Prix', amount: 3.80 }],
        },
        {
          id: 'lipton',
          name: 'Lipton Ice Tea 33cl',
          nameJp: 'アイスティー',
          description: 'Thé glacé Lipton en bouteille 33cl.',
          image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
          price: [{ label: 'Prix', amount: 3.80 }],
        },
        {
          id: 'ramune',
          name: 'Ramune — Limonade Japonaise',
          nameJp: 'ラムネ',
          description: 'Limonade japonaise gazeuse en bouteille 20cl. Sans alcool.',
          image: 'https://images.unsplash.com/photo-1625772452859-1c03d884dcd7?w=600&q=80',
          price: [{ label: 'Prix', amount: 5.00 }],
          badges: ['Sans alcool'],
        },
        {
          id: 'coca',
          name: 'Coca-Cola / Coca Zéro 33cl',
          nameJp: 'コカコーラ',
          description: 'Coca-Cola ou Coca-Cola Zéro en canette 33cl.',
          image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80',
          price: [{ label: 'Prix', amount: 3.80 }],
        },
        {
          id: 'badoit',
          name: 'Badoit 1L',
          nameJp: 'ミネラルウォーター',
          description: 'Eau gazeuse Badoit en bouteille 1L.',
          image: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&q=80',
          price: [{ label: 'Prix', amount: 4.50 }],
        },
        {
          id: 'evian',
          name: 'Evian 1L',
          nameJp: 'エビアン',
          description: 'Eau plate Evian en bouteille 1L.',
          image: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&q=80',
          price: [{ label: 'Prix', amount: 4.50 }],
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