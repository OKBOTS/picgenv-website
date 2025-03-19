import React from 'react';
import { Bot, Sparkles, Image, Palette, ChevronRight, Github, Disc as Discord, Wand2, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import BotStats from '../components/BotStats';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0033] via-[#2d0059] to-[#1a0033]">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wand2 className="h-8 w-8 text-violet-400" />
            <span className="text-2xl font-bold text-white">PicGenV</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#models" className="text-violet-300 hover:text-white transition">Models</a>
            <a href="#features" className="text-violet-300 hover:text-white transition">Features</a>
            <a href="#examples" className="text-violet-300 hover:text-white transition">Examples</a>
          </div>
          <a 
            href="https://discord.com/oauth2/authorize?client_id=1229726500883005511" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-violet-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-violet-600 transition"
          >
            Add to Discord
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="relative">
          <div className="absolute inset-0 blur-[100px] bg-violet-600/20 rounded-full"></div>
          <h1 className="relative text-5xl md:text-7xl font-bold text-white mb-8">
            Unleash Your
            <span className="block text-violet-400">Creative Vision</span>
          </h1>
        </div>
        <p className="text-xl text-violet-200 mb-12 max-w-2xl mx-auto">
          Generate stunning images with unlimited possibilities using our advanced AI models. No restrictions, pure creativity.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="https://discord.com/oauth2/authorize?client_id=1229726500883005511" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-violet-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-violet-600 transition flex items-center justify-center"
          >
            Start Creating <ChevronRight className="ml-2" />
          </a>
          <div className="flex items-center gap-2 bg-violet-900/50 text-white px-8 py-4 rounded-full font-bold text-lg border border-violet-700/50">
            <ShieldAlert className="h-6 w-6 text-violet-400" />
            <span>NSFW Supported</span>
          </div>
        </div>
      </section>

      {/* Bot Stats Section */}
      <section className="container mx-auto px-6">
        <BotStats />
      </section>

      {/* Models Section */}
      <section id="models" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Powerful AI Models</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-violet-900/30 p-8 rounded-2xl backdrop-blur-sm border border-violet-800/50">
            <Sparkles className="h-12 w-12 text-violet-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Flux Pro</h3>
            <p className="text-violet-300">Professional-grade image generation with exceptional detail and quality.</p>
          </div>
          <div className="bg-violet-900/30 p-8 rounded-2xl backdrop-blur-sm border border-violet-800/50">
            <Image className="h-12 w-12 text-violet-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Flux 1</h3>
            <p className="text-violet-300">Fast and efficient image generation for quick creative concepts.</p>
          </div>
          <div className="bg-violet-900/30 p-8 rounded-2xl backdrop-blur-sm border border-violet-800/50">
            <Palette className="h-12 w-12 text-violet-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">PicGenVai</h3>
            <p className="text-violet-300">Our latest model with enhanced artistic style and creative freedom.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="bg-violet-900/20 rounded-3xl p-12 border border-violet-800/30">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h4 className="text-4xl font-bold text-white mb-2">Unlimited</h4>
              <p className="text-violet-300">Image Generation</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold text-white mb-2">4K</h4>
              <p className="text-violet-300">Max Resolution</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold text-white mb-2">3</h4>
              <p className="text-violet-300">AI Models</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold text-white mb-2">24/7</h4>
              <p className="text-violet-300">Generation Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Example Generations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&w=800&q=80" 
              alt="AI Generated Art 1"
              className="rounded-xl w-full h-64 object-cover transition group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/90 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition">
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold">Generated with Flux Pro</p>
                <p className="text-violet-300 text-sm">Abstract Digital Landscape</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=800&q=80" 
              alt="AI Generated Art 2"
              className="rounded-xl w-full h-64 object-cover transition group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/90 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition">
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold">Generated with Flux 1</p>
                <p className="text-violet-300 text-sm">Neon City Night</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80" 
              alt="AI Generated Art 3"
              className="rounded-xl w-full h-64 object-cover transition group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/90 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition">
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold">Generated with PicGenVai</p>
                <p className="text-violet-300 text-sm">Cosmic Dreams</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-violet-800/30">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Wand2 className="h-6 w-6 text-violet-400" />
            <span className="text-xl font-bold text-white">PicGenV</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-6">
              <a href="#" className="text-violet-400 hover:text-white transition">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-violet-400 hover:text-white transition">
                <Discord className="h-6 w-6" />
              </a>
            </div>
            <Link to="/privacy-policy" className="text-violet-300 hover:text-white transition ml-6">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;