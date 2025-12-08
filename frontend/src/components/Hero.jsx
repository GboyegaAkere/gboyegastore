import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-linear-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Decorative dots pattern - top left */}
      <div className="absolute top-8 left-20 grid grid-cols-6 gap-2 opacity-20">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
        ))}
      </div>

      {/* Decorative dots pattern - bottom left */}
      <div className="absolute bottom-8 left-40 grid grid-cols-5 gap-2 opacity-20">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
        ))}
      </div>

      {/* Decorative dots pattern - top right */}
      <div className="absolute top-4 right-32 grid grid-cols-4 gap-2 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
        ))}
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            {/* Sale Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">50% OFF Summer Super Sale</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-5xl font-heading font-semibold  text-gray-900 leading-tight ">
              Step into Style: Your Ultimate Fashion Destination
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>

            {/* CTA Button */}
            <button className="group bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
              Shop Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            {/* Main Model Image */}
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop"
                alt="Fashion Model"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* Floating Badge - Summer Collection */}
            <div className="absolute top-8 -right-4 z-20 bg-white rounded-full p-6 shadow-xl border-4 border-dashed border-gray-300 animate-pulse">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-10 h-10 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                    <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
                  </svg>
                </div>
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Summer</p>
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Collection</p>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}