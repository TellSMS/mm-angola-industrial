
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
  Send,
  MessageCircle
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-industrial-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6">
            Entre em Contacto
          </h1>
          <p className="font-inter text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
            Estamos prontos para ajudá-lo a encontrar as melhores soluções industriais 
            para o seu negócio
          </p>
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
              <p className="font-inter text-industrial-gray mb-8">
                Preencha o formulário e a nossa equipa entrará em contacto consigo.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-inter font-medium text-industrial-gray-dark mb-2">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border-industrial-border focus:border-industrial-accent focus:ring-industrial-accent"
                      placeholder="O seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block font-inter font-medium text-industrial-gray-dark mb-2">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full border-industrial-border focus:border-industrial-accent focus:ring-industrial-accent"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block font-inter font-medium text-industrial-gray-dark mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-industrial-border focus:border-industrial-accent focus:ring-industrial-accent"
                      placeholder="o-seu-email@exemplo.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-inter font-medium text-industrial-gray-dark mb-2">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border-industrial-border focus:border-industrial-accent focus:ring-industrial-accent"
                      placeholder="+244 9XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-inter font-medium text-industrial-gray-dark mb-2">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full border-industrial-border focus:border-industrial-accent focus:ring-industrial-accent"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-inter font-medium text-industrial-gray-dark mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[120px] border-industrial-border focus:border-industrial-accent focus:ring-industrial-accent"
                    placeholder="Descreva as suas necessidades..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="bg-industrial-accent hover:bg-industrial-accent/90 text-white font-inter font-semibold w-full md:w-auto transition-colors duration-200"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>
                <p className="text-xs text-industrial-blue mt-2">O envio do formulário abrirá seu cliente de e-mail para finalizar o envio.</p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-montserrat font-bold text-3xl text-industrial-blue mb-8">
                Informações de Contacto
              </h2>
              
              <div className="space-y-6">
                <Card className="border border-industrial-border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Phone className="h-6 w-6 text-industrial-blue mr-4" />
                      <div>
                        <h3 className="font-montserrat font-semibold text-lg text-industrial-blue">
                          Telefones
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="font-inter text-industrial-gray">
                        <a href="tel:+244946005595" className="hover:text-industrial-accent transition-colors">
                          +244 946 005 595 (Principal/WhatsApp)
                        </a>
                      </p>
                      <p className="font-inter text-industrial-gray">
                        <a href="tel:+244946005538" className="hover:text-industrial-accent transition-colors">
                          +244 946 005 538
                        </a>
                      </p>
                      <p className="font-inter text-industrial-gray">
                        <a href="tel:+244923315700" className="hover:text-industrial-accent transition-colors">
                          +244 923 315 700
                        </a>
                      </p>
                      <p className="font-inter text-industrial-gray">
                        <a href="tel:+244923313341" className="hover:text-industrial-accent transition-colors">
                          +244 923 313 341
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-industrial-border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Mail className="h-6 w-6 text-industrial-blue mr-4" />
                      <div>
                        <h3 className="font-montserrat font-semibold text-lg text-industrial-blue">
                          E-mails
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="font-inter text-industrial-gray">
                        <a href="mailto:machado@mam.co.ao" className="hover:text-industrial-accent transition-colors">
                          machado@mam.co.ao
                        </a>
                      </p>
                      <p className="font-inter text-industrial-gray">
                        <a href="mailto:geral@mam.co.ao" className="hover:text-industrial-accent transition-colors">
                          geral@mam.co.ao
                        </a>
                      </p>
                      <p className="font-inter text-industrial-gray">
                        <a href="mailto:comercial@mam.co.ao" className="hover:text-industrial-accent transition-colors">
                          comercial@mam.co.ao
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-industrial-border bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MessageCircle className="h-6 w-6 text-industrial-blue mr-4" />
                      <div>
                        <h3 className="font-montserrat font-semibold text-lg text-industrial-blue">
                          WhatsApp
                        </h3>
                      </div>
                    </div>
                    <p className="font-inter text-industrial-gray mb-4">
                      Para atendimento rápido, contacte-nos via WhatsApp.
                    </p>
                    <Button 
                      className="bg-industrial-blue hover:bg-industrial-accent text-white font-inter font-semibold transition-colors duration-200"
                      asChild
                    >
                      <a 
                        href="https://wa.me/244946005595?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20industriais%20da%20Machado%20%26%20Mansour." 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Abrir WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
