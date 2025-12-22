// Developed by WanDev
import { Product, NavItem, EditorialSection } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'COLLECTIONS', href: '#collections' },
  { label: 'THE BRAND', href: '#brand' },
  { label: 'BOUTIQUES', href: '#boutiques' },
  { label: 'TAILORING', href: '#tailoring' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'SARTORIAL LINEN BLAZER',
    category: 'Outerwear',
    price: '€1,250',
    image: 'https://images.unsplash.com/photo-1594932224828-b4b057b696ee?auto=format&fit=crop&q=80&w=1200',
    hoverImage: 'https://images.unsplash.com/photo-1507679799987-c7377ec48696?auto=format&fit=crop&q=80&w=1200',
    description: 'A masterpiece of Neapolitan tailoring, this single-breasted blazer is crafted from high-density Irish linen. Its unstructured design offers a relaxed yet sophisticated silhouette, perfect for Mediterranean evenings.',
    details: [
      '100% Organic Irish Linen',
      'Unstructured shoulders for natural drape',
      'Hand-finished patch pockets',
      'Genuine mother-of-pearl buttons',
      'Made in Italy'
    ]
  },
  {
    id: '2',
    name: 'COTTON PIQUÉ POLO',
    category: 'Shirts',
    price: '€340',
    image: 'https://images.unsplash.com/photo-1617137968427-839fba660739?auto=format&fit=crop&q=80&w=1200',
    hoverImage: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=1200',
    description: 'Elevated simplicity. Our signature polo is knitted from double-mercerized Egyptian Giza cotton, providing a subtle lustre and exceptional breathability.',
    details: [
      '100% Giza Cotton Piqué',
      'Refined ribbed collar',
      'Two-button placket',
      'Tailored fit',
      'Pre-washed for a soft handle'
    ]
  },
  {
    id: '3',
    name: 'RAW SILK TROUSERS',
    category: 'Trousers',
    price: '€680',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=1200',
    hoverImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=1200',
    description: 'These trousers exemplify the raw beauty of natural silk. The fabric features a characteristic slub texture that catches the light beautifully, while the flat-front design maintains a clean, modern aesthetic.',
    details: [
      '100% Raw Tussah Silk',
      'Mid-rise, straight leg',
      'Side adjusters for a custom fit',
      'Unfinished hems for personal tailoring',
      'Breathable silk lining'
    ]
  },
  {
    id: '4',
    name: 'HAND-STITCHED LOAFERS',
    category: 'Footwear',
    price: '€890',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=1200',
    hoverImage: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=1200',
    description: 'Constructed using the traditional Blake stitch method, these loafers offer supreme flexibility and comfort. The calfskin is hand-burnished in Florence to achieve a deep, multidimensional patina.',
    details: [
      'Full-grain Italian Calfskin',
      'Blake-stitched construction',
      'Leather sole with anti-slip insert',
      'Memory foam cushioned insole',
      'Hand-painted finish'
    ]
  },
  {
    id: '5',
    name: 'CASHMERE OVERCOAT',
    category: 'Outerwear',
    price: '€2,800',
    image: 'https://images.unsplash.com/photo-1539533377285-34127b4b56b3?auto=format&fit=crop&q=80&w=1200',
    hoverImage: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=1200',
    description: 'A timeless silhouette rendered in 100% Mongolian cashmere. This overcoat features a subtle herringbone weave and a hand-padded lapel for structural integrity that lasts a lifetime.',
    details: [
      '100% Pure Cashmere',
      'Herringbone weave',
      'Full silk lining',
      'Horn buttons',
      'Vent at center back'
    ]
  },
  {
    id: '6',
    name: 'POPLIN SHIRT WHITE',
    category: 'Shirts',
    price: '€280',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c717658?auto=format&fit=crop&q=80&w=1200',
    hoverImage: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&q=80&w=1200',
    description: 'The cornerstone of any formal wardrobe. Our crisp poplin shirt is woven in Switzerland from extra-long staple cotton, offering a smooth, cool-to-the-touch feel.',
    details: [
      '100% Swiss Cotton Poplin',
      'Mother-of-pearl buttons',
      'Removable collar stays',
      'French seams throughout',
      'Single needle stitching'
    ]
  },
  {
    id: '7',
    name: 'CHELSEA BOOT SUEDE',
    category: 'Footwear',
    price: '€750',
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=1200',
    hoverImage: 'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?auto=format&fit=crop&q=80&w=1200',
    description: 'Classic Chelsea boots with a modern twist. The water-resistant suede upper is paired with a lightweight rubber sole for versatile wear across urban landscapes.',
    details: [
      'Premium Italian Suede',
      'Elasticated side gussets',
      'Rear pull tab',
      'Stacked leather heel',
      'Durable rubber outsole'
    ]
  },
  {
    id: '8',
    name: 'WOOL PLEATED TROUSER',
    category: 'Trousers',
    price: '€520',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&q=80&w=1200',
    hoverImage: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=1200',
    description: 'A nod to classic sartorialism, these pleated trousers are made from super 120s wool flannel. The high-waist design features elegant side adjusters and a sharp permanent crease.',
    details: [
      'Super 120s Virgin Wool',
      'Single forward pleat',
      'Side waist adjusters',
      'Button-through rear pockets',
      'Curtain waistband construction'
    ]
  }
];

export const EDITORIAL_SECTIONS: EditorialSection[] = [
  {
    title: 'The Essence of Craftsmanship',
    subtitle: 'Woven with Intent',
    content: 'At Wan-Wear, every stitch tells a story of heritage. We select only the finest natural fibers, from Neapolitan linens to pure cashmere from the Mongolian highlands, ensuring each piece breathes with its wearer.',
    image: 'https://images.unsplash.com/photo-1598454547585-0739d75a8962?auto=format&fit=crop&q=80&w=1600',
    layout: 'right',
  },
  {
    title: 'Modern Silhouette',
    subtitle: 'Redefining the Classic',
    content: 'Our design philosophy embraces the quiet confidence of minimalism. By removing the unnecessary, we highlight the architectural beauty of perfect tailoring and the subtle nuance of texture.',
    image: 'https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?auto=format&fit=crop&q=80&w=1600',
    layout: 'left',
  }
];