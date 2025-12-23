import { useState, useEffect } from 'react';
import { ProductHero } from './ProductHero';
import { ProductTabs } from './ProductTabs.tsx';
import { RelatedProducts } from './RelatedProducts.tsx';
import { BrandStory } from './BrandStory.tsx';
import { TrustBadges } from './TrustBadges.tsx';
import { StickyCartBar } from './StickyCartBar.tsx';

interface ProductDetailPageProps {
  onNavigate: (page: string, productId?: string) => void;
  productId?: string;
}

export function ProductDetailPage({ onNavigate, productId }: ProductDetailPageProps) {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch('/products.json');
        const data = await response.json();

        if (data.products && productId) {
          const foundProduct = data.products.find((p: any) => p.id.toString() === productId);
          if (foundProduct) {
            setProduct(foundProduct);
          } else {
            setError('Product not found');
          }
        } else {
          setError('Invalid product data');
        }
      } catch (err) {
        console.error('Error loading product:', err);
        setError('Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      loadProduct();
    }
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <div className="text-amber-800 text-xl font-serif">Loading...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 gap-4">
        <div className="text-red-600 text-xl">{error || 'Product not found'}</div>
        <button
          onClick={() => onNavigate('products')}
          className="text-amber-600 hover:underline"
        >
          Return to Products
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-600">
          <button onClick={() => onNavigate('home')} className="hover:text-amber-600">Home</button>
          <span className="mx-2">/</span>
          <button onClick={() => onNavigate('products')} className="hover:text-amber-600">Products</button>
          <span className="mx-2">/</span>
          <span className="text-amber-600">{product.name}</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-8">
        <ProductHero product={product} />
        <ProductTabs product={product} />
        <RelatedProducts />
        <BrandStory />
        <TrustBadges />
      </main>

      {/* Mobile Sticky Cart Bar */}
      <StickyCartBar />
    </div>
  );
}