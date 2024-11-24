import React from 'react';
import { ArrowRight, UserPlus, Search, Gift, Users } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Your Account',
    description: 'Sign up and become part of the ShareIt community. Registration is quick and free!',
    details: [
      'Access all platform features, including posting items and claiming what you need',
      'Click on the Sign Up button at the top of the page',
      'Fill in your details and start your journey'
    ]
  },
  {
    icon: Search,
    title: 'Explore Items',
    description: "Discover what's available in your area or across categories.",
    details: [
      'Use our intuitive search bar or explore categories',
      'Find items closest to you with our interactive map feature',
      "See what's popular in your community"
    ]
  },
  {
    icon: Gift,
    title: 'Claim or Donate Items',
    description: 'Engage with the community by giving or receiving items.',
    details: [
      'Click Claim to notify the donor',
      'Coordinate pickup through secure messaging',
      'Post items with pictures and details',
      'Set pickup instructions'
    ]
  },
  {
    icon: Users,
    title: 'Connect with the Community',
    description: 'Make a difference by engaging with like-minded individuals.',
    details: [
      'Share your experiences in community forums',
      'Learn new ways to reduce waste',
      'Join events and strengthen your local network'
    ]
  }
];

export default function HowItWorksPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Welcome to ShareIt! Our platform is designed to make sharing, trading, and giving
              effortless, meaningful, and sustainable.
            </p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="text-emerald-600 font-semibold">Step {index + 1}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h2>
                <p className="text-gray-600">{step.description}</p>
              </div>
              <div className="md:w-2/3 bg-white rounded-xl shadow-sm p-6">
                <ul className="space-y-4">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community today and start making a difference through sharing.
          </p>
          <button className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors">
            Sign Up Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}