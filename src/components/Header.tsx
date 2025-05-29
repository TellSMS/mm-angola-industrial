import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-industrial-border">
      {/* Top contact bar */}
      <div className="bg-industrial-blue text-white py-1.5 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-3 w-3" />
              <span className="font-inter">+244 946 005 595</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-3 w-3" />
              <span className="font-inter">geral@mam.co.ao</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-inter text-xs">Luanda, Angola</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.jpeg" alt="Logo da empresa" className="h-10 w-auto mr-2 rounded shadow" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-inter font-medium transition-all duration-300 hover:text-industrial-orange ${
                  isActive(item.path)
                    ? 'text-industrial-orange border-b-2 border-industrial-orange pb-1'
                    : 'text-industrial-text hover:scale-105'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white font-inter font-medium px-6 py-2 transition-all duration-300 shadow-md hover:shadow-lg"
              asChild
            >
              <Link to="/contacto">Solicitar Orçamento</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-industrial-text" />
            ) : (
              <Menu className="h-6 w-6 text-industrial-text" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-industrial-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-inter font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-industrial-orange'
                      : 'text-industrial-text hover:text-industrial-orange'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                className="bg-industrial-orange hover:bg-orange-600 text-white font-inter font-medium mt-4 self-start transition-all duration-300 shadow-md hover:shadow-lg"
                asChild
              >
                <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                  Solicitar Orçamento
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
