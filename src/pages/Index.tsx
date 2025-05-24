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
      image: "/bateria.jpg",
      link: "/produtos#baterias"
    },
    {
      icon: Droplets,
      title: "Lubrificantes",
      description: "Óleos e lubrificantes premium para equipamentos industriais",
      image: "/oleo.png",
      link: "/produtos#lubrificantes"
    },
    {
      icon: Filter,
      title: "Filtros",
      description: "Filtros industriais para máquinas e equipamentos",
      image: "/Filtros.jpg",
      link: "/produtos#filtros"
    },
    {
      icon: Shield,
      title: "EPI",
      description: "Equipamentos de proteção individual certificados",
      image: "/uniforme.jpg",
      link: "/produtos#epi"
    },
    {
      icon: CircleDot,
      title: "Pneus",
      description: "Pneus para veículos ligeiros e equipamentos pesados",
      image: "/pneu.jpg",
      link: "/produtos#pneus"
    },
    {
      icon: Settings,
      title: "Equipamentos",
      description: "Máquinas e ferramentas industriais especializadas",
      image: "/maquina.jpg",
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
    { name: "Construção Civil", icon: HardHat, description: "Materiais e soluções para obras e infraestrutura." },
    { name: "Mineração", icon: Building, description: "Equipamentos e insumos para operações de mineração." }, 
    { name: "Energia", icon: Zap, description: "Componentes e equipamentos para geração e distribuição de energia." },
    { name: "Manufatura", icon: Settings, description: "Suprimentos e tecnologia para linhas de produção." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Fundo azul igual ao print */}
      <section className="py-6 lg:py-3 bg-industrial-blue">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center gap-12 lg:gap-20">
            {/* Texto à esquerda */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4 text-white leading-tight">
                MACHADO & MANSOUR
              </h1>
              <h2 className="font-montserrat font-medium text-2xl lg:text-3xl mb-4 text-white/90">
                Soluções Industriais de Alta Performance
              </h2>
              <p className="font-inter text-lg lg:text-xl mb-8 text-white/80 leading-relaxed">
                Equipamentos, peças e consumíveis de qualidade para otimizar sua operação, reduzir falhas e aumentar a produtividade com soluções! <br className="hidden md:block" />
                Desde 2016, somos referência em produtos industriais em Angola.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-industrial-blue font-inter font-semibold text-lg h-14 px-8 py-0 rounded-lg shadow-md focus:outline-none focus:ring-0 active:bg-white active:text-industrial-blue hover:bg-white hover:text-industrial-blue hover:shadow-md transition-none"
                  asChild
                >
                  <Link to="/produtos">
                    Explore Produtos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Imagem à direita */}
            <div className="w-full lg:w-[480px] xl:w-[520px] flex justify-center items-center">
              <div className="relative w-full aspect-[4/5] flex items-center justify-center">
                <img 
                  src="/hero.jpg" 
                  alt="MACHADO & MANSOUR - Soluções Industriais"
                  className="rounded-xl shadow-2xl w-full h-auto object-contain border border-industrial-border"
                />
              </div>
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
                    className="text-industrial-blue hover:text-industrial-accent font-inter font-medium inline-flex items-center transition-colors duration-200"
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
      <section id="benefits" className="py-20 lg:py-24">
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
              <div
                key={index}
                className="text-center group bg-white border border-industrial-border rounded-xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-industrial-gray-lighter">
                  <benefit.icon className="h-8 w-8 text-industrial-blue" />
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

      {/* Divider sutil entre as seções */}
      <div className="w-full h-[1.5px] bg-industrial-gray-lighter opacity-60 my-2 lg:my-4" />

      {/* Industries Served - Clean list */}
      <section id="industries" className="py-20 lg:py-24 bg-industrial-gray-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-4">
              Atendendo Diversos Setores em Angola
            </h2>
            <p className="font-inter text-lg text-industrial-gray max-w-2xl mx-auto">
              Nossas soluções atendem uma ampla variedade de indústrias em todo território angolano
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="text-center group bg-white border border-industrial-border rounded-xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-industrial-gray-lighter">
                  <industry.icon className="h-8 w-8 text-industrial-blue" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-industrial-blue mb-3">
                  {industry.name}
                </h3>
                <p className="font-inter text-industrial-gray leading-relaxed">
                  {industry.description}
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
                className="bg-industrial-blue hover:bg-industrial-accent text-white font-inter font-semibold transition-colors duration-200"
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
                src="sobre.jpg" 
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
              className="border-2 border-white text-industrial-blue bg-white hover:bg-industrial-accent hover:border-industrial-accent hover:text-white font-inter font-semibold transition-all duration-200"
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
