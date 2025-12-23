import { ArrowRight, Star, Users, Award, Truck } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useInView, type Variants } from 'motion/react';
import { useRef, useMemo, useState, useEffect } from 'react';

interface HomePageProps {
  onNavigate: (page: string, productId?: string) => void;
}

// Animation variants defined outside component to prevent recreation
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};

export function HomePage({ onNavigate }: HomePageProps) {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        if (data.products) {
          // Select some products to feature, e.g., the first 4
          setFeaturedProducts(data.products.slice(0, 4).map((p: any) => ({ ...p, featured: p.id === 1 || p.id === 3 })));
        }
      })
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const categories = useMemo(() => [
    {
      name: "Traditional Snacks",
      count: "25+ items",
      image: "https://images.unsplash.com/photo-1680359939304-7e27ee183e7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMG11cnVra3V8ZW58MXx8fHwxNzU4NzM3NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Festive Sweets",
      count: "18+ items",
      image: "https://images.unsplash.com/photo-1723937188995-beac88d36998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0cmFkaXRpb25hbCUyMHN3ZWV0cyUyMHZhcmlldHl8ZW58MXx8fHwxNzU4ODExMTI9fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Spice Blends",
      count: "12+ items",
      image: "https://images.unsplash.com/photo-1663325265966-0d17de3e85c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzcGljZXMlMjBtYXJrZXRwbGFjZXxlbnwxfHx8fDE3NTg4MTExMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Namkeen Variety",
      count: "20+ items",
      image: "https://images.unsplash.com/photo-1616813769023-d0557572ddbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMG5hbWtlZW4lMjBzbmFja3N8ZW58MXx8fHwxNzU4ODExMTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ], []);

  // Refs for scroll animations
  const categoriesRef = useRef(null);
  const productsRef = useRef(null);
  const trustRef = useRef(null);

  const categoriesInView = useInView(categoriesRef, { once: true, amount: 0.2 });
  const productsInView = useInView(productsRef, { once: true, amount: 0.1 });
  const trustInView = useInView(trustRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <div className="space-y-4">
                {/* <motion.div variants={fadeInUp}>
                  <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                    Heritage Since 1952
                  </Badge>
                </motion.div> */}
                <motion.h1
                  className="text-4xl lg:text-6xl text-amber-900 leading-tight"
                  style={{ fontFamily: 'Georgia, serif' }}
                  variants={fadeInUp}
                >
                  Authentic Indian Flavors,
                  <span className="text-orange-600"> Delivered Fresh</span>
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-700 leading-relaxed"
                  variants={fadeInUp}
                >
                  Experience the rich heritage of traditional South Indian snacks, crafted with
                  love using time-honored recipes passed down through generations.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => onNavigate('products')}
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50"
                >
                  Our Story
                </Button>
              </motion.div>

              <motion.div
                className="grid grid-cols-3 gap-6"
                variants={fadeInUp}
              >
                <div className="text-center">
                  <div className="text-2xl text-amber-600 mb-1">70+</div>
                  <div className="text-sm text-gray-600">Years Heritage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-amber-600 mb-1">50k+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-amber-600 mb-1">25+</div>
                  <div className="text-sm text-gray-600">Product Varieties</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576596218485-5af9272c4a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJpdGFnZSUyMGluZGlhbiUyMGZvb2QlMjBraXRjaGVufGVufDF8fHx8MTc1ODgxMTEzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Traditional Indian snack making"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-white text-lg">Handcrafted with traditional methods</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white p-4 rounded-full">
                <Award className="w-8 h-8" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section ref={categoriesRef} className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={categoriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl text-amber-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600">
              Discover our authentic collection of traditional flavors
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate={categoriesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {categories.map((category, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card
                  className="group border-amber-200 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
                  onClick={() => onNavigate('products')}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <ImageWithFallback
                        src={category.image}
                        alt={category.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl text-amber-900 mb-1 group-hover:text-amber-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-600">{category.count}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section ref={productsRef} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={productsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl text-amber-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Handpicked favorites loved by our customers
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={productsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={scaleIn}>
                <Card
                  className="group border-amber-200 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
                  onClick={() => onNavigate('product', product.id.toString())}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      {product.featured && (
                        <Badge className="absolute top-3 left-3 z-10 bg-amber-600 text-white">
                          Featured
                        </Badge>
                      )}
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-lg text-amber-900 group-hover:text-amber-600 transition-colors mb-2">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">({product.reviews})</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl text-amber-900">SGD{product.price}</span>
                          <span className="text-sm text-gray-500 line-through">SGD{product.originalPrice}</span>
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
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={productsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50"
              onClick={() => onNavigate('products')}
            >
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section ref={trustRef} className="py-16 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            animate={trustInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div className="space-y-3" variants={fadeInUp}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-700 rounded-full">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl">Free Shipping</h3>
              <p className="text-amber-200">On orders above ₹499</p>
            </motion.div>

            <motion.div className="space-y-3" variants={fadeInUp}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-700 rounded-full">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl">Quality Assured</h3>
              <p className="text-amber-200">FSSAI certified products</p>
            </motion.div>

            <motion.div className="space-y-3" variants={fadeInUp}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-700 rounded-full">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl">50k+ Customers</h3>
              <p className="text-amber-200">Trusted nationwide</p>
            </motion.div>

            <motion.div className="space-y-3" variants={fadeInUp}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-700 rounded-full">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl">4.8/5 Rating</h3>
              <p className="text-amber-200">Customer satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}