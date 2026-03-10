import React, { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(true); 
  const [selectedOption, setSelectedOption] = useState<'sell' | 'expand' | null>('sell');

  return (
    <div className="pt-40 pb-24 bg-[#1c1c1c] min-h-screen text-white px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
            <ScrollReveal>
                <div 
                  className={`flex items-end justify-between border-b border-white pb-4 transition-all duration-700 cursor-pointer group ${isFormOpen ? 'mb-12 md:mb-20' : 'mb-0'}`}
                  onClick={() => setIsFormOpen(!isFormOpen)}
                >
                  <h1 className="text-4xl md:text-6xl font-thin text-white tracking-tight whitespace-nowrap">Contact us</h1>
                  <div className={`bg-white p-4 md:p-6 flex items-center justify-center transition-transform duration-500 ${isFormOpen ? 'rotate-90' : 'rotate-0'}`}>
                    <ArrowRight className="w-6 h-6 md:w-10 md:h-10 text-black" strokeWidth={1} />
                  </div>
                </div>
            </ScrollReveal>
            
            <AnimatePresence>
              {isFormOpen && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-10">
                        <div>
                          <p className="text-[8px] font-light text-gray-500 mb-6 tracking-[0.3em] uppercase">Lets talk</p>
                          <h3 className="text-base md:text-lg tracking-[0.4em] font-normal mb-8 uppercase text-white">I AM HERE TO</h3>
                          <div className="space-y-4 mb-10">
                            {[ {id: 'sell', label: 'Sell your brands'}, {id: 'expand', label: 'Expand my brand'} ].map((opt) => (
                              <label key={opt.id} className="flex items-center gap-4 cursor-pointer group" onClick={() => setSelectedOption(opt.id as any)}>
                                 <div className={`w-6 h-6 border border-white/40 flex items-center justify-center transition-colors ${selectedOption === opt.id ? 'bg-white' : ''}`}>
                                    <Check className={`w-4 h-4 text-black transition-opacity ${selectedOption === opt.id ? 'opacity-100' : 'opacity-0'}`} strokeWidth={3} />
                                 </div>
                                 <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-light text-white group-hover:opacity-70 transition-opacity">{opt.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="grid grid-cols-1 gap-6">
                            {['Name', 'Email', 'Phone'].map((field) => (
                              <div key={field} className="space-y-1">
                                <label className="text-[10px] font-light text-white/40 uppercase tracking-widest">{field}</label>
                                <input type={field === 'Email' ? 'email' : 'text'} className="w-full h-11 bg-white text-black px-4 text-sm font-light focus:outline-none" />
                              </div>
                            ))}
                            <div className="space-y-1">
                              <label className="text-[10px] font-light text-white/40 uppercase tracking-widest">Message</label>
                              <textarea rows={4} className="w-full bg-white text-black p-4 text-sm font-light focus:outline-none resize-none"></textarea>
                            </div>
                          </div>
                          <button className="w-full border border-white py-4 mt-6 text-[10px] font-bold tracking-[0.3em] uppercase text-white hover:bg-white hover:text-black transition-all duration-500">Send</button>
                        </div>
                    </div>
                </motion.div>
              )}
            </AnimatePresence>
        </div>
    </div>
  );
};

export default Contact;