import Header from '@/components/Header';
import Footer from '@/components/Footer';
const About = () => {
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-industrial-blue to-industrial-blue/90 flex items-center">
        <div className="absolute inset-0">
          <img src="/sobre.jpg" alt="Sobre a M&M Lda" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-montserrat font-bold text-4xl lg:text-5xl text-white mb-6">
              Sobre a M&M Lda
            </h1>
            <p className="font-roboto text-lg text-white/90 max-w-2xl">
              Fornecedor líder de produtos industriais em Angola desde 2016
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-6">
                A Nossa História
              </h2>
              <div className="w-24 h-1 bg-industrial-orange mb-8"></div>
              
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
            <div>
              <img src="/sobre1.jpg" alt="Equipa M&M Lda" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              
              <h3 className="font-montserrat font-bold text-xl text-industrial-blue mb-4">
                Missão
              </h3>
              <p className="text-gray-700 font-roboto">
                Fornecer produtos industriais de alta qualidade e soluções personalizadas 
                para empresas, contribuindo para o desenvolvimento industrial de Angola.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              
              <h3 className="font-montserrat font-bold text-xl text-industrial-blue mb-4">
                Visão
              </h3>
              <p className="text-gray-700 font-roboto">
                Ser a empresa de referência no fornecimento de produtos industriais em Angola, 
                reconhecida pela qualidade, inovação e excelência no atendimento.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              
              <h3 className="font-montserrat font-bold text-xl text-industrial-blue mb-4">
                Valores
              </h3>
              <p className="text-gray-700 font-roboto">
                Integridade, qualidade, compromisso com o cliente, inovação contínua 
                e responsabilidade social e ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      

      <Footer />
    </div>;
};
export default About;