import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* โลโก้ */}
        <h1 className="text-white text-2xl font-bold">3Maw-website</h1>

        {/* เมนูนำทาง */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-red-600">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-red-600">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-red-600">Contact</Link>
          </li>
          <li>
            <Link to="/service" className="text-white hover:text-red-600">Service</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
