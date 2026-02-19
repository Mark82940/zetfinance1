import React from 'react';
import { Check, X, Info } from 'lucide-react';

const data = [
  { label: "Time to Residence/Citizenship", citizenship: "12-36 Months", mprp: "4-6 Months" },
  { label: "EU Work & Live Rights", citizenship: "Full Access (Anywhere in EU)", mprp: "Malta Only" },
  { label: "Minimum Investment", citizenship: "Approx. €600,000+", mprp: "Approx. €150,000+" },
  { label: "Visa-Free Travel", citizenship: "185+ Countries (USA, UK, CA)", mprp: "Schengen Area (90/180 days)" },
  { label: "Family Inclusion", citizenship: "Generational (Citizenship passed down)", mprp: "4 Generations included" },
  { label: "Residency Requirement", citizenship: "Physical ties required", mprp: "None (Passive)" },
];

export const ComparisonMatrix: React.FC = () => {
  return (
    <section id="comparison" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12 text-center">
           <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">Program Comparison</h2>
           <p className="text-slate-600">
             Compare the rights and obligations of the two primary Maltese investment vehicles.
           </p>
        </div>

        <div className="bg-white shadow-xl rounded-sm overflow-hidden border border-slate-200">
          <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="p-6 border-b-2 border-slate-100 w-1/3 bg-slate-50"></th>
                  <th className="p-6 border-b-2 border-brand-gold bg-brand-navy text-white w-1/3 text-center">
                    <span className="block text-brand-gold text-xs font-bold uppercase tracking-wider mb-2">Exceptional Investor</span>
                    <span className="font-serif text-xl font-bold">Malta Citizenship</span>
                  </th>
                  <th className="p-6 border-b-2 border-slate-200 bg-white text-brand-navy w-1/3 text-center">
                    <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Permanent Residence</span>
                    <span className="font-serif text-xl font-bold">MPRP</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
                    <td className="p-6 font-medium text-brand-navy text-sm flex items-center gap-2">
                      {row.label}
                      <Info className="w-3 h-3 text-slate-300" />
                    </td>
                    
                    {/* Citizenship */}
                    <td className="p-6 text-center bg-brand-navy/5">
                      <span className="font-bold text-brand-navy text-sm">{row.citizenship}</span>
                    </td>

                    {/* MPRP */}
                    <td className="p-6 text-center">
                      <span className="font-medium text-slate-600 text-sm">{row.mprp}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <p className="text-xs text-slate-400 mt-6 text-center italic">
          * Disclaimer: Investment amounts are estimates including government contributions and administrative fees. Legal fees are separate.
        </p>
      </div>
    </section>
  );
};