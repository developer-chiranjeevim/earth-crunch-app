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

export function ProductDetailPage({ onNavigate }: ProductDetailPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-600">
          <button onClick={() => onNavigate('home')} className="hover:text-amber-600">Home</button>
          <span className="mx-2">/</span>
          <button onClick={() => onNavigate('products')} className="hover:text-amber-600">Products</button>
          <span className="mx-2">/</span>
          <span className="text-amber-600">Traditional Murukku</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-8">
        <ProductHero />
        <ProductTabs />
        <RelatedProducts />
        <BrandStory />
        <TrustBadges />
      </main>

      {/* Mobile Sticky Cart Bar */}
      <StickyCartBar />
    </div>
  );
}