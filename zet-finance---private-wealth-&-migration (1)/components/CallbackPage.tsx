import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle2, ChevronLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CallbackPageProps {
  onBack: () => void;
}

export const CallbackPage: React.FC<CallbackPageProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 flex flex-col relative">
      <div className="container mx-auto px-6 flex-grow flex flex-col">
        
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-brand-navy mb-8 transition-colors self-start"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="font-semibold text-sm">Back</span>
        </button>

        <div className="flex-grow flex items-center justify-center">
          <div className="bg-white w-full max-w-6xl shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row min-h-[600px]">
            
            {/* Left Column: Brevity & Links */}
            <div className="w-full md:w-1/2 bg-brand-navy text-white p-12 flex flex-col justify-center relative overflow-hidden">
               {/* Decor */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

               <div className="relative z-10 space-y-8">
                  <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                    Let's structure <br/>
                    <span className="text-brand-gold">your future.</span>
                  </h1>
                  
                  <div className="space-y-6 pt-4">
                     <a href="mailto:michael@zetfinance.com.mt" className="flex items-center gap-4 group">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                           <Mail className="w-5 h-5" />
                        </div>
                        <span className="text-lg font-light text-slate-300 group-hover:text-white transition-colors">michael@zetfinance.com.mt</span>
                     </a>
                     
                     <a href="tel:+35621330000" className="flex items-center gap-4 group">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                           <Phone className="w-5 h-5" />
                        </div>
                        <span className="text-lg font-light text-slate-300 group-hover:text-white transition-colors">+356 2133 0000</span>
                     </a>
                  </div>

                  <div className="pt-8">
                     <button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-sm transition-all flex items-center gap-3 shadow-lg w-full md:w-auto justify-center">
                        <MessageCircle className="w-5 h-5" />
                        Chat on WhatsApp
                     </button>
                  </div>
               </div>
            </div>

            {/* Right Column: Minimalist Form */}
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-white">
               {!submitted ? (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                    <div>
                       <h3 className="font-serif text-2xl font-bold text-brand-navy mb-2">Request Callback</h3>
                       <p className="text-slate-500 text-sm">Enter your details for a discreet consultation.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                       <div className="space-y-1">
                          <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">Name</label>
                          <input type="text" className="w-full p-4 border-b border-slate-200 focus:border-brand-navy focus:outline-none bg-slate-50/50 transition-colors placeholder:text-slate-300" placeholder="e.g. John Doe" required />
                       </div>

                       <div className="space-y-1">
                          <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">Mobile or Email</label>
                          <input type="text" className="w-full p-4 border-b border-slate-200 focus:border-brand-navy focus:outline-none bg-slate-50/50 transition-colors placeholder:text-slate-300" placeholder="e.g. +44 7700..." required />
                       </div>

                       <div className="space-y-1">
                          <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">How can we help?</label>
                          <textarea rows={3} className="w-full p-4 border-b border-slate-200 focus:border-brand-navy focus:outline-none bg-slate-50/50 transition-colors placeholder:text-slate-300 resize-none" placeholder="Briefly describe your requirements..."></textarea>
                       </div>

                       <div className="space-y-3 pt-2">
                           <button 
                             type="submit" 
                             disabled={loading}
                             className="w-full bg-brand-navy text-white font-bold py-5 rounded-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl mt-4"
                           >
                             {loading ? "Sending..." : "Request Callback"} <ArrowRight className="w-4 h-4" />
                           </button>

                           {/* Dual CTA: Secondary Direct Email */}
                           <a 
                             href="mailto:michael@zetfinance.com.mt"
                             className="w-full bg-transparent border border-brand-navy/20 text-brand-navy font-bold py-4 rounded-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-widest"
                           >
                              Email Us Directly <Mail className="w-4 h-4" />
                           </a>
                       </div>
                    </form>
                 </motion.div>
               ) : (
                 <div className="flex flex-col items-center justify-center text-center space-y-6 animate-fade-in h-full">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                       <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-brand-navy">Message Sent</h3>
                    <p className="text-slate-500 max-w-xs mx-auto">
                       Our team will contact you shortly via your preferred method.
                    </p>
                    <button onClick={onBack} className="text-brand-navy font-bold underline hover:text-brand-gold">
                       Return to Home
                    </button>
                 </div>
               )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};