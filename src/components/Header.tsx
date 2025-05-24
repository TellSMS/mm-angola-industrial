
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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-industrial-blue text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+244 946 005 595</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>geral@mam.co.ao</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Luanda, Angola</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-industrial-blue text-white px-4 py-2 rounded-lg">
              <h1 className="font-montserrat font-bold text-xl">M&M</h1>
            </div>
            <div className="ml-3">
              <h2 className="font-montserrat font-bold text-industrial-blue text-lg">
                MACHADO & MANSOUR
              </h2>
              <p className="text-industrial-gray text-sm">Soluções Industriais</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-roboto font-medium transition-colors hover:text-industrial-orange ${
                  isActive(item.path)
                    ? 'text-industrial-orange border-b-2 border-industrial-orange'
                    : 'text-industrial-gray'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              className="bg-industrial-orange hover:bg-industrial-orange-dark text-white font-roboto font-medium"
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
              <X className="h-6 w-6 text-industrial-gray" />
            ) : (
              <Menu className="h-6 w-6 text-industrial-gray" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-roboto font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-industrial-orange'
                      : 'text-industrial-gray hover:text-industrial-orange'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                className="bg-industrial-orange hover:bg-industrial-orange-dark text-white font-roboto font-medium mt-4"
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
