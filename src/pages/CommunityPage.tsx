import React from 'react';
import { Share2, MessageSquare, Trophy, Heart, Calendar } from 'lucide-react';

const stories = [
  {
    name: 'Jane Doe',
    quote: 'Thanks to SwapCircle, I found free groceries near me!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'John Smith',
    quote: 'Posting my unused items helped my neighbors. What a great idea!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
];

const topContributors = [
  {
    name: 'Sarah Johnson',
    contributions: 52,
    badge: 'Super Donor',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Michael Chen',
    contributions: 48,
    badge: 'Community Builder',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
  },
];

const events = [
  {
    title: 'Community Swap Meet',
    date: '2024-04-15',
    type: 'Donation Drive',
    location: 'Central Park',
  },
  {
    title: 'Sustainable Living Workshop',
    date: '2024-04-22',
    type: 'Workshop',
    location: 'Community Center',
  },
];

export default function CommunityPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to the ShareIt Community!</h1>
          <p className="text-xl max-w-2xl mx-auto">
            At ShareIt, our community is at the heart of everything we do. This is a space where
            people connect, share, and make a difference together.
          </p>
        </div>
      </div>

      {/* User Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">User Stories: Real Impact, Real People</h2>
            <p className="mt-4 text-lg text-gray-600">Get inspired by the incredible stories of generosity and transformation.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start space-x-4">
                  <img src={story.avatar} alt={story.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="text-gray-600 italic mb-2">{story.quote}</p>
                    <p className="font-medium text-gray-900">– {story.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors">
              <Share2 className="w-5 h-5 mr-2" />
              Share Your Story
            </button>
          </div>
        </div>
      </section>

      {/* Forums Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Discussion Forums</h2>
            <p className="mt-4 text-lg text-gray-600">Join conversations, share ideas, and seek support.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {['General Discussions', 'Tips for Reducing Waste', 'Request for Items'].map((forum, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{forum}</h3>
                <button className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Join Discussion
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Community Champions</h2>
            <p className="mt-4 text-lg text-gray-600">Celebrating our most active contributors.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {topContributors.map((contributor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center space-x-4">
                  <img src={contributor.avatar} alt={contributor.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <h3 className="text-xl font-semibold">{contributor.name}</h3>
                    <p className="text-gray-600">{contributor.contributions} contributions</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      {contributor.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <p className="mt-4 text-lg text-gray-600">Join us for these community activities.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.location}</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 mt-2">
                      {event.type}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                    <button className="mt-2 inline-flex items-center text-emerald-600 hover:text-emerald-700">
                      <Calendar className="w-5 h-5 mr-2" />
                      RSVP
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Involved Today!</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Make your voice heard and your actions count in our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors">
              <Heart className="w-5 h-5 mr-2" />
              Volunteer Now
            </button>
            <button className="inline-flex items-center px-6 py-3 rounded-full bg-white text-emerald-600 font-semibold hover:bg-gray-50 transition-colors">
              <Calendar className="w-5 h-5 mr-2" />
              View All Events
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}