import {
    UserPlus,
    Mail,
    CheckCircle2,
    ArrowRight,
    ShieldCheck,
    Zap,
    Globe
} from 'lucide-react';
import Link from 'next/link';

const BecomeHostPage = () => {
  return (
    <section className="page min-h-screen bg-white">
      <div className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Share Your Passion. <br />
            <span className="text-indigo-400">Become a Host Today.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join our community of experts and organizers. Whether it&apos;s a workshop, a tour, or an event — your journey as a host starts here.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-20 pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between group hover:border-indigo-200 transition-all duration-300">
            <div>
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <UserPlus className="w-8 h-8 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Quick Start</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Already know what you want to host? Create an account directly and choose the <span className="font-bold text-slate-700 underline decoration-indigo-300">HOST</span> role during registration.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Instant Dashboard Access', 'List Unlimited Events', 'Secure Payment System'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <Link 
              href="/register?role=HOST" 
              className="w-full bg-slate-900 text-white h-16 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-100"
            >
              Register as Host <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-200/60 flex flex-col justify-between group hover:bg-white hover:border-indigo-200 transition-all duration-300">
            <div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-slate-700" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Approval?</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Are you a large organization or have specific questions? Contact our administration team for a verified host badge and bulk management tools.
              </p>
              
              <div className="bg-white/50 p-6 rounded-2xl mb-10 border border-slate-100">
                <div className="flex items-center gap-4 text-slate-700 font-bold mb-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-500" /> Verified Hosting
                </div>
                <p className="text-xs text-slate-500">Our team will review your profile and provide a verified status for better trust with participants.</p>
              </div>
            </div>
            
            <a 
              href="mailto:admin@example.com?subject=Become%20a%20Host%20Inquiry" 
              className="w-full bg-white border-2 border-slate-900 text-slate-900 h-16 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg hover:bg-slate-900 hover:text-white transition-all"
            >
              Contact Administration <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-indigo-500 mb-4">Why Host With Us</h3>
            <p className="text-3xl font-bold text-slate-900">Everything you need to succeed</p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: "Fast Payouts", desc: "Receive your earnings safely within 3-5 business days after event completion." },
              { icon: Globe, title: "Global Reach", desc: "Showcase your events to thousands of eager participants worldwide." },
              { icon: ShieldCheck, title: "Secure Platform", desc: "Industry-standard encryption to protect your data and transactions." }
            ].map((benefit, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 text-slate-600">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-50 py-12 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm">
            Still have questions? Visit our <Link href="/faq" className="text-indigo-600 font-bold underline">Help Center</Link> or check our <Link href="/terms" className="text-indigo-600 font-bold underline">Host Terms</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BecomeHostPage;