import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  Clock, 
  Shield,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Qualidade",
      description: "Compromisso inabalável com produtos e serviços de excelência"
    },
    {
      icon: Users,
      title: "Profissionalismo",
      description: "Equipa qualificada e atendimento especializado"
    },
    {
      icon: Heart,
      title: "Transparência",
      description: "Relações comerciais baseadas na confiança e honestidade"
    },
    {
      icon: Target,
      title: "Foco no Cliente",
      description: "Soluções personalizadas para cada necessidade"
    }
  ];

  const milestones = [
    {
      year: "2016",
      title: "Fundação",
      description: "Estabelecimento da MACHADO & MANSOUR em Luanda, Angola"
    },
    {
      year: "2018",
      title: "Expansão de Produtos",
      description: "Alargamento da gama de produtos industriais e parcerias estratégicas"
    },
    {
      year: "2020",
      title: "Consolidação",
      description: "Consolidação no mercado angolano como fornecedor de referência"
    },
    {
      year: "2024",
      title: "Liderança",
      description: "Posição de liderança em soluções industriais completas"
    }
  ];

  const achievements = [
    "Mais de 8 anos de experiência no mercado angolano",
    "Centenas de clientes satisfeitos em diversos setores",
    "Parcerias com marcas líderes mundiais",
    "Cobertura em todo o território nacional",
    "Equipa técnica especializada",
    "Compromisso com a sustentabilidade"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-industrial-blue to-industrial-blue-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6">
              Sobre a MACHADO & MANSOUR
            </h1>
            <p className="font-roboto text-lg lg:text-xl text-gray-200">
              Conheça a nossa história, missão e compromisso com a excelência no fornecimento 
              de soluções industriais em Angola
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-6">
                A Nossa História
              </h2>
              <p className="font-roboto text-lg text-gray-600 mb-6">
                A MACHADO & MANSOUR foi fundada em 2016 em Luanda, Angola, com a visão de se tornar 
                o fornecedor de referência em produtos industriais no mercado angolano. Desde o início, 
                a nossa empresa tem-se dedicado à distribuição e fornecimento de uma vasta gama de 
                produtos industriais e automotivos de alta qualidade.
              </p>
              <p className="font-roboto text-lg text-gray-600 mb-6">
                Ao longo dos anos, expandimos a nossa atuação para os setores de prestação de serviços, 
                construção civil e obras públicas, sempre mantendo o foco principal no comércio a grosso 
                de produtos essenciais para diversas indústrias.
              </p>
              <p className="font-roboto text-lg text-gray-600">
                Hoje, somos reconhecidos pela nossa capacidade de oferecer soluções completas, 
                desde a conceção do projeto até à entrega final, sempre priorizando a qualidade, 
                o cumprimento de prazos e a satisfação dos nossos clientes.
              </p>
            </div>
            <div className="relative">
              <img 
                src="sobre.jpg" 
                alt="Instalações MACHADO & MANSOUR"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-blue/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores - NOVO LAYOUT */}
      <section className="py-16 lg:py-24 bg-industrial-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-4">
              Missão, Visão e Valores
            </h2>
            <p className="font-roboto text-lg text-gray-600 max-w-2xl mx-auto">
              Os pilares que orientam a nossa atuação e definem o nosso compromisso com a excelência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Missão */}
            <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
              <Target className="h-8 w-8 text-industrial-orange mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-montserrat font-semibold text-lg text-industrial-blue mb-1">Missão</h4>
                <p className="font-roboto text-gray-700 text-sm">
                  Fornecer produtos industriais de alta qualidade e soluções completas que garantam eficiência e segurança às operações dos nossos clientes, contribuindo para o desenvolvimento industrial de Angola.
                </p>
              </div>
            </div>
            {/* Visão */}
            <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
              <Eye className="h-8 w-8 text-industrial-orange mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-montserrat font-semibold text-lg text-industrial-blue mb-1">Visão</h4>
                <p className="font-roboto text-gray-700 text-sm">
                  Ser a empresa líder no fornecimento de produtos industriais em Angola, reconhecida pela qualidade, inovação e compromisso com o sucesso dos nossos clientes e parceiros.
                </p>
              </div>
            </div>
            {/* Compromisso */}
            <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
              <Award className="h-8 w-8 text-industrial-orange mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-montserrat font-semibold text-lg text-industrial-blue mb-1">Compromisso</h4>
                <p className="font-roboto text-gray-700 text-sm">
                  Manter os mais altos padrões de qualidade, profissionalismo e transparência em todas as nossas relações comerciais, criando parcerias de valor duradouro.
                </p>
              </div>
            </div>
            {/* Qualidade */}
            <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-8 w-8 text-industrial-orange mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-montserrat font-semibold text-lg text-industrial-blue mb-1">Qualidade</h4>
                <p className="font-roboto text-gray-700 text-sm">
                  Compromisso inabalável com produtos e serviços de excelência
                </p>
              </div>
            </div>
            {/* Profissionalismo */}
            <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
              <Users className="h-8 w-8 text-industrial-orange mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-montserrat font-semibold text-lg text-industrial-blue mb-1">Profissionalismo</h4>
                <p className="font-roboto text-gray-700 text-sm">
                  Equipa qualificada e atendimento especializado
                </p>
              </div>
            </div>
            {/* Transparência */}
            <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
              <Heart className="h-8 w-8 text-industrial-orange mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-montserrat font-semibold text-lg text-industrial-blue mb-1">Transparência</h4>
                <p className="font-roboto text-gray-700 text-sm">
                  Relações comerciais baseadas na confiança e honestidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements - Os Nossos Conquistas */}
      <section className="py-16 lg:py-24 bg-industrial-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-4">
              Os Nossos Conquistas
            </h2>
            <p className="font-roboto text-lg text-gray-600 max-w-2xl mx-auto">
              Resultados que demonstram o nosso compromisso com a excelência
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center bg-white p-6 rounded-lg shadow-md">
                <CheckCircle className="h-6 w-6 text-industrial-orange mr-4 flex-shrink-0" />
                <p className="font-roboto text-gray-700">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Approach */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="sobre1.jpg" 
                alt="Equipa profissional"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-blue/20 to-transparent rounded-lg"></div>
            </div>
            <div>
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-6">
                A Nossa Abordagem
              </h2>
              <p className="font-roboto text-lg text-gray-600 mb-6">
                A nossa abordagem é versátil e focada em resultados. Trabalhamos de forma próxima 
                com os nossos clientes para compreender as suas necessidades específicas e oferecer 
                soluções personalizadas que garantam o máximo de eficiência e valor.
              </p>
              <p className="font-roboto text-lg text-gray-600 mb-6">
                Contamos com uma equipa de profissionais experientes e qualificados, que combinam 
                conhecimento técnico com um atendimento personalizado. Cada projeto é tratado com 
                a atenção e o cuidado que merece.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-industrial-orange mr-3" />
                  <span className="font-roboto text-gray-700">Cumprimento rigoroso de prazos</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-industrial-orange mr-3" />
                  <span className="font-roboto text-gray-700">Atendimento especializado e personalizado</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-industrial-orange mr-3" />
                  <span className="font-roboto text-gray-700">Garantia de qualidade em todos os produtos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
