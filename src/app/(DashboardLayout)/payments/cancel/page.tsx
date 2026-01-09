import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  AlertCircle, 
  ArrowLeft, 
  ShoppingCart, 
  Hash, 
  Info,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PaymentCancelPage({ searchParams }: PageProps) {
  // সার্ভার সাইড থেকে কুয়েরি প্যারামিটার রিড করা
  const params = await searchParams;
  const transactionId = params.transactionId as string;
  const amount = params.amount as string;
  const message = params.message as string || "Payment Cancelled";

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex items-center justify-center p-6">
      <div className="max-w-md w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
        <Card className="border-none shadow-[0_40px_80px_-15px_rgba(15,23,42,0.1)] rounded-[3rem] overflow-hidden bg-white">
          
          <div className="bg-slate-800 px-8 py-14 flex flex-col items-center text-white text-center relative">
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-md mb-6 ring-8 ring-white/5">
              <AlertCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-black mb-2 tracking-tight">
              {message}
            </h1>
            <p className="text-slate-400 font-medium text-sm">
              You have cancelled the payment process
            </p>
            
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
               <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
               </svg>
            </div>
          </div>

          <div className="p-10 space-y-8">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-amber-50 border border-amber-100">
              <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800 leading-relaxed font-semibold">
                Your can order again from <Link href="/events" className="underline">events page</Link>. You can complete the payment whenever you&apos;re ready.
              </p>
            </div>

            <div className="space-y-5">
               <div className="flex justify-between items-end border-b border-slate-50 pb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Amount Saved</span>
                <span className="text-2xl font-black text-slate-900">
                  ৳{amount}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-slate-400">
                  <Hash className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-bold uppercase">Ref ID</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-500">
                  {transactionId}
                </span>
              </div>
            </div>

            <div className="grid gap-4 pt-2">
              <Button asChild className="w-full h-14 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-base font-bold transition-all shadow-xl shadow-indigo-100 active:scale-95 group">
                <Link href="/events" className="flex items-center justify-center gap-2">
                  Go to Events
                </Link>
              </Button>
              
              <Button variant="ghost" asChild className="w-full h-12 rounded-xl text-slate-500 font-bold hover:bg-slate-50">
                <Link href="/" className="flex items-center gap-2">
                   <ArrowLeft className="w-4 h-4" /> Go Back to Homepage
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-slate-50/50 p-6 text-center border-t border-slate-100">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              Secure Session Ended
            </p>
          </div>
        </Card>

        <div className="mt-10 text-center">
          <Link href="/support" className="text-slate-400 hover:text-slate-600 text-xs font-bold flex items-center justify-center gap-1 transition-colors">
            Questions about payment? <span className="text-indigo-600">Contact us</span> <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}