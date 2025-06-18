
import { 
  Truck, 
  Cog, 
  Pickaxe, 
  Ship,
  Plane,
  Wheat,
  Building,
  Building2
} from 'lucide-react';

const SectorsSection = () => {
  const sectors = [
    {
      name: "Transporte",
      description: "Veículos ligeiros, pesados, motociclos, máquinas e equipamentos industriais",
      icon: Truck
    },
    {
      name: "Indústria",
      description: "Fábricas e unidades industriais",
      icon: Cog
    },
    {
      name: "Mineração",
      description: "Extracção e processamento mineral",
      icon: Pickaxe
    },
    {
      name: "Portos",
      description: "Portos marítimos e fluviais",
      icon: Ship
    },
    {
      name: "Aeroportos",
      description: "Infraestrutura aeroportuária",
      icon: Plane
    },
    {
      name: "Agro-negócio",
      description: "Agro-negócio e produção agrícola",
      icon: Wheat
    },
    {
      name: "Construção",
      description: "Obras públicas e privadas",
      icon: Building
    },
    {
      name: "Infraestrutura",
      description: "Ferrovias e infraestruturas diversas",
      icon: Building2
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-industrial-blue mb-4">
            Sectores que Servimos
          </h2>
          <div className="w-24 h-1 bg-industrial-orange mx-auto mb-6"></div>
          <p className="font-roboto text-lg text-gray-600 max-w-3xl mx-auto">
            Atendemos diversos sectores da economia angolana com soluções especializadas
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
