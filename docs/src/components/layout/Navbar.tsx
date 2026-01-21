import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Build", href: "/assembly" },
  { name: "Code", href: "/firmware" },
  { name: "Specs", href: "/specifications" },
  { name: "Gallery", href: "/gallery" },
  { name: "Battery", href: "/battery" },
  { name: "Contribute", href: "/contribute" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold transition-transform hover:scale-105"
          >
            <span className="text-2xl">🩸</span>
            <span className="text-foreground">BloodHound</span>
            <span className="text-primary text-glow-red">VENOM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  location.pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="neonCyan" size="sm" asChild>
              <a
                href="https://github.com/Rudii-25/BloodHound_VENOM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/assembly">
                <Cpu className="w-4 h-4" />
                Build Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[500px] mt-4" : "max-h-0"
          )}
        >
          <div className="glass rounded-xl p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-medium transition-all",
                  location.pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border flex flex-col gap-2">
              <Button variant="neonCyan" size="sm" asChild className="w-full">
                <a
                  href="https://github.com/Rudii-25/BloodHound_VENOM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="hero" size="sm" asChild className="w-full">
                <Link to="/assembly">
                  <Cpu className="w-4 h-4" />
                  Build Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
