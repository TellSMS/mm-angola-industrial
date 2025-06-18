
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const location = useLocation();

  // Effect to handle scroll to anchor when navigating from other pages
  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location]);

  const productCategories = [
    {
      id: "pneus",
      title: "Pneus Industriais e Automotivos",
      description: "Pneus para veículos ligeiros e pesados, motociclos, máquinas e equipamentos industriais.",
      image: "pneu.jpeg",
      brands: [
        "Avon Tyres",
        "Fuzion",
        "Kumho Tire",
        "Falken",
        "Bridgestone",
        "Continental",
        "Dunlop",
        "BFGoodrich",
        "Mastercraft",
        "Michelin",
        "Hercules Tires",
        "Kelly Tires",
        "General Tire",
        "Pirelli",
        "Hankook",
        "Uniroyal",
        "Cooper Tires",
        "Nexen Tire",
        "Nokian Tyres",
        "Zeetex",
        "RockBuster",
        "RoadOne"
      ],
      features: [
        "Menor compactação do solo",
        "Maior conforto para o operador",
        "Maior economia de combustível",
        "Maior durabilidade",
        "Variedade para todas as aplicações"
      ]
    },
    {
      id: "baterias",
      title: "Baterias Automotivas e Industriais",
      description: "Antes de escolher a marca de bateria ideal, é importante saber como avaliá-la. As baterias disponíveis garantem qualidade e confiabilidade.",
      image: "bateria.jpeg",
      brands: ["BOSCH", "VARTA", "MIDAC", "ENERGIZER", "ZENO"],
      features: [
        "Tipo da bateria",
        "Capacidade e polaridade",
        "Medida de CCA",
        "Reserva de capacidade",
        "Tamanho adequado",
        "Garantia estendida"
      ],
      detailedInfo: "Trabalhamos com marcas reconhecidas pela confiabilidade, oferecendo modelos ideais para diversas aplicações automotivas e industriais."
    },
    {
      id: "lubrificantes",
      title: "Lubrificantes e Óleos Industriais",
      description: "Lubrificantes para veículos ligeiros e pesados, motociclos, máquinas, equipamentos industriais e navios.",
      image: "oleo.png",
      brands: ["ENOC", "ADNOC", "SHELL", "TOTAL", "Mobil", "NGOL"],
      features: [
        "Lubrificantes para máquinas industriais",
        "Indústria têxtil",
        "Veículos de alto desempenho",
        "Sistemas de refrigeração",
        "Navios e embarcações marítimas"
      ],
      categories: [
        "Automotivo",
        "Industrial", 
        "Marítimo",
        "Comercial"
      ]
    },
    {
      id: "epi",
      title: "Equipamentos de Protecção Individual (EPI)",
      description: "Seguindo as normas internacionais de segurança, oferecemos EPIs adequados para cada função e garantimos protecção completa para ambientes industriais, construção civil e logística.",
      image: "uniforme.jpg",
      brands: ["Diversas marcas certificadas"],
      features: [
        "Protecção da cabeça: capacete",
        "Protecção ocular: óculos",
        "Protecção auditiva: protector auricular",
        "Protecção respiratória: máscara",
        "Protecção facial: face shield",
        "Protecção do tronco: traje de segurança",
        "Protecção de mãos e braços: luvas e braçadeiras",
        "Protecção de pés e pernas: calçados e perneiras",
        "Protecção contra quedas: cinturão de segurança e mosquetão"
      ]
    },
    {
      id: "filtros",
      title: "Filtros Industriais",
      description: "Filtros de óleo, ar, combustível e hidráulicos para máquinas, camiões, geradores e equipamentos pesados com eficiência de filtração superior.",
      image: "Filtros.jpg",
      brands: ["Hengst Filter", "Mann-Filter", "Fleetguard", "Luber-finer"],
      features: [
        "Eficiência de filtração superior",
        "Protecção completa de equipamentos",
        "Variedade para todos os tipos",
        "Longa duração",
        "Fácil instalação"
      ]
    },
    {
      id: "soldadura",
      title: "Material de Soldadura",
      description: "Equipamentos completos para soldadura profissional, incluindo máquinas, eléctrodos, máscaras, cabos e todos os consumíveis necessários.",
      image: "sol.jpg",
      brands: ["Diversas marcas profissionais"],
      features: [
        "Máquinas de soldar profissionais",
        "Eléctrodos de alta qualidade",
        "Máscaras de protecção",
        "Cabos e reguladores",
        "Consumíveis diversos"
      ]
    },
    {
      id: "equipamentos",
      title: "Equipamentos Diversos",
      description: "Máquinas de elevação, máquinas industriais.",
      image: "maquina.jpg",
      brands: ["Marcas líderes internacionais"],
      features: [
        "Compressores industriais",
        "Geradores de energia",
        "Ferramentas de construção",
        "Máquinas de corte",
        "Equipamentos de perfuração",
        "Tecnologia avançada"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-industrial-blue to-industrial-blue-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6">
              Nossos Produtos e Serviços
            </h1>
            <p className="font-roboto text-lg lg:text-xl text-gray-200">
              Descubra a nossa vasta gama de produtos industriais de alta qualidade, 
              cuidadosamente seleccionados para atender as necessidades do seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {productCategories.map((category, index) => (
              <div key={category.id} id={category.id} className="scroll-mt-20">
                {/* Category Header */}
                <div className="text-center mb-12">
                  <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-4">
                    {category.title}
                  </h2>
                  <div className="w-24 h-1 bg-industrial-orange mx-auto mb-6"></div>
                  <p className="font-roboto text-lg text-gray-600 max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Category Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                    <ProductCard
                      title={category.title}
                      description={category.description}
                      image={category.image}
                      brands={category.brands}
                      features={category.features}
                    />
                  </div>
                  
                  <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                    <div className="space-y-6">
                      {/* Brands */}
                      {category.brands && category.brands.length > 0 && (
                        <div>
                          <h4 className="font-montserrat font-semibold text-xl text-industrial-blue mb-4">
                            Marcas Principais
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {category.brands.map((brand, brandIndex) => (
                              <div 
                                key={brandIndex}
                                className="bg-white border border-gray-200 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
                              >
                                <span className="font-roboto font-medium text-industrial-blue text-sm">
                                  {brand}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Categories for Lubrificantes */}
                      {category.categories && (
                        <div>
                          <h4 className="font-montserrat font-semibold text-xl text-industrial-blue mb-4">
                            Categorias Disponíveis
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {category.categories.map((cat, catIndex) => (
                              <div 
                                key={catIndex}
                                className="bg-industrial-orange-light border border-industrial-orange rounded-lg p-3 text-center"
                              >
                                <span className="font-roboto font-medium text-industrial-blue text-sm">
                                  {cat}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Features */}
                      {category.features && category.features.length > 0 && (
                        <div>
                          <h4 className="font-montserrat font-semibold text-xl text-industrial-blue mb-4">
                            Características e Aplicações
                          </h4>
                          <ul className="space-y-3">
                            {category.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-industrial-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="font-roboto text-gray-700">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Detailed Info */}
                      {category.detailedInfo && (
                        <div className="bg-industrial-gray-lighter p-4 rounded-lg border-l-4 border-industrial-orange">
                          <p className="font-roboto text-gray-700 italic">
                            {category.detailedInfo}
                          </p>
                        </div>
                      )}

                      {/* CTA */}
                      <div className="pt-4">
                        <Button 
                          className="bg-industrial-orange hover:bg-industrial-orange-dark text-white font-roboto font-semibold transition-colors duration-200"
                          asChild
                        >
                          <Link to="/contacto">
                            Solicitar Informações
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-industrial-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6">
            Encontre a Solução Ideal para o Seu Negócio
          </h2>
          <p className="font-roboto text-lg mb-8 max-w-2xl mx-auto">
            A nossa equipa de especialistas está pronta para ajudá-lo a escolher 
            os produtos certos para as suas necessidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-industrial-blue border-2 border-white font-roboto font-semibold transition-none shadow-none hover:bg-white hover:text-industrial-blue hover:border-white focus:bg-white focus:text-industrial-blue focus:border-white active:bg-white active:text-industrial-blue active:border-white"
              asChild
            >
              <a
                href="https://wa.me/244946005595?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20personalizado%20através%20do%20site%20da%20M%26M%20Lda."
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento Personalizado
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-industrial-blue border-2 border-white font-roboto font-semibold transition-none shadow-none hover:bg-white hover:text-industrial-blue hover:border-white focus:bg-white focus:text-industrial-blue focus:border-white active:bg-white active:text-industrial-blue active:border-white"
              asChild
            >
              <a
                href="https://wa.me/244946005595?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20através%20do%20site%20da%20M%26M%20Lda."
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com Especialista
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
