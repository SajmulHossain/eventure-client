import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    XCircle,
    RefreshCcw,
    ArrowLeft,
    Hash,
    AlertTriangle
} from "lucide-react";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PaymentFailPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const transactionId = params.transactionId as string;
  const amount = params.amount as string;
  const message = params.message as string || "Payment Failed";

  return (
    <div className="min-h-screen bg-[#FFF8F8] flex items-center justify-center p-6">
      <div className="max-w-md w-full animate-in fade-in zoom-in duration-500">
        <Card className="border-none shadow-[0_32px_64px_-15px_rgba(220,38,38,0.1)] rounded-[2.5rem] overflow-hidden bg-white">
          
          <div className="bg-red-500 px-8 py-12 flex flex-col items-center text-white text-center">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-md mb-6 ring-8 ring-white/10">
              <XCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-black mb-2 tracking-tight">
              {message}
            </h1>
            <p className="text-red-100 font-medium opacity-90">
              Transaction was not successful
            </p>
          </div>

          <div className="p-8 space-y-8">
            <div className="bg-red-50 rounded-2xl p-4 flex gap-3 items-start border border-red-100">
              <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <p className="text-xs text-red-700 leading-relaxed font-medium">
                Don&apos;t worry! If any amount was deducted from your account, it will be refunded within 3-5 business days.
              </p>
            </div>

            <div className="space-y-4">
               <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="text-sm font-semibold">Amount to Pay</span>
                </div>
                <span className="text-lg font-black text-slate-900">
                  ৳{amount}
                </span>
              </div>

              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-2 text-slate-500">
                  <Hash className="w-4 h-4" />
                  <span className="text-sm font-semibold">Transaction ID</span>
                </div>
                <span className="text-sm font-mono font-bold text-slate-900">
                  {transactionId?.slice(-12)}
                </span>
              </div>
            </div>

            <div className="grid gap-3 pt-4">
              <Button asChild className="w-full h-14 rounded-2xl bg-red-600 hover:bg-red-700 text-base font-bold transition-all shadow-lg shadow-red-100 active:scale-95">
                <Link href="/events" className="flex items-center justify-center gap-2">
                  Try Again <RefreshCcw className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-slate-50/80 p-6 text-center border-t border-slate-100">
            <p className="text-[11px] text-slate-400 font-medium">
              Payment security provided by SSLCommerz.
              <br />
              Need help? Call us at +880 1XXX-XXXXXX
            </p>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/" className="text-slate-400 hover:text-slate-600 text-sm font-bold flex items-center justify-center gap-2 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}