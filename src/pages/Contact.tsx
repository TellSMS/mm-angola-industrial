
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Instagram,
  Facebook
} from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contacto através do site');
    const body = encodeURIComponent(
      `Nome: ${formData.name}\n` +
      `Empresa: ${formData.company || 'Não informado'}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone || 'Não informado'}\n\n` +
      `Mensagem:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:geral@mam.co.ao?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    toast.success('A abrir o seu cliente de email...');
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      details: ["+244 946 005 595 (Principal/WhatsApp)", "+244 923 315 700", "+244 923 313 341"],
      action: "tel:+244946005595"
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["geral@mam.co.ao", "comercial@mam.co.ao"],
      action: "mailto:geral@mam.co.ao"
    },
    {
      icon: MapPin,
      title: "Localização",
      details: ["Luanda, Angola"],
      action: null
    },
    {
      icon: Clock,
      title: "Horário",
      details: ["Segunda a Sexta: 08:00 - 17:00", "Sábado: 08:00 - 12:00"],
      action: null
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
              Entre em Contacto
            </h1>
            <p className="font-roboto text-lg lg:text-xl text-gray-200">
              Estamos aqui para ajudá-lo a encontrar as melhores soluções industriais 
              para o seu negócio. Contacte-nos hoje mesmo!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-industrial-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-industrial-orange" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg text-industrial-blue mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="font-roboto text-gray-600 text-sm">
                        {info.action && detailIndex === 0 ? (
                          <a 
                            href={info.action} 
                            className="hover:text-industrial-orange transition-colors duration-200"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-montserrat font-bold text-3xl text-industrial-blue mb-6">
                Envie-nos uma Mensagem
              </h2>
              <p className="font-roboto text-gray-600 mb-8">
                Preencha o formulário abaixo e a nossa equipa entrará em contacto consigo 
                o mais breve possível para discutir as suas necessidades.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-roboto font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 focus:border-industrial-orange focus:ring-industrial-orange"
                      placeholder="O seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block font-roboto font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 focus:border-industrial-orange focus:ring-industrial-orange"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block font-roboto font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 focus:border-industrial-orange focus:ring-industrial-orange"
                      placeholder="o-seu-email@exemplo.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-roboto font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 focus:border-industrial-orange focus:ring-industrial-orange"
                      placeholder="+244 123 456 789"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-roboto font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 focus:border-industrial-orange focus:ring-industrial-orange"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-roboto font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[120px] border-gray-300 focus:border-industrial-orange focus:ring-industrial-orange"
                    placeholder="Descreva as suas necessidades ou faça a sua pergunta..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="bg-industrial-orange hover:bg-industrial-orange-dark text-white font-roboto font-semibold w-full md:w-auto transition-colors duration-200"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Additional Contact Options */}
            <div>
              <h2 className="font-montserrat font-bold text-3xl text-industrial-blue mb-6">
                Outras Formas de Contacto
              </h2>
              
              {/* WhatsApp */}
              <Card className="mb-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="h-8 w-8 text-green-600 mr-4" />
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-industrial-blue">
                        WhatsApp
                      </h3>
                      <p className="font-roboto text-gray-600">
                        Contacto direto e rápido
                      </p>
                    </div>
                  </div>
                  <p className="font-roboto text-gray-600 mb-4">
                    Para atendimento imediato, envie-nos uma mensagem via WhatsApp. 
                    Responderemos rapidamente às suas questões.
                  </p>
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white font-roboto font-semibold transition-colors duration-200"
                    asChild
                  >
                    <a 
                      href="https://wa.me/244946005595" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Abrir WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="mb-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="h-8 w-8 text-industrial-orange mr-4" />
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-industrial-blue">
                        Chamada Telefónica
                      </h3>
                      <p className="font-roboto text-gray-600">
                        Fale directamente connosco
                      </p>
                    </div>
                  </div>
                  <p className="font-roboto text-gray-600 mb-4">
                    Para discussões detalhadas sobre os seus projetos, 
                    ligue-nos directamente durante o horário comercial.
                  </p>
                  <Button 
                    className="bg-industrial-orange hover:bg-industrial-orange-dark text-white font-roboto font-semibold transition-colors duration-200"
                    asChild
                  >
                    <a href="tel:+244946005595">
                      <Phone className="mr-2 h-4 w-4" />
                      +244 946 005 595
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-lg text-industrial-blue mb-4">
                    Redes Sociais
                  </h3>
                  <p className="font-roboto text-gray-600 mb-4">
                    Siga-nos nas redes sociais para novidades e atualizações.
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="flex items-center justify-center w-12 h-12 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-200"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-industrial-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-industrial-blue mb-4">
              MACHADO & MANSOUR
            </h2>
            <p className="font-roboto text-lg text-gray-600 mb-6">
              Desde 2016, fornecemos soluções industriais de qualidade em Angola
            </p>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-12 w-12 text-industrial-orange mr-4" />
                <div className="text-left">
                  <h3 className="font-montserrat font-semibold text-xl text-industrial-blue">
                    Nossa Sede
                  </h3>
                  <p className="font-roboto text-gray-600">
                    Luanda, Angola
                  </p>
                </div>
              </div>
              <p className="font-roboto text-gray-600 text-center">
                Visite-nos ou entre em contacto para discutir as suas necessidades industriais. 
                Estamos sempre prontos para fornecer as melhores soluções para o seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
