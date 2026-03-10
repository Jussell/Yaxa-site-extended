import React, { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

const brands = [
  { name: 'FERRARI', description: 'Experience the thrill and precision of Ferrari timepieces, designed for those who live life in the fast lane.', image: 'https://picsum.photos/seed/ferrari/400/300?grayscale' },
  { name: 'MOVADO', description: 'Renowned for its iconic Museum dial and modern design aesthetic, Movado has earned more than 100 patents.', image: 'https://picsum.photos/seed/movado/400/300?grayscale' },
  { name: 'G-SHOCK', description: 'The watch that brought the new concept of toughness to the timepiece. Built to resist centrifugal and impact forces.', image: 'https://picsum.photos/seed/gshock/400/300?grayscale' },
  { name: 'CASIO', description: 'A pioneer in digital watches, Casio continues to innovate with technology that makes life more convenient.', image: 'https://picsum.photos/seed/casio/400/300?grayscale' },
  { name: 'FESTINA', description: 'With over a century of history, Festina offers high-quality watches with universal appeal and timeless style.', image: 'https://picsum.photos/seed/festina/400/300?grayscale' },
  { name: 'INVICTA', description: 'Invicta is known for its bold, innovative designs and exceptional engineering, offering premium timepieces.', image: 'https://picsum.photos/seed/invicta/400/300?grayscale' },
];

const voicesData = [
  {
    title: "Insatiable Curiosity",
    description: "Tireless pursuit of opportunities and ideas that shape tomorrow, combining boldness and wisdom to achieve excellence.",
    image: "https://picsum.photos/seed/curiosity/400/500?grayscale"
  },
  {
    title: "Driven by Data",
    description: "We utilize advanced analytics to optimize inventory placement and store layouts, ensuring high conversion without sacrificing the premium aesthetic.",
    image: "https://picsum.photos/seed/data/400/500?grayscale"
  },
  {
    title: "Sustainable Future",
    description: "Implemented green logistics and carbon-neutral operations across all warehouses, ensuring a better tomorrow.",
    image: "https://picsum.photos/seed/sustainable/400/500?grayscale"
  },
  {
    title: "Global Reach",
    description: "Expanding our footprint across continents, bringing premium experiences to new markets and diverse audiences.",
    image: "https://picsum.photos/seed/global/400/500?grayscale"
  }
];

const Retail: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<typeof brands[0] | null>(null);
  const [currentVoiceIndex, setCurrentVoiceIndex] = useState(0);

  const nextVoice = () => {
    setCurrentVoiceIndex((prev) => (prev + 1) % voicesData.length);
  };

  const prevVoice = () => {
    setCurrentVoiceIndex((prev) => (prev - 1 + voicesData.length) % voicesData.length);
  };

  return (
    <div className="pt-20">
      {/* Retail Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="flex flex-col justify-center px-6 md:px-20 py-20 bg-white">
          <ScrollReveal>
            <div className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">
              <Link to="/">Home</Link> / Retail
            </div>
            <h1 className="text-5xl md:text-6xl font-light mb-8">Retail<br />Excellence</h1>
            <p className="text-gray-600 font-light text-lg mb-10 max-w-md leading-relaxed">
              We design, operate, and optimize omnichannel experiences for international brands, taking care of every detail of the customer journey.
            </p>
            <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView()}>Partner With Us</Button>
          </ScrollReveal>
        </div>
        <div className="bg-gray-100 relative h-[50vh] lg:h-auto">
          <img 
            src="https://picsum.photos/800/1000?grayscale" 
            alt="Luxury Retail Store Interior" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Brands Grid Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-gray-100">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4">Our Brands</h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto">
              We partner with world-renowned brands to deliver exceptional retail experiences across our network.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
          {brands.map((brand, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div 
                className="group cursor-pointer flex flex-col items-center"
                onClick={() => setSelectedBrand(brand)}
              >
                <div className="w-full aspect-square bg-gray-50 flex items-center justify-center p-6 mb-4 transition-colors group-hover:bg-gray-100">
                  <span className="text-sm font-medium tracking-widest text-gray-800 text-center">{brand.name}</span>
                </div>
                {/* Desktop hover description - hidden on mobile */}
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">
                  <p className="text-xs text-gray-500 font-light leading-relaxed">{brand.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Brand Modal */}
      <AnimatePresence>
        {selectedBrand && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end md:items-stretch justify-center md:justify-end bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedBrand(null)}
          >
            <motion.div 
              initial={window.innerWidth < 768 ? { y: "100%" } : { x: "100%" }}
              animate={window.innerWidth < 768 ? { y: 0 } : { x: 0 }}
              exit={window.innerWidth < 768 ? { y: "100%" } : { x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full md:w-[450px] max-h-[90vh] md:max-h-none md:h-full overflow-y-auto shadow-2xl relative rounded-t-3xl md:rounded-none flex flex-col"
            >
              <button 
                onClick={() => setSelectedBrand(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
              <div className="h-64 md:h-72 bg-gray-100 relative shrink-0">
                <img 
                  src={selectedBrand.image} 
                  alt={selectedBrand.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col items-center text-center flex-grow">
                <h3 className="text-3xl font-light tracking-widest mb-4">{selectedBrand.name}</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-8">
                  {selectedBrand.description}
                </p>
                
                <div className="grid grid-cols-2 gap-y-8 gap-x-4 border-t border-gray-100 pt-8 w-full text-left mb-8">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Stores</p>
                    <p className="text-2xl font-light text-gray-900">12</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Online</p>
                    <p className="text-2xl font-light text-gray-900">Yes</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Customers</p>
                    <p className="text-2xl font-light text-gray-900">40M</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Growth YoY</p>
                    <p className="text-2xl font-light text-green-600">+15%</p>
                  </div>
                </div>

                <div className="mt-auto w-full">
                  <Link to="/contact" onClick={() => setSelectedBrand(null)} className="w-full block">
                    <button className="bg-[#1A1A1A] text-white px-10 py-4 text-sm font-light hover:bg-black transition-colors w-full">
                      Contact us
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Brand Spotlight */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-gray-100">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
             <ScrollReveal>
                <img 
                  src="https://picsum.photos/600/400?grayscale" 
                  alt="Invicta Store" 
                  className="w-full h-auto shadow-sm"
                />
             </ScrollReveal>
          </div>
          <div className="w-full md:w-1/2">
            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl font-light mb-2">Featured Partner</h2>
              <h3 className="text-5xl font-bold text-gray-200 mb-8">INVICTA</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                Since 2011, we have expanded Invicta's footprint across Latin America, establishing flagship stores that embody the brand's bold spirit while tailoring the experience to local consumer preferences.
              </p>
              <Link to="/case-study/invicta">
                <Button variant="link">See Case Study</Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials / Voices */}
      <section className="py-24 bg-white md:bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Mobile Layout */}
          <div className="md:hidden">
            <ScrollReveal>
              <h2 className="text-[56px] font-thin mb-6 tracking-tight leading-none text-gray-900">Our Voices</h2>
              <p className="text-gray-400 font-light text-lg leading-relaxed mb-8">
                We have a unique culture because, throughout our history, we have been guided by a family with strong and solid values that have been passed down from generation to generation. These values define how we carry out our activities:
              </p>
              <div className="flex gap-4 mb-12">
                <button onClick={prevVoice} className="text-gray-600 hover:text-black transition-colors">
                  <ArrowLeft size={32} strokeWidth={1} />
                </button>
                <button onClick={nextVoice} className="text-gray-600 hover:text-black transition-colors">
                  <ArrowRight size={32} strokeWidth={1} />
                </button>
              </div>
            </ScrollReveal>

            <AnimatePresence mode="wait">
              <motion.div 
                key={currentVoiceIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex gap-6"
              >
                <div className="w-1/2 aspect-square bg-gray-200 flex-shrink-0">
                  <img 
                    src={voicesData[currentVoiceIndex].image} 
                    alt={voicesData[currentVoiceIndex].title}
                    className="w-full h-full object-cover opacity-80 mix-blend-multiply"
                  />
                </div>
                <div className="w-1/2 flex flex-col justify-center">
                  <h3 className="text-lg font-light text-gray-800 mb-4">{voicesData[currentVoiceIndex].title}</h3>
                  <p className="text-sm font-light text-gray-500 leading-relaxed">
                    {voicesData[currentVoiceIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex gap-12">
            {/* Left Column */}
            <div className="w-1/4 shrink-0">
              <ScrollReveal>
                <h2 className="text-[56px] font-thin mb-6 tracking-tight leading-none text-gray-900">Our Voices</h2>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-8 pr-4">
                  We have a unique culture because, throughout our history, we have been guided by a family with strong and solid values that have been passed down from generation to generation. These values define how we carry out our activities:
                </p>
                <div className="flex gap-4">
                  <button onClick={prevVoice} className="text-gray-600 hover:text-black transition-colors">
                    <ArrowLeft size={24} strokeWidth={1} />
                  </button>
                  <button onClick={nextVoice} className="text-gray-600 hover:text-black transition-colors">
                    <ArrowRight size={24} strokeWidth={1} />
                  </button>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Right Column */}
            <div className="w-3/4 overflow-hidden">
               <motion.div 
                 className="flex gap-8"
                 animate={{ x: `calc(-${currentVoiceIndex * 33.3333}% - ${currentVoiceIndex * 0.666}rem)` }}
                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
               >
                 {voicesData.map((voice, idx) => (
                   <div key={idx} className="w-[calc(33.333%-1.33rem)] shrink-0 flex flex-col">
                      <h3 className="text-sm font-light text-gray-400 mb-4">{voice.title}</h3>
                      <p className="text-sm font-light italic text-gray-500 leading-relaxed mb-8 min-h-[80px]">
                        {voice.description}
                      </p>
                      <div className="w-full aspect-[3/4] bg-gray-200">
                        <img src={voice.image} alt={voice.title} className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
                      </div>
                   </div>
                 ))}
               </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Retail;