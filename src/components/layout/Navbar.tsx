import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/images/uni-go-logo.png";
import { BetaSignupButton } from "@/components/BetaSignupButton";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "For Riders", path: "/riders" },
  { name: "For Drivers", path: "/drivers" },
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
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-gold group-hover:scale-105 transition-transform">
              <img src={logoImage} alt="Uni Go Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Uni Go
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

          <div className="hidden md:block">
            <BetaSignupButton />
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
