import { Search, ShoppingCart, User, Menu, UserCog } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="text-2xl text-amber-800" style={{ fontFamily: 'Georgia, serif' }}>
              Earth Crunch
            </div>

          </button>

          {/* Desktop Navigation */}
          {/* <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`transition-colors ${
                currentPage === 'home' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('products')}
              className={`transition-colors ${
                currentPage === 'products' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Products
            </button>
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">Recipes</a>
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
          </nav> */}

          {/* Search and Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search snacks..." 
                  className="pl-10 w-64 border-amber-200 focus:border-amber-400"
                />
              </div>
            </div>
            
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-amber-600 text-white">
                0
              </Badge>
            </Button>
            
            {/* User Account Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center justify-center rounded-md hover:bg-gray-100 p-2 transition-colors">
                  <User className="w-5 h-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => onNavigate('customer-account')}>
                  <User className="w-4 h-4 mr-2" />
                  My Account
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => onNavigate('admin-portal')}>
                  <UserCog className="w-4 h-4 mr-2" />
                  Admin Portal
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}