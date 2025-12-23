import { useState, useEffect, useRef } from 'react';
import { Grid3X3, List, Star, SlidersHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';
import { ImageWithFallback } from './figma/ImageWithFallback';

import { motion, useInView, type Variants } from 'motion/react';

interface ProductsPageProps {
  onNavigate: (page: string, productId?: string) => void;
}

// Animation variants defined outside component
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [products, setProducts] = useState<any[]>([]);
  // const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      console.log('Fetching products from /products.json...');
      const response = await fetch('/products.json');
      console.log('Response status:', response.status);

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        console.error("Received non-JSON response:", contentType);
        const text = await response.text();
        console.error("Response body prefix:", text.substring(0, 100));
        throw new Error("Invalid content type: " + contentType);
      }

      const data = await response.json();
      console.log('Products data:', data);

      if (response.ok && data.products) {
        setProducts(data.products);
      } else {
        console.error('Failed to load products');
        setError('Failed to load products');
      }
    } catch (error) {
      console.error('Error loading products:', error);
      setError(error instanceof Error ? error.message : 'Unknown error');
    }
  };

  const categories = ["All", "Traditional Snacks", "Sweets", "Namkeen", "Spices"];

  // Refs for scroll animations
  const productsRef = useRef(null);
  const productsInView = useInView(productsRef, { once: true, amount: 0.05 });

  const ProductCard = ({ product }: { product: typeof products[0]; index: number }) => {
    if (viewMode === 'list') {
      return (
        <Card
          className="group border-amber-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
          onClick={() => onNavigate('product', product.id.toString())}
        >
          <CardContent className="p-6">
            <div className="flex gap-6">
              <div className="relative flex-shrink-0">
                {product.isNew && (
                  <Badge className="absolute top-2 left-2 z-10 bg-green-600 text-white">
                    New
                  </Badge>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center z-10">
                    <span className="text-white text-sm">Out of Stock</span>
                  </div>
                )}
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 space-y-3">
                <div>
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl text-amber-900 group-hover:text-amber-600 transition-colors">
                      {product.name}
                    </h3>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      {product.category}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mt-1">{product.description}</p>
                </div>

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

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl text-amber-900">SGD{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">SGD{product.originalPrice}</span>
                    <Badge className="bg-red-100 text-red-800">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>

                  <Button
                    className="bg-amber-600 hover:bg-amber-700 text-white"
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card
        className="group border-amber-200 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
        onClick={() => onNavigate('product', product.id.toString())}
      >
        <CardContent className="p-0">
          <div className="relative overflow-hidden rounded-t-lg">
            {product.isNew && (
              <Badge className="absolute top-3 left-3 z-10 bg-green-600 text-white">
                New
              </Badge>
            )}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 rounded-t-lg flex items-center justify-center z-10">
                <span className="text-white">Out of Stock</span>
              </div>
            )}
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="p-4 space-y-3">
            <div>
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 text-xs mb-2">
                {product.category}
              </Badge>
              <h3 className="text-lg text-amber-900 group-hover:text-amber-600 transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
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
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-600">
          <button onClick={() => onNavigate('home')} className="hover:text-amber-600">Home</button>
          <span className="mx-2">/</span>
          <span className="text-amber-600">Products</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl text-amber-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Our Products
          </h1>
          <p className="text-xl text-gray-600">
            Discover our complete collection of traditional Indian snacks and sweets
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className={`lg:w-64 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-lg text-amber-900 mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={category} />
                      <label
                        htmlFor={category}
                        className="text-sm text-gray-700 cursor-pointer hover:text-amber-600"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-lg text-amber-900 mb-4">Price Range</h3>
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000}
                    step={50}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-lg text-amber-900 mb-4">Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="in-stock" />
                    <label htmlFor="in-stock" className="text-sm text-gray-700 cursor-pointer">
                      In Stock
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="out-of-stock" />
                    <label htmlFor="out-of-stock" className="text-sm text-gray-700 cursor-pointer">
                      Out of Stock
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 border border-red-200">
                <p>Error: {error}</p>
                <p className="text-sm mt-2 text-gray-700">Please check the console for more details.</p>
              </div>
            )}
            {/* Controls Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden border-amber-200"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <p className="text-gray-600">
                  Showing {products.length} products
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px] border-amber-200">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border border-amber-200 rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={viewMode === 'grid' ? 'bg-amber-600 text-white' : ''}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={viewMode === 'list' ? 'bg-amber-600 text-white' : ''}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <motion.div
              ref={productsRef}
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
              }
              initial="visible"
              animate="visible"
              variants={staggerContainer}
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={fadeInUp}
                >
                  <ProductCard product={product} index={index} />
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-amber-200">
                  Previous
                </Button>
                {[1, 2, 3].map((page) => (
                  <Button
                    key={page}
                    variant={page === 1 ? "default" : "outline"}
                    size="sm"
                    className={page === 1 ? "bg-amber-600 text-white" : "border-amber-200"}
                  >
                    {page}
                  </Button>
                ))}
                <Button variant="outline" size="sm" className="border-amber-200">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}