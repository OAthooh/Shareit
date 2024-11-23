import React from 'react';
import { Upload, Users, Gift } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Share Items',
    description: 'List items you no longer need',
  },
  {
    icon: Users,
    title: 'Connect',
    description: 'Meet your neighbors',
  },
  {
    icon: Gift,
    title: 'Give & Receive',
    description: 'Help build a sustainable community',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community and start sharing in three simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                <step.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}