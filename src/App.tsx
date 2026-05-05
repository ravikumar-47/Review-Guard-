import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, Send, ShieldCheck, AlertCircle, CheckCircle2, 
  RefreshCcw, Copy, TrendingUp, Store, ChevronRight, Info,
  LogOut, LogIn, Star, History, LayoutDashboard, Settings as SettingsIcon,
  Plus, Target, Award, BarChart3, Mail, X, Activity, FileText, Download
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { 
  onAuthStateChanged, User, signInWithPopup, GoogleAuthProvider 
} from 'firebase/auth';
import { 
  collection, query, where, getDocs, addDoc, serverTimestamp, 
  orderBy, limit, doc, getDoc, setDoc, Timestamp
} from 'firebase/firestore';
import { auth, signIn, logOut, db, googleProvider } from './lib/firebase';
import { 
  analyzeReview, generateBatchInsights, generatePerformanceReport,
  AnalysisResponse, BatchInsightResponse, PerformanceReport 
} from './services/geminiService';
import { translations, languageList, Language } from './constants/translations';

// --- Types ---
interface Business {
  id: string;
  name: string;
  category: string;
  ownerId: string;
  address?: string;
  phone?: string;
  website?: string;
  googleProfileId?: string;
  isGoogleConnected?: boolean;
}

interface ReviewRecord {
  id: string;
  text: string;
  rating: number;
  classification: string;
  suggestedResponse: string;
  createdAt: any;
  expiresAt: any;
}

interface ReportRecord {
  id: string;
  type: "Weekly" | "Monthly";
  performanceScore: number;
  sentimentAnalysis: string;
  topComplaints: string[];
  growthRecommendations: string;
  createdAt: any;
}

interface Client {
  id: string;
  client_id: string;
  business_name: string;
  country: 'India' | 'Foreign';
  status: 'Active' | 'Suspended';
  signup_date: any;
  trial_ends_at: any;
  tier: 1 | 2 | 3;
  setup_fee: number;
  current_monthly_fee: number;
  future_monthly_fee?: number;
  price_increase_date?: any;
}

const Logo = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Dark Gray Shield */}
      <path 
        d="M50 5 L90 20 V50 C90 75 70 90 50 95 C30 90 10 75 10 50 V20 L50 5Z" 
        fill="#334155" 
      />
      {/* White Star/Asterisk */}
      <path 
        d="M38 18 L42 18 L40 22 M38 22 L42 22 L40 18" 
        stroke="white" 
        strokeWidth="1" 
        strokeLinecap="round"
      />
      <circle cx="40" cy="20" r="2.5" fill="#3b82f6" />
      <text x="40" y="22" fontFamily="Arial" fontSize="4" textAnchor="middle" fill="white" fontWeight="bold">*</text>
      
      {/* Blue G / Speech Bubble */}
      <path 
        d="M50 30 C38 30 30 38 30 50 C30 62 38 70 50 70 C55 70 60 68 64 64 L75 75 V55 C78 50 78 45 75 40 C70 34 60 30 50 30 Z" 
        fill="#3b82f6"
      />
      {/* Inner hole for G */}
      <path 
        d="M50 40 C45 40 40 45 40 50 C40 55 45 60 50 60 C53 60 56 58 58 55 H50 V48 H68 C68 40 60 30 50 30 Z" 
        fill="#334155"
      />
      {/* Tail of speech bubble - integrated into the blue part above but refining here */}
      <path 
        d="M60 65 L72 80 L72 65 Z" 
        fill="#3b82f6"
      />
      {/* White 'G' lines to make it look sharp */}
      <path 
        d="M58 50 H65 M58 51 H65" 
        stroke="white" 
        strokeWidth="0" 
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
       <span className="text-white font-black text-[10px] -mt-10 mr-4">*</span>
    </div>
  </div>
);

