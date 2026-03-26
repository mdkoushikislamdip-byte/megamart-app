import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router"; // added useNavigate
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from "react-slick"; // Ensure react-slick is installed
import { FiMinus, FiPlus } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

// Mock data
const products = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Galaxy Model ${i + 1}`, // Changed 'name' to 'title' to match your JSX
  images: [
    "/Galaxy M53.png",
    "/Galaxy M53-2.png",
    "/Galaxy M53-3.png",
    "/Galaxy M53-4.png",
  ],
  price: 10000 + i * 500,
  discountPercentage: Math.floor(Math.random() * 50),
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Perfect for daily use.",
  brand: "Samsung",
  category: "Smartphones",
  stock: 15,
  availabilityStatus: "In Stock"
}));

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ Initialize navigate
  const product = products.find((p) => p.id === parseInt(id));

  // States
  const [quantity, setQuantity] = useState(1);
  const [zoomedImage, setZoomedImage] = useState(null);

  if (!product) return <p className="text-center mt-10">Product not found!</p>;

  // Functions
  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const handleAddToCart = () => toast.success("Added to cart!");

  // Slider Settings
  const mainSettings = { dots: false, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };
  const thumbSettings = { dots: true, infinite: false, speed: 500, slidesToShow: 4, slidesToScroll: 1 };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <ToastContainer position="bottom-right" />
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-3">
        
        {/* Back Button */}
        <div className="lg:col-span-3 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-700 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg shadow-sm transition duration-300"
          >
            ← Back
          </button>
        </div>

        {/* Images Section */}
        <div className="lg:col-span-1">
          <div className="rounded-xl overflow-hidden border bg-white p-4 shadow-md relative group transition-transform duration-300 hover:shadow-lg">
            <Slider {...mainSettings}>
              {product.images?.map((img, i) => (
                <div key={i} className="relative">
                  <img
                    src={img}
                    alt={product.title}
                    className="w-full h-80 object-contain transition-transform duration-500 transform group-hover:scale-105 rounded-lg"
                    onMouseEnter={() => setZoomedImage(img)}
                    onMouseLeave={() => setZoomedImage(null)}
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="mt-4">
            <Slider {...thumbSettings}>
              {product.images?.map((img, i) => (
                <div key={i} className="p-1">
                  <img
                    src={img}
                    alt={product.title}
                    className="h-20 w-full object-contain border rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Details Section */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-gray-700">{product.description}</p>

          <div className="flex flex-wrap gap-3">
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">
              {product.availabilityStatus}
            </span>
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
              Brand: {product.brand}
            </span>
            <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full font-medium">
              Category: {product.category}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-2xl font-bold text-green-600">${product.price}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-500">Stock</p>
              <p className="text-2xl font-bold">{product.stock}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-500">Discount</p>
              <p className="text-2xl font-bold text-red-500">{product.discountPercentage}%</p>
            </div>
          </div>

          {/* Quantity & Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button onClick={decreaseQty} className="px-3 py-2 hover:bg-gray-100 transition"><FiMinus /></button>
              <span className="px-5 py-2 font-bold">{quantity}</span>
              <button onClick={increaseQty} className="px-3 py-2 hover:bg-gray-100 transition"><FiPlus /></button>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Add to Cart
            </button>

            <Link
              to={`https://wa.me/8801816795593?text=I'm interested in ${product.title}`}
              className="flex items-center gap-2 px-4 py-3 bg-green-50 text-green-800 rounded-xl hover:bg-green-100 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <BsWhatsapp /> Whatsapp
            </Link>
          </div>

          <p className="flex items-center gap-2 text-gray-600 mt-4">
            <TbTruckDelivery /> Delivery: 3-5 Days
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;