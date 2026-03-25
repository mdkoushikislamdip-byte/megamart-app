import React from "react";
import { Link } from "react-router";
import ProductCards from "../components/ui/ProductCards";

const products = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Galaxy Model ${i + 1}`,
  img: "/Galaxy M53.png",
  price: 10000 + i * 500,
  discountedPrice: 9000 + i * 400,
  discount: Math.floor(Math.random() * 50),
}));

const Shop = () => {
  return (
    <section className="container mx-auto mt-10 px-4">
      {/* Back button */}
      <Link
        to="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        ← Back to Home
      </Link>

      <h2 className="text-2xl font-bold mb-6">Shop All Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Shop;