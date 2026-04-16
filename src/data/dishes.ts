export interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  isGlutenFree: boolean;
  spiceLevel: 0 | 1 | 2 | 3;
  image?: string;
}

export const popularDishes: Dish[] = [
  {
    id: 1,
    name: 'Kanom Jeeb',
    description:
      'Steamed local pork dumplings / scallion / ginger soy',
    price: '$8',
    isGlutenFree: false,
    spiceLevel: 0,
    image: '/images/kanom-jeeb.jpg',
  },
  {
    id: 2,
    name: 'Pad Thai',
    description: 'Rice noodle / egg / peanut / bean sprout',
    price: '$14',
    isGlutenFree: true,
    spiceLevel: 1,
    image: '/images/pad-thai.jpg',
  },
  {
    id: 3,
    name: 'Panang Curry',
    description: 'Braised beef / roasted pepper / bamboo shoot / Thai basil',
    price: '$17',
    isGlutenFree: true,
    spiceLevel: 2,
    image: '/images/panang-curry.jpg',
  },
  {
    id: 4,
    name: 'Pad Kee Mao',
    description:
      'Protein / Chinese broccoli / chili / garlic / Thai basil',
    price: '$15',
    isGlutenFree: true,
    spiceLevel: 3,
    image: '/images/pad-kee-mao.jpg',
  },
  {
    id: 5,
    name: 'Kao Soi',
    description:
      'Organic chicken / curry broth / pickles / bean sprout / egg noodle',
    price: '$14',
    isGlutenFree: false,
    spiceLevel: 2,
    image: '/images/kao-soi.jpg',
  },
  {
    id: 6,
    name: 'Somtum',
    description:
      'Unripe papaya / tomato / peanut / pork rind',
    price: '$10',
    isGlutenFree: true,
    spiceLevel: 3,
    image: '/images/somtum.jpg',
  },
];
