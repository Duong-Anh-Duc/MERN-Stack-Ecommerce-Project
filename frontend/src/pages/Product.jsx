import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductDescription from "../components/ProductDescription";
import ProductHd from "../components/ProductHd";
import ProductMd from "../components/ProductMd";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  console.log("ID : ", productId);
  const product = all_products.find((e) => e._id === productId);
  if (!product) {
    return <div className="h-1 pt-28">Product not Found</div>;
  }
  console.log(product);
  return (
    <section className="max-padd-container py-20">
      <div>
        <ProductHd product={product} />
        <ProductMd product={product} />
        <ProductDescription />
      </div>
    </section>
  );
};

export default Product;
