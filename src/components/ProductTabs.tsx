import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';

export function ProductTabs() {
  return (
    <div className="mb-12">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-amber-50 border border-amber-200">
          <TabsTrigger 
            value="description"
            className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
          >
            Description
          </TabsTrigger>
          <TabsTrigger 
            value="ingredients"
            className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
          >
            Ingredients & Nutrition
          </TabsTrigger>
          <TabsTrigger 
            value="reviews"
            className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
          >
            Reviews
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="mt-6">
          <Card className="border-amber-200">
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-2xl text-amber-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  The Story Behind Our Murukku
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our Traditional Murukku is crafted using a centuries-old recipe passed down through 
                  generations in the heart of Tamil Nadu. Each spiral is hand-twisted by skilled artisans 
                  who have perfected this art over decades.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg text-amber-800 mb-2">Heritage Recipe</h4>
                <p className="text-gray-700 leading-relaxed">
                  Made with premium rice flour, urad dal, and a secret blend of traditional spices, 
                  our murukku delivers the authentic taste of South Indian households. The dough is 
                  prepared fresh daily and shaped using traditional brass murukku makers.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg text-amber-800 mb-2">Why Choose Our Murukku?</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 100% natural ingredients with no artificial preservatives</li>
                  <li>• Handmade in small batches for freshness</li>
                  <li>• Crispy texture with perfect spice balance</li>
                  <li>• Ideal for festivals, gatherings, or everyday snacking</li>
                  <li>• Vacuum-packed to retain freshness</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="ingredients" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-xl text-amber-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Ingredients
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Rice flour (60%)</li>
                  <li>• Black gram flour (Urad dal) (20%)</li>
                  <li>• Sesame seeds (5%)</li>
                  <li>• Cumin seeds (3%)</li>
                  <li>• Asafoetida (Hing)</li>
                  <li>• Red chili powder</li>
                  <li>• Turmeric powder</li>
                  <li>• Salt</li>
                  <li>• Sunflower oil</li>
                  <li>• Curry leaves</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-xl text-amber-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Nutritional Information
                </h3>
                <div className="text-sm text-gray-600 mb-3">Per 100g serving</div>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Energy</span>
                    <span>456 kcal</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Protein</span>
                    <span>12.8g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Carbohydrates</span>
                    <span>58.4g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fat</span>
                    <span>18.6g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fiber</span>
                    <span>3.2g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sodium</span>
                    <span>856mg</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="reviews" className="mt-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-amber-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl text-amber-600 mb-2">4.8</div>
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400">★</span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">Based on 127 reviews</div>
                </CardContent>
              </Card>
              
              <Card className="border-amber-200 md:col-span-2">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center gap-3">
                        <span className="text-sm w-8">{stars}★</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-amber-500 h-2 rounded-full"
                            style={{ width: `${stars === 5 ? 75 : stars === 4 ? 20 : stars === 3 ? 3 : stars === 2 ? 1 : 1}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-8">
                          {stars === 5 ? '95' : stars === 4 ? '25' : stars === 3 ? '4' : stars === 2 ? '2' : '1'}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  name: "Priya Sharma",
                  rating: 5,
                  date: "2 days ago",
                  comment: "Absolutely authentic taste! Reminds me of my grandmother's murukku. The texture is perfect - crispy and not too oily.",
                  verified: true
                },
                {
                  name: "Rajesh Kumar",
                  rating: 5,
                  date: "1 week ago", 
                  comment: "Best murukku I've had outside of Tamil Nadu. Great packaging and arrived fresh. Will definitely order again!",
                  verified: true
                },
                {
                  name: "Anitha R",
                  rating: 4,
                  date: "2 weeks ago",
                  comment: "Good quality and taste. Slightly less spicy than expected but still very good. Fast delivery.",
                  verified: false
                }
              ].map((review, index) => (
                <Card key={index} className="border-amber-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-amber-900">{review.name}</h4>
                          {review.verified && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                              Verified Purchase
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-sm ${i < review.rating ? 'text-amber-400' : 'text-gray-300'}`}>★</span>
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}