"use client";
import ProductCard from "@/components/products/ProductCard";
import BannerSlider from "../components/banners/BannerSlider";

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen mt-2">
      <BannerSlider />
      <ProductCard />
    </div>
  );
}
