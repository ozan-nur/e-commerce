import ProductCard from "../components/ProductCard";
import { Icon } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* Slider Placeholder */}
      <section className="w-full h-48 bg-gray-200 flex items-center justify-center">
        <Icon name="slider" />
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-xl font-bold mb-4 px-4">Öne Çıkan Ürünler</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </div>
  );
}