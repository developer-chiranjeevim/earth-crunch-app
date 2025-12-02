import { useState, useEffect } from 'react';
import { User, ShoppingBag, Package } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface CustomerAccountProps {
  onNavigate: (page: string) => void;
}

interface Order {
  id: string;
  items: Array<{ productId: string; productName: string; quantity: number; price: number }>;
  total: number;
  status: string;
  createdAt: string;
}

export function CustomerAccount({ onNavigate }: CustomerAccountProps) {
  const [orders] = useState<Order[]>([]);
  const [loading] = useState(false);

  // const baseUrl = `https://${projectId}.supabase.co/functions/v1/make-server-b5b6229b`;

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    // Demo mode - no authentication required
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-xl text-amber-900">Loading account...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-amber-600">
            Home
          </button>
          <span className="mx-2">/</span>
          <span className="text-amber-600">My Account</span>
        </nav>

        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl text-amber-900">Customer Account</h1>
            <p className="text-gray-600 mt-1">View your order history and account details</p>
          </div>
          <Button
            variant="outline"
            onClick={() => onNavigate('home')}
            className="border-amber-200 text-amber-900 hover:bg-amber-100"
          >
            Back to Store
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg text-amber-900">Guest User</h3>
                    <p className="text-sm text-gray-600">guest@example.com</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <div className="flex items-center gap-2 text-amber-900">
                      <ShoppingBag className="w-5 h-5" />
                      <span>Total Orders</span>
                    </div>
                    <p className="text-2xl text-amber-900 mt-1">{orders.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="orders" className="space-y-6">
              <TabsList className="bg-white border border-amber-200">
                <TabsTrigger value="orders">Order History</TabsTrigger>
              </TabsList>

              <TabsContent value="orders">
                <Card className="border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-amber-900">Your Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {orders.length === 0 ? (
                      <div className="text-center py-12">
                        <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg text-gray-900 mb-2">No orders yet</h3>
                        <p className="text-gray-600 mb-4">
                          Start shopping to see your orders here
                        </p>
                        <Button
                          onClick={() => onNavigate('products')}
                          className="bg-amber-600 hover:bg-amber-700 text-white"
                        >
                          Browse Products
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {orders.map((order) => (
                          <Card key={order.id} className="border-amber-100">
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-3">
                                <div>
                                  <p className="text-sm text-gray-600">Order ID</p>
                                  <p className="text-amber-900">#{order.id.substring(0, 12)}</p>
                                </div>
                                <Badge className={getStatusColor(order.status)}>
                                  {order.status}
                                </Badge>
                              </div>
                              
                              <div className="space-y-2 mb-3">
                                {order.items?.map((item, index) => (
                                  <div key={index} className="flex justify-between text-sm">
                                    <span className="text-gray-700">
                                      {item.productName} x {item.quantity}
                                    </span>
                                    <span className="text-amber-900">₹{item.price * item.quantity}</span>
                                  </div>
                                ))}
                              </div>
                              
                              <div className="flex justify-between items-center pt-3 border-t border-amber-100">
                                <div>
                                  <p className="text-sm text-gray-600">
                                    {new Date(order.createdAt).toLocaleDateString('en-IN', {
                                      day: 'numeric',
                                      month: 'long',
                                      year: 'numeric',
                                    })}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm text-gray-600">Total</p>
                                  <p className="text-lg text-amber-900">₹{order.total}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}