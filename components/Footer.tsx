import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'sell' | 'expand' | null>('sell');
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <footer id="contact" className="w-full">
      {/* Dark Contact Section */}
      <section className="bg-[#333333] pt-24 pb-20 px-6 md:px-12">
        <div className="max-w-[1500px] mx-auto">
          {/* Header */}
          <div 
            className={`flex items-end justify-between border-b border-white/30 pb-0 cursor-pointer group ${isFormOpen ? 'mb-16' : 'mb-0'}`}
            onClick={() => setIsFormOpen(!isFormOpen)}
          >
            <h2 className="text-white font-thin text-5xl md:text-[80px] leading-none tracking-tight pb-4">Contact us</h2>
            <div className={`bg-white w-16 h-16 flex items-center justify-center transition-transform duration-500 ${isFormOpen ? 'rotate-90' : 'rotate-0'}`}>
              <ArrowRight className="w-8 h-8 text-[#333333]" strokeWidth={1} />
            </div>
          </div>

          {/* Form Content */}
          <AnimatePresence>
            {isFormOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: 'auto' }} 
                exit={{ opacity: 0, height: 0 }} 
                transition={{ duration: 0.8 }} 
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 pt-4">
                  {/* Left Column */}
                  <div>
                    <p className="text-white/70 text-xs mb-6">Lets talk</p>
                    <h3 className="text-white text-lg tracking-[0.2em] mb-8 uppercase">I AM HERE TO</h3>
                    <div className="space-y-4">
                      {['Sell your brands', 'Expand my brand'].map((label, idx) => (
                        <label key={idx} className="flex items-center gap-4 cursor-pointer group" onClick={() => setSelectedOption(idx === 0 ? 'sell' : 'expand')}>
                          <div className={`w-5 h-5 border border-white/50 flex items-center justify-center transition-colors ${((idx === 0 && selectedOption === 'sell') || (idx === 1 && selectedOption === 'expand')) ? 'bg-transparent' : ''}`}>
                            <Check className={`w-3 h-3 text-white transition-opacity ${((idx === 0 && selectedOption === 'sell') || (idx === 1 && selectedOption === 'expand')) ? 'opacity-100' : 'opacity-0'}`} strokeWidth={2} />
                          </div>
                          <span className="text-white/80 text-xs uppercase tracking-[0.15em]">{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6 max-w-xl">
                    {['Name', 'Email', 'Phone'].map((field, idx) => (
                      <div key={idx} className="space-y-2">
                        <label className="text-white/80 text-xs">{field}</label>
                        <input type="text" className="w-full h-10 bg-white text-[#333333] px-4 focus:outline-none" />
                      </div>
                    ))}
                    <div className="space-y-2">
                      <label className="text-white/80 text-xs">Message</label>
                      <textarea rows={4} className="w-full bg-white text-[#333333] p-4 focus:outline-none resize-none"></textarea>
                    </div>
                    <div className="pt-4">
                      <button className="w-48 border border-white/50 text-white py-3 text-sm hover:bg-white hover:text-[#333333] transition-colors">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* White Footer Section */}
      <section className="bg-white py-8 px-6 md:px-12">
        <div className="max-w-[1500px] mx-auto flex flex-col items-start gap-4">
          <h2 className="text-xl font-bold tracking-[0.2em] text-black">YAXA</h2>
          <div className="flex flex-wrap gap-4 text-[10px] text-gray-500">
            <a href="#" className="hover:text-black transition-colors">Youtube</a>
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;