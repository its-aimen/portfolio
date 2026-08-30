import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
       <div className="ml-4 md:ml-15 mt-7 container flex items-center justify-between">

       
        <a
          href="#hero"
          className="mt-10 fixed top-0 left-4 md:left-18 z-50 text-lg md:text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10 text-glow text-foreground">
            Aimen's <span>Portfolio</span>
          </span>
        </a>

       
        <div className="hidden md:flex items-center justify-center gap-8 flex-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

       
        <a 
          href="#contact"
         className="fixed top-7 right-4 md:right-15 z-50 hidden md:block bg-white text-black px-4 py-2 rounded-md"
        >
          Contact
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full flex flex-col items-center gap-4 bg-background py-6 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-white text-black px-4 py-1 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};