import React, { useState } from "react";
import { useParams, Link } from "react-router";

const products = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Galaxy Model ${i + 1}`,
  gallery: [
    "/Galaxy M53.png",
    "/Galaxy M53-2.png",
    "/Galaxy M53-3.png",
    "/Galaxy M53-4.png",
  ], // multiple images for slider
  price: 10000 + i * 500,
  discountedPrice: 9000 + i * 400,
  discount: Math.floor(Math.random() * 50),
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, sit amet lacinia orci nulla at velit. Perfect for daily use.",
}));

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [mainImgIndex, setMainImgIndex] = useState(0);

  if (!product) return <p className="text-center mt-10">Product not found!</p>;

  const nextImage = () => {
    setMainImgIndex((prev) => (prev + 1) % product.gallery.length);
  };

  const prevImage = () => {
    setMainImgIndex(
      (prev) => (prev - 1 + product.gallery.length) % product.gallery.length
    );
  };

  return (
    <section className="container mx-auto mt-24 px-4">
      <Link to="/shop" className="text-blue-500 hover:underline mb-6 inline-block">
        ← Back to Shop
      </Link>

      <div className="flex flex-col md:flex-row gap-12 bg-white rounded-xl shadow-md p-6">

        {/* Left: Slider */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <div className="relative border p-2 rounded-lg overflow-hidden">
            <img
              src={product.gallery[mainImgIndex]}
              alt={product.name}
              className="max-h-[450px] w-full object-contain transition-transform duration-300 hover:scale-105"
            />

            {/* Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white"
            >
              ◀
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white"
            >
              ▶
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-3">
            {product.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} ${index + 1}`}
                className={`w-20 h-20 object-contain border rounded-lg cursor-pointer transition-transform hover:scale-105 ${
                  mainImgIndex === index ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => setMainImgIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 flex flex-col gap-5 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold">{product.name}</h2>

          <div className="flex items-center gap-4">
            <span className="text-red-500 font-bold text-2xl">
              ₹{product.discountedPrice.toLocaleString()}
            </span>
            {product.discount > 0 && (
              <span className="text-gray-400 line-through text-lg">
                ₹{product.price.toLocaleString()}
              </span>
            )}
          </div>

          {product.discount > 0 && (
            <p className="text-green-600 font-semibold">
              You save ₹{(product.price - product.discountedPrice).toLocaleString()} (
              {product.discount}%)
            </p>
          )}

          {/* Description */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2 border-b border-gray-200 pb-1">
              Product Description
            </h3>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <button className="bg-brand text-white py-3 px-6 rounded-2xl hover:bg-blue-600 transition">
              Add to Cart
            </button>
            <button className="bg-green-600 text-white py-3 px-6 rounded-2xl hover:bg-green-700 transition">
              Buy Now
            </button>
            <a
              href={`https://wa.me/?text=Check out this product: ${product.name} - Price: ₹${product.discountedPrice.toLocaleString()}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] text-white py-3 px-6 rounded-2xl hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;