import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="ml-3 flex items-center">
                <img src="/logo.jpeg" alt="Logo da empresa" className="h-10 w-auto mr-2 rounded shadow" />
              </div>
            </div>
            <p className="text-gray-700 mb-4 font-roboto">
              Fornecedor líder de produtos industriais em Angola desde 2016, oferecendo soluções completas e de qualidade para diversos setores.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-industrial-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-700 hover:text-industrial-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/244946005595" 
                className="text-gray-700 hover:text-industrial-orange transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4 text-black">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-700 hover:text-industrial-orange transition-colors font-roboto">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-700 hover:text-industrial-orange transition-colors font-roboto">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-700 hover:text-industrial-orange transition-colors font-roboto">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-700 hover:text-industrial-orange transition-colors font-roboto">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4 text-black">Produtos</h4>
            <ul className="space-y-2 text-gray-700 font-roboto">
              <li>Pneus Industriais</li>
              <li>Baterias Automotivas</li>
              <li>Lubrificantes Industriais</li>
              <li>Filtros Industriais</li>
              <li>Equipamentos EPI</li>
              <li>Material de Soldadura</li>
              <li>Equipamentos Diversos</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4 text-black">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-industrial-orange mt-1" />
                <div className="font-roboto">
                  <p className="text-gray-700">+244 946 005 595</p>
                  <p className="text-gray-700">+244 946 005 538</p>
                  <p className="text-gray-700">+244 923 315 700</p>
                  <p className="text-gray-700">+244 923 313 341</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-industrial-orange mt-1" />
                <div className="font-roboto">
                  <p className="text-gray-700">machado@mam.co.ao</p>
                  <p className="text-gray-700">geral@mam.co.ao</p>
                  <p className="text-gray-700">comercial@mam.co.ao</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-industrial-orange mt-1" />
                <p className="text-gray-700 font-roboto">Luanda, Angola</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-700 font-roboto">
              © 2025 MACHADO & MANSOUR. Todos os direitos reservados.
            </p>
            <p className="text-gray-700 font-roboto mt-2 md:mt-0">
              Site desenvolvido por <a href="https://petrohost.ao/" className="text-industrial-orange hover:text-[#15335E] hover:underline">Petrohost</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
