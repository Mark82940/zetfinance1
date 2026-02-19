import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Calculator, Landmark, ShieldCheck, Briefcase, AlertTriangle, Info, Lock, Send, Loader2, ChevronLeft } from 'lucide-react';

interface EligibilityWizardProps {
  onQuoteClick: () => void;
  inlineMode?: boolean;
  t: {
    checker_title: string;
    checker_step1: string;
    checker_goal1: string;
    checker_goal2: string;
    checker_goal3: string;
    checker_step2: string;
    checker_btn_calc: string;
    checker_btn_back: string;
    placeholder_name: string;
    placeholder_contact: string;
    [key: string]: string;
  };
}

type Zone = "GREEN" | "BLUE" | "RED";

const countryData: { name: string; zone: Zone }[] = ([
  { name: "United States", zone: "GREEN" },
  { name: "United Kingdom", zone: "GREEN" },
  { name: "Canada", zone: "GREEN" },
  { name: "Germany", zone: "BLUE" },
  { name: "France", zone: "BLUE" },
  { name: "Italy", zone: "BLUE" },
  { name: "Sweden", zone: "BLUE" },
  { name: "Switzerland", zone: "BLUE" },
  { name: "Netherlands", zone: "BLUE" },
  { name: "Spain", zone: "BLUE" },
  { name: "Russia", zone: "RED" },
  { name: "Belarus", zone: "RED" },
  { name: "Iran", zone: "RED" },
  { name: "China", zone: "GREEN" },
  { name: "UAE", zone: "GREEN" },
  { name: "South Africa", zone: "GREEN" },
  { name: "India", zone: "GREEN" },
  { name: "Turkey", zone: "GREEN" },
  { name: "Saudi Arabia", zone: "GREEN" },
  { name: "Australia", zone: "GREEN" },
  { name: "North Korea", zone: "RED" },
  { name: "Afghanistan", zone: "RED" },
  { name: "Other (EU/EEA)", zone: "BLUE" },
  { name: "Other (Non-Sanctioned)", zone: "GREEN" }
] as { name: string; zone: Zone }[]).sort((a, b) => a.name.localeCompare(b.name));

