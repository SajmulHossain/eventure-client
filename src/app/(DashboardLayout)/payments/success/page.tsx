import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowRight,
  Download,
  Hash,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PaymentSuccessPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const transactionId = params.transactionId as string;
  const amount = params.amount as string;
  const message = (params.message as string) || "Payment Completed";

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">
      <div className="max-w-md w-full animate-in fade-in zoom-in duration-500">
        <Card className="border-none shadow-[0_32px_64px_-15px_rgba(0,0,0,0.08)] rounded-[2.5rem] overflow-hidden bg-white">
          <div className="bg-emerald-500 px-8 py-12 flex flex-col items-center text-white text-center">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-md mb-6 ring-8 ring-white/10">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-black mb-2 tracking-tight">
              {message}
            </h1>
            <p className="text-emerald-100 font-medium opacity-90">
              Transaction Successful & Seat Reserved
            </p>
          </div>

          <div className="p-8 space-y-8">
            <div className="bg-slate-50 rounded-3xl p-6 text-center border border-slate-100">
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
                Amount Paid
              </p>
              <div className="text-4xl font-black text-slate-900">
                ৳{amount}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-2 text-slate-500">
                  <Hash className="w-4 h-4" />
                  <span className="text-sm font-semibold">Transaction ID</span>
                </div>
                <span className="text-sm font-mono font-bold text-slate-900">
                  {transactionId?.split("_").pop()}...{transactionId?.slice(-4)}
                </span>
              </div>

              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-2 text-slate-500">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-sm font-semibold">Status</span>
                </div>
                <span className="text-xs font-black text-emerald-600 uppercase">
                  Verified
                </span>
              </div>
            </div>

            <div className="grid gap-3 pt-4">
              <Button
                asChild
                className="w-full h-14 rounded-2xl bg-slate-900 hover:bg-indigo-600 text-base font-bold transition-all shadow-lg shadow-slate-200 active:scale-95"
              >
                <Link
                  href="/dashboard/joined-events"
                  className="flex items-center justify-center gap-2"
                >
                  View My Tickets <CalendarCheck className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full h-14 rounded-2xl border-slate-200 text-slate-600 font-bold hover:bg-slate-50"
              >
                <Link href={"/events"}>Events</Link>
              </Button>
            </div>
          </div>

          <div className="bg-slate-50/80 p-6 text-center border-t border-slate-100">
            <p className="text-[11px] text-slate-400 font-medium">
              A copy of the invoice has been sent to your email.
              <br />
              Secure payment processed via SSLCommerz.
            </p>
          </div>
        </Card>

        <div className="mt-4 text-center">
          <Link
            href="/"
            className="text-slate-400 hover:text-slate-600 text-sm font-bold flex items-center justify-center gap-2 transition-colors"
          >
            Back to Home Page <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
