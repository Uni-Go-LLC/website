import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Beta Test", path: "/beta" },
  { name: "Contact", path: "/contact" },
  { name: "Feedback", path: "/feedback" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-gold group-hover:scale-105 transition-transform">
              <Car className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Uni<span className="text-primary">Go</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${location.pathname === link.path
                  ? "bg-primary/10 text-black font-bold"
                  : "text-muted-foreground font-medium hover:text-foreground hover:bg-secondary"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="default" className="shadow-gold">
              <Link to="/beta">
                Sign Up for Beta
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm transition-all ${location.pathname === link.path
                    ? "bg-primary/10 text-black font-bold"
                    : "text-muted-foreground font-medium hover:text-foreground hover:bg-secondary"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild variant="default" className="mt-2 shadow-gold">
                <Link to="/beta" onClick={() => setIsOpen(false)}>
                  Sign Up for Beta
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
