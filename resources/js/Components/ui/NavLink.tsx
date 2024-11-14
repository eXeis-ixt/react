import { Link } from '@inertiajs/react';
import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
    className="relative text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 px-1"
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gray-900 scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100" />
  </Link>
);

export default NavLink;
