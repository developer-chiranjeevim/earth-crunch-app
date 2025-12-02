import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function RelatedProducts() {
  const relatedProducts = [
    {
      id: 1,
      name: "Ribbon Pakoda",
      price: 249,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1680359939304-7e27ee183e7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0cmFkaXRpb25hbCUyMHNuYWNrcyUyMHZhcmlldHl8ZW58MXx8fHwxNzU4NzM3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7,
      isNew: false
    },
    {
      id: 2, 
      name: "Kai Murukku",
      price: 329,
      originalPrice: 379,
      image: "https://images.unsplash.com/photo-1573890607045-678f0f9d2cf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGluZGlhbiUyMGZvb2QlMjBmYW1pbHklMjBoZXJpdGFnZXxlbnwxfHx8fDE3NTg3Mzc4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      isNew: true
    },
    {
      id: 3,
      name: "Mixture",
      price: 199,
      originalPrice: 229,
      image: "https://images.unsplash.com/photo-1732382642488-b5cc395e685c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGZvb2QlMjBwYWNrYWdpbmclMjBhcnRpc2FuYWx8ZW58MXx8fHwxNzU4NzM3NzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.5,
      isNew: false
    },
    {
      id: 4,
      name: "Thenkuzhal",
      price: 279,
      originalPrice: 319,
      image: "https://images.unsplash.com/photo-1723155182094-af2f63472d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzcGljZXMlMjBpbmdyZWRpZW50cyUyMG5hdHVyYWx8ZW58MXx8fHwxNzU4NzM3NzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.6,
      isNew: false
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl text-amber-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
          You May Also Like
        </h2>
        <p className="text-gray-600">
          More authentic snacks from our traditional collection
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="group border-amber-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                {product.isNew && (
                  <Badge className="absolute top-3 left-3 z-10 bg-green-600 text-white">
                    New
                  </Badge>
                )}
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="text-lg text-amber-900 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`text-sm ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-amber-900">₹{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white transition-colors"
                    size="sm"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}