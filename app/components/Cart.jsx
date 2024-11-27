import { useState } from "react";

const Cart = ({ cartItems, removeFromCart }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Calcular el total del carrito
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    const toggleCart = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Botón para abrir/cerrar el carrito */}


            {/* Barra del carrito deslizable */}
            <div
                className={`fixed z-50 bottom-0  w-full bg-gray-800 text-white p-4 transition-all duration-500 pb-10 md:max-w-screen-md mx-auto ${isOpen ? "translate-y-0" : "translate-y-full "
                    }`}
                style={{
                    transition: "transform 0.3s ease-in-out",
                }}

            >
                <div className="fixed   md:mx-auto z-50 text-sm -top-10 left-1/2 transform -translate-x-1/2 rounded-t-lg w-full grid grid-cols-3 gap-2 h-10 px-2 bg-black/50 py-1">


                    <div

                        className=" text-center leading-3 flex-wrap bg-green-400/65  text-black border border-green-700/50  rounded-full  flex justify-center items-center"
                    >
                        <div>Total:</div> <span className="font-bold">${totalPrice}</span>
                    </div>
                    <button
                        onClick={toggleCart}
                        className=" bg-green-400/65  text-black border border-green-700/50  rounded-full shadow-lg  transition-all duration-300 flex justify-center items-center"
                    >
                        {isOpen ? "▼" : "▲"}
                    </button>
                    <button className="bg-green-400/65  text-black border border-green-700/50 font-bold  rounded-full hover:bg-green-400 transition-all duration-300 flex justify-center items-center">
                        Comprar
                    </button>
                </div>
                {cartItems.length === 0 ? (
                    <div className="text-center text-gray-400 ">El carrito está vacío.</div>
                ) : (
                    <>
                        <h3 className="font-bold text-xl mb-4">Carrito</h3>
                        <ul className="mb-4">
                            {cartItems.map((item, index) => (
                                <li key={index} className="flex justify-between items-center py-2 border-b border-gray-600">
                                    <span>{item.name} - ${item.price}</span>
                                    <button
                                        onClick={() => removeFromCart(item)}
                                        className="text-red-500 hover:text-red-300"
                                    >
                                        Eliminar
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-xl">Total: ${totalPrice}</p>
                            <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-400 transition-all duration-300">
                                Comprar
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Cart;
