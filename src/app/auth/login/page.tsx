// app/page.tsx
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Edit, Globe, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="w-full p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">W</span>
          </div>
          <span className="text-xl font-bold">WriteFlow</span>
        </div>
        
        <nav className="space-x-4">
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="outline">Sign in</Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started
          </Button>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Write once,
          <br />
          publish everywhere
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Create beautiful articles in a familiar document editor and publish directly to your website. No coding required.
        </p>

        <div className="space-y-4 mb-12">
          {[
            'Write articles like you would in Google Docs',
            'One-click publish to your website',
            'Automatic responsive layouts',
          ].map((feature) => (
            <div key={feature} className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 text-blue-600">
                <Zap className="w-full h-full" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg"
        >
          Start Writing
          <ArrowRight className="ml-2" />
        </Button>

        <div className="mt-16">
          <div className="flex justify-center space-x-2 mb-4">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-10 h-10 bg-gray-200 rounded-full border-2 border-white" />
              ))}
            </div>
          </div>
          <p className="text-gray-600">
            <span className="font-bold">100+</span> writers creating content with our platform
          </p>
        </div>
      </main>
    </div>
  );
}