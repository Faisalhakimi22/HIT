export interface User {
  _id: string;
  name: string;
  email: string;
  userType: 'buyer' | 'seller' | 'admin';
  token?: string;
}

export interface Product {
  _id: string;
  title: Record<string, string>;
  price: { amount: number; currency: string };
  category: string;
} 