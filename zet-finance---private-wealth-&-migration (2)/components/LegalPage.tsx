import React, { useEffect } from 'react';
import { Shield, ChevronLeft, FileText, Lock } from 'lucide-react';

type LegalDocType = 'privacy' | 'terms' | 'due-diligence' | 'regulatory';

interface LegalPageProps {
  type: LegalDocType;
  onBack: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const COMPANY_NAME = "Zet Finance";
  const ADDRESS = "Cali House, 3rd Floor, Vjal ir-Riħan, San Gwann, SGN 9020, Malta";
  const EMAIL = "michael@zetfinance.com.mt";
  const LICENSES = "AKM-MERC and ARM04957";

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: "Privacy Policy (GDPR)",
          lastUpdated: "October 14, 2023",
          content: (
            <>
              <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">1. Data Protection Principles</h3>
              <p className="mb-4 text-slate-600">{COMPANY_NAME} ("The Firm") is committed to processing data in accordance with its responsibilities under the GDPR. Article 5 of the GDPR requires that personal data shall be:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
                <li>Processed lawfully, fairly and in a transparent manner in relation to individuals;</li>
                <li>Collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes;</li>
                <li>Adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed;</li>
                <li>Accurate and, where necessary, kept up to date; every reasonable step must be taken to ensure that personal data that are inaccurate are erased or rectified without delay;</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">2. Cookies & Analytics</h3>
              <p className="mb-4 text-slate-600">This website uses Cookies, Google Analytics, and Google Tag Manager to analyze website traffic and optimize marketing performance. By using this site, you consent to the collection of anonymized data regarding your browsing behavior. You may disable cookies in your browser settings at any time.</p>

              <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">3. Data Confidentiality</h3>
              <p className="mb-4 text-slate-600">Any personal data submitted via our forms (including but not limited to Name, Email, Phone Number, and Nationality) is held in strict confidence. {COMPANY_NAME} explicitly states that client data is never sold, traded, or rented to third parties for commercial purposes.</p>

              <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">4. Contact Information</h3>
              <p className="mb-4 text-slate-600">For any privacy-related inquiries, please contact our Data Protection Officer at: <br/><strong>{EMAIL}</strong></p>
              <p className="text-slate-600">Address: {ADDRESS}</p>
            </>
          )
        };
      case 'terms':
        return {
          title: "Terms of Engagement",
          lastUpdated: "January 01, 2024",
          content: (
            <>
              <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">1. General Terms</h3>
              <p className="mb-4 text-slate-600">These Terms of Engagement govern your use of the {COMPANY_NAME} website and services. By accessing this site, you agree to be bound by these terms.</p>

              <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">2. Disclaimer</h3>
              <p className="mb-4 text-slate-600">The content provided on this website is for general informational purposes only and does not constitute binding legal, tax, or investment advice. No client-lawyer or fiduciary relationship is established until a formal Client Agreement is signed and the requisite retainer fee is paid.</p>
              
              <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">3. Client Obligations</h3>
              <p className="mb-4 text-slate-600">The Client agrees to provide full, truthful, and accurate information regarding their identity, source of funds, and criminal history. Failure to disclose material facts may result in the immediate termination of this agreement and forfeiture of retainers.</p>

              <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">4. Governing Law</h3>
              <p className="mb-4 text-slate-600">These terms shall be governed by and construed in accordance with the laws of the Republic of Malta. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the Maltese courts.</p>
            </>
          )
        };
      case 'due-diligence':
        return {
          title: "Due Diligence Protocol",
          lastUpdated: "September 15, 2023",
          content: (
            <>
              <div className="bg-brand-navy/5 p-6 border-l-4 border-brand-navy mb-8">
                <p className="text-sm text-brand-navy font-semibold">{COMPANY_NAME} strictly adheres to Anti-Money Laundering (AML) and Counter-Terrorism Financing (CFT) directives.</p>
              </div>

              <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">1. KYC & Verification</h3>
              <p className="mb-4 text-slate-600">As a regulated entity, we are required to perform strict Know Your Customer (KYC) checks on all prospective clients. This includes valid passport verification, proof of address, and biometric data where applicable.</p>

              <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">2. Source of Wealth</h3>
              <p className="mb-4 text-slate-600">Before engaging in any Investment Migration services, clients must provide documented evidence of their Source of Wealth and Source of Funds. This ensures that all funds used for citizenship or residency by investment are of licit origin.</p>

              <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">3. Sanctions Screening</h3>
              <p className="mb-4 text-slate-600">We utilize world-leading intelligence databases (e.g., World-Check) to screen all applicants against:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
                <li>INTERPOL Red Notices</li>
                <li>OFAC Sanctions List</li>
                <li>UN Security Council Consolidated List</li>
                <li>EU Consolidated Financial Sanctions List</li>
              </ul>
            </>
          )
        };
      case 'regulatory':
        return {
          title: "Regulatory Disclosures",
          lastUpdated: "February 10, 2024",
          content: (
            <>
               <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">1. Licensing & Regulation</h3>
               <p className="mb-4 text-slate-600">{COMPANY_NAME} is a fully licensed and regulated service provider. We operate under the official licenses <strong>{LICENSES}</strong> issued by the Government of Malta.</p>

               <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">2. Government Authority</h3>
               <p className="mb-4 text-slate-600">Citizenship and residency approvals are at the sole discretion of the relevant Maltese Government Agencies, specifically the Community Malta Agency (Agenzija Komunita' Malta). {COMPANY_NAME} acts purely as a licensed Accredited Agent and advisor to guide clients through the application process.</p>

               <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">3. Registered Office</h3>
               <p className="mb-4 text-slate-600">
                  {COMPANY_NAME} <br/>
                  {ADDRESS} <br/>
                  Email: {EMAIL}
               </p>

               <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">4. Anti-Bribery & Corruption</h3>
               <p className="mb-4 text-slate-600">We maintain a zero-tolerance policy towards bribery and corruption. All employees and partners are required to comply with local and international anti-corruption laws.</p>
            </>
          )
        };
    }
  };

  const data = getContent();

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-navy mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="font-semibold text-sm">Return to Home</span>
        </button>

        {/* Document Card */}
        <div className="bg-white shadow-xl rounded-sm border border-slate-200 overflow-hidden">
           
           {/* Header */}
           <div className="bg-slate-900 p-8 md:p-12 text-white border-b border-brand-gold/20">
              <div className="flex items-center gap-3 mb-6">
                 <Shield className="w-6 h-6 text-brand-gold" />
                 <span className="text-brand-gold font-bold tracking-widest text-xs uppercase">Legal Repository</span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">{data?.title}</h1>
              <div className="flex items-center gap-6 text-sm text-slate-400">
                 <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Reference: REF-{type.toUpperCase()}-2024</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    <span>Last Updated: {data?.lastUpdated}</span>
                 </div>
              </div>
           </div>

           {/* Content */}
           <div className="p-8 md:p-12 leading-relaxed">
              {data?.content}
           </div>

           {/* Footer */}
           <div className="bg-slate-50 p-8 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-400">
                This document is legally binding. For specific legal inquiries, please contact our legal department at <span className="text-brand-navy font-semibold">{EMAIL}</span>
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};