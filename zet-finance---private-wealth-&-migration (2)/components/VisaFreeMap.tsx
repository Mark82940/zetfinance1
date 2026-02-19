import React, { useEffect } from 'react';
import { Globe, Check, ChevronDown, XCircle } from 'lucide-react';

type RegionStatus = "Visa-Free" | "Visa on Arrival" | "eTA Required" | "Visa Required" | "Visa (E-2 Treaty)";

interface PassportData {
  id: string;
  name: string;
  rank: number;
  totalDestinations: number;
  regions: {
    name: string;
    status: RegionStatus;
    icon?: boolean; 
  }[];
}

const passportDatabase: Record<string, PassportData> = {
  malta: {
    id: "malta",
    name: "Malta (EU)",
    rank: 4,
    totalDestinations: 187,
    regions: [
      { name: "Schengen Area", status: "Visa-Free", icon: true },
      { name: "United Kingdom", status: "Visa-Free", icon: true },
      { name: "United States", status: "eTA Required", icon: true }, // ESTA
      { name: "Canada", status: "eTA Required", icon: true },
      { name: "China", status: "Visa Required", icon: false },
      { name: "Japan", status: "Visa-Free", icon: true },
    ]
  },
  cyprus: {
    id: "cyprus",
    name: "Cyprus (EU)",
    rank: 12,
    totalDestinations: 179,
    regions: [
      { name: "Schengen Area", status: "Visa-Free", icon: true },
      { name: "United Kingdom", status: "Visa-Free", icon: true },
      { name: "United States", status: "Visa Required", icon: false },
      { name: "Canada", status: "eTA Required", icon: true },
      { name: "Singapore", status: "Visa-Free", icon: true },
      { name: "Japan", status: "Visa-Free", icon: true },
    ]
  },
  portugal: {
    id: "portugal",
    name: "Portugal (EU)",
    rank: 4,
    totalDestinations: 188,
    regions: [
      { name: "Schengen Area", status: "Visa-Free", icon: true },
      { name: "United Kingdom", status: "Visa-Free", icon: true },
      { name: "United States", status: "eTA Required", icon: true },
      { name: "Canada", status: "eTA Required", icon: true },
      { name: "China", status: "Visa Required", icon: false },
      { name: "Brazil", status: "Visa-Free", icon: true },
    ]
  },
  stkitts: {
    id: "stkitts",
    name: "St. Kitts & Nevis",
    rank: 24,
    totalDestinations: 157,
    regions: [
      { name: "Schengen Area", status: "Visa-Free", icon: true },
      { name: "United Kingdom", status: "Visa-Free", icon: true },
      { name: "United States", status: "Visa Required", icon: false },
      { name: "Canada", status: "Visa Required", icon: false },
      { name: "Singapore", status: "Visa-Free", icon: true },
      { name: "Russia", status: "Visa-Free", icon: true },
    ]
  },
  antigua: {
    id: "antigua",
    name: "Antigua & Barbuda",
    rank: 27,
    totalDestinations: 151,
    regions: [
      { name: "Schengen Area", status: "Visa-Free", icon: true },
      { name: "United Kingdom", status: "Visa-Free", icon: true },
      { name: "United States", status: "Visa Required", icon: false },
      { name: "China", status: "Visa Required", icon: false },
      { name: "Russia", status: "Visa-Free", icon: true },
      { name: "South Africa", status: "Visa-Free", icon: true },
    ]
  },
  grenada: {
    id: "grenada",
    name: "Grenada",
    rank: 31,
    totalDestinations: 144,
    regions: [
      { name: "Schengen Area", status: "Visa-Free", icon: true },
      { name: "United Kingdom", status: "Visa-Free", icon: true },
      { name: "China", status: "Visa-Free", icon: true },
      { name: "Russia", status: "Visa-Free", icon: true },
      { name: "United States", status: "Visa (E-2 Treaty)", icon: true },
      { name: "Singapore", status: "Visa-Free", icon: true },
    ]
  },
  dominica: {
    id: "dominica",
    name: "Dominica",
    rank: 32,
    totalDestinations: 143,
    regions: [
      { name: "Schengen Area", status: "Visa-Free", icon: true },
      { name: "United Kingdom", status: "Visa-Free", icon: true },
      { name: "United States", status: "Visa Required", icon: false },
      { name: "China", status: "Visa-Free", icon: true },
      { name: "Russia", status: "Visa-Free", icon: true },
      { name: "Singapore", status: "Visa-Free", icon: true },
    ]
  },
  turkey: {
    id: "turkey",
    name: "Turkey",
    rank: 52,
    totalDestinations: 110,
    regions: [
      { name: "Schengen Area", status: "Visa Required", icon: false },
      { name: "United Kingdom", status: "Visa Required", icon: false },
      { name: "Japan", status: "Visa-Free", icon: true },
      { name: "South Korea", status: "Visa-Free", icon: true },
      { name: "S. America", status: "Visa-Free", icon: true },
      { name: "Russia", status: "Visa-Free", icon: true },
    ]
  },
  greece: {
    id: "greece",
    name: "Greece (Residency)",
    rank: 6, // Passport rank
    totalDestinations: 185,
    regions: [
      { name: "Schengen Area", status: "Visa-Free", icon: true },
      { name: "United Kingdom", status: "Visa-Free", icon: true }, // As passport
      { name: "United States", status: "eTA Required", icon: true },
      { name: "China", status: "Visa Required", icon: false },
      { name: "UAE", status: "Visa on Arrival", icon: true },
      { name: "Australia", status: "eTA Required", icon: true },
    ]
  }
};

