import { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from './ui/button';

export function StickyCartBar() {
  const [quantity, setQuantity] = useState(1);
  // const [isVisible, setIsVisible] = useState(false);

  // In a real app, this would be controlled by scroll position
  // For demo purposes, we'll show it on mobile screens
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-amber-200 shadow-lg">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-lg text-amber-900">₹299</div>
            <div className="flex items-center gap-2 bg-amber-50 rounded-lg px-2 py-1">
              <Button
                size="sm"
                variant="ghost"
                className="w-6 h-6 p-0 hover:bg-amber-100"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="w-3 h-3" />
              </Button>
              <span className="w-8 text-center text-sm">{quantity}</span>
              <Button
                size="sm"
                variant="ghost"
                className="w-6 h-6 p-0 hover:bg-amber-100"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>
          </div>
          
          <Button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}