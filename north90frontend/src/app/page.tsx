"use client";

import LeftMenu from "@/components/LeftMenu";
import RightPanel from "@/components/RightPanel";
import usePageShrink from "@/hooks/usePageShrink";
import { useState } from "react";

export default function Home() {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(true);

  const scale = usePageShrink();

  return (
    <div
      className="flex flex-col min-h-screen w-full"
      style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
    >
      <div className="flex flex-1 pt-16 overflow-hidden">
        <LeftMenu isOpen={isLeftMenuOpen} setIsOpen={setIsLeftMenuOpen} />
        <div className="w-3/4 p-10">
          <h1 className="text-4xl font-bold mb-6 text-indigo-600">
            Welcome to our Beautiful Responsive Webpage
          </h1>
          <p className="mb-6 text-lg text-gray-600">
            This page demonstrates the following features with an enhanced,
            beautiful design:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-gray-600">
            <li>A sleek, fixed navbar with smooth hover effects</li>
            <li>
              Three sections: a collapsible left menu, main content area, and
              right-side panel
            </li>
            <li>A stylish footer with useful links</li>
            <li>Elegant color scheme with gradients and shadows</li>
            <li>Subtle animations for a more engaging user experience</li>
            <li>
              Fully responsive design that adapts to different screen sizes
            </li>
            <li>Page shrinking based on screen width for optimal viewing</li>
          </ul>
          <p className="text-lg text-gray-600">
            Try resizing your browser window to see how the layout and scaling
            change. Enjoy the beautiful, responsive design!
          </p>
          <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
            <p className="mb-4">
              Join our community and experience the power of beautiful,
              responsive web design.
            </p>
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-100 transition-colors duration-300">
              Sign Up Now
            </button>
          </div>
        </div>
        <div className="w-1/4 min-h-full">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
