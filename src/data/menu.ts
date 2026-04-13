export type MenuTab = 'smallPlates' | 'soups' | 'noodlesAndRice' | 'sides';

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  isGlutenFree: boolean;
  spiceLevel: 0 | 1 | 2 | 3;
}

export const menuData: Record<MenuTab, MenuItem[]> = {
  smallPlates: [
    {
      name: 'Somtum',
      description: 'Unripe papaya / tomato / peanut / pork rind',
      price: '$10',
      isGlutenFree: true,
      spiceLevel: 3,
    },
    {
      name: 'Salted Crab Papaya Salad',
      description: 'Green papaya / crab / lime / chili',
      price: '$10',
      isGlutenFree: true,
      spiceLevel: 3,
    },
    {
      name: 'Peek Gai Tod',
      description: 'Crispy fried chicken wings',
      price: '$8',
      isGlutenFree: true,
      spiceLevel: 0,
    },
    {
      name: 'Grilled Chicken',
      description: 'Marinated grilled chicken thighs',
      price: '$9',
      isGlutenFree: true,
      spiceLevel: 1,
    },
    {
      name: 'Yum Woon Sen',
      description: 'Glass noodles / shrimp / squid / lime / chili',
      price: '$11',
      isGlutenFree: true,
      spiceLevel: 2,
    },
    {
      name: 'Chive Rice Cake',
      description: 'Fried chive rice cake (vegan)',
      price: '$9',
      isGlutenFree: false,
      spiceLevel: 0,
    },
    {
      name: 'Nua Num Tok',
      description: 'Dry beef salad / lime / roasted rice powder / chili',
      price: '$12',
      isGlutenFree: true,
      spiceLevel: 3,
    },
    {
      name: 'Larb Moo',
      description: 'Minced pork / lime / chili / mint',
      price: '$8',
      isGlutenFree: true,
      spiceLevel: 3,
    },
    {
      name: 'Kanom Jeeb',
      description: 'Steamed pork dumplings / scallion / ginger soy',
      price: '$8',
      isGlutenFree: false,
      spiceLevel: 0,
    },
    {
      name: 'Hoi Mlang Pou',
      description: 'Mussels / lemongrass / lime / chili',
      price: '$13',
      isGlutenFree: true,
      spiceLevel: 2,
    },
    {
      name: 'Silom Road Moo Ping',
      description: 'Grilled pork skewers / sticky rice',
      price: '$9',
      isGlutenFree: true,
      spiceLevel: 0,
    },
    {
      name: 'Yum Het Tod',
      description: 'Fried mushrooms / lime / chili / herbs',
      price: '$10',
      isGlutenFree: true,
      spiceLevel: 2,
    },
  ],
  soups: [
    {
      name: 'Kao Soi',
      description:
        'Organic chicken / curry broth / pickles / bean sprout / egg noodle',
      price: '$14',
      isGlutenFree: false,
      spiceLevel: 2,
    },
    {
      name: 'Tom Yum Moo',
      description: 'Pork / lemongrass / galangal / lime / chili',
      price: '$13',
      isGlutenFree: true,
      spiceLevel: 3,
    },
    {
      name: 'Kao Tom',
      description: 'Rice soup / chicken / ginger / scallion',
      price: '$12',
      isGlutenFree: true,
      spiceLevel: 0,
    },
  ],
  noodlesAndRice: [
    {
      name: 'Pad Thai',
      description: 'Rice noodles / egg / peanut / bean sprout',
      price: '$14',
      isGlutenFree: true,
      spiceLevel: 1,
    },
    {
      name: 'Pad Kee Mao',
      description: 'Protein / Chinese broccoli / chili / garlic / Thai basil',
      price: '$15',
      isGlutenFree: true,
      spiceLevel: 3,
    },
    {
      name: 'Kao Pad Pu',
      description: 'Crab fried rice / egg / scallion',
      price: '$15',
      isGlutenFree: true,
      spiceLevel: 0,
    },
    {
      name: 'Kapro Gai Kai Dao',
      description:
        'Chicken / holy basil / fried egg / garlic / chili',
      price: '$14',
      isGlutenFree: true,
      spiceLevel: 3,
    },
    {
      name: 'Ka Na Moo Grob',
      description: 'Crispy pork / Chinese broccoli / gravy',
      price: '$14',
      isGlutenFree: false,
      spiceLevel: 0,
    },
    {
      name: 'Mackerel Fried Rice',
      description: 'Fresh mackerel / fried rice / egg / scallion',
      price: '$14',
      isGlutenFree: true,
      spiceLevel: 0,
    },
    {
      name: 'Panang Curry',
      description: 'Braised beef / roasted pepper / bamboo shoot / Thai basil',
      price: '$17',
      isGlutenFree: true,
      spiceLevel: 2,
    },
    {
      name: 'Pad Prik King',
      description: 'Protein / long beans / curry / kaffir lime',
      price: '$15',
      isGlutenFree: true,
      spiceLevel: 2,
    },
  ],
  sides: [
    {
      name: 'Jasmine Rice',
      description: 'Jasmine rice',
      price: '$2',
      isGlutenFree: true,
      spiceLevel: 0,
    },
    {
      name: 'Brown Rice',
      description: 'Brown rice',
      price: '$2',
      isGlutenFree: true,
      spiceLevel: 0,
    },
    {
      name: 'Son In Law Egg',
      description: 'Fried egg / sweet and spicy tamarind sauce',
      price: '$4',
      isGlutenFree: false,
      spiceLevel: 2,
    },
    {
      name: 'Sticky Rice',
      description: 'Sticky rice',
      price: '$2.50',
      isGlutenFree: true,
      spiceLevel: 0,
    },
  ],
};

export const menuTabs: { id: MenuTab; label: string }[] = [
  { id: 'smallPlates', label: 'Small Plates' },
  { id: 'soups', label: 'Soups' },
  { id: 'noodlesAndRice', label: 'Noodles & Rice' },
  { id: 'sides', label: 'Sides' },
];
