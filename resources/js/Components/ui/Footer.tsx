import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from '@inertiajs/react';

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
  >
    {children}
  </Link>
);

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-5 h-5" />
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium tracking-tight text-gray-900">studio</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Creating beautiful digital experiences with a focus on minimalism and functionality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><FooterLink href="#">Work</FooterLink></li>
              <li><FooterLink href="#">About</FooterLink></li>
              <li><FooterLink href="#">Contact</FooterLink></li>
              <li><FooterLink href="#">Blog</FooterLink></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><FooterLink href="#">Documentation</FooterLink></li>
              <li><FooterLink href="#">Support</FooterLink></li>
              <li><FooterLink href="#">Privacy Policy</FooterLink></li>
              <li><FooterLink href="#">Terms of Service</FooterLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Get in Touch</h4>
            <p className="text-sm text-gray-500 mb-4">
              Have a project in mind? Let's talk about it.
            </p>
            <a
              href="mailto:hello@studio.com"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-500">
            © {currentYear} Studio. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <SocialIcon href="#" icon={Github} />
            <SocialIcon href="#" icon={Twitter} />
            <SocialIcon href="#" icon={Linkedin} />
            <SocialIcon href="#" icon={Mail} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
