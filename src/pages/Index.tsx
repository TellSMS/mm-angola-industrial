import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedProductsSection from '@/components/FeaturedProductsSection';
import SectorsSection from '@/components/SectorsSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users, Clock } from 'lucide-react';

const Index = () => {
  const differentials = [
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Produtos de marcas reconhecidas mundialmente com certificação de qualidade"
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Mais de 8 anos fornecendo soluções industriais para empresas em Angola"
    },
    {
      icon: Users,
      title: "Atendimento Especializado",
      description: "Equipa técnica qualificada para orientar na escolha da melhor solução"
    },
    {
      icon: Clock,
      title: "Entrega Eficiente",
      description: "Logística organizada para garantir prazos de entrega confiáveis"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - LAYOUT ORIGINAL RESTAURADO */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-industrial-blue via-industrial-blue to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content - Left Side */}
            <div className="space-y-6 text-white">
              {/* TODO: Substituir por logotipo real da empresa */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-lg inline-block mb-4">
                <span className="font-montserrat font-bold text-xl text-white">LOGO</span>
              </div>
              <h2 className="font-montserrat font-semibold text-2xl lg:text-3xl text-industrial-orange">
                Soluções Industriais de Alta Performance
              </h2>
              <p className="font-roboto text-lg lg:text-xl text-white/90 leading-relaxed">
                Equipamentos, produtos e serviços de qualidade para optimizar a sua operação, reduzir falhas e aumentar a sua produtividade com soluções! Desde 2016, somos referência em Angola.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-industrial-orange hover:bg-orange-600 text-white font-roboto font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  asChild
                >
                  <Link to="/produtos">
                    Conheça Nossos Produtos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-industrial-blue font-roboto font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                  asChild
                >
                  <Link to="/contacto">
                    Fale com um Especialista
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="hero.jpg" 
                  alt="Soluções Industriais"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-industrial-orange/20 to-white/10 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <FeaturedProductsSection />

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-4">
              Porquê Escolher a nossa empresa?
            </h2>
            <div className="w-24 h-1 bg-industrial-orange mx-auto mb-6"></div>
            <p className="font-roboto text-lg text-gray-600 max-w-3xl mx-auto">
              Compromisso com a sua eficiência através de soluções industriais de qualidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-industrial-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-industrial-orange/10 transition-colors duration-200">
                    <Icon className="h-8 w-8 text-industrial-blue group-hover:text-industrial-orange transition-colors duration-200" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-industrial-blue mb-3">
                    {item.title}
                  </h3>
                  <p className="font-roboto text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <SectorsSection />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-industrial-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6">
            Pronto para encontrar a solução ideal para sua empresa?
          </h2>
          <p className="font-roboto text-lg mb-8 max-w-2xl mx-auto">
            Nossa equipa de especialistas está pronta para ajudá-lo a escolher 
            os produtos certos para as suas necessidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-industrial-orange hover:bg-orange-600 text-white border-2 border-industrial-orange hover:border-orange-600 font-roboto font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <a
                href="https://wa.me/244946005595?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20através%20do%20site%20da%20Machado%20%26%20Mansour."
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-industrial-blue font-roboto font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              asChild
            >
              <Link to="/contacto">
                Entre em Contacto
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
