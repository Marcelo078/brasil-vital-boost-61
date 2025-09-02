import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-foreground">Brasil Vital Boost</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Início
            </Link>
            <Link 
              to="/saude-intestinal" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Saúde Intestinal
            </Link>
            <Link 
              to="/emagrecimento" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Emagrecimento
            </Link>
            <Link 
              to="/suplementos" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Suplementos
            </Link>
            <Link 
              to="/artigos" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Artigos
            </Link>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex">
            <Button variant="cta" size="lg">
              Ofertas Especiais
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-accent"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Início
              </Link>
              <Link 
                to="/saude-intestinal" 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Saúde Intestinal
              </Link>
              <Link 
                to="/emagrecimento" 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Emagrecimento
              </Link>
              <Link 
                to="/suplementos" 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Suplementos
              </Link>
              <Link 
                to="/artigos" 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Artigos
              </Link>
              <Button variant="cta" size="lg" className="mt-4">
                Ofertas Especiais
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;