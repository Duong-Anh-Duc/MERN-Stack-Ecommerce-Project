import React, { useState } from "react";
import Categories from "../components/Categories";
import Features from "../components/Features";
import Hero from "../components/Hero";
import ProductDisplay from "../components/ProductDisplay";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      <Hero />
      <Features />
      <Categories category={category} setCategory={setCategory} />
      <ProductDisplay />
    </>
  );
};

export default Home;
