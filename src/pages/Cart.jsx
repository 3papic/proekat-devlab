import React, { useState } from "react";
import CartItems from "../components/CartItems";

const Cart = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>

            {/* Prikaz komponente za korpu */}
            <CartItems cart={cart} />

            {/* Dugmad za dodavanje proizvoda */}
            <h2 className="text-xl font-semibold mt-6">Products</h2>
            <button
                onClick={() => addToCart({ name: "Product 1", price: 30 })}
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-2"
            >
                Add Product 1 to Cart
            </button>
            {/* Dodajte slične dugmadi za dodavanje drugih proizvoda */}
        </div>
    );
};

export default Cart;
