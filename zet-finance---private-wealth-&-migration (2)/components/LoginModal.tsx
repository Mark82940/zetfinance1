import React, { useState, useEffect } from 'react';
import { Shield, X, Lock, Loader2, ArrowRight } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Creds, 2: 2FA

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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Wrapper to allow scrolling of modal content */}
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Modal Card */}
        <div className="relative bg-white w-full max-w-md rounded-sm shadow-2xl overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-brand-navy p-6 flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-brand-gold/10 border border-brand-gold/30 rounded-sm">
                <Shield className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                 <h3 className="font-serif text-xl font-bold text-white tracking-wide">ZET FINANCE</h3>
                 <p className="text-[10px] text-slate-400 uppercase tracking-widest">Secure Client Portal</p>
              </div>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-8">
            {step === 1 ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-navy uppercase tracking-wider">Client ID / Email</label>
                  <input 
                    type="text" 
                    placeholder="ZF-8821..." 
                    className="w-full p-3 bg-slate-50 border border-slate-200 focus:border-brand-navy focus:outline-none rounded-sm transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-navy uppercase tracking-wider">Password</label>
                  <input 
                    type="password" 
                    placeholder="••••••••••••" 
                    className="w-full p-3 bg-slate-50 border border-slate-200 focus:border-brand-navy focus:outline-none rounded-sm transition-colors"
                    required
                  />
                </div>

                <div className="flex items-center justify-between text-xs">
                   <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                      <input type="checkbox" className="accent-brand-navy" />
                      Remember Device
                   </label>
                   <a href="#" className="text-brand-navy hover:underline">Lost Credentials?</a>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-brand-navy text-white font-bold py-4 rounded-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Secure Login <Lock className="w-4 h-4" /></>}
                </button>
              </form>
            ) : (
               <div className="text-center space-y-6 py-4 animate-fade-in">
                  <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto">
                     <Lock className="w-8 h-8 text-brand-gold" />
                  </div>
                  <div>
                     <h4 className="font-serif text-2xl font-bold text-brand-navy">2FA Required</h4>
                     <p className="text-slate-500 text-sm mt-2">Please verify this login via your encrypted Signal/Telegram link.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 text-sm font-mono text-slate-600">
                     Waiting for approval...
                  </div>
                  <button onClick={() => setStep(1)} className="text-sm text-brand-navy hover:underline">
                     Cancel request
                  </button>
               </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-slate-50 p-4 border-t border-slate-100 flex items-center justify-center gap-2 text-[10px] text-slate-400">
             <Lock className="w-3 h-3" />
             <span>256-BIT END-TO-END ENCRYPTION ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};