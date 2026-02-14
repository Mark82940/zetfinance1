import React from 'react';
import { Lock, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  t: {
    footer_privacy: string;
    footer_terms: string;
    footer_dd: string;
    footer_reg: string;
    cta_callback: string;
    footer_desc: string;
    footer_hq: string;
    footer_legal: string;
    footer_desk: string;
    footer_encrypted: string;
    footer_rights: string;
    [key: string]: string;
  };
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, t }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/5">
      
      {/* Regulatory Notice - Top Bar */}
      <div className="bg-brand-navy border-b border-white/5 py-4">
         <div className="container mx-auto px-6 text-center">
            <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">
               Zet Finance operates under the official licenses AKM-MERC and ARM04957 issued by the Government of Malta.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <img 
               src="https://cdn.prod.website-files.com/64300276b80bac578ffb70ef/64300302fc25db8290b89bb5_zet-logo.svg" 
               alt="Zet Finance" 
               className="h-8 w-auto invert brightness-0 filter" 
               style={{ filter: 'brightness(0) invert(1)' }}
             />
          </div>
          <p className="text-sm leading-relaxed">
            {t.footer_desc}
          </p>
        </div>

        {/* Offices */}
        <div>
          <h4 className="text-white font-serif font-bold mb-6">{t.footer_hq}</h4>
          <ul className="space-y-4 text-sm">
            <li>Portomaso Business Tower</li>
            <li>Level 5, St. Julian's</li>
            <li>STJ 4011, Malta</li>
            <li className="pt-2 text-white">+356 2133 0000</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-serif font-bold mb-6">{t.footer_legal}</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <button onClick={() => onNavigate('privacy')} className="hover:text-brand-gold transition-colors text-left">
                {t.footer_privacy}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('terms')} className="hover:text-brand-gold transition-colors text-left">
                {t.footer_terms}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('due-diligence')} className="hover:text-brand-gold transition-colors text-left">
                {t.footer_dd}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('regulatory')} className="hover:text-brand-gold transition-colors text-left">
                {t.footer_reg}
              </button>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
           <h4 className="text-white font-serif font-bold mb-6">{t.footer_desk}</h4>
           <div className="space-y-4">
             <button 
               onClick={() => onNavigate('callback')}
               className="w-full bg-brand-gold hover:bg-amber-500 text-brand-navy font-bold px-4 py-3 rounded-sm flex items-center justify-center gap-2 transition-all uppercase tracking-wider text-xs"
             >
               <Phone className="w-4 h-4" />
               {t.cta_callback}
             </button>
             <p className="text-xs text-center opacity-70">
               {t.footer_encrypted}
             </p>
           </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-6 text-center text-xs text-slate-600">
          {t.footer_rights}
        </div>
      </div>
    </footer>
  );
};