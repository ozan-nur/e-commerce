
export default function ProductCard() {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition">
      <div className="bg-gray-200 w-full h-40 mb-4 flex items-center justify-center">
        Ürün Resmi
      </div>
      <h3 className="font-semibold text-center mb-2">Ürün Adı</h3>
      <p className="text-gray-600 text-center mb-2">₺99.99</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Sepete Ekle</button>
    </div>
  );
}