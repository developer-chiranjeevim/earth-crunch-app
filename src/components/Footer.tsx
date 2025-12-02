import { Instagram, Facebook, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';


export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-900 to-orange-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl" style={{ fontFamily: 'Georgia, serif' }}>
              Stay Updated with Our Latest Flavors
            </h3>
            <p className="text-amber-200 max-w-md mx-auto">
              Get exclusive offers, new product launches, and traditional recipes directly to your inbox
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <Input 
                placeholder="Enter your email address"
                className="bg-white/10 border-amber-700 text-white placeholder:text-amber-200"
              />
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl text-amber-200" style={{ fontFamily: 'Georgia, serif' }}>
              Earth Crunch
            </h3>
            <p className="text-amber-200 text-sm leading-relaxed">
              Preserving the authentic taste of South Indian traditions since 1952. 
              Every bite tells a story of heritage, quality, and passion.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-amber-700 hover:bg-amber-600 p-2 rounded-full transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg text-amber-200">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                "About Us",
                "Our Products", 
                "Quality Promise",
                "Bulk Orders",
                "Franchise",
                "Blog & Recipes"
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-amber-100 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="text-lg text-amber-200">Customer Care</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Contact Us",
                "Track Your Order",
                "Shipping Info",
                "Return Policy", 
                "FAQ",
                "Size Guide"
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-amber-100 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg text-amber-200">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-amber-100">
                  <div>123 Earth Crunch Store</div>
                  <div>Madurai, Tamil Nadu 625001</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-amber-100 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:hello@earthcrunch.com" className="text-amber-100 hover:text-white transition-colors">
                  hello@earthcrunch.com
                </a>
              </div>
            </div>
            <div className="text-xs text-amber-200">
              <div>Mon - Sat: 9:00 AM - 7:00 PM</div>
              <div>Sunday: 10:00 AM - 5:00 PM</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-amber-200">
            <div>
              © 2024 Earth Crunch Snacks. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}