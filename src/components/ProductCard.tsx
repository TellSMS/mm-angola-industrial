
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  brands?: string[];
  features?: string[];
}

const ProductCard = ({ title, description, image, brands, features }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <CardContent className="p-6">
        <h3 className="font-montserrat font-semibold text-xl text-industrial-blue mb-3">
          {title}
        </h3>
        <p className="text-gray-600 font-roboto mb-4">
          {description}
        </p>
        
        {brands && brands.length > 0 && (
          <div className="mb-4">
            <h4 className="font-roboto font-medium text-sm text-industrial-gray mb-2">
              Marcas Principais:
            </h4>
            <div className="flex flex-wrap gap-2">
              {brands.slice(0, 3).map((brand, index) => (
                <span 
                  key={index}
                  className="bg-industrial-background text-industrial-blue px-2 py-1 rounded text-xs font-roboto"
                >
                  {brand}
                </span>
              ))}
              {brands.length > 3 && (
                <span className="text-industrial-orange text-xs font-roboto">
                  +{brands.length - 3} mais
                </span>
              )}
            </div>
          </div>
        )}

        {features && features.length > 0 && (
          <div>
            <h4 className="font-roboto font-medium text-sm text-industrial-gray mb-2">
              Características:
            </h4>
            <ul className="space-y-1">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="text-sm text-gray-600 font-roboto flex items-center">
                  <span className="w-1.5 h-1.5 bg-industrial-orange rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
