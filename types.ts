// Developed by WanDev

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  hoverImage: string;
  description: string;
  details: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface EditorialSection {
  title: string;
  subtitle: string;
  content: string;
  image: string;
  layout: 'left' | 'right';
}