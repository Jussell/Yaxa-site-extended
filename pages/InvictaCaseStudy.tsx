import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const InvictaCaseStudy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-12">
          <Link to="/retail" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-black hover:text-gray-500 transition-colors">
            <ArrowLeft size={16} />
            Back to Retail
          </Link>
        </div>

        {/* Hero Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-[48px] md:text-[80px] font-thin mb-6 text-gray-900 tracking-tight leading-none uppercase">
              Invicta & YAXA
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-500 max-w-3xl mx-auto leading-relaxed">
              A decade of strategic partnership driving unprecedented growth and brand presence across Latin America.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative w-full aspect-[21/9] bg-gray-200 mb-24">
            <img 
              src="https://picsum.photos/seed/invicta-hero/1600/700?grayscale" 
              alt="Invicta Storefront" 
              className="w-full h-full object-cover opacity-90 mix-blend-multiply" 
            />
          </div>
        </ScrollReveal>

        {/* The Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-32">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-light mb-8 text-gray-900">The Journey</h2>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
              <p>
                Founded in La Chaux-de-Fonds, Switzerland, in 1837, Invicta has long been recognized for its bold, innovative designs and exceptional engineering. However, expanding its footprint into the diverse and complex markets of Latin America required a partner with deep regional expertise and a robust operational infrastructure.
              </p>
              <p>
                In 2011, YAXA and Invicta joined forces. Our mission was clear: to establish Invicta not just as a watch brand, but as a lifestyle icon across LATAM. We began by opening strategic flagship stores in key metropolitan areas, carefully tailoring the retail experience to resonate with local consumer preferences while maintaining the brand's global identity.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="aspect-square bg-gray-100">
              <img 
                src="https://picsum.photos/seed/invicta-history/800/800?grayscale" 
                alt="Invicta History" 
                className="w-full h-full object-cover" 
              />
            </div>
          </ScrollReveal>
        </div>

        {/* By the Numbers */}
        <ScrollReveal>
          <div className="bg-gray-50 p-12 md:p-24 mb-32">
            <h2 className="text-3xl md:text-5xl font-light mb-16 text-center text-gray-900">Expansion by the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4">Physical Stores</p>
                <p className="text-5xl md:text-7xl font-thin text-gray-900 mb-2">12</p>
                <p className="text-sm font-light text-gray-500">Across 5 countries</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4">Digital Presence</p>
                <p className="text-5xl md:text-7xl font-thin text-gray-900 mb-2">100%</p>
                <p className="text-sm font-light text-gray-500">Omnichannel integration</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4">Active Customers</p>
                <p className="text-5xl md:text-7xl font-thin text-gray-900 mb-2">40M</p>
                <p className="text-sm font-light text-gray-500">In our database</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4">YoY Growth</p>
                <p className="text-5xl md:text-7xl font-thin text-green-600 mb-2">+15%</p>
                <p className="text-sm font-light text-gray-500">Consistent annual growth</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Future Projections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-24">
          <ScrollReveal>
            <div className="aspect-[4/5] bg-gray-100">
              <img 
                src="https://picsum.photos/seed/invicta-future/800/1000?grayscale" 
                alt="Future Projections" 
                className="w-full h-full object-cover" 
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-light mb-8 text-gray-900">Looking Ahead</h2>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed mb-12">
              <p>
                The success of the past decade is just the beginning. As we look to the future, YAXA is committed to accelerating Invicta's growth trajectory through digital innovation and strategic physical expansion.
              </p>
              <p>
                By 2028, we project the opening of 8 new experiential retail spaces in emerging LATAM markets. Furthermore, our investment in AI-driven customer analytics will allow us to offer hyper-personalized shopping experiences, seamlessly bridging the gap between our physical stores and digital platforms.
              </p>
            </div>
            <div className="border-l-2 border-gray-200 pl-6">
              <p className="text-xl font-light italic text-gray-800 mb-4">
                "Our partnership with YAXA has been instrumental in translating the bold spirit of Invicta into a language that resonates deeply with the Latin American consumer."
              </p>
              <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
                - Invicta Global Management
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </div>
  );
};

export default InvictaCaseStudy;
