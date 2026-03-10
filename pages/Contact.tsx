import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-white min-h-screen text-black px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
            <ScrollReveal>
                <div className="border-b border-gray-200 pb-6 mb-16">
                  <h1 className="text-4xl md:text-6xl font-thin tracking-tight text-gray-900">Get in touch</h1>
                </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                <div>
                  <h3 className="text-2xl font-light mb-8 text-gray-900">Direct Contact</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-10">
                    Whether you're looking to expand your brand or have a general inquiry, our team is ready to assist you. Reach out to us directly through email or connect with us on LinkedIn. You can also use the contact form below.
                  </p>
                  
                  <div className="space-y-6">
                    <a href="mailto:contact@yaxa.com" className="flex items-center gap-6 group">
                      <div className="w-14 h-14 bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors rounded-full">
                        <Mail className="w-5 h-5 text-gray-800" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Email</p>
                        <p className="text-sm font-medium text-gray-900">contact@yaxa.com</p>
                      </div>
                    </a>
                    
                    <a href="https://linkedin.com/company/yaxa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                      <div className="w-14 h-14 bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors rounded-full">
                        <Linkedin className="w-5 h-5 text-gray-800" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">LinkedIn</p>
                        <p className="text-sm font-medium text-gray-900">YAXA Official</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-light mb-8 text-gray-900">Our Offices</h3>
                  <div className="space-y-10">
                    <div>
                      <div className="flex items-start gap-6">
                        <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-full flex-shrink-0">
                          <MapPin className="w-5 h-5 text-gray-800" strokeWidth={1.5} />
                        </div>
                        <div className="pt-2">
                          <p className="text-sm font-medium mb-2 text-gray-900">Headquarters</p>
                          <p className="text-sm text-gray-600 font-light leading-relaxed">
                            123 Business Avenue<br />
                            Suite 400<br />
                            Miami, FL 33131<br />
                            United States
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-start gap-6">
                        <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-full flex-shrink-0">
                          <Phone className="w-5 h-5 text-gray-800" strokeWidth={1.5} />
                        </div>
                        <div className="pt-2">
                          <p className="text-sm font-medium mb-2 text-gray-900">Phone</p>
                          <p className="text-sm text-gray-600 font-light">
                            +1 (555) 123-4567
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
        </div>
    </div>
  );
};

export default Contact;