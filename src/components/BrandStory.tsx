import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BrandStory() {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="space-y-6">
            <div>
              <Badge className="bg-amber-100 text-amber-800 border-amber-200 mb-4">
                Heritage Since 1952
              </Badge>
              <h2 className="text-3xl lg:text-4xl text-amber-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Preserving Tradition, One Snack at a Time
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in the bustling streets of Madurai, our family-owned business has been 
                crafting authentic South Indian snacks for over seven decades. What started as 
                a small shop has grown into a beloved brand, but our commitment to traditional 
                recipes and artisanal methods remains unchanged.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-amber-200 bg-amber-50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl text-amber-600 mb-1">70+</div>
                  <div className="text-sm text-amber-800">Years of Heritage</div>
                </CardContent>
              </Card>
              
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl text-green-600 mb-1">100%</div>
                  <div className="text-sm text-green-800">Natural Ingredients</div>
                </CardContent>
              </Card>
              
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl text-orange-600 mb-1">25+</div>
                  <div className="text-sm text-orange-800">Snack Varieties</div>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl text-blue-600 mb-1">50k+</div>
                  <div className="text-sm text-blue-800">Happy Customers</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl text-amber-900" style={{ fontFamily: 'Georgia, serif' }}>
                Our Promise
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Handmade in small batches for maximum freshness</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>No artificial colors, flavors, or preservatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Sustainably sourced ingredients from local farmers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Traditional brass equipment for authentic texture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573890607045-678f0f9d2cf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGluZGlhbiUyMGZvb2QlMjBmYW1pbHklMjBoZXJpdGFnZXxlbnwxfHx8fDE3NTg3Mzc4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Traditional snack making process"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-sm italic">
                  Our master craftsmen preparing murukku using traditional methods
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}