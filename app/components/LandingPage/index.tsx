// app/components/LandingPage/index.tsx
import React from 'react';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header/Navigation */}
      <header className="w-full p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="text-xl font-bold">AppName</span>
        </div>
        
        <nav className="space-x-4">
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="outline">Login</Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            Sign Up Free
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-4 pt-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Streamline your workflow,
          <br />
          boost your productivity
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Let our platform handle your routine tasks while you focus on what matters most to your business.
        </p>

        {/* Feature List */}
        <div className="space-y-4 mb-12">
          {[
            'Quick setup, no coding required',
            'Secure data handling',
            'Intuitive dashboard interface',
          ].map((feature) => (
            <div key={feature} className="flex items-center justify-center space-x-2">
              <CheckCircle className="text-emerald-600 w-5 h-5" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button 
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-lg text-lg"
        >
          Get Started
          <ArrowRight className="ml-2" />
        </Button>

        {/* Social Proof */}
        <div className="mt-16">
          <div className="flex justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-10 h-10 bg-gray-200 rounded-full" />
            ))}
          </div>
          <p className="text-gray-600">
            <span className="font-bold">1000+</span> teams trust our platform
          </p>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;