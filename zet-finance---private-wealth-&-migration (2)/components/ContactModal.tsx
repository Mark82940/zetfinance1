import React, { useState, useEffect } from 'react';
import { Shield, X, Send, CheckCircle2, Info, ArrowRight, Lock, Mail, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  programOfInterest?: string;
  t: {
    modal_title: string;
    modal_sub: string;
    form_name: string;
    form_contact: string;
    btn_email_direct: string;
    cta_callback: string;
    placeholder_name: string;
    placeholder_contact: string;
    [key: string]: string;
  };
}

// Program Data Dictionary
const programDetails: Record<string, { title: string; description: string; highlights: string[] }> = {
  "Malta Citizenship": {
    title: "Citizenship by Naturalisation",
    description: "The Granting of Citizenship for Exceptional Services by Direct Investment is the world's most rigorous and prestigious citizenship pathway.",
    highlights: [
      "Minimum Investment: €600,000 (36 months residency) or €750,000 (12 months residency).",
      "Real Estate: Purchase of €700,000 or €16,000/yr lease.",
      "Philanthropic Donation: €10,000.",
      "Time to citizenship: 1-3 years."
    ]
  },
  "Malta Permanent Residence (MPRP)": {
    title: "Permanent Residence (MPRP)",
    description: "A straightforward residency-by-investment program granting visa-free travel across the Schengen Area.",
    highlights: [
      "Government Contribution: €68,000 (if buying) or €98,000 (if leasing).",
      "Real Estate: €300,000 purchase or €10,000/yr lease.",
      "NGO Donation: €2,000.",
      "Time to residence: 4-6 months."
    ]
  },
  "Global Residence Programme (GRP)": {
    title: "Global Residence Programme",
    description: "A special tax status designed for non-EU/EEA/Swiss nationals seeking fiscal efficiency.",
    highlights: [
      "Flat 15% Tax Rate on foreign income remitted to Malta.",
      "Minimum annual tax: €15,000.",
      "Ideal for non-EU/EEA/Swiss nationals.",
      "Requires renting or purchasing qualifying property."
    ]
  },
  "Personal Tax Advisory": {
    title: "Private Wealth Advisory",
    description: "Bespoke compliance and wealth structuring for HNWIs moving assets or residency to the European Union.",
    highlights: [
      "Cross-border tax optimization.",
      "Estate and succession planning.",
      "Corporate structuring and redomiciliation.",
      "Compliance with CRS and FATCA reporting."
    ]
  },
  "Corporate Structuring": {
    title: "Corporate Structuring",
    description: "Establish a Malta holding company with highly efficient effective tax rates through the full imputation system.",
    highlights: [
      "Full Imputation System",
      "Tax Refund Mechanisms",
      "Participation Exemption",
      "EU Compliance"
    ]
  },
  "Personal Tax Compliance": {
    title: "Personal Tax Compliance",
    description: "Bespoke advisory to ensure total adherence to local and international regulations (CRS/FATCA).",
    highlights: [
      "CRS & FATCA Reporting",
      "Tax Residence Certificates",
      "Remittance Basis Taxation",
      "Cross-border Advice"
    ]
  }
};

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, programOfInterest, t }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  // Lock Body Scroll when Open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  // Default to General Inquiry if program not found
  const details = (programOfInterest && programDetails[programOfInterest]) 
    ? programDetails[programOfInterest] 
    : {
        title: "Private Consultation",
        description: "Speak with a senior government-accredited advisor. Confidentiality guaranteed under NDA.",
        highlights: [
            "Eligibility Assessment",
            "Fee Quotations",
            "Tax Optimization Strategy"
        ]
      };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!contact || !name) return;
    
    setIsSubmitting(true);

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
          subject: "New Lead from Zet Finance Website",
          service_requested: programOfInterest || "General Inquiry"
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset state on close
  useEffect(() => {
    if(!isOpen) {
      setTimeout(() => {
        setSubmitted(false);
        setIsSubmitting(false);
      }, 300);
      setName("");
      setContact("");
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto">
          {/* Backdrop (Solid Dark Overlay, No Blur) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60"
            onClick={onClose}
          />

          {/* Wrapper to allow scrolling of modal content */}
          <div className="flex min-h-full items-center justify-center p-4">
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
              className="relative bg-white w-full max-w-4xl rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]"
            >
               <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-brand-navy z-20">
                  <X className="w-6 h-6" />
               </button>

               {/* LEFT SIDE: Data & Context */}
               <div className="w-full md:w-1/2 bg-slate-50 p-8 md:p-12 border-r border-slate-100 flex flex-col">
                  <div className="flex items-center gap-2 mb-8">
                     <Shield className="w-5 h-5 text-brand-gold" />
                     <span className="font-serif font-bold tracking-wide text-brand-navy">Zet Finance</span>
                  </div>

                  <div className="flex-grow">
                     <h3 className="font-serif text-3xl font-bold text-brand-navy mb-4 leading-tight">
                       {details.title}
                     </h3>
                     <p className="text-slate-500 text-sm leading-relaxed mb-8">
                       {details.description}
                     </p>

                     <div className="space-y-4">
                        <h4 className="text-xs font-bold text-brand-navy uppercase tracking-widest flex items-center gap-2">
                          <Info className="w-4 h-4" /> Key Facts
                        </h4>
                        <ul className="space-y-4">
                           {details.highlights.map((item, idx) => (
                             <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                                <div className="mt-1.5 w-1.5 h-1.5 bg-brand-gold rounded-full flex-shrink-0"></div>
                                <span dangerouslySetInnerHTML={{ __html: item.replace(/(\d+(?:,\d+)*(?:\.\d+)?%?|€\d+(?:,\d+)*)/g, '<strong>$1</strong>') }} />
                             </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-slate-200 text-[10px] text-slate-400">
                     Data based on official Government of Malta regulations and Community Malta Agency guidelines.
                  </div>
               </div>

               {/* RIGHT SIDE: Low Friction Form */}
               <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center relative">
                  
                  {!submitted ? (
                     <motion.div 
                       initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: 0.2 }}
                       className="space-y-8"
                     >
                        <div className="space-y-2">
                           <h3 className="font-serif text-2xl font-bold text-brand-navy">{t.modal_title}</h3>
                           <p className="text-slate-500 text-sm">
                              {t.modal_sub}
                           </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                           <div className="space-y-1">
                              <label className="text-[10px] font-bold text-brand-navy uppercase tracking-widest">{t.form_name}</label>
                              <input 
                                type="text" 
                                className="w-full p-4 bg-slate-50 border border-slate-200 focus:border-brand-navy focus:bg-white focus:outline-none rounded-sm transition-all text-base placeholder:text-slate-400"
                                placeholder={t.placeholder_name}
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                           </div>

                           <div className="space-y-1">
                              <label className="text-[10px] font-bold text-brand-navy uppercase tracking-widest">{t.form_contact}</label>
                              <div className="relative group">
                                <input 
                                  type="text" 
                                  className="w-full p-4 bg-slate-50 border border-slate-200 focus:border-brand-navy focus:bg-white focus:outline-none rounded-sm transition-all text-base placeholder:text-slate-400"
                                  placeholder={t.placeholder_contact}
                                  required
                                  value={contact}
                                  onChange={(e) => setContact(e.target.value)}
                                />
                              </div>
                           </div>

                           <div className="space-y-3 pt-2">
                             <button 
                               type="submit" 
                               disabled={isSubmitting}
                               className="w-full bg-brand-navy hover:bg-brand-gold hover:text-brand-navy text-white font-bold py-5 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-brand-navy/10 text-sm uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
                             >
                                {isSubmitting ? (
                                  <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
                                ) : (
                                  <>{t.cta_callback} <Send className="w-4 h-4" /></>
                                )}
                             </button>
                             
                             {/* Dual CTA: Secondary Direct Email */}
                             <a 
                               href="mailto:michael@zetfinance.com.mt"
                               className="w-full bg-transparent border border-brand-navy/20 text-brand-navy font-bold py-4 rounded-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-widest"
                             >
                                {t.btn_email_direct} <Mail className="w-4 h-4" />
                             </a>
                           </div>
                        </form>

                        <div className="flex items-center gap-2 justify-center text-[10px] text-slate-400">
                           <Lock className="w-3 h-3" />
                           <span>256-bit Encrypted. Strictly Confidential.</span>
                        </div>
                     </motion.div>
                  ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-4"
                        >
                           <CheckCircle2 className="w-12 h-12 text-green-600" />
                        </motion.div>
                        <div>
                           <h3 className="font-serif text-3xl font-bold text-brand-navy mb-2">Request Received</h3>
                           <p className="text-slate-500 text-sm max-w-xs mx-auto">
                              Thank you, <span className="font-bold text-brand-navy">{name}</span>. Our advisory team will contact you shortly.
                           </p>
                        </div>
                        <div className="p-4 bg-slate-50 border border-slate-100 rounded-sm text-xs text-slate-500">
                           Case ID: #ZF-{Math.floor(Math.random() * 9000) + 1000}
                        </div>
                        <button onClick={onClose} className="text-brand-navy font-bold text-sm underline hover:text-brand-gold transition-colors">
                           Return to Portal
                        </button>
                     </div>
                  )}
               </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};