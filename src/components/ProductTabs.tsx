import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';

export function ProductTabs({ product }: { product: any }) {
  if (!product) return null;

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
                  The Story Behind Our {product.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.longDescription || product.description || "Experience the authentic taste of tradition."}
                </p>
              </div>

              <div>
                <h4 className="text-lg text-amber-800 mb-2">Heritage Recipe</h4>
                <p className="text-gray-700 leading-relaxed">
                  Made with premium ingredients and a secret blend of traditional spices,
                  our {product.name.toLowerCase()} delivers the authentic taste of South Indian households.
                  Prepared fresh and shaped using traditional methods.
                </p>
              </div>

              <div>
                <h4 className="text-lg text-amber-800 mb-2">Why Choose Our {product.name}?</h4>
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
                {product.ingredients && product.ingredients.length > 0 ? (
                  <ul className="space-y-2 text-gray-700">
                    {product.ingredients.map((ingredient: string, index: number) => (
                      <li key={index}>• {ingredient}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">Ingredients information coming soon.</p>
                )}
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-xl text-amber-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Nutritional Information
                </h3>
                <div className="text-sm text-gray-600 mb-3">Per 100g serving</div>
                {product.nutrition ? (
                  <div className="space-y-2 text-gray-700">
                    {Object.entries(product.nutrition).map(([key, value]) => (
                      <div className="flex justify-between" key={key}>
                        <span className="capitalize">{key}</span>
                        <span>{value as string}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">Nutritional information coming soon.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-amber-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl text-amber-600 mb-2">{product.rating}</div>
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-lg ${i < Math.floor(product.rating || 0) ? 'text-amber-400' : 'text-gray-300'}`}>★</span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">Based on {product.reviews} reviews</div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 md:col-span-2">
                <CardContent className="p-6">
                  {/* Placeholder for rating bars, logic can be added later or mocked based on rating */}
                  <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map((stars) => {
                      // Mock distribution roughly based on rating
                      const isHigh = product.rating >= 4.5;
                      const percentage = stars === 5 ? (isHigh ? 80 : 40) : stars === 4 ? (isHigh ? 15 : 30) : 5;
                      return (
                        <div key={stars} className="flex items-center gap-3">
                          <span className="text-sm w-8">{stars}★</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-amber-500 h-2 rounded-full"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600 w-8">
                            {percentage}%
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              {product.reviewsList && product.reviewsList.length > 0 ? (
                product.reviewsList.map((review: any, index: number) => (
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
                ))
              ) : (
                <p className="text-gray-600 text-center py-4">No reviews yet.</p>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}