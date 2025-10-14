import React from "react";

import ProductPage from "./ProductPage";

const DishesCategory = () => {
  return (
    <div className=" h-44 bg-white ml-5">
      <div>
        <div className="p-6 font-semibold text-2xl">Dishes category</div>
        <ProductPage />
      </div>
    </div>
  );
};

export default DishesCategory;
