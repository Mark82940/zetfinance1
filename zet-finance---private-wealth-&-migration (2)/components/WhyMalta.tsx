import React from 'react';
import { TrendingUp, ShieldCheck, MessageCircle } from 'lucide-react';

interface WhyMaltaProps {
  t: {
    malta_title: string;
    malta_1_title: string;
    malta_1_sub: string;
    malta_2_title: string;
    malta_2_sub: string;
    malta_3_title: string;
    malta_3_sub: string;
    [key: string]: string;
  };
}

export const WhyMalta: React.FC<WhyMaltaProps> = ({ t }) => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
           <h2 className="font-serif text-3xl font-bold text-brand-navy">{t.malta_title}</h2>
           <p className="text-slate-500 mt-2">The jurisdiction of choice for global citizens.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {/* Card 1 */}
           <div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                 <TrendingUp className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">{t.malta_1_title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                 {t.malta_1_sub}
              </p>
              <p className="text-[10px] text-slate-400 mt-4 uppercase tracking-widest font-bold">Source: NSO Malta</p>
           </div>

           {/* Card 2 */}
           <div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                 <ShieldCheck className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">{t.malta_2_title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                 {t.malta_2_sub}
              </p>
              <p className="text-[10px] text-slate-400 mt-4 uppercase tracking-widest font-bold">Eurostat Safety Index</p>
           </div>

           {/* Card 3 */}
           <div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                 <MessageCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">{t.malta_3_title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                 {t.malta_3_sub}
              </p>
              <p className="text-[10px] text-slate-400 mt-4 uppercase tracking-widest font-bold">Official Language</p>
           </div>
        </div>
      </div>
    </section>
  );
};