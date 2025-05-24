
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Battery, 
  Droplets, 
  Filter, 
  Shield, 
  CircleDot, 
  Settings,
  Phone,
  ArrowRight,
  CheckCircle,
  Building,
  Truck,
  Factory,
  HardHat,
  Zap
} from 'lucide-react';

const Index = () => {
  const productCategories = [
    {
      icon: Battery,
      title: "Baterias",
      description: "Baterias automotivas e industriais de alta performance",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      link: "/produtos#baterias"
    },
    {
      icon: Droplets,
      title: "Lubrificantes",
      description: "Óleos e lubrificantes premium para equipamentos industriais",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      link: "/produtos#lubrificantes"
    },
    {
      icon: Filter,
      title: "Filtros",
      description: "Filtros industriais para máquinas e equipamentos",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      link: "/produtos#filtros"
    },
    {
      icon: Shield,
      title: "EPI",
      description: "Equipamentos de proteção individual certificados",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      link: "/produtos#epi"
    },
    {
      icon: CircleDot,
      title: "Pneus",
      description: "Pneus para veículos ligeiros e equipamentos pesados",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      link: "/produtos#pneus"
    },
    {
      icon: Settings,
      title: "Equipamentos",
      description: "Máquinas e ferramentas industriais especializadas",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop",
      link: "/produtos#equipamentos"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Qualidade Garantida",
      description: "Produtos de marcas reconhecidas mundialmente com certificação de qualidade"
    },
    {
      icon: Truck,
      title: "Logística Eficiente",
      description: "Entrega rápida e segura em todo o território angolano"
    },
    {
      icon: Factory,
      title: "Experiência Comprovada",
      description: "Mais de 8 anos de expertise no mercado industrial angolano"
    },
    {
      icon: Building,
      title: "Soluções Completas",
      description: "Desde componentes individuais até projetos industriais completos"
    }
  ];

  const industries = [
    { name: "Construção Civil", icon: HardHat },
    { name: "Mineração", icon: Building }, 
    { name: "Indústria Alimentar", icon: Factory },
    { name: "Logística", icon: Truck },
    { name: "Energia", icon: Zap },
    { name: "Manufatura", icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Minimalist */}
      <section className="relative bg-gradient-to-r from-industrial-blue to-industrial-blue-light text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop")'
          }}
        ></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-montserrat font-bold text-5xl lg:text-6xl mb-6 leading-tight">
              MACHADO & MANSOUR
            </h1>
            <h2 className="font-montserrat font-medium text-2xl lg:text-3xl mb-6 opacity-90">
              Soluções Industriais de Alta Performance
            </h2>
            <p className="font-inter text-lg lg:text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Equipamentos, peças e consumíveis de qualidade para otimizar sua operação. 
              Desde 2016, somos referência em produtos industriais em Angola.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-industrial-accent hover:bg-industrial-accent/90 text-white font-inter font-semibold text-lg px-8 py-4 transition-all duration-200"
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
                className="border-2 border-white text-white hover:bg-white hover:text-industrial-blue font-inter font-semibold text-lg px-8 py-4 transition-all duration-200"
                asChild
              >
                <Link to="/contacto">
                  <Phone className="mr-2 h-5 w-5" />
                  Fale com um Especialista
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories - Clean grid */}
      <section className="py-20 lg:py-24 bg-industrial-gray-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-4">
              Nossas Soluções para Sua Indústria
            </h2>
            <p className="font-inter text-lg text-industrial-gray max-w-2xl mx-auto">
              Oferecemos uma ampla gama de produtos industriais selecionados para atender 
              todas as suas necessidades operacionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border border-industrial-border bg-white">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-industrial-blue mb-3">
                    {category.title}
                  </h3>
                  <p className="font-inter text-industrial-gray mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <Link 
                    to={category.link}
                    className="text-industrial-accent hover:text-industrial-accent/80 font-inter font-medium inline-flex items-center transition-colors duration-200"
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

      {/* Why Choose Us - Minimal */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-4">
              Compromisso com a Sua Eficiência
            </h2>
            <p className="font-inter text-lg text-industrial-gray max-w-2xl mx-auto">
              Somos o seu parceiro estratégico para o sucesso, oferecendo qualidade 
              e confiabilidade em cada produto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-industrial-accent" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-industrial-blue mb-3">
                  {benefit.title}
                </h3>
                <p className="font-inter text-industrial-gray leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served - Clean list */}
      <section className="py-20 lg:py-24 bg-industrial-gray-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-4">
              Atendendo Diversos Setores em Angola
            </h2>
            <p className="font-inter text-lg text-industrial-gray max-w-2xl mx-auto">
              Nossas soluções atendem uma ampla variedade de indústrias em todo território angolano
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-industrial-border"
              >
                <industry.icon className="h-6 w-6 text-industrial-accent mx-auto mb-3" />
                <p className="font-inter font-medium text-industrial-text">
                  {industry.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview - Clean */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-6">
                Sobre a MACHADO & MANSOUR
              </h2>
              <p className="font-inter text-lg text-industrial-gray mb-6 leading-relaxed">
                Fundada em 2016 em Luanda, a MACHADO & MANSOUR estabeleceu-se como referência 
                no fornecimento de produtos industriais de qualidade em Angola. Especializamo-nos 
                na distribuição de soluções completas para diversos setores.
              </p>
              <p className="font-inter text-lg text-industrial-gray mb-8 leading-relaxed">
                O nosso compromisso com a qualidade, profissionalismo e transparência fez-nos 
                crescer e tornar num parceiro de confiança para empresas em todo o país.
              </p>
              <Button 
                className="bg-industrial-blue hover:bg-industrial-blue-light text-white font-inter font-semibold transition-colors duration-200"
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
                alt="MACHADO & MANSOUR - Soluções Industriais"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal */}
      <section className="py-20 lg:py-24 bg-industrial-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6">
            Pronto para Encontrar a Solução Ideal?
          </h2>
          <p className="font-inter text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Nossa equipa de especialistas está pronta para ajudá-lo a encontrar 
            os produtos certos para o seu negócio. Contacte-nos hoje mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-industrial-accent hover:bg-industrial-accent/90 text-white font-inter font-semibold transition-colors duration-200"
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
              className="border-2 border-white text-white hover:bg-white hover:text-industrial-blue font-inter font-semibold transition-all duration-200"
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