export const EligibilityWizard: React.FC<EligibilityWizardProps> = ({ onQuoteClick, inlineMode = false, t }) => {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<string>('');
  const [nationality, setNationality] = useState<string>('');
  const [zone, setZone] = useState<Zone>('GREEN');
  const [calculating, setCalculating] = useState(false);
  
  // Form State
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleGoalSelect = (selectedGoal: string) => {
    setGoal(selectedGoal);
    setStep(2);
  };

  const handleCalculate = () => {
    if (!nationality) return;
    setCalculating(true);
    
    // Determine zone
    const selectedCountry = countryData.find(c => c.name === nationality);
    const calculatedZone = selectedCountry ? selectedCountry.zone : 'GREEN';
    setZone(calculatedZone);

    setTimeout(() => {
      setCalculating(false);
      setStep(3);
    }, 1200);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d5372891-a360-4371-99d8-edf29df9e173",
          name: name,
          contact: contact,
          subject: "New Eligibility Wizard Lead",
          service_requested: `Eligibility Check: ${nationality} - ${goal}`,
          zone_result: zone
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setFormSubmitted(true);
      }
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setStep(1);
    setGoal('');
    setNationality('');
    setFormSubmitted(false);
    setName("");
    setContact("");
  };

  const renderResultContent = () => {
    if (formSubmitted) {
        return (
            <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-navy mb-2">Profile Received</h3>
                <p className="text-slate-600 mb-6 text-sm">
                   Our team is reviewing your eligibility for <strong>{nationality}</strong>. We will contact you shortly.
                </p>
                <button onClick={reset} className="text-brand-navy text-sm underline hover:text-brand-gold">Start New Check</button>
            </div>
        )
    }

    if (zone === 'RED') {
        return (
            <div className="space-y-4 animate-fade-in">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                        <div>
                            <h4 className="font-bold text-red-800 text-sm">Program Suspension</h4>
                            <p className="text-xs text-red-700 mt-1 leading-relaxed">
                                Currently, Malta's investment migration programs are suspended for nationals of <strong>{nationality}</strong>. However, please contact us for alternative tax or corporate structuring solutions.
                            </p>
                        </div>
                    </div>
                </div>
                {renderForm("Corporate Structuring Inquiry")}
            </div>
        );
    }

    if (zone === 'BLUE') {
        return (
            <div className="space-y-4 animate-fade-in">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                    <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                            <h4 className="font-bold text-blue-800 text-sm">EU Citizen Status</h4>
                            <p className="text-xs text-blue-700 mt-1 leading-relaxed">
                                As an EU/EEA citizen ({nationality}), you are perfectly positioned for our <strong>15% Global Residence Programme (GRP)</strong> and tax advisory.
                            </p>
                        </div>
                    </div>
                </div>
                {renderForm("Tax Optimisation")}
            </div>
        );
    }

    // Green Zone
    return (
        <div className="space-y-4 animate-fade-in">
             <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-bold text-green-800 text-sm">Eligibility Confirmed</h4>
                        <p className="text-xs text-green-700 mt-1 leading-relaxed">
                            You are eligible to apply for Malta Citizenship and Residency programs. Enter your details to receive a personalized investment breakdown.
                        </p>
                    </div>
                </div>
            </div>
            {renderForm(goal || "Citizenship/Residency")}
        </div>
    );
  };

  const renderForm = (interest: string) => (
    <form onSubmit={handleFormSubmit} className="space-y-4 pt-2">
        <div className="space-y-1">
            <input 
                type="text" 
                placeholder={t.placeholder_name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-sm focus:border-brand-navy focus:outline-none text-sm"
            />
        </div>
        <div className="space-y-1">
            <input 
                type="text" 
                placeholder={t.placeholder_contact}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-sm focus:border-brand-navy focus:outline-none text-sm"
            />
        </div>
        <input type="hidden" value={interest} />
        <button 
            type="submit" 
            disabled={submitting}
            className="w-full bg-brand-navy hover:bg-slate-800 text-white font-bold py-3 rounded-sm transition-all flex items-center justify-center gap-2 shadow-lg text-sm uppercase tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Request Breakdown <Send className="w-4 h-4" /></>}
        </button>
        <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400">
            <Lock className="w-3 h-3" /> Encrypted & Confidential
        </div>
    </form>
  );

  return (
    <div className={`bg-white rounded-sm shadow-2xl overflow-hidden border border-slate-200 ${inlineMode ? 'w-full' : 'max-w-xl mx-auto'}`}>
       {/* Card Header */}
       <div className="bg-brand-navy p-4 flex justify-between items-center relative">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
             <span className="text-white text-xs font-bold uppercase tracking-widest">{t.checker_title}</span>
          </div>
          <ShieldCheck className="w-4 h-4 text-brand-gold" />
       </div>
       
       {/* Card Body */}
       <div className="p-8 min-h-[420px] flex flex-col justify-center relative">
          
          {step > 1 && !formSubmitted && (
             <button 
                onClick={handleBack} 
                className="absolute top-6 left-8 flex items-center gap-1 text-xs text-slate-400 hover:text-brand-navy transition-colors font-semibold uppercase tracking-wider"
             >
                <ChevronLeft className="w-3 h-3" /> {t.checker_btn_back}
             </button>
          )}

          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="font-serif text-2xl font-bold text-brand-navy text-center mb-6">{t.checker_step1}</h3>
              <div className="grid grid-cols-1 gap-4">
                <button 
                  onClick={() => handleGoalSelect('Residency')}
                  className="flex items-center gap-4 p-4 text-left bg-white border border-slate-200 hover:border-brand-navy hover:bg-slate-50 rounded-sm transition-all group shadow-sm"
                >
                   <div className="p-2.5 bg-brand-navy/5 text-brand-navy rounded-full group-hover:bg-brand-navy group-hover:text-white transition-colors">
                      <ShieldCheck className="w-5 h-5" />
                   </div>
                   <div>
                      <span className="font-bold text-brand-navy block text-sm">{t.checker_goal1}</span>
                      <span className="text-[10px] text-slate-500">Freedom of movement</span>
                   </div>
                   <ArrowRight className="w-4 h-4 text-slate-300 ml-auto group-hover:text-brand-navy" />
                </button>
    
                <button 
                  onClick={() => handleGoalSelect('Citizenship')}
                  className="flex items-center gap-4 p-4 text-left bg-white border border-slate-200 hover:border-brand-navy hover:bg-slate-50 rounded-sm transition-all group shadow-sm"
                >
                   <div className="p-2.5 bg-brand-navy/5 text-brand-navy rounded-full group-hover:bg-brand-navy group-hover:text-white transition-colors">
                      <Landmark className="w-5 h-5" />
                   </div>
                   <div>
                      <span className="font-bold text-brand-navy block text-sm">{t.checker_goal2}</span>
                      <span className="text-[10px] text-slate-500">Full Rights & Passport</span>
                   </div>
                   <ArrowRight className="w-4 h-4 text-slate-300 ml-auto group-hover:text-brand-navy" />
                </button>
    
                <button 
                  onClick={() => handleGoalSelect('Tax')}
                  className="flex items-center gap-4 p-4 text-left bg-white border border-slate-200 hover:border-brand-navy hover:bg-slate-50 rounded-sm transition-all group shadow-sm"
                >
                   <div className="p-2.5 bg-brand-navy/5 text-brand-navy rounded-full group-hover:bg-brand-navy group-hover:text-white transition-colors">
                      <Briefcase className="w-5 h-5" />
                   </div>
                   <div>
                      <span className="font-bold text-brand-navy block text-sm">{t.checker_goal3}</span>
                      <span className="text-[10px] text-slate-500">Wealth Protection</span>
                   </div>
                   <ArrowRight className="w-4 h-4 text-slate-300 ml-auto group-hover:text-brand-navy" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-in mt-6">
              <div className="text-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Step 2 of 2</span>
                <h3 className="font-serif text-2xl font-bold text-brand-navy mb-2">Compliance Check</h3>
                <p className="text-sm text-slate-500">{t.checker_step2}</p>
              </div>
              
              <div className="space-y-4">
                 <div className="relative">
                    <select 
                       value={nationality}
                       onChange={(e) => setNationality(e.target.value)}
                       className="w-full p-4 bg-slate-50 border border-slate-200 rounded-sm appearance-none focus:outline-none focus:border-brand-navy text-slate-700 font-medium text-sm"
                    >
                       <option value="" disabled>{t.checker_step2}</option>
                       {countryData.map((c) => (
                           <option key={c.name} value={c.name}>{c.name}</option>
                       ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                       <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
                    </div>
                 </div>
    
                 <button 
                   onClick={handleCalculate}
                   disabled={!nationality}
                   className="w-full bg-brand-navy text-white font-bold py-4 rounded-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   {calculating ? <Loader2 className="w-5 h-5 animate-spin" /> : <>{t.checker_btn_calc} <Calculator className="w-4 h-4" /></>}
                 </button>
              </div>
            </div>
          )}

          {step === 3 && renderResultContent()}
       </div>
    </div>
  );
};