import { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function RelatedProducts() {
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        if (data.products) {
          // Shuffle or select random 4 products
          const shuffled = data.products.sort(() => 0.5 - Math.random());
          setRelatedProducts(shuffled.slice(0, 4));
        }
      })
      .catch(err => console.error('Error fetching related products:', err));
  }, []);

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