interface VisaFreeMapProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

export const VisaFreeMap: React.FC<VisaFreeMapProps> = ({ selectedId, onSelect }) => {
  
  // Safe fallback if selectedId doesn't exist in DB
  const currentData = passportDatabase[selectedId] || passportDatabase['malta'];

  const getStatusColor = (status: RegionStatus) => {
    switch (status) {
      case "Visa-Free": return "bg-emerald-400";
      case "Visa on Arrival": return "bg-blue-400";
      case "eTA Required": return "bg-yellow-400";
      case "Visa Required": return "bg-red-400";
      case "Visa (E-2 Treaty)": return "bg-purple-400";
      default: return "bg-slate-400";
    }
  };

  return (
    <section id="map" className="py-24 bg-slate-900 text-white relative overflow-hidden transition-all duration-500">
      {/* Dynamic Background Map */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <svg className="w-full h-full text-slate-400" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
             <pattern id="mapGrid" width="10" height="10" patternUnits="userSpaceOnUse">
               <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
             </pattern>
             <rect width="100%" height="100%" fill="url(#mapGrid)" />
         </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Controls & Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/20 bg-brand-gold/10 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-6">
                <Globe className="w-3 h-3" />
                Global Mobility Index
              </div>
              <h2 className="font-serif text-4xl font-bold mb-4">Analyze Passport Power</h2>
              <p className="text-slate-400 leading-relaxed">
                Compare the visa-free access rights of different jurisdictions to align with your travel and business requirements.
              </p>
            </div>

            {/* Dropdown Selector */}
            <div className="relative group">
              <label className="text-xs uppercase tracking-widest text-slate-500 mb-2 block">Select Jurisdiction</label>
              <div className="relative">
                <select 
                  className="w-full bg-white/5 border border-white/20 text-white p-4 pr-10 rounded-sm appearance-none focus:outline-none focus:border-brand-gold font-serif text-lg cursor-pointer hover:bg-white/10 transition-colors"
                  value={selectedId}
                  onChange={(e) => onSelect(e.target.value)}
                >
                  {Object.values(passportDatabase).map((p) => (
                    <option key={p.id} value={p.id} className="bg-slate-900 text-white">
                      {p.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gold pointer-events-none w-5 h-5" />
              </div>
            </div>

            {/* Big Stats */}
            <div className="flex gap-8 border-t border-white/10 pt-8 animate-fade-in">
               <div>
                  <p className="text-5xl font-serif font-bold text-white transition-all duration-500">{currentData.totalDestinations}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mt-2">Total Destinations</p>
               </div>
               <div>
                  <p className="text-5xl font-serif font-bold text-white transition-all duration-500">#{currentData.rank}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mt-2">Global Rank</p>
               </div>
            </div>
          </div>

          {/* Dynamic Grid */}
          <div className="w-full lg:w-2/3">
            <h3 className="text-white font-serif text-2xl mb-6 flex items-center gap-3">
              Access Profile: <span className="text-brand-gold">{currentData.name}</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
               {currentData.regions.map((region, idx) => (
                 <div key={`${selectedId}-${idx}`} className="group bg-white/5 hover:bg-white/10 border border-white/10 p-5 rounded-sm backdrop-blur-sm transition-all duration-300 animate-fade-in-up">
                    <div className="flex justify-between items-start mb-3">
                       <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Region</span>
                       {region.icon ? (
                         <Check className="w-4 h-4 text-emerald-400" />
                       ) : (
                         <XCircle className="w-4 h-4 text-red-400 opacity-50" />
                       )}
                    </div>
                    <h4 className="font-serif text-lg font-bold mb-3">{region.name}</h4>
                    <div className="flex items-center gap-2">
                       <div className={`w-2 h-2 rounded-full ${getStatusColor(region.status)}`}></div>
                       <span className={`text-sm font-medium ${region.status === 'Visa Required' ? 'text-slate-500' : 'text-slate-200'}`}>
                         {region.status}
                       </span>
                    </div>
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8 text-xs text-slate-500">
               <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400"></div> Visa Free</div>
               <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400"></div> Visa on Arrival</div>
               <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-400"></div> eTA / Electronic</div>
               <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-400"></div> Special Treaty</div>
               <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400"></div> Visa Required</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};