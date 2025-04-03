import React from "react";
import { Mail, MapPin, Phone, Globe, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-8 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Travel.go</h2>
          <p className="mb-4">Don't just get there, get there in style.</p>
          <div className="space-y-3">
            <p className="flex items-center"><MapPin className="mr-2" /> 1901 Thornridge Cir, Hawaii 81063</p>
            <p className="flex items-center"><Phone className="mr-2" /> (308) 555-0121</p>
            <p className="flex items-center"><Mail className="mr-2" /> hello@travelwp.com</p>
          </div>
        </div>

        {/* Top Destinations */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Top Destination</h3>
          <ul className="space-y-2">
            {["Bali", "Bangkok", "Cancun", "Nha Trang", "Phuket", "Tokyo"].map((item) => (
              <li key={item}>{item}</li>
            ))}
            <li className="font-medium">More Destinations</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Information</h3>
          <ul className="space-y-2">
            {["Help & FAQs", "Careers", "About us", "Contact us", "Privacy policy", "Blogs"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Social & Payment */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            {[Facebook, Twitter, Youtube, Instagram].map((Icon, index) => (
              <div key={index} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer">
                <Icon className="text-white" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-12 border-t border-gray-700 pt-4">
        Copyright © 2025 Travel.go. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;