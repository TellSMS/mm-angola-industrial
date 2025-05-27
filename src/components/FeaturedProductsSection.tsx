
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedProductsSection = () => {
  const products = [
    {
      id: "pneus",
      title: "Pneus",
      description: "Pneus para veículos ligeiros e pesados, motociclos, máquinas e equipamentos industriais.",
      image: "pneu.jpg"
    },
    {
      id: "baterias",
      title: "Baterias",
      description: "Baterias de alta performance para viaturas, geradores e aplicações industriais.",
      image: "bateria.jpg"
    },
    {
      id: "lubrificantes",
      title: "Lubrificantes",
      description: "Lubrificantes para motociclos, automóveis, veículos pesados e maquinarias.",
      image: "oleo.png"
    },
    {
      id: "epi",
      title: "EPI",
      description: "Equipamentos de segurança certificados para empresas de todos os setores.",
      image: "uniforme.jpg"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-4">
            Nossos Produtos
          </h2>
          <div className="w-24 h-1 bg-industrial-orange mx-auto mb-6"></div>
          <p className="font-roboto text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra nossa ampla gama de produtos industriais de alta qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-montserrat font-semibold text-xl text-industrial-blue mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 font-roboto mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-industrial-blue text-industrial-blue hover:bg-industrial-orange hover:border-industrial-orange hover:text-white transition-all duration-200"
                    asChild
                  >
                    <Link to={`/produtos#${product.id}`}>
                      Saiba Mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-industrial-orange hover:bg-industrial-orange-dark text-white font-roboto font-semibold transition-colors duration-200"
            asChild
          >
            <Link to="/produtos">
              Ver Todos os Produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
