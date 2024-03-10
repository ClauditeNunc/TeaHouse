'use client'
import React, { createContext, useState, useContext } from 'react';

type Product = {
    id: number;
    chosenImage: string;
    name: string;
    description: string;
    price: number;
    type: string;
    quantity: number;
};

type CartContextType = {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productName: string) => void; 
    increaseQuantity: (productName: string) => void; 
    decreaseQuantity: (productName: string) => void;
    total: number;
};

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

type CartProviderProps = {
    children: React.ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    const generateProductId = (): number => {
        return Math.floor(Math.random() * 1000000); 
    };

    const calculateTotal = (): number => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const addToCart = (product: Product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            const updatedCartItems = cartItems.map(item =>
                item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedCartItems);
        } else {
            const newProduct = { ...product, id: generateProductId(), quantity: 1 }; 
            setCartItems([...cartItems, newProduct]);
        }
    };
    
    

    const removeFromCart = (productName: string) => {
        const updatedCartItems = cartItems.filter(item => item.name !== productName);
        setCartItems(updatedCartItems);
    };

    const increaseQuantity = (productName: string) => {
        const updatedCartItems = [...cartItems];
        const itemIndex = updatedCartItems.findIndex(item => item.name === productName);
        updatedCartItems[itemIndex].quantity += 1;
        setCartItems(updatedCartItems);
    };

    const decreaseQuantity = (productName: string) => {
        const updatedCartItems = [...cartItems];
        const itemIndex = updatedCartItems.findIndex(item => item.name === productName);
        if (updatedCartItems[itemIndex].quantity > 1) {
            updatedCartItems[itemIndex].quantity -= 1;
            setCartItems(updatedCartItems);
        }
    };

    const total = calculateTotal();

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};
