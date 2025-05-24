
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      id: "baterias",
      title: "Baterias Automotivas e Industriais",
      description: "Baterias de alta performance para viaturas, geradores, empilhadeiras, sistemas de energia solar e aplicações industriais diversas.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      brands: ["Bosch", "Varta", "Midac", "Energizer", "Zeno Battery"],
      features: [
        "Alta durabilidade e confiança",
        "Diferentes capacidades e polaridades",
        "Medidas de CCA otimizadas",
        "Reserva de capacidade superior",
        "Garantia estendida"
      ]
    },
    {
      id: "lubrificantes",
      title: "Lubrificantes e Óleos Industriais",
      description: "Lubrificantes premium para viaturas, máquinas, geradores e equipamentos industriais. Reduzem ruído, calor e desgaste, aumentando a vida útil dos motores.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      brands: ["ENOC", "ADNOC", "Shell", "Total"],
      features: [
        "Lubrificantes para máquinas industriais",
        "Óleos têxteis especializados",
        "Massas lubrificantes",
        "Lubrificantes para motores a gás",
        "Lubrificantes de refrigeração",
        "Lubrificantes para navios"
      ]
    },
    {
      id: "filtros",
      title: "Filtros Industriais",
      description: "Filtros de óleo, ar, combustível e hidráulicos para máquinas, camiões, geradores e equipamentos pesados com eficiência de filtração superior.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      brands: ["Hengst Filter", "Mann-Filter", "Fleetguard", "Luber-finer"],
      features: [
        "Eficiência de filtração superior",
        "Proteção completa de equipamentos",
        "Variedade para todos os tipos",
        "Longa duração",
        "Fácil instalação"
      ]
    },
    {
      id: "epi",
      title: "Equipamentos de Proteção Individual (EPI)",
      description: "Equipamentos de segurança certificados para empresas da construção civil, minas, fábricas e indústrias em geral.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      brands: ["Diversas marcas certificadas"],
      features: [
        "Botas e calçados de segurança",
        "Capacetes e protetores",
        "Luvas especializadas",
        "Óculos de proteção",
        "Coletes refletivos",
        "Fardamentos profissionais",
        "Máscaras e protetores auriculares",
        "Cinturões de segurança e mosquetões"
      ]
    },
    {
      id: "pneus",
      title: "Pneus Industriais e Automotivos",
      description: "Pneus para viaturas ligeiras, camiões, empilhadeiras, máquinas agrícolas e equipamentos pesados das melhores marcas mundiais.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      brands: ["AVON", "FUZION", "KUMHO", "FALKEN", "BRIDGESTONE", "Continental", "DUNLOP", "BFGoodrich", "Firestone", "MICHELIN", "HERCULES", "KELLY", "GENERAL", "Pirelli", "HANKOOK", "UNIROYAL", "COOPER", "NEXEN", "NOKIAN"],
      features: [
        "Menor compactação do solo",
        "Maior conforto para o operador",
        "Maior economia de combustível",
        "Maior durabilidade",
        "Variedade para todas as aplicações"
      ]
    },
    {
      id: "soldadura",
      title: "Material de Soldadura",
      description: "Equipamentos completos para soldadura profissional, incluindo máquinas, eletrodos, máscaras, cabos e todos os consumíveis necessários.",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop",
      brands: ["Diversas marcas profissionais"],
      features: [
        "Máquinas de soldar profissionais",
        "Eletrodos de alta qualidade",
        "Máscaras de proteção",
        "Cabos e reguladores",
        "Consumíveis diversos"
      ]
    },
    {
      id: "equipamentos",
      title: "Equipamentos e Máquinas Industriais",
      description: "Compressores, geradores, ferramentas de construção, máquinas de corte e perfuração para aplicações industriais robustas.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop",
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
              cuidadosamente selecionados para atender as necessidades do seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-industrial-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-3xl text-industrial-blue mb-6">
              Soluções Completas para Todas as Indústrias
            </h2>
            <p className="font-roboto text-lg text-gray-600 mb-8">
              Na MACHADO & MANSOUR, oferecemos uma gama abrangente de produtos industriais 
              das melhores marcas mundiais. Cada categoria foi cuidadosamente selecionada 
              para garantir qualidade, durabilidade e performance superior.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="font-montserrat font-bold text-2xl text-industrial-orange">8+</div>
                <div className="font-roboto text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-2xl text-industrial-orange">7</div>
                <div className="font-roboto text-sm text-gray-600">Categorias Principais</div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-2xl text-industrial-orange">50+</div>
                <div className="font-roboto text-sm text-gray-600">Marcas Parceiras</div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-2xl text-industrial-orange">100%</div>
                <div className="font-roboto text-sm text-gray-600">Qualidade Garantida</div>
              </div>
            </div>
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
                            {category.brands.slice(0, 9).map((brand, brandIndex) => (
                              <div 
                                key={brandIndex}
                                className="bg-white border border-gray-200 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
                              >
                                <span className="font-roboto font-medium text-industrial-blue text-sm">
                                  {brand}
                                </span>
                              </div>
                            ))}
                            {category.brands.length > 9 && (
                              <div className="bg-gray-100 border border-gray-200 rounded-lg p-3 text-center">
                                <span className="font-roboto font-medium text-industrial-orange text-sm">
                                  +{category.brands.length - 9} mais
                                </span>
                              </div>
                            )}
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

      {/* Quality Assurance */}
      <section className="py-16 lg:py-24 bg-industrial-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-6">
              Garantia de Qualidade
            </h2>
            <p className="font-roboto text-lg text-gray-600 max-w-3xl mx-auto">
              Todos os nossos produtos passam por rigoroso controlo de qualidade e são fornecidos 
              por marcas reconhecidas mundialmente, garantindo performance e durabilidade excepcionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-montserrat font-bold text-2xl text-industrial-orange">✓</span>
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-industrial-blue mb-3">
                Produtos Certificados
              </h3>
              <p className="font-roboto text-gray-600">
                Todos os produtos atendem às normas internacionais de qualidade e segurança
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-montserrat font-bold text-2xl text-industrial-orange">⚡</span>
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-industrial-blue mb-3">
                Entrega Rápida
              </h3>
              <p className="font-roboto text-gray-600">
                Logística eficiente para entrega em todo o território angolano
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-montserrat font-bold text-2xl text-industrial-orange">🛡️</span>
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-industrial-blue mb-3">
                Suporte Técnico
              </h3>
              <p className="font-roboto text-gray-600">
                Equipa especializada para orientação técnica e pós-venda
              </p>
            </div>
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
              className="bg-industrial-orange hover:bg-industrial-orange-dark text-white font-roboto font-semibold transition-colors duration-200"
              asChild
            >
              <Link to="/contacto">
                Solicitar Orçamento Personalizado
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-industrial-blue hover:border-white font-roboto font-semibold transition-all duration-200"
              asChild
            >
              <a href="tel:+244946005595">
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
