export interface Product {
  id: string;
  number: string;
  name: string;
  deity: string;
  tag: string;
  desc: string;
  notes: string[];
  image: string;
  price: string;
  size: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface WhyFeature {
  number: string;
  title: string;
  description: string;
}
