
import { 
  Building, 
  Pickaxe, 
  Cog, 
  Truck, 
  Zap, 
  Wheat,
  Ship
} from 'lucide-react';

const SectorsSection = () => {
  const sectors = [
    {
      name: "Construção",
      description: "Obras públicas e privadas",
      icon: Building
    },
    {
      name: "Mineração",
      description: "Extração e processamento mineral",
      icon: Pickaxe
    },
    {
      name: "Indústria",
      description: "Fábricas e unidades industriais",
      icon: Cog
    },
    {
      name: "Logística",
      description: "Transporte e distribuição",
      icon: Truck
    },
    {
      name: "Energia",
      description: "Geração e distribuição energética",
      icon: Zap
    },
    {
      name: "Agricultura",
      description: "Agronegócio e produção agrícola",
      icon: Wheat
    },
    {
      name: "Infraestrutura de Transportes",
      description: "Portos marítimos e fluviais, ferrovias e aeroportos",
      icon: Ship
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-4">
            Setores que Servimos
          </h2>
          <div className="w-24 h-1 bg-industrial-orange mx-auto mb-6"></div>
          <p className="font-roboto text-lg text-gray-600 max-w-3xl mx-auto">
            Atendemos diversos setores da economia angolana com soluções especializadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-industrial-blue/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="h-6 w-6 text-industrial-blue" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg text-industrial-blue">
                    {sector.name}
                  </h3>
                </div>
                <p className="text-gray-600 font-roboto text-sm">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
