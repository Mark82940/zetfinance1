import React from 'react';
import { FileSearch, Landmark, BookUser, Plane } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      title: "Preliminary Due Diligence",
      time: "Days 1-14",
      desc: "Comprehensive background checks (AML/KYC) to ensure application success probability.",
      icon: <FileSearch className="w-6 h-6 text-white" />
    },
    {
      title: "Submission & Processing",
      time: "Month 1-2",
      desc: "Government application submission. Review by government financial intelligence units.",
      icon: <Landmark className="w-6 h-6 text-white" />
    },
    {
      title: "Investment Execution",
      time: "Month 3-4",
      desc: "Upon 'Approval in Principle', the qualifying investment is made into government bonds or real estate.",
      icon: <Plane className="w-6 h-6 text-white" />
    },
    {
      title: "Citizenship & Passport",
      time: "Month 6",
      desc: "Certificate of Naturalization issued. Biometrics collected. Passports delivered securely.",
      icon: <BookUser className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="process" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Header Info */}
          <div>
            <h2 className="font-serif text-4xl font-bold mb-6">The Path to <br/><span className="text-brand-gold">Global Sovereignty</span></h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Our streamlined protocol ensures minimal intrusion and maximum efficiency. We handle the bureaucracy; you plan your future.
            </p>
            <div className="p-6 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm">
              <h4 className="font-serif text-xl mb-2">Dedicated Case Manager</h4>
              <p className="text-slate-400 text-sm">
                Every client is assigned a senior liaison available 24/7 via encrypted channels to manage documentation and government queries.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative pl-8 border-l border-white/10 space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Dot on Line */}
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-brand-navy bg-brand-gold group-hover:scale-125 transition-transform"></div>
                
                <div className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center border border-white/10 group-hover:bg-brand-gold group-hover:border-brand-gold transition-colors duration-300">
                      {React.cloneElement(step.icon as React.ReactElement<any>, { className: "w-6 h-6 text-white group-hover:text-brand-navy transition-colors" })}
                    </div>
                  </div>
                  <div>
                    <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">{step.time}</span>
                    <h3 className="font-serif text-xl font-bold mt-1 mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};