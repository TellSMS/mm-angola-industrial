
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Zap, 
  Droplet, 
  Filter, 
  Shield, 
  CircleDot, 
  Wrench,
  Phone,
  ArrowRight,
  CheckCircle,
  Building,
  Truck,
  Factory,
  Pickaxe
} from 'lucide-react';

const Index = () => {
  const productCategories = [
    {
      icon: Zap,
      title: "Baterias",
      description: "Baterias automotivas e industriais de alta qualidade",
      link: "/produtos#baterias"
    },
    {
      icon: Droplet,
      title: "Lubrificantes",
      description: "Óleos e lubrificantes para máquinas e motores",
      link: "/produtos#lubrificantes"
    },
    {
      icon: Filter,
      title: "Filtros",
      description: "Filtros industriais para todos os tipos de equipamentos",
      link: "/produtos#filtros"
    },
    {
      icon: Shield,
      title: "EPI",
      description: "Equipamentos de proteção individual certificados",
      link: "/produtos#epi"
    },
    {
      icon: CircleDot,
      title: "Pneus",
      description: "Pneus para veículos ligeiros e pesados",
      link: "/produtos#pneus"
    },
    {
      icon: Wrench,
      title: "Equipamentos",
      description: "Máquinas e ferramentas industriais",
      link: "/produtos#equipamentos"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Qualidade Garantida",
      description: "Produtos de marcas reconhecidas mundialmente"
    },
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Logística eficiente em todo o território angolano"
    },
    {
      icon: Factory,
      title: "Experiência Industrial",
      description: "Mais de 8 anos no mercado angolano"
    },
    {
      icon: Building,
      title: "Soluções Completas",
      description: "Desde pequenas peças até equipamentos complexos"
    }
  ];

  const industries = [
    "Construção Civil",
    "Mineração",
    "Indústria Alimentar", 
    "Logística",
    "Agricultura",
    "Energia",
    "Manufatura",
    "Transportes"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-industrial-blue via-industrial-blue-light to-industrial-gray-dark text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop")'
          }}
        ></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6 leading-tight">
              MACHADO & MANSOUR
            </h1>
            <h2 className="font-montserrat font-semibold text-2xl lg:text-3xl mb-6 text-industrial-orange">
              O Seu Parceiro Industrial de Confiança em Angola
            </h2>
            <p className="font-roboto text-lg lg:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Fornecemos produtos e equipamentos de alta qualidade para impulsionar a sua operação. 
              Desde 2016, somos referência em soluções industriais completas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-industrial-orange hover:bg-industrial-orange-dark text-white font-roboto font-semibold text-lg px-8 py-4"
                asChild
              >
                <Link to="/produtos">
                  Explore Nossos Produtos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-industrial-blue font-roboto font-semibold text-lg px-8 py-4"
                asChild
              >
                <Link to="/contacto">
                  <Phone className="mr-2 h-5 w-5" />
                  Fale Conosco
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-24 bg-industrial-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-4">
              Nossas Categorias de Produtos
            </h2>
            <p className="font-roboto text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma vasta gama de produtos industriais para atender todas as suas necessidades operacionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="bg-industrial-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-industrial-orange group-hover:text-white transition-all duration-300">
                    <category.icon className="h-8 w-8 text-industrial-orange group-hover:text-white" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-industrial-blue mb-3">
                    {category.title}
                  </h3>
                  <p className="font-roboto text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <Link 
                    to={category.link}
                    className="text-industrial-orange hover:text-industrial-orange-dark font-roboto font-medium inline-flex items-center"
                  >
                    Saiba Mais
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-4">
              Porquê Escolher-nos?
            </h2>
            <p className="font-roboto text-lg text-gray-600 max-w-2xl mx-auto">
              Somos muito mais que um fornecedor. Somos o seu parceiro estratégico para o sucesso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-industrial-orange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-industrial-orange transition-all duration-300">
                  <benefit.icon className="h-10 w-10 text-industrial-orange group-hover:text-white" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-industrial-blue mb-3">
                  {benefit.title}
                </h3>
                <p className="font-roboto text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 lg:py-24 bg-industrial-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-4">
              Setores que Servimos
            </h2>
            <p className="font-roboto text-lg text-gray-600 max-w-2xl mx-auto">
              As nossas soluções atendem uma ampla variedade de indústrias em Angola
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Pickaxe className="h-8 w-8 text-industrial-orange mx-auto mb-3" />
                <p className="font-roboto font-medium text-industrial-blue">
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-6">
                Sobre a MACHADO & MANSOUR
              </h2>
              <p className="font-roboto text-lg text-gray-600 mb-6">
                Fundada em 2016 em Luanda, a MACHADO & MANSOUR estabeleceu-se como uma referência 
                no fornecimento de produtos industriais de qualidade em Angola. Especializamo-nos 
                na distribuição de uma vasta gama de produtos para diversos setores.
              </p>
              <p className="font-roboto text-lg text-gray-600 mb-8">
                O nosso compromisso com a qualidade, profissionalismo e transparência fez-nos 
                crescer e tornar num parceiro de confiança para empresas em todo o país.
              </p>
              <Button 
                className="bg-industrial-blue hover:bg-industrial-blue-light text-white font-roboto font-semibold"
                asChild
              >
                <Link to="/sobre">
                  Conheça Nossa História
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop" 
                alt="Equipa MACHADO & MANSOUR"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-blue/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-industrial-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6">
            Pronto para Encontrar a Solução Ideal?
          </h2>
          <p className="font-roboto text-lg mb-8 max-w-2xl mx-auto">
            A nossa equipa de especialistas está pronta para ajudá-lo a encontrar 
            os produtos certos para o seu negócio. Contacte-nos hoje mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-industrial-orange hover:bg-industrial-orange-dark text-white font-roboto font-semibold"
              asChild
            >
              <Link to="/contacto">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-industrial-blue font-roboto font-semibold"
              asChild
            >
              <a href="tel:+244946005595">
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
