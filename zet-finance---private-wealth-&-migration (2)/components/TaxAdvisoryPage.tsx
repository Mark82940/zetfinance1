import React, { useEffect } from 'react';
import { Briefcase, TrendingUp, ShieldCheck, ArrowRight, Check } from 'lucide-react';

interface TaxAdvisoryPageProps {
  onContactClick: (interest: string) => void;
  t: {
    tax_eyebrow: string;
    tax_hero_title: string;
    tax_hero_sub: string;
    tax_btn_assess: string;
    tax_tag_licensed: string;
    tax_tag_compliance: string;
    tax_btn_inquire: string;
    tax_corp_title: string;
    tax_corp_sub: string;
    tax_pers_title: string;
    tax_pers_sub: string;
    tax_why_title: string;
    tax_why_sub: string;
    tax_speak_title: string;
    tax_speak_sub: string;
    tax_btn_book: string;
    card3_title: string;
    card3_sub: string;
    [key: string]: string;
  };
}

export const TaxAdvisoryPage: React.FC<TaxAdvisoryPageProps> = ({ onContactClick, t }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const offerings = [
    {
      title: t.card3_title, // Global Residence Programme
      desc: t.card3_sub,
      icon: <TrendingUp className="w-6 h-6 text-white" />
    },
    {
      title: t.tax_corp_title,
      desc: t.tax_corp_sub,
      icon: <Briefcase className="w-6 h-6 text-white" />
    },
    {
      title: t.tax_pers_title,
      desc: t.tax_pers_sub,
      icon: <ShieldCheck className="w-6 h-6 text-white" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      
      {/* Hero */}
      <section className="bg-brand-navy text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
               <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                 <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
               </pattern>
               <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
           <span className="inline-block py-1 px-3 border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
              {t.tax_eyebrow}
           </span>
           <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
             {t.tax_hero_title}
           </h1>
           <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto mb-8">
             {t.tax_hero_sub}
           </p>
           <button 
             onClick={() => onContactClick("Tax Assessment")}
             className="bg-brand-gold hover:bg-amber-500 text-brand-navy font-bold px-8 py-4 rounded-sm transition-all text-sm uppercase tracking-widest inline-flex items-center gap-2"
           >
             {t.tax_btn_assess} <ArrowRight className="w-4 h-4" />
           </button>
        </div>
      </section>

      {/* Key Offerings Grid */}
      <section className="py-24 container mx-auto px-6 relative -mt-16 z-20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {offerings.map((offer, idx) => (
               <div 
                 key={idx} 
                 onClick={() => onContactClick(offer.title)}
                 className="bg-white p-10 rounded-sm shadow-xl border-t-4 border-brand-gold hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col h-full"
               >
                  <div className="flex-grow">
                      <div className="w-12 h-12 bg-brand-navy rounded-sm flex items-center justify-center mb-6 shadow-lg group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                        {offer.icon}
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">{offer.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {offer.desc}
                      </p>
                      <ul className="space-y-2 mb-8">
                        <li className="flex items-center gap-2 text-sm text-slate-500">
                            <Check className="w-4 h-4 text-brand-gold" /> {t.tax_tag_licensed}
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-500">
                            <Check className="w-4 h-4 text-brand-gold" /> {t.tax_tag_compliance}
                        </li>
                      </ul>
                  </div>
                  <div className="mt-auto pt-4 text-brand-navy font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:text-brand-gold transition-colors">
                    {t.tax_btn_inquire} <ArrowRight className="w-4 h-4" />
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Info Section */}
      <section className="pb-24 pt-8 container mx-auto px-6 text-center max-w-3xl">
         <h2 className="font-serif text-3xl font-bold text-brand-navy mb-6">{t.tax_why_title}</h2>
         <p className="text-slate-600 leading-relaxed mb-12">
            {t.tax_why_sub}
         </p>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 text-white py-20 text-center">
         <div className="container mx-auto px-6">
            <h2 className="font-serif text-4xl font-bold mb-6">{t.tax_speak_title}</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
               {t.tax_speak_sub}
            </p>
            <button 
             onClick={() => onContactClick("Tax Advisory Consultation")}
             className="bg-white text-brand-navy hover:bg-slate-100 font-bold px-10 py-4 rounded-sm transition-all text-sm uppercase tracking-widest inline-flex items-center gap-2"
           >
             {t.tax_btn_book} <ArrowRight className="w-4 h-4" />
           </button>
         </div>
      </section>

    </div>
  );
};