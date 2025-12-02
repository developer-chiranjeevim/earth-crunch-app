import { useState} from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ProductsPage } from './components/ProductPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CustomerAccount } from './components/CustomerAccount';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>();

  const handleNavigate = (page: string, productId?: string) => {
    setCurrentPage(page);
    setSelectedProductId(productId);
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'products':
        return <ProductsPage onNavigate={handleNavigate} />;
      case 'product':
        return <ProductDetailPage onNavigate={handleNavigate} productId={selectedProductId} />;
      case 'customer-account':
        return <CustomerAccount onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
      />
      {renderCurrentPage()}
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}