const SuspendedModal = ({ isAdmin, onNavigate }: { isAdmin: boolean, onNavigate: (to: string) => void }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    className="fixed inset-0 z-[1000] bg-slate-900 flex items-center justify-center p-4 md:p-6 text-center"
  >
    <div className="max-w-md w-full bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 shadow-2xl space-y-6 md:space-y-8">
      <div className="flex justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-red-50 rounded-full flex items-center justify-center text-red-500 animate-pulse">
          <AlertCircle size={32} className="md:w-10 md:h-10" />
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Your 14-day trial has expired.</h2>
        <p className="text-slate-500 font-medium leading-relaxed">
          Please recharge to continue using ReviewGuard. Your business reputation is important, don't let it slide.
        </p>
      </div>
      <button 
        onClick={() => {
          if (isAdmin) onNavigate('/admin');
          else window.location.href = 'mailto:ravikumar472483@gmail.com';
        }}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-500/20 transition-all active:scale-95 text-xs uppercase"
      >
        {isAdmin ? 'CLICK HERE FOR ADMIN DASHBOARD' : 'CONTACT SUPPORT TO RENEW'}
      </button>
      <button 
        onClick={logOut}
        className="w-full bg-slate-50 border border-slate-200 text-slate-400 font-black py-4 rounded-2xl transition-all active:scale-95 text-[10px] uppercase tracking-widest hover:text-red-500"
      >
        Sign Out and Exit
      </button>
    </div>
  </motion.div>
);

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true);
  const [clientData, setClientData] = useState<Client | null>(null);
  const [lang, setLang] = useState<Language>('hinglish');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  const t = translations[lang];

  // Firestore Error Handling Helper
  enum OperationType {
    CREATE = 'create',
    UPDATE = 'update',
    DELETE = 'delete',
    LIST = 'list',
    GET = 'get',
    WRITE = 'write',
  }

  const handleFirestoreError = (error: any, operationType: OperationType, path: string | null) => {
    const errInfo = {
      error: error instanceof Error ? error.message : String(error),
      authInfo: {
        userId: auth.currentUser?.uid,
        email: auth.currentUser?.email,
        emailVerified: auth.currentUser?.emailVerified,
      },
      operationType,
      path
    };
    console.error(`Firestore Error [${operationType}] at ${path}:`, JSON.stringify(errInfo));
    return error;
  };

  // PWA & Install Prompt
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);

  useEffect(() => {
    const handleBeforeInstall = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallApp = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallBtn(false);
    }
  };

  // Routing
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setPath(to);
  };

  const LanguageSelector = ({ variant = 'light' }: { variant?: 'light' | 'dark' }) => (
    <div className="flex items-center gap-2">
      <select 
        value={lang}
        onChange={(e) => setLang(e.target.value as Language)}
        className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg outline-none cursor-pointer transition-all ${
          variant === 'light' 
            ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' 
            : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
        }`}
      >
        {languageList.map(l => (
          <option key={l.id} value={l.id} className="text-slate-900">{l.flag} {l.label}</option>
        ))}
      </select>
    </div>
  );
  const [business, setBusiness] = useState<Business | null>(null);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'history' | 'insights' | 'settings'>('dashboard');
  const [strategyMode, setStrategyMode] = useState<'batch' | 'weekly' | 'monthly'>('batch');
  
  // Settings State
  const [isUpdatingSettings, setIsUpdatingSettings] = useState(false);
  const [isConnectingGoogle, setIsConnectingGoogle] = useState(false);
  const [settingsName, setSettingsName] = useState('');
  const [settingsCat, setSettingsCat] = useState('');
  const [settingsAddress, setSettingsAddress] = useState('');
  const [settingsPhone, setSettingsPhone] = useState('');
  const [settingsWebsite, setSettingsWebsite] = useState('');
  
  // Review State
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResponse | null>(null);
  
  // History & Insights State
  const [history, setHistory] = useState<ReviewRecord[]>([]);
  const [batchInsight, setBatchInsight] = useState<BatchInsightResponse | null>(null);
  const [isGeneratingInsight, setIsGeneratingInsight] = useState(false);

  // Periodic Reports
  const [weeklyReport, setWeeklyReport] = useState<ReportRecord | null>(null);
  const [monthlyReport, setMonthlyReport] = useState<ReportRecord | null>(null);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);

  // Setup State
  const [showRegister, setShowRegister] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [newBizName, setNewBizName] = useState('');
  const [newBizCat, setNewBizCat] = useState('Restaurant');

  const AdminDashboard = ({ lang }: { lang: Language }) => {
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingClient, setEditingClient] = useState<string | null>(null);
    const [customSetup, setCustomSetup] = useState<string>('');
    const [customMonthly, setCustomMonthly] = useState<string>('');
    const t = translations[lang];

    useEffect(() => {
      fetchClients();
    }, []);

    const fetchClients = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, 'clients'), orderBy('signup_date', 'desc'));
        const snapshot = await getDocs(q);
        const clientList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Client));
        setClients(clientList);
      } catch (error) {
        console.error("Error fetching clients:", error);
      } finally {
        setLoading(false);
      }
    };

    const applyTier = async (client: Client, tier: 1 | 2 | 3) => {
      const signupMillis = client.signup_date.toMillis();
      let setupFee = 0;
      let monthlyFee = 0;
      let futureMonthlyFee = 0;
      let priceIncreaseDate = null;
      let country: 'India' | 'Foreign' = 'India';

      if (tier === 1) {
        setupFee = 0;
        monthlyFee = 499;
        futureMonthlyFee = 1499;
        priceIncreaseDate = Timestamp.fromMillis(signupMillis + (90 * 24 * 60 * 60 * 1000));
        country = 'India';
      } else if (tier === 2) {
        setupFee = 2999;
        monthlyFee = 1499;
        country = 'India';
      } else {
        setupFee = 199;
        monthlyFee = 99;
        country = 'Foreign';
      }

      const updateData: any = {
        tier,
        setup_fee: setupFee,
        current_monthly_fee: monthlyFee,
        country,
        future_monthly_fee: futureMonthlyFee || null,
        price_increase_date: priceIncreaseDate || null
      };

      try {
        await setDoc(doc(db, 'clients', client.id), updateData, { merge: true });
        fetchClients();
      } catch (error) {
        console.error("Error applying tier:", error);
      }
    };

    const handleManualOverride = async (client: Client) => {
      try {
        await setDoc(doc(db, 'clients', client.id), {
          setup_fee: Number(customSetup) || client.setup_fee,
          current_monthly_fee: Number(customMonthly) || client.current_monthly_fee
        }, { merge: true });
        setEditingClient(null);
        fetchClients();
      } catch (error) {
        console.error("Error overriding fees:", error);
      }
    };

    const metrics = useMemo(() => {
      let totalSetupRevenue = 0;
      let currentMRR = 0;
      let projectedMRR = 0;
      let activeCount = 0;
      let suspendedCount = 0;

      clients.forEach(c => {
        if (c.status === 'Active') {
          activeCount++;
          if (c.tier === 2 || c.tier === 3) totalSetupRevenue += c.setup_fee;
          currentMRR += c.current_monthly_fee;
          projectedMRR += (c.tier === 1 ? (c.future_monthly_fee || 1499) : c.current_monthly_fee);
        } else {
          suspendedCount++;
        }
      });

      return { totalSetupRevenue, currentMRR, projectedMRR, activeCount, suspendedCount };
    }, [clients]);

    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
        <header className="bg-white border-bottom border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo size={32} />
              <div className="text-xl font-black tracking-tight">ADMIN PANEL</div>
            </div>
            <button onClick={() => navigate('/')} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2">
               <LayoutDashboard size={18} /> HUB
            </button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
          {/* Metrics Panel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Total Setup Revenue", value: `₹${metrics.totalSetupRevenue.toLocaleString()}`, icon: Award, color: "text-blue-600" },
              { label: "Current MRR", value: `₹${metrics.currentMRR.toLocaleString()}`, icon: TrendingUp, color: "text-green-600" },
              { label: "Projected MRR", value: `₹${metrics.projectedMRR.toLocaleString()}`, icon: BarChart3, color: "text-purple-600" },
              { label: "Active vs Suspended", value: `${metrics.activeCount} / ${metrics.suspendedCount}`, icon: Activity, color: "text-slate-600" }
            ].map((m, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4">
                <div className={`p-4 bg-slate-50 rounded-2xl w-fit ${m.color}`}>
                   <m.icon size={24} />
                </div>
                <div>
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{m.label}</div>
                   <div className="text-2xl font-black mt-1">{m.value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Client Table */}
          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-50 flex items-center justify-between">
               <h3 className="text-lg font-black tracking-tight uppercase tracking-widest text-slate-400">Client Management</h3>
               <button onClick={fetchClients} className="p-2 hover:bg-slate-50 rounded-xl transition-all">
                  <RefreshCcw size={18} className={loading ? 'animate-spin' : ''} />
               </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Business</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Pricing Tier</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Monthly Fee</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {clients.map(client => (
                    <tr key={client.id} className="hover:bg-slate-50/30 transition-colors">
                      <td className="px-8 py-6">
                        <div className="font-black text-slate-900">{client.business_name}</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase mt-1">{client.country} • Joined {new Date(client.signup_date.toMillis()).toLocaleDateString()}</div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex gap-2">
                          {[1, 2, 3].map(t => (
                            <button key={t} onClick={() => applyTier(client, t as 1|2|3)}
                              className={`px-3 py-1 rounded-lg text-[10px] font-black tracking-widest transition-all ${client.tier === t ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}>
                              T{t}
                            </button>
                          ))}
                        </div>
                      </td>
                      <td className="px-8 py-6 font-mono font-bold text-slate-600 italic">
                         {client.country === 'India' ? '₹' : '$'}{client.current_monthly_fee}
                      </td>
                      <td className="px-8 py-6">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black tracking-widest ${client.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                          {client.status}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        {editingClient === client.id ? (
                          <div className="flex items-center gap-2">
                             <input type="number" placeholder="Setup" className="w-20 p-2 bg-slate-50 border border-slate-100 rounded-lg text-xs" 
                               value={customSetup} onChange={e => setCustomSetup(e.target.value)} />
                             <input type="number" placeholder="Monthly" className="w-20 p-2 bg-slate-50 border border-slate-100 rounded-lg text-xs" 
                               value={customMonthly} onChange={e => setCustomMonthly(e.target.value)} />
                             <button onClick={() => handleManualOverride(client)} className="text-green-600"><CheckCircle2 size={18} /></button>
                             <button onClick={() => setEditingClient(null)} className="text-slate-400"><X size={18} /></button>
                          </div>
                        ) : (
                          <button onClick={() => { setEditingClient(client.id); setCustomSetup(client.setup_fee.toString()); setCustomMonthly(client.current_monthly_fee.toString()); }} className="text-blue-600 text-xs font-black uppercase tracking-widest hover:underline">Customize</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    );
  };

  // Legal Modal
  const [legalModal, setLegalModal] = useState<{ title: string; content: React.ReactNode } | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currUser) => {
      setUser(currUser);
      if (currUser) {
        setCheckingAdmin(true);
        // Check if Admin
        try {
          const adminDoc = await getDoc(doc(db, 'admins', currUser.uid));
          const isUserAdmin = adminDoc.exists() || (currUser.email?.toLowerCase() === 'ravikumar472483@gmail.com');
          setIsAdmin(isUserAdmin);
          
          fetchBusiness(currUser.uid);
          fetchClientData(currUser.uid, isUserAdmin);
        } catch (error) {
          handleFirestoreError(error, OperationType.GET, `admins/${currUser.uid}`);
          const isUserAdmin = currUser.email?.toLowerCase() === 'ravikumar472483@gmail.com';
          setIsAdmin(isUserAdmin);
          fetchBusiness(currUser.uid);
          fetchClientData(currUser.uid, isUserAdmin);
        } finally {
          setCheckingAdmin(false);
        }
      } else {
        setBusiness(null);
        setClientData(null);
        setIsAdmin(false);
        setCheckingAdmin(false);
        setActiveTab('dashboard');
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchClientData = async (uid: string, isAdminUser: boolean) => {
    try {
      const q = query(collection(db, 'clients'), where('client_id', '==', uid));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        const docRef = snapshot.docs[0].ref;
        const data = { id: snapshot.docs[0].id, ...snapshot.docs[0].data() } as Client;
        
        let updatedData = { ...data };
        let needsUpdate = false;

        // Automated Price Hike (Tier 1)
        if (data.tier === 1 && data.price_increase_date && data.future_monthly_fee) {
          const now = Timestamp.now();
          if (now.toMillis() >= data.price_increase_date.toMillis() && data.current_monthly_fee !== data.future_monthly_fee) {
            updatedData.current_monthly_fee = data.future_monthly_fee;
            needsUpdate = true;
          }
        }

        // Trial Expiry Logic
        if (data.status === 'Active') {
          const now = Timestamp.now();
          if (now.toMillis() > data.trial_ends_at.toMillis()) {
            updatedData.status = 'Suspended';
            needsUpdate = true;
          }
        }

        if (needsUpdate && isAdminUser) {
          try {
            await setDoc(docRef, { 
              current_monthly_fee: updatedData.current_monthly_fee,
              status: updatedData.status 
            }, { merge: true });
          } catch (e) {
            console.warn("Client data sync deferred to admin action");
          }
        }

        setClientData(updatedData);
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.LIST, 'clients');
    }
  };

  const fetchBusiness = async (uid: string) => {
    try {
      const q = query(collection(db, 'businesses'), where('ownerId', '==', uid));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        const docData = snapshot.docs[0].data();
        const biz = { id: snapshot.docs[0].id, ...docData } as Business;
        setBusiness(biz);
        setSettingsName(biz.name);
        setSettingsCat(biz.category);
        setSettingsAddress(biz.address || '');
        setSettingsPhone(biz.phone || '');
        setSettingsWebsite(biz.website || '');
        fetchHistory(snapshot.docs[0].id);
        fetchReports(snapshot.docs[0].id);
      } else {
        setBusiness(null);
        setShowRegister(true);
      }
    } catch (error) {
       handleFirestoreError(error, OperationType.LIST, 'businesses');
    }
  };

  const fetchReports = async (bizId: string) => {
    const qWeekly = query(collection(db, 'reports'), where('businessId', '==', bizId), where('type', '==', 'Weekly'), orderBy('createdAt', 'desc'), limit(1));
    const qMonthly = query(collection(db, 'reports'), where('businessId', '==', bizId), where('type', '==', 'Monthly'), orderBy('createdAt', 'desc'), limit(1));
    
    const [snapWeekly, snapMonthly] = await Promise.all([getDocs(qWeekly), getDocs(qMonthly)]);
    
    if (!snapWeekly.empty) {
      setWeeklyReport({ id: snapWeekly.docs[0].id, ...snapWeekly.docs[0].data() } as ReportRecord);
    }
    if (!snapMonthly.empty) {
      setMonthlyReport({ id: snapMonthly.docs[0].id, ...snapMonthly.docs[0].data() } as ReportRecord);
    }
  };

  const handleGenerateReport = async (type: 'Weekly' | 'Monthly') => {
    if (!business || !user) return;
    setIsGeneratingReport(true);
    try {
      const days = type === 'Weekly' ? 7 : 30;
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - days);
      
      // Fetch all reviews for this timeframe
      const q = query(
        collection(db, 'reviews'), 
        where('businessId', '==', business.id),
        where('createdAt', '>=', cutoff)
      );
      const snapshot = await getDocs(q);
      const reviews = snapshot.docs.map(d => d.data() as any);
      
      if (reviews.length < 3) {
        alert(`Need at least 3 reviews from the last ${days} days to generate a ${type} report.`);
        return;
      }

      const reportData = await generatePerformanceReport(reviews, business.category, type);
      const docRef = await addDoc(collection(db, 'reports'), {
        businessId: business.id,
        ...reportData,
        createdAt: serverTimestamp()
      });

      const newReport = { id: docRef.id, ...reportData, createdAt: { seconds: Date.now() / 1000 } } as ReportRecord;
      if (type === 'Weekly') setWeeklyReport(newReport);
      else setMonthlyReport(newReport);
    } catch (err) {
      console.error(err);
    } finally {
      setIsGeneratingReport(false);
    }
  };

  // --- Automation Simulation ---
  const [isSimulating, setIsSimulating] = useState(false);
  const [automationEnabled, setAutomationEnabled] = useState(true);

  const simulateIncomingReview = async () => {
    if (!business) return;
    setIsSimulating(true);
    
    // 1. Simulate the "Google Review Webhook" event
    const mockReviews = [
      { t: "Food was cold and wait staff was rude.", r: 2 },
      { t: "Worst gym equipment ever, everything is broken.", r: 1 },
      { t: "The haircut was fine but the shop was very dirty.", r: 3 },
      { t: "Amazing service! Will come back again.", r: 5 },
      { t: "Price is too high for the quality provided.", r: 2 }
    ];
    const pick = mockReviews[Math.floor(Math.random() * mockReviews.length)];

    try {
      // 1. Internal call to our Express API (Mock Webhook receiver)
      const res = await fetch('/api/webhook/google-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reviewText: pick.t,
          rating: pick.r,
          businessCategory: business.category,
          businessId: business.id
        })
      });

      const responseData = await res.json();
      if (!res.ok) throw new Error(responseData.error || "Simulation failed");
      
      // 2. GENERATE AI REPLY IN FRONTEND (Compliant with AI Studio Guidelines)
      const aiResult = await analyzeReview(pick.t, business.category);
      
      // 3. Save the result to Firestore (including 10-day TTL)
      const tenDaysInSeconds = 10 * 24 * 60 * 60;
      const now = new Date();
      const expiresAt = new Date(now.getTime() + tenDaysInSeconds * 1000);

      const reviewData = {
        businessId: business.id,
        text: pick.t,
        rating: pick.r,
        classification: aiResult.classification,
        suggestedResponse: aiResult.draftedResponse,
        improvementAnalysis: aiResult.improvementAnalysis || '', 
        createdAt: serverTimestamp(),
        expiresAt: Timestamp.fromDate(expiresAt), // 10 Days from now
        status: business.isGoogleConnected ? 'Replied' : 'Pending'
      };

      await addDoc(collection(db, 'reviews'), reviewData);

      if (business.isGoogleConnected) {
        setToast({ 
          message: "AI Auto-Reply Posted to Google!", 
          type: 'success' 
        });
      } else {
        setToast({ message: "New review analyzed!", type: 'info' });
      }

      fetchHistory(business.id);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSimulating(false);
    }
  };

  const fetchHistory = async (bizId: string) => {
    // Filter out expired reviews (older than 10 days)
    const now = new Date();
    const q = query(
      collection(db, 'reviews'), 
      where('businessId', '==', bizId),
      where('expiresAt', '>', Timestamp.fromDate(now)), // Only non-expired
      orderBy('expiresAt', 'desc'),
      orderBy('createdAt', 'desc')
    );
    const snapshot = await getDocs(q);
    const records = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as ReviewRecord));
    setHistory(records);

    // Check for batch insight if count >= 10
    const criticals = records.filter(r => r.classification === 'Critical');
    if (criticals.length >= 10) {
      checkInsights(bizId, criticals);
    }
  };

  const checkInsights = async (bizId: string, records: ReviewRecord[]) => {
    const insightQuery = query(collection(db, 'insights'), where('businessId', '==', bizId), orderBy('createdAt', 'desc'), limit(1));
    const snapshot = await getDocs(insightQuery);
    
    if (snapshot.empty) {
      // Generate first batch insight
      handleGenerateBatchInsight(bizId, records);
    } else {
      const latest = snapshot.docs[0].data();
      // If we have 10 more reviews since last insight, generate new? 
      // For simplicity: just show the latest
      setBatchInsight({ summary: latest.summary, recommendations: latest.recommendations });
    }
  };

  const handleGenerateBatchInsight = async (bizId: string, records: ReviewRecord[]) => {
    if (!business) return;
    setIsGeneratingInsight(true);
    try {
      const criticalReviews = records.filter(r => r.classification === 'Critical').slice(0, 10);
      if (criticalReviews.length < 5) return; // Need at least some critical data

      const result = await generateBatchInsights(criticalReviews, business.category);
      await addDoc(collection(db, 'insights'), {
        businessId: bizId,
        ...result,
        reviewCount: records.length,
        createdAt: serverTimestamp()
      });
      setBatchInsight(result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsGeneratingInsight(false);
    }
  };

  const handleLogin = async () => {
    if (isLoggingIn) return;
    setIsLoggingIn(true);
    try {
      await signIn();
    } catch (err: any) {
      const code = err?.code || err?.message;
      const isUserCancelled = code?.includes('auth/popup-closed-by-user') || 
                              code?.includes('auth/cancelled-popup-request');
      const isInternalAssertion = err?.message?.includes('Pending promise was never set');

      if (isUserCancelled || isInternalAssertion) {
         // Silently ignore user-initiated cancels or SDK internal quirks
         console.warn("Sign-in interaction was interrupted (User closed popup or internal quirk).");
      } else {
         console.error("Login Error:", err);
         alert("Unable to sign in. Please allow popups and try again.");
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newBizName.trim()) return;

    setIsRegistering(true);
    try {
      const data = {
        name: newBizName.trim(),
        category: newBizCat,
        ownerId: user.uid,
        createdAt: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, 'businesses'), data);
      
      // Create Client Document for SaaS billing & tracking
      const signupDate = Timestamp.now();
      const trialEndsAt = Timestamp.fromMillis(signupDate.toMillis() + (14 * 24 * 60 * 60 * 1000));
      const priceIncreaseDate = Timestamp.fromMillis(signupDate.toMillis() + (90 * 24 * 60 * 60 * 1000));

      const clientPayload = {
        client_id: user.uid,
        business_name: newBizName.trim(),
        country: 'India' as const,
        status: 'Active' as const,
        signup_date: signupDate,
        trial_ends_at: trialEndsAt,
        tier: 1 as const,
        setup_fee: 0,
        current_monthly_fee: 499,
        future_monthly_fee: 1499,
        price_increase_date: priceIncreaseDate
      };
      
      await addDoc(collection(db, 'clients'), clientPayload);
      
      setBusiness({ id: docRef.id, ...data } as Business);
      setClientData({ id: user.uid, ...clientPayload } as Client);
      setShowRegister(false);
    } catch (err: any) {
      handleFirestoreError(err, OperationType.WRITE, 'businesses/clients');
      if (err instanceof Error && err.message.includes("permissions")) {
        alert("Setup failed: Missing or insufficient permissions. Please try logging out and in again.");
      } else {
        alert("Something went wrong during setup. Please try again.");
      }
    } finally {
      setIsRegistering(false);
    }
  };

  const handleUpdateSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!business || !user || !settingsName.trim()) return;

    setIsUpdatingSettings(true);
    try {
      const updateData = {
        name: settingsName.trim(),
        category: settingsCat,
        address: settingsAddress,
        phone: settingsPhone,
        website: settingsWebsite,
        updatedAt: serverTimestamp()
      };

      await setDoc(doc(db, 'businesses', business.id), updateData, { merge: true });
      setBusiness(prev => prev ? { ...prev, ...updateData } : null);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile.");
    } finally {
      setIsUpdatingSettings(false);
    }
  };

  const handleConnectGoogle = async () => {
    if (!business) return;
    setIsConnectingGoogle(true);
    
    try {
      // Direct Real Connection using OAuth
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      if (token) {
        // Here we link the business to the authenticated Google account
        const gmbData = {
          googleProfileId: result.user.uid,
          isGoogleConnected: true,
          updatedAt: serverTimestamp()
        };

        await setDoc(doc(db, 'businesses', business.id), gmbData, { merge: true });
        setBusiness(prev => prev ? { ...prev, ...gmbData } : null);
        alert("Google Business node successfully synchronized and linked!");
      }
    } catch (err: any) {
      console.error("GMB Connection Error:", err);
      if (err.code === 'auth/popup-blocked') {
        alert("Pop-up blocked! Please allow pop-ups for this site to connect Google Business.");
      } else {
        alert("Connection established but permissions were not finalized. Please try again.");
      }
    } finally {
      setIsConnectingGoogle(false);
    }
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewText.trim() || !business) return;

    setIsAnalyzing(true);
    setAnalysis(null);

    try {
      const result = await analyzeReview(reviewText, business.category);
      setAnalysis(result);

      // Save to Firestore (10-day TTL)
      const tenDaysInSeconds = 10 * 24 * 60 * 60;
      const now = new Date();
      const expiresAtDate = new Date(now.getTime() + tenDaysInSeconds * 1000);

      await addDoc(collection(db, 'reviews'), {
        businessId: business.id,
        text: reviewText,
        rating: reviewRating,
        classification: result.classification,
        suggestedResponse: result.draftedResponse,
        improvementAnalysis: result.improvementAnalysis || '',
        createdAt: serverTimestamp(),
        expiresAt: Timestamp.fromDate(expiresAtDate)
      });

      // Refresh history
      fetchHistory(business.id);
    } catch (err) {
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-hidden selection:bg-blue-100 font-sans">
        {/* Landing Page Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-2xl border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <Logo size={32} />
              <span className="font-black text-xl md:text-2xl tracking-tighter text-slate-900 whitespace-nowrap">
                Review<span className="text-primary italic">Guard</span>
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <LanguageSelector />
              <button 
                onClick={handleLogin}
                className="px-4 md:px-8 py-2.5 md:py-3 bg-primary text-white font-black rounded-xl md:rounded-2xl text-[10px] md:text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
              >
                {t.nav.signIn}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-40 pb-24 px-6 relative gradient-bg overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-accent-green px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-secondary/30">
                <ShieldCheck size={14} />
                <span>{t.hero.badge}</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] md:leading-[0.9] text-slate-900" dangerouslySetInnerHTML={{ __html: t.hero.title.replace('Pride.', '<span class="text-primary">Pride.</span>').replace('Izzat.', '<span class="text-primary">Izzat.</span>') }} />
              <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={handleLogin}
                  className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-primary text-white font-black rounded-2xl md:rounded-3xl text-sm flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-2xl shadow-primary/30 transform active:scale-95"
                >
                  <LogIn size={20} />
                  {t.hero.cta}
                </button>
                <div className="flex items-center justify-center sm:justify-start gap-4 px-2 sm:px-6">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                    ))}
                  </div>
                  <div className="text-xs font-bold text-slate-400">
                    {t.hero.trustedBy}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
              <div className="relative bg-white p-2 rounded-[3.5rem] shadow-2xl overflow-hidden border border-slate-100">
                <div className="bg-slate-50 rounded-[3rem] p-8 aspect-video flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary">
                      <MessageSquare size={24} />
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm max-w-[80%]">
                      <p className="text-xs font-medium text-slate-600 italic">"Ghatiya service hai, dobara nahi aaunga!"</p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-2xl border border-primary/20 self-end ml-auto max-w-[80%]">
                      <p className="text-xs font-bold text-primary">AI Safe Reply: "Hume khed hai. Hum aapse sampark karke isse thik karenge..."</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32 px-6 bg-white relative z-10">
          <div className="max-w-7xl mx-auto space-y-24">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">{t.features.title}</h2>
              <p className="text-slate-500 font-medium italic">{t.features.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-10">
              <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all space-y-6">
                <div className="w-16 h-16 bg-blue-600 rounded-[2rem] mx-auto flex items-center justify-center text-white shadow-xl shadow-blue-200">
                  <RefreshCcw size={32} />
                </div>
                <h3 className="text-xl font-black text-slate-900">{t.features.autoReplyTitle}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {t.features.autoReplyDesc}
                </p>
              </div>

              <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-secondary/20 transition-all space-y-6">
                <div className="w-16 h-16 bg-secondary text-white rounded-[2rem] mx-auto flex items-center justify-center shadow-xl shadow-secondary/20">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-black text-slate-900">{t.features.strategyTitle}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {t.features.strategyDesc}
                </p>
              </div>

              <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all space-y-6">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-[2rem] mx-auto flex items-center justify-center shadow-xl shadow-slate-900/40">
                  <Store size={32} />
                </div>
                <h3 className="text-xl font-black text-slate-900">{t.features.googleTitle}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {t.features.googleDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-32 px-6 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-5xl font-black text-slate-900 leading-tight">{t.howItWorks.title}</h2>
              </div>
              <div className="space-y-10">
                {[
                  { step: '01', title: t.howItWorks.step1Title, desc: t.howItWorks.step1Desc },
                  { step: '02', title: t.howItWorks.step2Title, desc: t.howItWorks.step2Desc },
                  { step: '03', title: t.howItWorks.step3Title, desc: t.howItWorks.step3Desc }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 group">
                    <div className="text-4xl font-black text-slate-200 group-hover:text-primary transition-colors">{item.step}</div>
                    <div className="space-y-2">
                       <h4 className="text-xl font-black text-slate-900">{item.title}</h4>
                       <p className="text-sm font-medium text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3.5rem] shadow-xl border border-slate-100 relative overflow-hidden group">
               <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.02] transition-all duration-700" />
               <div className="bg-slate-50 p-8 rounded-[2.5rem] space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Live Rep Guard Node</span>
                  </div>
                  <div className="space-y-4">
                     <div className="h-4 bg-slate-200 rounded-full w-full" />
                     <div className="h-4 bg-slate-200 rounded-full w-2/3" />
                     <div className="h-4 bg-slate-200 rounded-full w-1/2" />
                  </div>
                  <div className="pt-10 flex gap-4">
                     <div className="w-12 h-12 bg-white rounded-2xl shadow-sm" />
                     <div className="flex-1 space-y-2">
                        <div className="h-3 bg-primary/20 rounded-full w-1/3" />
                        <div className="h-3 bg-primary/10 rounded-full w-2/3" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Footer Landing */}
        <footer className="py-20 px-6 bg-slate-900 text-white text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <Logo size={80} className="mx-auto grayscale brightness-200" />
            <div className="space-y-6">
              <h2 className="text-4xl font-black">{t.hero.title}</h2>
              <p className="text-slate-400 font-medium">{t.features.subtitle}</p>
            </div>
            <button 
              onClick={handleLogin}
              className="px-12 py-5 bg-white text-slate-900 font-black rounded-3xl text-sm hover:bg-slate-100 transition-all shadow-2xl"
            >
              {t.nav.startFree}
            </button>
            <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              <div>&copy; 2026 REVIEWGUARD AI • INDIA</div>
              <div className="flex gap-6">
                <button 
                  onClick={() => setLegalModal({
                    title: t.footer.security,
                    content: (
                      <div className="space-y-6 text-slate-600 leading-relaxed">
                        <section>
                          <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                            <ShieldCheck size={16} className="text-blue-600" />
                            {t.settings.encrypted}
                          </h5>
                          <p>{t.settings.zeroKnowledge}</p>
                        </section>
                      </div>
                    )
                  })} 
                  className="hover:text-white transition-colors"
                >
                  {t.footer.security}
                </button>
                <button 
                  onClick={() => setLegalModal({
                    title: t.footer.privacy,
                    content: (
                      <div className="space-y-4 text-slate-600 leading-relaxed">
                        <p>{t.settings.zeroKnowledge}</p>
                      </div>
                    )
                  })} 
                  className="hover:text-white transition-colors"
                >
                  {t.footer.privacy}
                </button>
                <button 
                  onClick={() => setLegalModal({
                    title: t.footer.contact,
                    content: (
                      <div className="space-y-4 text-slate-600 leading-relaxed">
                        <p>{t.footer.tagline}</p>
                        <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 uppercase tracking-widest">
                           <p className="text-[10px] font-black text-blue-700 mb-1">Direct Support Channel</p>
                           <p className="text-sm font-black text-blue-900">ravikumar472483@gmail.com</p>
                        </div>
                      </div>
                    )
                  })} 
                  className="hover:text-white transition-colors"
                >
                  {t.footer.contact}
                </button>
              </div>
            </div>
          </div>
        </footer>

        {/* Legal Modal Overlay for Landing Page */}
        <AnimatePresence>
          {legalModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 text-left">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLegalModal(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white w-full max-w-xl rounded-[3rem] shadow-2xl relative z-10 overflow-hidden"
              >
                <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                  <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">{legalModal.title}</h2>
                  <button 
                    onClick={() => setLegalModal(null)}
                    className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="p-10 max-h-[70vh] overflow-y-auto">
                  {legalModal.content}
                </div>
                <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end">
                  <button 
                    onClick={() => setLegalModal(null)}
                    className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-black text-sm hover:bg-black transition-all"
                  >
                    {lang === 'hinglish' ? 'Band karein' : lang === 'hi' ? 'बंद करें' : 'Close'}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (showRegister || !business) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-50 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 w-full max-w-lg space-y-8"
        >
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-slate-900">{t.setup.title}</h2>
            <p className="text-slate-500">{t.setup.desc}</p>
          </div>
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-2 text-left">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.settings.bizName}</label>
              <input 
                type="text" 
                required
                className="w-full p-4 rounded-2xl border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                placeholder="e.g. Iron Gym or Spice Garden"
                value={newBizName}
                onChange={(e) => setNewBizName(e.target.value)}
              />
            </div>
            <div className="space-y-2 text-left">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.settings.bizCat}</label>
              <select 
                className="w-full p-4 rounded-2xl border-slate-200 focus:border-blue-600 outline-none appearance-none bg-white font-medium"
                value={newBizCat}
                onChange={(e) => setNewBizCat(e.target.value)}
              >
                <option value="Gym">{t.categories.gym}</option>
                <option value="Restaurant">{t.categories.restaurant}</option>
                <option value="Salon">{t.categories.salon}</option>
                <option value="Beauty Parlour">{t.categories.beauty}</option>
                <option value="Retail">{t.categories.retail}</option>
                <option value="Cafe">{t.categories.cafe}</option>
                <option value="Hotel">{t.categories.hotel}</option>
                <option value="Medical">{t.categories.medical}</option>
                <option value="Automotive">{t.categories.auto}</option>
                <option value="Education">{t.categories.edu}</option>
                <option value="Other">{t.categories.other}</option>
              </select>
            </div>
            <button 
              disabled={isRegistering}
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isRegistering ? <RefreshCcw className="animate-spin" /> : <Plus size={20} />}
              {isRegistering ? '...' : t.setup.finish}
            </button>
          </form>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            {isAdmin && (
              <button 
                onClick={() => navigate('/admin')}
                className="w-full py-3 rounded-2xl bg-slate-900 text-white font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <ShieldCheck size={14} /> Enter Admin Panel
              </button>
            )}
            <button 
              onClick={logOut}
              className="w-full py-4 mt-2 bg-slate-50 border border-transparent text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-red-500 hover:bg-red-50 hover:border-red-100 rounded-2xl transition-all flex items-center justify-center gap-2"
            >
              <LogOut size={12} />
              Sign Out
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Final Render Logic
  if (clientData?.status === 'Suspended' && !isAdmin) {
    return <SuspendedModal isAdmin={isAdmin} onNavigate={navigate} />;
  }

  if (path === '/admin') {
    if (checkingAdmin) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
           <div className="w-12 h-12 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      );
    }
    if (!user) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
           <button 
             onClick={() => signIn()}
             className="w-full max-w-xs bg-blue-600 text-white px-6 md:px-10 py-4 md:py-5 rounded-[1.5rem] md:rounded-[2rem] font-black shadow-2xl shadow-blue-500/20 active:scale-95 transition-all text-xs md:text-sm uppercase tracking-widest text-[#FFF]"
           >
             ADMIN LOGIN
           </button>
        </div>
      );
    }
    if (!isAdmin) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
           <div className="text-center space-y-6 max-w-sm">
             <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
               <AlertCircle size={32} />
             </div>
             <div className="space-y-2">
               <div className="text-xl font-black text-slate-900 tracking-tight">ACCESS DENIED</div>
               <p className="text-slate-500 font-medium">You do not have administrative privileges for ReviewGuard.</p>
             </div>
             <div className="space-y-3">
               <button onClick={() => navigate('/')} className="w-full py-4 rounded-2xl bg-slate-900 text-white font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all">Go Back Home</button>
               <button onClick={logOut} className="w-full py-4 rounded-2xl bg-white border border-slate-200 text-red-500 font-black text-xs uppercase tracking-widest hover:bg-red-50 transition-all flex items-center justify-center gap-2">
                 <LogOut size={14} />
                 Sign Out
               </button>
             </div>
           </div>
        </div>
      );
    }
    return <AdminDashboard lang={lang} />;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-100 gradient-bg">
      {/* Top Nav */}
      <nav className="bg-white/70 backdrop-blur-2xl border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="hover:scale-110 transition-transform cursor-pointer">
              <Logo size={48} />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl tracking-tighter text-slate-900 leading-none">
                Review<span className="text-primary italic">Guard</span>
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] font-black text-accent-green bg-secondary/20 px-2 py-0.5 rounded-md uppercase tracking-widest">{business.category}</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">NODE 01</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex bg-slate-100 p-1.5 rounded-[1.5rem] gap-1">
            {isAdmin && (
              <button
                onClick={() => navigate('/admin')}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-black transition-all bg-slate-900 text-white hover:bg-slate-800"
              >
                <ShieldCheck size={16} />
                ADMIN
              </button>
            )}
            {[
              { id: 'dashboard', icon: LayoutDashboard, label: t.nav.manage },
              { id: 'history', icon: History, label: t.nav.vault },
              { id: 'insights', icon: Award, label: t.nav.strategy },
              { id: 'settings', icon: SettingsIcon, label: t.nav.profile }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-white text-primary shadow-[0_4px_15px_rgba(37,99,235,0.1)]' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {showInstallBtn && (
              <button 
                onClick={handleInstallApp}
                className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-blue-50 text-blue-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-100 transition-all border border-blue-100"
              >
                <Download size={14} />
                Install
              </button>
            )}
            <LanguageSelector />
            <div className="text-right hidden sm:block">
              <div className="text-sm font-black text-slate-900 leading-none">{business.name}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-1">{user.email}</div>
            </div>
            <button 
              onClick={logOut}
              className="group flex items-center gap-2 px-3 py-2.5 md:px-5 md:py-2.5 bg-white border border-slate-200 hover:bg-red-50 text-red-500 rounded-xl md:rounded-2xl transition-all shadow-sm active:scale-95"
            >
              <LogOut size={16} className="md:w-[18px] md:h-[18px]" />
              <span className="font-black text-[9px] md:text-[10px] uppercase tracking-widest">Sign Out</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Header (PWA Install Prompt) */}
      {showInstallBtn && (
        <div className="md:hidden fixed top-20 left-4 right-4 z-[49] bg-blue-600 text-white rounded-2xl p-4 shadow-xl flex items-center justify-between animate-bounce-subtle">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
               <Download size={20} />
             </div>
             <div>
               <div className="font-black text-xs">REVIEWGUARD APP</div>
               <div className="text-[10px] text-blue-100">Install for faster access</div>
             </div>
           </div>
           <button 
             onClick={handleInstallApp}
             className="px-4 py-2 bg-white text-blue-600 rounded-xl font-black text-[10px] uppercase"
           >
             Install
           </button>
        </div>
      )}
      
      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-2xl border-t border-slate-200 z-50 px-2 py-3 flex items-center justify-around">
        {isAdmin && (
          <button
            onClick={() => navigate('/admin')}
            className="flex flex-col items-center gap-1 px-3 py-1 rounded-xl text-blue-600 animate-pulse"
          >
            <ShieldCheck size={20} />
            <span className="text-[10px] font-black uppercase tracking-tighter">ADMIN</span>
          </button>
        )}
        {[
          { id: 'dashboard', icon: LayoutDashboard, label: t.nav.manage },
          { id: 'history', icon: History, label: t.nav.vault },
          { id: 'insights', icon: Award, label: t.nav.strategy },
          { id: 'settings', icon: SettingsIcon, label: t.nav.profile }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all ${
              activeTab === tab.id 
                ? 'text-blue-600' 
                : 'text-slate-400'
            }`}
          >
            <tab.icon size={20} />
            <span className="text-[10px] font-black uppercase tracking-tighter">{tab.label}</span>
          </button>
        ))}
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8 pb-24 md:pb-8">
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div 
              key="dash"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
                            <section className="lg:col-span-5 space-y-6">
                {/* Automation Status Card */}
                <div className="bg-primary p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] text-white space-y-8 shadow-2xl shadow-primary/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-all duration-700" />
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                      {business.isGoogleConnected ? "Google Node: Active" : t.dashboard.statusActive}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black leading-tight tracking-tight">
                      {business.isGoogleConnected ? "Auto-Reply System Active" : t.dashboard.deploymentTitle}
                    </h2>
                    <p className="text-blue-100 text-sm font-medium leading-relaxed">
                      {business.isGoogleConnected 
                        ? "Your business is now synced with Google Business Profile. AI is handling automated review sentiment analysis and drafting replies." 
                        : t.dashboard.deploymentDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <button 
                      onClick={simulateIncomingReview}
                      disabled={isSimulating}
                      className="w-full py-4 md:py-5 bg-white text-primary hover:bg-blue-50 rounded-2xl font-black text-xs md:text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50 transform active:scale-95 shadow-lg shadow-black/10"
                    >
                      {isSimulating ? <RefreshCcw size={16} className="animate-spin" /> : <ShieldCheck size={16} />}
                      {t.dashboard.integrityTest}
                    </button>
                    <p className="text-[9px] text-center mt-3 font-bold text-blue-200 uppercase tracking-widest opacity-60">{t.dashboard.integrityToast}</p>
                  </div>
                </div>

                <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-accent-green">
                      <MessageSquare size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h2 className="text-lg md:text-xl font-black text-slate-900 tracking-tight">{t.dashboard.manualTitle}</h2>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.dashboard.manualLabel}</p>
                    </div>
                  </div>

                  <form onSubmit={handleAnalyze} className="space-y-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">{t.dashboard.ratingLabel}</label>
                      <div className="flex gap-3">
                        {[1, 2, 3, 4, 5].map(s => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setReviewRating(s)}
                            className={`flex-1 py-4 rounded-2xl border-2 transition-all ${
                              reviewRating >= s ? 'bg-secondary/5 border-secondary text-accent-green' : 'bg-slate-50 border-slate-100 text-slate-300 hover:border-slate-300'
                            }`}
                          >
                            <Star size={20} className="mx-auto" fill={reviewRating >= s ? 'currentColor' : 'none'} />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 text-left">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">{t.dashboard.inputLabel}</label>
                      <textarea 
                        required
                        rows={6}
                        className="w-full p-6 rounded-[2rem] bg-slate-50 border-transparent hover:border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none text-slate-700 font-medium placeholder:text-slate-300"
                        placeholder={t.dashboard.inputPlaceholder}
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                      />
                    </div>

                    <button 
                      disabled={isAnalyzing || !reviewText.trim()}
                      className="w-full bg-primary text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-700 transition-all disabled:opacity-50 shadow-xl shadow-primary/20 transform active:scale-95"
                    >
                      {isAnalyzing ? <RefreshCcw className="animate-spin" /> : <><Send size={18} /> {t.dashboard.executeCta}</>}
                    </button>
                  </form>
                </div>

                <div className="bg-slate-900 text-slate-400 p-6 rounded-[2rem] flex items-center gap-4">
                  <div className="text-2xl font-black text-white">{history.length}</div>
                  <div className="text-xs font-bold uppercase tracking-widest">{t.dashboard.totalProcessed}</div>
                </div>
              </section>

              {/* Analysis Display */}
              <section className="lg:col-span-7 space-y-6">
                {!analysis && !isAnalyzing && (
                  <div className="h-[400px] bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 text-center px-12">
                    <MessageSquare size={48} className="mb-4 opacity-20" />
                    <p className="font-bold">{t.dashboard.awaitingInput}</p>
                    <p className="text-sm">{t.dashboard.awaitingDesc}</p>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="h-[400px] bg-white rounded-[2.5rem] flex flex-col items-center justify-center space-y-4">
                    <RefreshCcw size={48} className="text-blue-600 animate-spin" />
                    <p className="font-black text-slate-900">{t.dashboard.analyzing}</p>
                  </div>
                )}

                {analysis && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                    <div className="bg-white rounded-[2.5rem] p-8 space-y-8 border border-slate-200 translate-y-0">
                      <div className="flex items-center justify-between">
                        <div className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${
                          analysis.classification === 'Positive' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {analysis.classification} {t.dashboard.sentimentLabel}
                        </div>
                        {business.isGoogleConnected ? (
                          <div className="flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-green-100">
                            <CheckCircle2 size={12} /> Auto-Posted to Google
                          </div>
                        ) : (
                          <button 
                            onClick={() => {
                              navigator.clipboard.writeText(analysis.draftedResponse);
                              setToast({ message: "Reponse copied to clipboard!", type: 'success' });
                            }}
                            className="flex items-center gap-2 text-xs font-bold text-blue-600 px-4 py-2 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all"
                          >
                            <Copy size={14} /> {t.dashboard.copyCta}
                          </button>
                        )}
                      </div>
                      
                      <div className="space-y-4 text-left">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">{t.dashboard.suggestedReply}</h3>
                        <div className="p-6 bg-slate-50 rounded-2xl text-lg font-medium text-slate-800 leading-relaxed italic pr-12 relative border border-slate-100">
                          "{analysis.draftedResponse}"
                          <MessageSquare className="absolute top-4 right-4 text-slate-200" size={24} />
                        </div>
                      </div>

                      {analysis.classification === 'Critical' && (
                        <div className="space-y-4 pt-6 border-t border-slate-100 text-left">
                          <h3 className="flex items-center gap-2 text-slate-900 font-black italic">
                            <Target size={18} className="text-blue-600" />
                            {t.dashboard.actionSteps}
                          </h3>
                          <div className="prose prose-slate prose-sm max-w-none prose-p:text-slate-600 prose-li:text-slate-600">
                            <ReactMarkdown>{analysis.improvementAnalysis || ''}</ReactMarkdown>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </section>
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div 
              key="settings"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto space-y-6 md:space-y-10 px-4 md:px-0"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Sidebar Info */}
                <aside className="md:w-1/3 space-y-6">
                  <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-sm text-center space-y-6">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-secondary/10 rounded-[1.5rem] md:rounded-[2.5rem] mx-auto flex items-center justify-center text-accent-green shadow-inner">
                      <Store size={32} className="md:w-12 md:h-12" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-black text-slate-900 tracking-tight">{business.name}</h3>
                      <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{business.category} NODE</p>
                    </div>
                    
                    {business.isGoogleConnected ? (
                      <div className="w-full py-4 bg-green-50 text-green-600 border border-green-100 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                        <CheckCircle2 size={12} />
                        {t.settings.verified}
                      </div>
                    ) : (
                      <button 
                        onClick={handleConnectGoogle}
                        disabled={isConnectingGoogle}
                        className="w-full py-4 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:bg-blue-700 active:scale-95"
                      >
                        {isConnectingGoogle ? <RefreshCcw size={12} className="animate-spin" /> : <ShieldCheck size={12} />}
                        {t.settings.googleSync}
                      </button>
                    )}

                    {showInstallBtn && (
                      <button 
                        onClick={handleInstallApp}
                        className="w-full py-4 bg-slate-100 text-slate-700 border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-200 transition-all active:scale-95 shadow-sm"
                      >
                        <Download size={14} />
                        Install Offline App
                      </button>
                    )}
                  </div>

                  <div className="bg-slate-900 p-6 md:p-10 rounded-[2rem] md:rounded-[3.5rem] text-white space-y-4 shadow-2xl shadow-slate-900/40 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700" />
                     <div className="flex items-center gap-2 text-[10px] font-black text-secondary uppercase tracking-[0.2em]">
                        <Award size={14} />
                        <span>{t.settings.securityLevel}</span>
                     </div>
                     <p className="text-sm font-bold">{t.settings.encrypted}</p>
                     <p className="text-xs text-slate-400 leading-relaxed font-medium">{t.settings.zeroKnowledge}</p>
                  </div>
                </aside>

                {/* Edit Form */}
                <section className="md:w-2/3 bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3.5rem] border border-slate-100 shadow-sm space-y-8 md:space-y-10">
                  <div className="flex items-center justify-between border-b border-slate-50 pb-6">
                    <div className="space-y-1">
                      <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{t.settings.title}</h2>
                      <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed">{t.settings.subtitle}</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-2xl text-slate-300">
                      <SettingsIcon size={20} className="md:w-6 md:h-6" />
                    </div>
                  </div>

                  <form onSubmit={handleUpdateSettings} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">{t.settings.bizName}</label>
                        <input 
                          type="text"
                          value={settingsName}
                          onChange={e => setSettingsName(e.target.value)}
                          className="w-full p-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary outline-none transition-all font-bold text-slate-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">{t.settings.bizCat}</label>
                        <select 
                          value={settingsCat}
                          onChange={e => setSettingsCat(e.target.value)}
                          className="w-full p-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary outline-none appearance-none font-bold text-slate-700 cursor-pointer"
                        >
                          <option value="Gym">{t.categories.gym}</option>
                          <option value="Restaurant">{t.categories.restaurant}</option>
                          <option value="Salon">{t.categories.salon}</option>
                          <option value="Beauty Parlour">{t.categories.beauty}</option>
                          <option value="Retail">{t.categories.retail}</option>
                          <option value="Cafe">{t.categories.cafe}</option>
                          <option value="Hotel">{t.categories.hotel}</option>
                          <option value="Medical">{t.categories.medical}</option>
                          <option value="Automotive">{t.categories.auto}</option>
                          <option value="Education">{t.categories.edu}</option>
                          <option value="Other">{t.categories.other}</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2 text-left">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">{t.settings.address}</label>
                      <input 
                        type="text"
                        placeholder="123 Street Name, City"
                        value={settingsAddress}
                        onChange={e => setSettingsAddress(e.target.value)}
                        className="w-full p-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary outline-none transition-all font-bold text-slate-700"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">{t.settings.phone}</label>
                        <input 
                          type="text"
                          placeholder="+91 00000 00000"
                          value={settingsPhone}
                          onChange={e => setSettingsPhone(e.target.value)}
                          className="w-full p-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary outline-none transition-all font-bold text-slate-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">{t.settings.website}</label>
                        <input 
                          type="text"
                          placeholder="www.yourshop.com"
                          value={settingsWebsite}
                          onChange={e => setSettingsWebsite(e.target.value)}
                          className="w-full p-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary outline-none transition-all font-bold text-slate-700"
                        />
                      </div>
                    </div>

                    <div className="pt-6">
                      <button 
                        type="submit"
                        disabled={isUpdatingSettings}
                        className="w-full py-5 bg-primary hover:bg-blue-700 text-white rounded-2xl font-black transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-xl shadow-primary/20 transform active:scale-95 transition-all text-sm uppercase tracking-widest"
                      >
                        {isUpdatingSettings ? <RefreshCcw className="animate-spin" /> : <CheckCircle2 size={18} />}
                        {t.settings.updateCta}
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </motion.div>
          )}

          {activeTab === 'history' && (
            <motion.div key="hist" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {history.map((rev) => (
                  <div key={rev.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 space-y-4 relative overflow-hidden group shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all">
                    <div className="flex items-center justify-between border-b border-slate-50 pb-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className={i < rev.rating ? 'text-amber-400' : 'text-slate-100'} fill={i < rev.rating ? 'currentColor' : 'none'} />
                          ))}
                        </div>
                        {rev.status === 'Replied' && (
                          <div className="flex items-center gap-1.5 text-[8px] font-black text-green-500 uppercase tracking-widest pl-0.5">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            Auto-Replied by AI
                          </div>
                        )}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${rev.classification === 'Positive' ? 'bg-secondary/10 text-accent-green' : 'bg-red-50 text-red-500'}`}>
                        {rev.classification}
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 line-clamp-4 leading-relaxed font-medium italic">"{rev.text}"</p>
                    <div className="flex items-center justify-between pt-4">
                      <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{new Date(rev.createdAt?.seconds * 1000).toLocaleDateString()}</div>
                      <div className="p-2 bg-slate-50 rounded-xl text-slate-400 group-hover:text-primary transition-colors">
                        <ChevronRight size={14} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'insights' && (
            <motion.div key="ins" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-5xl mx-auto space-y-12 pb-24">
              {/* Strategy Header & Selector */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
                <div className="space-y-1 text-left w-full">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">{t.insights.title}</h2>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em]">{t.insights.subtitle}</p>
                </div>
                <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1">
                  {[
                    { id: 'batch', label: t.insights.batchTab },
                    { id: 'weekly', label: t.insights.weeklyTab },
                    { id: 'monthly', label: t.insights.monthlyTab }
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setStrategyMode(mode.id as any)}
                      className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                        strategyMode === mode.id ? 'bg-white shadow-[0_4px_15px_rgba(37,99,235,0.1)] text-primary' : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Strategy Modes */}
              <AnimatePresence mode="wait">
                {strategyMode === 'batch' ? (
                  <motion.div key="batchMode" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    {history.filter(r => r.classification === 'Critical').length < 10 ? (
                      <div className="bg-white p-16 rounded-[3rem] text-center space-y-8 border border-slate-200 shadow-sm">
                        <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center mx-auto rotate-3">
                          <TrendingUp size={48} />
                        </div>
                        <div className="space-y-3">
                          <h2 className="text-3xl font-black text-slate-900">{t.insights.lockedTitle}</h2>
                          <p className="text-slate-500 max-w-sm mx-auto leading-relaxed">
                            {t.insights.lockedDesc}
                          </p>
                        </div>
                        <div className="max-w-xs mx-auto space-y-4">
                          <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden p-1">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${(history.filter(r => r.classification === 'Critical').length / 10) * 100}%` }}
                              className="bg-blue-600 h-full rounded-full"
                            />
                          </div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{history.filter(r => r.classification === 'Critical').length} / 10 {t.insights.collectReviews}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-8">
                        {isGeneratingInsight ? (
                          <div className="p-20 text-center animate-pulse bg-white rounded-[3rem] border border-slate-200">
                            <RefreshCcw size={48} className="animate-spin text-blue-600 mx-auto mb-6" />
                            <h3 className="text-2xl font-black text-slate-900">{t.insights.generating}</h3>
                          </div>
                        ) : batchInsight ? (
                          <div className="space-y-8">
                            <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl shadow-blue-900/40 ring-1 ring-white/10 relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px]" />
                              <div className="flex items-center gap-5 mb-10">
                                <div className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-500/50">
                                  <TrendingUp size={28} />
                                </div>
                                <div>
                                  <h2 className="text-2xl font-bold uppercase tracking-tight">{t.insights.blueprint}</h2>
                                  <p className="text-blue-400 text-xs font-black uppercase tracking-widest">{t.insights.synthesis}</p>
                                </div>
                              </div>

                              <div className="prose prose-invert prose-blue max-w-none space-y-10">
                                <div>
                                  <h3 className="text-white text-lg font-black mb-4">{t.insights.findings}</h3>
                                  <div className="text-slate-300 leading-relaxed"><ReactMarkdown>{batchInsight.summary}</ReactMarkdown></div>
                                </div>
                                
                                <div className="h-px bg-white/10" />
                                
                                <div>
                                  <h3 className="text-white text-lg font-black mb-4">{t.insights.roadmap}</h3>
                                  <div className="text-slate-300 leading-relaxed"><ReactMarkdown>{batchInsight.recommendations}</ReactMarkdown></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div key="reportMode" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                    {(strategyMode === 'weekly' ? weeklyReport : monthlyReport) ? (
                      <div className="space-y-8">
                        {/* Report Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm text-center">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{t.insights.performanceScore}</p>
                            <div className="text-5xl font-black text-blue-600">{(strategyMode === 'weekly' ? weeklyReport : monthlyReport)?.performanceScore}</div>
                            <p className="text-xs text-slate-500 mt-2 font-bold">{t.insights.outOf100}</p>
                          </div>
                          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm col-span-2">
                             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{t.insights.sentimentMood}</p>
                             <div className="text-slate-700 leading-relaxed text-sm"><ReactMarkdown>{(strategyMode === 'weekly' ? weeklyReport : monthlyReport)?.sentimentAnalysis || ""}</ReactMarkdown></div>
                          </div>
                        </div>

                        {/* Growth Recommendations */}
                        <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-sm space-y-10">
                           <div className="flex items-center gap-4">
                             <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center font-bold">
                               <Award size={24} />
                             </div>
                             <h3 className="text-2xl font-black text-slate-900">{t.insights.roadmap}</h3>
                           </div>
                           
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                              <div className="space-y-6">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.insights.gaps}</h4>
                                <ul className="space-y-4">
                                  {(strategyMode === 'weekly' ? weeklyReport : monthlyReport)?.topComplaints.map((c, i) => (
                                    <li key={i} className="flex gap-3 text-slate-700 text-sm">
                                      <div className="w-5 h-5 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">!</div>
                                      {c}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="space-y-6">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.insights.actionPlan}</h4>
                                <div className="text-slate-700 text-sm leading-relaxed prose prose-slate">
                                  <ReactMarkdown>{(strategyMode === 'weekly' ? weeklyReport : monthlyReport)?.growthRecommendations || ""}</ReactMarkdown>
                                </div>
                              </div>
                           </div>
                        </div>

                        <button 
                          onClick={() => handleGenerateReport(strategyMode === 'weekly' ? 'Weekly' : 'Monthly')}
                          disabled={isGeneratingReport}
                          className="w-full py-6 rounded-[2rem] border-2 border-dashed border-slate-300 text-slate-400 hover:border-blue-400 hover:text-blue-500 font-bold transition-all flex items-center justify-center gap-3"
                        >
                          {isGeneratingReport ? <RefreshCcw className="animate-spin" /> : <RefreshCcw size={18} />}
                          {t.insights.generateFresh} {(strategyMode === 'weekly' ? t.insights.weeklyTab : t.insights.monthlyTab)}
                        </button>
                      </div>
                    ) : (
                      <div className="bg-white p-20 rounded-[3rem] text-center space-y-8 border border-slate-200">
                        <div className="w-24 h-24 bg-slate-50 text-slate-300 rounded-[2rem] flex items-center justify-center mx-auto">
                          <BarChart3 size={48} />
                        </div>
                        <div className="space-y-3">
                          <h2 className="text-3xl font-black text-slate-900">{t.insights.noReport} {strategyMode}</h2>
                          <p className="text-slate-500 max-w-sm mx-auto">{t.insights.noReportDesc}</p>
                        </div>
                        <button 
                          onClick={() => handleGenerateReport(strategyMode === 'weekly' ? 'Weekly' : 'Monthly')}
                          disabled={isGeneratingReport}
                          className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 mx-auto disabled:opacity-50"
                        >
                          {isGeneratingReport ? <RefreshCcw className="animate-spin" /> : <RefreshCcw size={20} />}
                          {t.insights.initializeSync}
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-16 border-t border-slate-200 mt-20 bg-white shadow-[0_-1px_10px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12 group">
            <div className="space-y-4 max-w-xs transition-all duration-500 opacity-60 grayscale hover:opacity-100 hover:grayscale-0">
              <div className="flex items-center gap-3">
                <Logo size={32} />
                <span className="font-black text-xl text-slate-800 tracking-tight">
                  <span className="text-blue-600">Review</span>Guard
                </span>
              </div>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">
                {t.footer.tagline}
              </p>
              <div className="flex items-center gap-2 pt-2 text-blue-600">
                <Mail size={16} />
                <a href="mailto:ravikumar472483@gmail.com" className="text-xs font-black uppercase tracking-widest hover:underline">ravikumar472483@gmail.com</a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-16">
              <div className="space-y-6">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{t.footer.platform}</h4>
                <ul className="space-y-4">
                  <li>
                    <button 
                      onClick={() => setLegalModal({
                        title: t.footer.about,
                        content: (
                          <div className="space-y-6 text-slate-600 leading-relaxed text-sm">
                            <section>
                              <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-xs uppercase tracking-widest">
                                <Activity size={14} className="text-blue-600" />
                                {t.legal.aboutTitle}
                              </h5>
                              <p className="font-medium">{t.legal.aboutDesc}</p>
                            </section>
                            <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{t.footer.contact}</p>
                               <p className="text-sm font-black text-slate-900 flex items-center gap-2">
                                  <Mail size={16} className="text-blue-600" /> ravikumar472483@gmail.com
                               </p>
                            </div>
                          </div>
                        )
                      })} 
                      className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      {t.footer.about}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setLegalModal({
                        title: t.footer.status,
                        content: (
                          <div className="space-y-6">
                            <div className="grid grid-cols-1 gap-4">
                              {[
                                { name: "AI Sentiment Engine", status: "Operational", detail: "Gemini 3 Flash Bridge Active", ping: "42ms" },
                                { name: "Firestore Database", status: "Operational", detail: "Long-Polling Fallback Enabled", ping: "128ms" },
                                { name: "Google Webhook Service", status: "Stable", detail: "Simulation Proxy Running", ping: "12ms" },
                                { name: "Security Protocols", status: "Verified", detail: "E2E Encryption & ABAC Active", ping: "Ready" }
                              ].map((sys) => (
                                <div key={sys.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                  <div className="space-y-0.5">
                                    <div className="text-sm font-black text-slate-900">{sys.name}</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{sys.detail}</div>
                                  </div>
                                  <div className="text-right space-y-1">
                                    <div className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-green-100 text-[10px] font-black text-green-600 uppercase tracking-widest">
                                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                      {sys.status}
                                    </div>
                                    <div className="text-[10px] font-bold text-slate-300">{sys.ping}</div>
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="p-6 bg-blue-600 rounded-[2rem] text-white space-y-4 shadow-xl shadow-blue-500/20">
                               <div className="flex items-center gap-2 text-[10px] font-black text-blue-200 uppercase tracking-widest">
                                  <ShieldCheck size={14} />
                                  <span>{t.footer.rights}</span>
                               </div>
                               <h3 className="text-lg font-black leading-tight">ReviewGuard V1.0</h3>
                               <p className="text-xs font-medium text-blue-100 leading-relaxed">
                                 {t.footer.tagline}
                               </p>
                            </div>
                          </div>
                        )
                      })} 
                      className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      {t.footer.status}
                    </button>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{t.footer.legal}</h4>
                <ul className="space-y-4">
                  <li>
                    <button 
                      onClick={() => setLegalModal({
                        title: t.footer.privacy,
                        content: (
                          <div className="space-y-6 text-slate-600 leading-relaxed text-sm">
                            <section>
                              <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-xs uppercase tracking-widest">
                                <ShieldCheck size={14} className="text-blue-600" />
                                {t.legal.privacyTitle}
                              </h5>
                              <p className="font-medium">{t.legal.privacyDesc}</p>
                            </section>
                          </div>
                        )
                      })} 
                      className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      {t.footer.privacy}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setLegalModal({
                        title: t.footer.terms,
                        content: (
                          <div className="space-y-6 text-slate-600 leading-relaxed text-sm">
                            <section>
                              <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-xs uppercase tracking-widest">
                                <FileText size={14} className="text-blue-600" />
                                {t.legal.termsTitle}
                              </h5>
                              <p className="font-medium">{t.legal.termsDesc}</p>
                            </section>
                          </div>
                        )
                      })} 
                      className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      {t.footer.terms}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{t.footer.rights}</p>
            <div className="flex gap-6">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{t.footer.globalNode}</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal Overlay */}
      <AnimatePresence>
        {legalModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLegalModal(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-xl rounded-[3rem] shadow-2xl relative z-10 overflow-hidden"
            >
              <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">{legalModal.title}</h2>
                <button 
                  onClick={() => setLegalModal(null)}
                  className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-10 max-h-[70vh] overflow-y-auto">
                {legalModal.content}
              </div>
              <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end">
                <button 
                  onClick={() => setLegalModal(null)}
                  className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-black text-sm hover:bg-black transition-all"
                >
                  {lang === 'hinglish' ? 'Band karein' : lang === 'hi' ? 'बंद करें' : 'Close'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
