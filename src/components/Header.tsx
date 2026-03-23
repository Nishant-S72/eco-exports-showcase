import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Why Us", path: "/why-us" },
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/assets/logo.png"
              alt="Inmount Global"
              className="h-12 w-auto"
            />
            <div className="hidden sm:block text-[10px] leading-tight text-muted-foreground tracking-wide uppercase">
              <p>MSME: UDYAM-DL-04-0045434</p>
              <p>IEC: AAHCI6249P</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm tracking-wide transition-colors hover:text-foreground ${
                  location.pathname === item.path
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-6 pt-4 border-t border-border flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`text-sm tracking-wide px-2 py-1 ${
                  location.pathname === item.path
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
