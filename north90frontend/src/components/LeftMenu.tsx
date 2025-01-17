import React from 'react';
import { ChevronLeft, ChevronRight, Home, Info, Mail } from "lucide-react";

import { LucideIcon } from "lucide-react";

interface MenuItemProps {
  icon: LucideIcon;
  text: string;
  isOpen: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, text, isOpen }) => (
  <a
    href="#"
    className="flex items-center p-3 rounded-lg text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 group relative"
  >
    <div className="relative">
      <Icon size={22} className="transition-transform duration-300 group-hover:scale-110" />
    </div>
    <span
      className={`ml-3 font-medium transition-all duration-300 ${
        isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
    >
      {text}
    </span>
  </a>
);

export default function LeftMenu({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <div className="flex h-screen">
      <div
        className={`relative bg-white border-r shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-6 -right-3 bg-white shadow-lg border border-gray-200 rounded-full p-2 text-gray-600 hover:text-indigo-600 hover:border-indigo-300 hover:shadow-indigo-100 transition-all duration-300 z-10"
        >
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>

        {/* Menu Content */}
        <div className="p-6">
          <div className="mb-8">
            <div
              className={`flex items-center transition-all duration-300 ${
                isOpen ? "justify-start" : "justify-center"
              }`}
            >
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h2
                className={`ml-3 text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent transition-all duration-300 ${
                  isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
              >
                App Name
              </h2>
            </div>
          </div>

          <nav className="space-y-2">
            <MenuItem icon={Home} text="Dashboard" isOpen={isOpen} />
            <MenuItem icon={Info} text="About" isOpen={isOpen} />
            <MenuItem icon={Mail} text="Messages" isOpen={isOpen} />
          </nav>

          <div className={`mt-8 transition-all duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}>
            <div className="bg-indigo-50 rounded-lg p-4">
              <p className="text-sm text-indigo-600 font-medium">Need help?</p>
              <p className="text-xs text-gray-600 mt-1">Contact support team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}