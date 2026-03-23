import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Inmount Global</h4>
            <p className="opacity-70 leading-relaxed max-w-md">
              India-based sourcing partner for eco-friendly tableware, premium
              spices, home textiles, and handcrafted decor. Built for
              disciplined bulk supply to international buyers.
            </p>
            <p className="mt-4 text-xs opacity-50 uppercase tracking-widest">
              Serving US · UK · Europe · Middle East
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 opacity-70">
              <Link to="/" className="hover:opacity-100">Home</Link>
              <Link to="/why-us" className="hover:opacity-100">Why Us</Link>
              <Link to="/products" className="hover:opacity-100">Products</Link>
              <Link to="/contact" className="hover:opacity-100">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 opacity-70 text-sm">
              <p>nishant.sangwan@inmountglobal.com</p>
              <p>+91 99115 93517</p>
              <p>4477, Pahari Dhiraj, Sadar Bazaar,<br />Delhi - 110006</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs opacity-50">
          <p>© {new Date().getFullYear()} Inmount Global. All rights reserved.</p>
          <p className="mt-2 md:mt-0 uppercase tracking-widest">Bulk Orders Only · B2B Enquiries</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
