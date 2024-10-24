import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            W
          </div>
          <span className="ml-2 text-xl font-semibold">WriteFlow</span>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="/features" 
            className="text-gray-600 hover:text-gray-900"
          >
            Features
          </Link>
          <Link 
            href="/pricing" 
            className="text-gray-600 hover:text-gray-900"
          >
            Pricing
          </Link>
          <Link 
            href="/auth/login" 
            className="text-gray-600 hover:text-gray-900"
          >
            Sign in
          </Link>
          <Link 
            href="/auth/register" 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto text-center mt-24 px-4">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          Write once,<br />
          publish everywhere
        </h1>
        
        <p className="mt-6 text-lg text-gray-600">
          Create beautiful articles in a familiar document editor and publish directly to your website. No coding required.
        </p>

        {/* Features List */}
        <div className="mt-12 space-y-4">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <div className="text-blue-600">⚡</div>
            Write articles like you would in Google Docs
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <div className="text-blue-600">⚡</div>
            One-click publish to your website
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <div className="text-blue-600">⚡</div>
            Automatic responsive layouts
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/auth/register"
          className="inline-flex items-center justify-center gap-2 mt-12 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Writing
          <ArrowRight className="w-4 h-4" />
        </Link>
      </main>
    </div>
  );
};

export default LandingPage;