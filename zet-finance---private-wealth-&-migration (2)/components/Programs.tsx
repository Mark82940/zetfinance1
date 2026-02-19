import React from 'react';
import { Landmark, Briefcase, FileText, Globe, ArrowRight } from 'lucide-react';

interface ServicesGridProps {
  onQuoteClick: (serviceName: string) => void;
  onMapCheck: (countryId: string) => void;
  onComparisonClick: () => void;
  t: {
    card1_title: string;
    card1_sub: string;
    card2_title: string;
    card2_sub: string;
    card3_title: string;
    card3_sub: string;
    card4_title: string;
    card4_sub: string;
    pillars_title: string;
    pillars_sub: string;
    card_btn: string;
    [key: string]: string;
  };
}

export const Programs: React.FC<ServicesGridProps> = ({ onQuoteClick, onComparisonClick, t }) => {
  
  const services = [
    {
      title: t.card1_title,
      subtitle: t.card1_sub,
      icon: <Landmark className="w-6 h-6 text-white" />,
    },
    {
      title: t.card2_title,
      subtitle: t.card2_sub,
      icon: <Globe className="w-6 h-6 text-white" />,
    },
    {
      title: t.card3_title,
      subtitle: t.card3_sub,
      icon: <FileText className="w-6 h-6 text-white" />,
    },
    {
      title: t.card4_title,
      subtitle: t.card4_sub,
      icon: <Briefcase className="w-6 h-6 text-white" />,
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <div className="max-w-2xl">
              <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">{t.pillars_title}</h2>
              <div className="h-1 w-20 bg-brand-gold mb-6"></div>
              <p className="text-slate-600">
                {t.pillars_sub}
              </p>
           </div>
           <button 
              onClick={onComparisonClick}
              className="flex items-center gap-2 text-brand-navy font-bold hover:text-brand-gold transition-colors mt-6 md:mt-0 uppercase tracking-wider text-xs border-b border-brand-navy hover:border-brand-gold pb-1"
            >
              Compare Programs <ArrowRight className="w-4 h-4" />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
           {services.map((service, idx) => (
             <div 
               key={idx} 
               className="group relative bg-slate-50 border border-slate-100 p-8 hover:bg-white hover:shadow-2xl hover:border-brand-gold/30 transition-all duration-500 cursor-pointer overflow-hidden rounded-sm flex flex-col items-center text-center h-full"
               onClick={() => onQuoteClick(service.title)}
             >
                {/* Content Wrapper for flex growth */}
                <div className="flex-grow flex flex-col items-center w-full">
                    <div className="mt-2 mb-6 inline-flex p-4 bg-brand-navy text-white group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-500 rounded-full shadow-lg">
                       {service.icon}
                    </div>
                    
                    <h3 className="font-serif text-xl font-bold text-brand-navy mb-3 leading-tight px-2">{service.title}</h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed px-2">
                       {service.subtitle}
                    </p>
                </div>

                <div className="mt-8 w-full border-t border-slate-200 pt-6 group-hover:border-transparent transition-colors">
                  <span className="inline-flex items-center gap-2 text-brand-navy group-hover:text-brand-gold text-xs font-bold uppercase tracking-widest">
                      {t.card_btn} <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};