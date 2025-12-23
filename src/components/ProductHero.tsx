import { useState } from 'react';
import { ZoomIn, Heart, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductHero({ product }: { product: any }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Use product image or fallback
  const productImages = product?.image ? [product.image] : [
    "https://images.unsplash.com/photo-1680359939304-7e27ee183e7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMG11cnVra3V8ZW58MXx8fHwxNzU4NzM3NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  if (!product) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="relative group">
          <div
            className={`relative overflow-hidden bg-amber-50 rounded-2xl transition-all duration-500 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <ImageWithFallback
              src={productImages[currentImage]}
              alt={product.name}
              className={`w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-500 ${isZoomed ? 'scale-150' : 'scale-100'
                }`}
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-5 h-5 text-amber-800" />
            </div>
          </div>

          {/* Image Thumbnails */}
          {/* Only show thumbnails if multiple images exist (future proofing) */}
          {productImages.length > 1 && (
            <div className="flex gap-3 mt-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-200 ${currentImage === index ? 'ring-2 ring-amber-600' : 'opacity-70 hover:opacity-100'
                    }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-20 h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
              100% Natural
            </Badge>
            <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200">
              No Preservatives
            </Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
              Handmade
            </Badge>
          </div>

          <h1 className="text-4xl lg:text-5xl text-amber-900 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            {product.name}
          </h1>

          <p className="text-lg text-amber-700 italic">
            {product.description}
          </p>

          <div className="flex items-center gap-4 py-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-lg ${i < Math.floor(product.rating || 0) ? 'text-amber-400' : 'text-gray-300'}`}>★</span>
              ))}
              <span className="text-gray-600 ml-2">({product.reviews} reviews)</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-3xl text-amber-900">
            SGD {product.price} <span className="text-lg text-gray-500 line-through">SGD {product.originalPrice}</span>
            <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded-md ml-2">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Size</label>
              <div className="flex gap-2">
                {['250g', '500g', '1kg'].map((size) => (
                  <Button
                    key={size}
                    variant="outline"
                    className="border-amber-300 text-amber-800 hover:bg-amber-50 hover:border-amber-400"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center gap-3">
                <Button variant="outline" className="w-10 h-10 p-0 border-amber-300">-</Button>
                <span className="w-12 text-center">1</span>
                <Button variant="outline" className="w-10 h-10 p-0 border-amber-300">+</Button>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white" disabled={!product.inStock}>
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
              <Heart className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>

          <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white mt-2" disabled={!product.inStock}>
            Buy Now
          </Button>
        </div>

        <div className="border-t border-amber-200 pt-4 space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Free delivery</span>
            <span>Orders above ₹499</span>
          </div>
          <div className="flex justify-between">
            <span>Return policy</span>
            <span>7 days</span>
          </div>
          <div className="flex justify-between">
            <span>Shelf life</span>
            <span>45 days</span>
          </div>
        </div>
      </div>
    </div>
  );
}