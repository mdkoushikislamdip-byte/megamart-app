import React from "react";
import ProductCards from "../ui/ProductCards";
import { useGetproductsQuery } from "../../services/api";

const products = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Galaxy Model ${i + 1}`,
  img: "/Galaxy M53.png", // same image use korte paro
  price: 10000 + i * 500,
  discountedPrice: 9000 + i * 400,
  discount: Math.floor(Math.random() * 50), // random discount
}));

const ProductList = () => {

  console.log(data)
  return (
   <section className="mt-10 md:mt-30">
     <div className="container">
       <div className="mb-5 flex justify-between">
          <p>
            Showing <span className="font-bold">(100)</span>
          </p>
          <div className="flex items-center gap-4">
            <p>Displaying 1-10 of 100 Products</p>
            <select className="py-2 px-4 border rounded-2xl">
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
              <option value="">40</option>
              <option value="">50</option>
            </select>
            </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((item) => (
        <ProductCards key={item.id} product={item} />
      ))}
    </div>
    </div>
   </section>
  );
};

export default ProductList;