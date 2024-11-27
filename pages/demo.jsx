"use client";
import "./local.css";
import { useState } from "react";
import { ProductCarousel } from "@/app/components/ProductCarousel";
import { Header } from "@/app/components/Header";
import Modal from "@/app/components/Modal";
import Cart from "@/app/components/Cart";

export default function Demo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("comida_rapida");

  const products = [
    { name: "Hamburguesa", category: "comida_rapida", description: "Hamburguesa con queso y carne.", price: 8000, image: "/burger.png" },
    { name: "Hamburguesa", category: "comida_rapida", description: "Hamburguesa con queso y carne.", price: 8000, image: "/burger.png" },
    { name: "Hamburguesa", category: "comida_rapida", description: "Hamburguesa con queso y carne.", price: 8000, image: "/burger.png" },
    { name: "Hamburguesa", category: "comida_rapida", description: "Hamburguesa con queso y carne.", price: 8000, image: "/burger.png" },
    { name: "Pizza", category: "comida_rapida", description: "Pizza con ingredientes frescos.", price: 9000, image: "/burger.png" },
    { name: "Pasta", category: "comida_rapida", description: "Pasta con salsa de tomate.", price: 7500, image: "/burger.png" },
    { name: "Helado", category: "postres", description: "Helado artesanal de chocolate.", price: 4000, image: "/burger.png" },
    { name: "Pastel", category: "postres", description: "Pastel de zanahoria.", price: 5000, image: "/burger.png" },
    { name: "Tarta", category: "postres", description: "Tarta de frutas.", price: 4500, image: "/burger.png" },
  ];

  const categories = [
    { id: "comida_rapida", label: "Comida Rápida" },
    { id: "postres", label: "Postres" },

  ];

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (product) => setCart(cart.filter((item) => item !== product));

  // Filtrar productos por categoría seleccionada
  const filteredProducts = products.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-white max-w-screen-md mx-auto">
      <Header openModal={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <h2 className="text-3xl font-semibold text-center mb-4 text-black">Horarios de Apertura y Cierre</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Día</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Apertura</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Cierre</th>
            </tr>
          </thead>
          <tbody>
            {[
              { dia: "Lunes", apertura: "10:00 AM", cierre: "10:00 PM" },
              { dia: "Martes", apertura: "10:00 AM", cierre: "10:00 PM" },
              { dia: "Miércoles", apertura: "10:00 AM", cierre: "10:00 PM" },
              { dia: "Jueves", apertura: "10:00 AM", cierre: "10:00 PM" },
              { dia: "Viernes", apertura: "10:00 AM", cierre: "11:00 PM" },
              { dia: "Sábado", apertura: "10:00 AM", cierre: "11:00 PM" },
              { dia: "Domingo", apertura: "10:00 AM", cierre: "9:00 PM" },
            ].map((horario, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition-colors duration-300`}
              >
                <td className="px-4 py-2 text-sm text-gray-800">{horario.dia}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{horario.apertura}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{horario.cierre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>

      <main className="py-5 pb-24">
        <div className="flex gap-4 justify-center mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full ${selectedCategory === category.id ? "bg-yellow-400 text-white" : "bg-yellow-300 hover:bg-yellow-400"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        <ProductCarousel products={filteredProducts} addToCart={addToCart} />
      </main>

      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
}
