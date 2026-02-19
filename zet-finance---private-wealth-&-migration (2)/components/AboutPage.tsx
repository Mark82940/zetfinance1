import React, { useEffect, useState } from 'react';
import { Shield, Mail, Phone, ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutPageProps {
  onContactClick: () => void;
  t: {
    about_hero_title: string;
    about_hero_sub: string;
    about_licensed: string;
    about_board: string;
    about_leadership: string;
    about_role_mp: string;
    about_role_p: string;
    about_read_bio: string;
    about_trusted: string;
    about_trusted_sub: string;
    about_speak: string;
    cta_callback: string;
    btn_email_direct: string;
    [key: string]: string;
  };
}

const leaders = [
  {
    name: "Michael Mercieca",
    roleKey: "about_role_mp",
    email: "michael@zetfinance.com.mt",
    image: "https://cdn.prod.website-files.com/64300276b80bac578ffb70ef/64300625bc3b957240776e0c_WhatsApp%20Image%202023-04-06%20at%2010.48.58-p-500.jpeg",
    bio: "Michael is a Certified Public Accountant with an Advanced Diploma in International Taxation (ADIT). He worked within Deloitte Malta's tax department, eventually heading the 'personal tax and employer services' team from 2014 to 2017. He lectures for the Malta Institute of Taxation and sits on the Direct Tax Committee. Together with Zet Finance, Michael co-founded QLZH Group, one of Malta's leading estate agency franchises with 30 offices and over 550 agents, and sits on the Board of a publicly listed entity."
  },
  {
    name: "Bernard Catania",
    roleKey: "about_role_p",
    email: "bernard@zetfinance.com.mt",
    image: "https://cdn.prod.website-files.com/64300276b80bac578ffb70ef/646d2915ef4d23d3e02623b2_WhatsApp%20Image%202023-05-08%20at%2016.24.38-p-500.jpeg",
    bio: "Bernard is a Malta Warranted, Certified Public Accountant, and a member of the Malta Institute of Accountants. He assists numerous clients with accounting, corporate, and tax advisory services, specializing in international corporate structures. Bernard leads the firm’s immigration practice, expertly guiding applications for Malta citizenship and residency."
  }
];

const testimonials = [
  {
    quote: "I would highly recommend this company to anyone looking for personalized, professional, and reliable service. They truly care about their clients and are always willing to go the extra mile to ensure their success.",
    author: "Tech Entrepreneur, United Kingdom"
  },
  {
    quote: "We have been working with Zet Finance for several years and have always been impressed with their level of expertise, attention to detail, and commitment to our success. They are a true partner in our business.",
    author: "Director, European Family Office"
  },
  {
    quote: "The team at Zet Finance handled all aspects of my family’s relocation! They were so helpful and supportive throughout the entire process, and their expertise and guidance were invaluable. I could not have asked for a better experience.",
    author: "Private Investor, Canada"
  }
];

export const AboutPage: React.FC<AboutPageProps> = ({ onContactClick, t }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expandedLeader, setExpandedLeader] = useState<string | null>(null);

  const toggleLeader = (name: string) => {
    if (expandedLeader === name) {
      setExpandedLeader(null);
    } else {
      setExpandedLeader(name);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION: Clean Navy (No Image) */}
      <section className="bg-slate-900 pt-44 pb-32 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
           <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] max-w-5xl mx-auto drop-shadow-2xl">
             {t.about_hero_title}
           </h1>
           <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-white text-center">
         <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-brand-navy leading-relaxed mb-10">
               "{t.about_hero_sub}"
            </h2>
            
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-50 border border-slate-200 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default">
               <Shield className="w-5 h-5 text-brand-gold" />
               <span className="text-xs md:text-sm font-bold text-brand-navy uppercase tracking-widest">
                  {t.about_licensed}
               </span>
            </div>
         </div>
      </section>

      {/* 2. LEADERSHIP TEAM (Interactive Cards) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
               <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-3 block">{t.about_board}</span>
               <h2 className="font-serif text-4xl font-bold text-brand-navy">{t.about_leadership}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
               {leaders.map((leader, idx) => {
                 const isExpanded = expandedLeader === leader.name;
                 return (
                   <motion.div 
                     key={idx}
                     layout
                     onClick={() => toggleLeader(leader.name)}
                     className={`group bg-white p-6 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-transparent hover:border-brand-gold/20 ${isExpanded ? 'ring-1 ring-brand-gold/20' : ''}`}
                   >
                      <motion.div layout className="w-full h-[500px] overflow-hidden mb-6 bg-slate-200 relative rounded-sm">
                         <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors z-10 duration-500 pointer-events-none"></div>
                         <img 
                            src={leader.image} 
                            alt={leader.name} 
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                         />
                         {/* Expand Indicator Overlay */}
                         {!isExpanded && (
                           <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20">
                              <ChevronDown className="w-5 h-5 text-brand-navy" />
                           </div>
                         )}
                      </motion.div>
                      
                      <motion.div layout className="text-center px-2">
                         <h3 className="font-serif text-3xl font-bold text-brand-navy mb-1">{leader.name}</h3>
                         <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">{t[leader.roleKey]}</p>
                         
                         <AnimatePresence>
                           {isExpanded && (
                             <motion.div 
                               initial={{ opacity: 0, height: 0 }}
                               animate={{ opacity: 1, height: 'auto' }}
                               exit={{ opacity: 0, height: 0 }}
                               className="text-left mt-6 border-t border-slate-100 pt-6"
                             >
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                   {leader.bio}
                                </p>
                                <a 
                                  href={`mailto:${leader.email}`} 
                                  className="inline-flex items-center gap-2 text-brand-navy font-bold text-sm hover:text-brand-gold transition-colors"
                                  onClick={(e) => e.stopPropagation()} // Prevent card toggle on email click
                                >
                                   <Mail className="w-4 h-4" /> {leader.email}
                                </a>
                                <div className="mt-6 flex justify-center">
                                  <button className="text-xs text-slate-400 uppercase tracking-widest hover:text-brand-navy flex items-center gap-1">
                                    <ChevronUp className="w-3 h-3" /> Close Bio
                                  </button>
                                </div>
                             </motion.div>
                           )}
                         </AnimatePresence>
                         
                         {!isExpanded && (
                            <p className="text-xs text-slate-400 mt-2 group-hover:text-brand-navy transition-colors">
                               {t.about_read_bio}
                            </p>
                         )}
                      </motion.div>
                   </motion.div>
                 );
               })}
            </div>
         </div>
      </section>

      {/* 3. TESTIMONIALS (Card Layout) */}
      <section className="py-24 bg-slate-50">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-4">{t.about_trusted}</h2>
               <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
               <p className="text-slate-600 max-w-2xl mx-auto">
                 {t.about_trusted_sub}
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {testimonials.map((t, i) => (
                  <div key={i} className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                     <Quote className="w-8 h-8 text-brand-gold mb-6 opacity-80" />
                     {/* Updated Typography: Sans-Serif, Normal Weight, text-lg */}
                     <p className="text-lg text-slate-700 font-sans font-normal leading-relaxed mb-8 flex-grow">
                        "{t.quote}"
                     </p>
                     <div className="mt-auto pt-6 border-t border-slate-100">
                        <p className="font-bold text-brand-navy text-sm uppercase tracking-wide">
                           — {t.author}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="py-24 bg-brand-navy text-white text-center relative overflow-hidden border-t border-white/10">
         {/* Background Texture */}
         <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
               <pattern id="grid-cta" width="20" height="20" patternUnits="userSpaceOnUse">
                 <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
               </pattern>
               <rect width="100%" height="100%" fill="url(#grid-cta)" />
            </svg>
         </div>

         <div className="container mx-auto px-6 relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 leading-tight">
               {t.about_speak}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
               <button 
                  onClick={onContactClick}
                  className="bg-brand-gold hover:bg-amber-500 text-brand-navy font-bold py-4 px-10 rounded-sm transition-all duration-300 shadow-lg shadow-brand-gold/20 flex items-center gap-3 uppercase tracking-widest text-sm w-full md:w-auto justify-center"
               >
                  <Phone className="w-4 h-4" /> {t.cta_callback}
               </button>
               <a 
                  href="mailto:michael@zetfinance.com.mt"
                  className="bg-transparent border border-white/30 hover:bg-white hover:text-brand-navy text-white font-bold py-4 px-10 rounded-sm transition-all duration-300 flex items-center gap-3 uppercase tracking-widest text-sm w-full md:w-auto justify-center"
               >
                  <Mail className="w-4 h-4" /> {t.btn_email_direct}
               </a>
            </div>
         </div>
      </section>
    </div>
  );
};