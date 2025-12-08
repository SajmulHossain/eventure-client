"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Home, RefreshCcw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4">

      <div className="relative z-10 w-full max-w-md animate-in fade-in zoom-in-95 duration-500">
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden rounded-3xl">
          <div className="flex flex-col items-center pt-10 pb-8 px-6 text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-75"></div>
              <div className="relative bg-red-50 p-4 rounded-full border border-red-100">
                <AlertTriangle className="w-10 h-10 text-red-500" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Something went wrong!
            </h2>

            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              We apologize for the inconvenience. An unexpected error has
              occurred while processing your request.
            </p>

            <div className="w-full bg-slate-100/50 rounded-lg p-3 mb-6 border border-slate-100">
              <p className="text-xs font-mono text-slate-500 break-all">
                Error Code:{" "}
                <span className="text-slate-700 font-semibold">
                  {error.digest || "Unknown"}
                </span>
              </p>
              {process.env.NODE_ENV === "development" && (
                <p className="text-xs font-mono text-red-500 mt-2 text-left">
                  {error.message}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Button
                onClick={reset}
                className="flex-1 bg-slate-900 hover:bg-slate-800 text-white"
              >
                <RefreshCcw className="mr-2 h-4 w-4" />
                Try Again
              </Button>

              <Button
                variant="outline"
                className="flex-1 border-slate-200 hover:bg-white hover:text-indigo-600"
                asChild
              >
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>
            </div>
          </div>

          {/* <div className="bg-slate-50 border-t border-slate-100 p-4 text-center">
            <p className="text-xs text-slate-400">
              If this persists, please{" "}
              <Link href="/contact" className="underline hover:text-indigo-600">
                contact support
              </Link>
              .
            </p>
          </div> */}
        </Card>
      </div>
    </div>
  );
}