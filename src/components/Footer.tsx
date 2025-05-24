
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-industrial-gray-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-industrial-orange text-white px-3 py-2 rounded-lg">
                <h3 className="font-montserrat font-bold text-lg">M&M</h3>
              </div>
              <div className="ml-3">
                <h4 className="font-montserrat font-bold text-white text-sm">
                  MACHADO & MANSOUR
                </h4>
              </div>
            </div>
            <p className="text-gray-300 mb-4 font-roboto">
              Fornecedor líder de produtos industriais em Angola desde 2016, oferecendo soluções completas e de qualidade para diversos setores.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-industrial-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-industrial-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/244946005595" 
                className="text-gray-300 hover:text-industrial-orange transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-industrial-orange transition-colors font-roboto">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-industrial-orange transition-colors font-roboto">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-300 hover:text-industrial-orange transition-colors font-roboto">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-industrial-orange transition-colors font-roboto">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Produtos</h4>
            <ul className="space-y-2 text-gray-300 font-roboto">
              <li>Baterias Automotivas</li>
              <li>Lubrificantes Industriais</li>
              <li>Filtros Industriais</li>
              <li>Equipamentos EPI</li>
              <li>Pneus e Material de Soldadura</li>
              <li>Máquinas Industriais</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-industrial-orange mt-1" />
                <div className="font-roboto">
                  <p className="text-gray-300">+244 946 005 595</p>
                  <p className="text-gray-300">+244 923 315 700</p>
                  <p className="text-gray-300">+244 923 313 341</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-industrial-orange mt-1" />
                <div className="font-roboto">
                  <p className="text-gray-300">geral@mam.co.ao</p>
                  <p className="text-gray-300">comercial@mam.co.ao</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-industrial-orange mt-1" />
                <p className="text-gray-300 font-roboto">Luanda, Angola</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 font-roboto">
              © 2024 MACHADO & MANSOUR. Todos os direitos reservados.
            </p>
            <p className="text-gray-300 font-roboto mt-2 md:mt-0">
              Fundada em 2016 em Angola
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
