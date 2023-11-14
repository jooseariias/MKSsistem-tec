import { useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
  quantity: number;
}

const CART_KEY = 'cart';

export default function useCart() {
  useEffect(() => {
    const storedCart = localStorage.getItem(CART_KEY);
    if (!storedCart) {
      localStorage.setItem(CART_KEY, JSON.stringify([]));
    }
  }, []);

  const addToCart = (product: Product) => {
    const storedCart: Product[] = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    const existingProduct = storedCart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      storedCart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem(CART_KEY, JSON.stringify(storedCart));
  };

  const removeFromCart = (productId: number) => {
    const storedCart: Product[] = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    const updatedCart = storedCart.filter((item) => item.id !== productId);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    const storedCart: Product[] = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    const updatedCart = storedCart.map((item) => {
      if (item.id === productId) {
        item.quantity = newQuantity;
      }
      return item;
    });
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
  };

  const getCart = (): Product[] => {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  };

  const getTotalPrice = () => {
    const storedCart: Product[] = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    const totalPrice = storedCart.reduce(
      (accumulator, item) => accumulator + item.price * (item.quantity || 1),
      0
    );
    return totalPrice;
  };

  return {
    addToCart,
    removeFromCart,
    updateQuantity,
    getCart,
    getTotalPrice,
  };
}
