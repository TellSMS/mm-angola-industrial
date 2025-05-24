
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
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border border-industrial-border bg-white">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <CardContent className="p-6">
        <h3 className="font-montserrat font-semibold text-xl text-industrial-blue mb-3">
          {title}
        </h3>
        <p className="text-industrial-gray font-inter mb-4 leading-relaxed">
          {description}
        </p>
        
        {brands && brands.length > 0 && (
          <div className="mb-4">
            <h4 className="font-inter font-medium text-sm text-industrial-text mb-2">
              Marcas Principais:
            </h4>
            <div className="flex flex-wrap gap-2">
              {brands.slice(0, 3).map((brand, index) => (
                <span 
                  key={index}
                  className="bg-industrial-gray-lighter text-industrial-text px-3 py-1 rounded-full text-xs font-inter border border-industrial-border"
                >
                  {brand}
                </span>
              ))}
              {brands.length > 3 && (
                <span className="text-industrial-accent text-xs font-inter font-medium">
                  +{brands.length - 3} mais
                </span>
              )}
            </div>
          </div>
        )}

        {features && features.length > 0 && (
          <div>
            <h4 className="font-inter font-medium text-sm text-industrial-text mb-2">
              Características:
            </h4>
            <ul className="space-y-1">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="text-sm text-industrial-gray font-inter flex items-center">
                  <span className="w-1.5 h-1.5 bg-industrial-accent rounded-full mr-2 flex-shrink-0"></span>
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
