import React from 'react';
import { EligibilityWizard } from './EligibilityWizard';

interface HeroProps {
  onNavigate: (page: string) => void;
  lang: string;
  t: {
    hero_badge: string;
    hero_title: string;
    hero_sub: string;
    metric_1: string;
    metric_2: string;
    metric_3: string;
    [key: string]: string;
  };
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, lang, t }) => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-28 pb-20 bg-slate-50 overflow-hidden">
      {/* Background - Elegant Financial Theme */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-navy/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Fine grid pattern */}
        <svg className="w-full h-full opacity-[0.03]" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
           <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
             <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#0A192F" strokeWidth="0.5"/>
           </pattern>
           <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text */}
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-brand-navy/10 rounded-sm shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
            <span className="text-brand-navy text-[10px] font-bold tracking-widest uppercase">
              {t.hero_badge}
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-brand-navy leading-[1.1]">
            {/* Render English with gold split for styling, others as blocks */}
            {lang === 'EN' ? (
                <>
                    Strategic EU Residency & <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-600">
                    Tax Optimisation.
                    </span>
                </>
            ) : (
                <span className="text-brand-navy">
                    {t.hero_title}
                </span>
            )}
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            {t.hero_sub}
          </p>

          <div className="flex flex-wrap gap-8 pt-4 border-t border-brand-navy/10">
             <div>
                <p className="text-3xl font-serif font-bold text-brand-navy">15%</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">{t.metric_1}</p>
             </div>
             <div>
                <p className="text-3xl font-serif font-bold text-brand-navy">180+</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">{t.metric_2}</p>
             </div>
             <div>
                <p className="text-3xl font-serif font-bold text-brand-navy">A+</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">{t.metric_3}</p>
             </div>
          </div>
        </div>

        {/* Right Column: Interactive Wizard Card */}
        <div className="lg:pl-12">
           <EligibilityWizard 
              onQuoteClick={() => onNavigate('callback')} 
              inlineMode={true}
              t={t}
           />
        </div>

      </div>
    </section>
  );
};