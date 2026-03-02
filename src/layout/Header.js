export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <div className="text-xl font-bold">LOGO</div>
      <nav className="flex gap-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <a href="/shop" className="hover:text-blue-600">Shop</a>
      </nav>
    </header>
  );
}