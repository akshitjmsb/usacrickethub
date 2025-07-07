import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold text-usa-blue mb-6">
            Welcome to <span className="text-usa-red">USA Cricket Hub</span>
          </h1>
          <p className="text-xl text-usa-blue mb-8 max-w-2xl mx-auto">
            Your premier destination for cricket news, scores, and community in the United States
          </p>
          <div className="space-x-4">
            <button className="bg-usa-red hover:bg-red-800 text-usa-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Get Started
            </button>
            <button className="border-2 border-usa-blue text-usa-blue hover:bg-usa-light-blue hover:bg-opacity-10 font-bold py-3 px-8 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center text-usa-blue mb-12">Why Choose USA Cricket Hub?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Latest News',
                description: 'Stay updated with the latest cricket news and updates from across the USA and beyond.'
              },
              {
                title: 'Live Scores',
                description: 'Get real-time scores and updates from matches happening in the US cricket scene.'
              },
              {
                title: 'Community',
                description: 'Connect with fellow cricket enthusiasts and join the growing US cricket community.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-usa-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-usa-blue border-opacity-10">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
