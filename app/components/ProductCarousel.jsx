import { ProductCard } from "./ProductCard";

export const ProductCarousel = ({ products, addToCart }) => {
    return (
        <div className="relative overflow-hidden">

            {/* Degradados laterales */}
            <h4 className=" text-xl pb-5 relative z-40 uppercase"></h4>
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white via-white/90 to-transparent pointer-events-none z-10" />
            {/* Contenedor principal */}
            <div
                className="
          flex gap-3 overflow-x-auto  scroll-snap-x md:justify-center 
          scrollbar-hide px-6 
        "
            >
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="
            justify-center   flex-shrink-0 md:justify-center scroll-snap-start md:flex-grow md:max-w-[300px]
            "
                    >
                        <ProductCard product={product} addToCart={addToCart} />
                    </div>
                ))}
            </div>
        </div>
    );
};
