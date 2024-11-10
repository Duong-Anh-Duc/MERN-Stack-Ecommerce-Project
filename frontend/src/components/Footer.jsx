import React from "react";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons"; // Đảm bảo đường dẫn đến file SocialIcons.js là chính xác

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <Link to={"/"} className="flex items-center space-x-1 text-secondary">
            <h3 className="text-2xl font-bold tracking-wide">
              Fusion<span className="text-primary">Mart</span>
            </h3>
          </Link>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            ipsa neque atque sit eligendi sunt illum, repellat id, asperiores ut
            voluptas.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-secondary">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-primary transition-colors">
                Categories
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-primary transition-colors">
                Shop
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-primary transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-secondary">Contact Us</h4>
          <p>
            Email:{" "}
            <a
              href="mailto:ducytcg123456@gmail.com"
              className="text-primary hover:underline"
            >
              ducytcg123456@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:0338617203" className="text-primary hover:underline">
              0338617203
            </a>
          </p>
          <p>
            Address: <span className="text-gray-300">Ha Noi</span>
          </p>
        </div>
      </div>

      {/* Social Icons Above Footer Bottom */}
      <div className="flex justify-center mt-8">
        <SocialIcons />
      </div>

      {/* Footer Bottom */}
      <div className="mt-4 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        &copy; 2024 FusionMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
