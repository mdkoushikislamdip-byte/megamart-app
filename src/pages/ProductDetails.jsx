import React, { useState, useRef, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router"; // ✅ add useNavigate
import Slider from "react-slick";
import { FiMinus, FiPlus } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFetchProductByIdQuery } from "../services/Api";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ initialize navigate
  const { data, isLoading, isError } = useFetchProductByIdQuery(id);

  const sliderMain = useRef(null);
  const sliderThumb = useRef(null);
  const [navMain, setNavMain] = useState(null);
  const [navThumb, setNavThumb] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    setNavMain(sliderMain.current);
    setNavThumb(sliderThumb.current);
  }, [data]);

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    if (!data) return;
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const exist = existingCart.find((item) => item.id === data.id);

    if (exist) {
      const updatedCart = existingCart.map((item) =>
        item.id === data.id
          ? {
              ...item,
              qty: item.qty + quantity,
              total: item.price * (item.qty + quantity),
              discountedTotal:
                item.price * (item.qty + quantity) -
                (item.price * (item.qty + quantity) * (item.discountPercentage || 0)) / 100,
            }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const newItem = {
        id: data.id,
        name: data.title,
        price: data.price,
        qty: quantity,
        image: data.images[0] || "/placeholder.png",
        discountPercentage: data.discountPercentage || 0,
        total: data.price * quantity,
        discountedTotal:
          data.price * quantity -
          (data.price * quantity * (data.discountPercentage || 0)) / 100,
      };
      localStorage.setItem("cart", JSON.stringify([...existingCart, newItem]));
    }

    window.dispatchEvent(new CustomEvent("cartUpdated"));
    toast.success(`${data.title} successfully added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  if (isLoading) return <p className="text-center py-20">Loading...</p>;
  if (isError) return <p className="text-center py-20 text-red-500">Failed to load product</p>;

  const mainSettings = {
    asNavFor: navThumb,
    ref: sliderMain,
    arrows: false,
    fade: true,
    infinite: true,
  };

  const thumbSettings = {
    asNavFor: navMain,
    ref: sliderThumb,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <ToastContainer />
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-3">
        {/* Back Button */}
        <div className="lg:col-span-3 mb-4">
          <button
            onClick={() => navigate(-1)} // ✅ go back to previous page
            className="text-gray-700 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg shadow-sm transition duration-300"
          >
            ← Back
          </button>
        </div>

        {/* Images Section */}
        <div className="lg:col-span-1">
          <div className="rounded-xl overflow-hidden border bg-white p-4 shadow-md relative group transition-transform duration-300 hover:shadow-lg">
            <Slider {...mainSettings}>
              {data.images?.map((img, i) => (
                <div key={i} className="relative">
                  <img
                    src={img}
                    alt={data.title}
                    className="w-full h-80 object-contain transition-transform duration-500 transform group-hover:scale-105 rounded-lg"
                    onMouseEnter={() => setZoomedImage(img)}
                    onMouseLeave={() => setZoomedImage(null)}
                  />
                  {zoomedImage === img && (
                    <div className="absolute inset-0 bg-white/5 pointer-events-none rounded-lg" />
                  )}
                </div>
              ))}
            </Slider>
          </div>

          <div className="mt-4">
            <Slider {...thumbSettings}>
              {data.images?.map((img, i) => (
                <div key={i} className="p-1">
                  <img
                    src={img}
                    alt={data.title}
                    className="h-20 w-full object-contain border rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Details Section */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="text-gray-700">{data.description}</p>

          <div className="flex flex-wrap gap-3">
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">
              {data.availabilityStatus || "In Stock"}
            </span>
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
              Brand: {data.brand}
            </span>
            <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full font-medium">
              Category: {data.category}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-2xl font-bold text-green-600">${data.price}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-500">Stock</p>
              <p className="text-2xl font-bold">{data.stock}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-500">Discount</p>
              <p className="text-2xl font-bold text-red-500">
                {data.discountPercentage || 0}%
              </p>
            </div>
          </div>

          {/* Quantity & Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={decreaseQty}
                className="px-3 py-2 hover:bg-gray-100 transition"
              >
                <FiMinus />
              </button>
              <span className="px-5 py-2">{quantity}</span>
              <button
                onClick={increaseQty}
                className="px-3 py-2 hover:bg-gray-100 transition"
              >
                <FiPlus />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Add to Cart
            </button>

            <Link
              to="https://wa.me/8801816795593"
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