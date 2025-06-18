
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-industrial-blue via-industrial-blue to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content - Left Side */}
            <div className="space-y-6 text-white">
              <h1 className="font-montserrat font-bold text-4xl lg:text-5xl text-white mb-6">
                Sobre a M&M Lda
              </h1>
              <p className="font-roboto text-lg lg:text-xl text-white/90 leading-relaxed">
                Fornecedor líder de produtos industriais em Angola desde 2016, oferecendo soluções completas e de qualidade para diversos setores.
              </p>
            </div>

            {/* Image - Right Side */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/sobre.jpg" 
                  alt="Sobre a M&M Lda" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-industrial-orange/20 to-white/10 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-4">
                A Nossa História
              </h2>
              <div className="w-24 h-1 bg-industrial-orange mb-6"></div>
              
              <div className="space-y-6 text-gray-700 font-roboto text-lg leading-relaxed">
                <p>
                  A M&M Lda é uma empresa angolana de direito privado, constituída em 2016, 
                  especializada no fornecimento de produtos industriais de alta qualidade.
                </p>
                
                <p>
                  Com anos de experiência no mercado angolano, consolidámo-nos como um parceiro 
                  confiável para empresas de diversos sectores, oferecendo soluções completas 
                  e personalizadas.
                </p>

                <p>
                  A nossa dedicação à excelência e o compromisso com a satisfação do cliente 
                  fizeram-nos crescer e expandir a nossa área de actuação, mantendo sempre 
                  os mais altos padrões de qualidade.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/sobre1.jpg" 
                  alt="Equipa M&M Lda" 
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-industrial-orange/20 to-white/10 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-4">
              Missão, Visão e Valores
            </h2>
            <div className="w-24 h-1 bg-industrial-orange mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-industrial-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-industrial-blue rounded-full"></div>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-industrial-blue mb-4 text-center">
                Missão
              </h3>
              <p className="text-gray-700 font-roboto text-center">
                Fornecer produtos industriais de alta qualidade e soluções personalizadas 
                para empresas, contribuindo para o desenvolvimento industrial de Angola.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-industrial-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-industrial-orange rounded-full"></div>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-industrial-blue mb-4 text-center">
                Visão
              </h3>
              <p className="text-gray-700 font-roboto text-center">
                Ser a empresa de referência no fornecimento de produtos industriais em Angola, 
                reconhecida pela qualidade, inovação e excelência no atendimento.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-industrial-blue mb-4 text-center">
                Valores
              </h3>
              <p className="text-gray-700 font-roboto text-center">
                Integridade, qualidade, compromisso com o cliente, inovação contínua 
                e responsabilidade social e ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-4">
              Os Nossos Números
            </h2>
            <div className="w-24 h-1 bg-industrial-orange mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-industrial-blue mb-2 group-hover:text-industrial-orange transition-colors duration-200">9+</div>
              <div className="text-gray-600 font-roboto">Anos de Experiência</div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-industrial-blue mb-2 group-hover:text-industrial-orange transition-colors duration-200">500+</div>
              <div className="text-gray-600 font-roboto">Clientes Satisfeitos</div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-industrial-blue mb-2 group-hover:text-industrial-orange transition-colors duration-200">8</div>
              <div className="text-gray-600 font-roboto">Sectores Atendidos</div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-industrial-blue mb-2 group-hover:text-industrial-orange transition-colors duration-200">100%</div>
              <div className="text-gray-600 font-roboto">Produtos de Qualidade</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
