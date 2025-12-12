import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import logoImage from "@/assets/images/uni-go-logo.png";
import { navLinks, legalLinks } from "@/lib/navigation";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-gold group-hover:scale-105 transition-transform">
              <img src={logoImage} alt="Uni Go Logo" className="w-full h-full object-cover" />
            </div>
              <span className="text-xl font-bold text-foreground">
                Uni Go
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              The ride-sharing app made exclusively for college students. Connect, ride, and save together.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-muted-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-muted-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <a
              href="mailto:uni.go.llc@gmail.com"
              className="flex items-center gap-2 text-muted-foreground text-sm hover:text-muted-foreground"
            >
              <Mail className="w-4 h-4" />
              uni.go.llc@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Uni Go. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with 💛 for college students
          </p>
        </div>
      </div>
    </footer>
  );
};
