import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IMeta, IPayment, PAYMET_STATUS } from "@/types";
import { format } from "date-fns";
import {
  CreditCard,
  CheckCircle2,
  XCircle,
  Clock,
  AlertCircle,
} from "lucide-react";
import getAllPayments from "@/services/payment/getAllPayments";
import Pagination from "@/components/Pagination";

const getStatusStyles = (status: PAYMET_STATUS) => {
  switch (status) {
    case PAYMET_STATUS.PAID:
      return {
        color: "text-emerald-600 bg-emerald-50 border-emerald-100",
        icon: <CheckCircle2 className="w-4" />,
      };
    case PAYMET_STATUS.FAILED:
      return {
        color: "text-red-600 bg-red-50 border-red-100",
        icon: <XCircle className="w-4" />,
      };
    case PAYMET_STATUS.CANCELD:
      return {
        color: "text-slate-600 bg-slate-50 border-slate-100",
        icon: <AlertCircle className="w-4" />,
      };
    default:
      return {
        color: "text-amber-600 bg-amber-50 border-amber-100",
        icon: <Clock className="w-4" />,
      };
  }
};

async function PaymentPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const queryString = new URLSearchParams(params as any).toString();
  const { data: payments, meta } = await getAllPayments(queryString);

  return (
    <section className="page">
      <div className="container mx-auto py-10 px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-200">
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Payment History
            </h1>
            <p className="text-slate-500">
              Track and manage all your event transactions
            </p>
          </div>
        </div>

        <Card className="border-none shadow-xl shadow-slate-200/60 rounded-3xl overflow-hidden">
          <CardHeader className="bg-white border-b border-slate-50">
            <CardTitle className="text-lg font-semibold">
              Recent Transactions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow className="hover:bg-transparent border-none">
                  <TableHead className="w-[300px] font-bold py-5 pl-8">
                    Event Name
                  </TableHead>
                  <TableHead className="font-bold">Transaction ID</TableHead>
                  <TableHead className="font-bold">User</TableHead>
                  <TableHead className="font-bold text-right">Amount</TableHead>
                  <TableHead className="font-bold text-center">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments?.map((payment) => {
                  const styles = getStatusStyles(payment.status);
                  return (
                    <TableRow
                      key={payment.transactionId}
                      className="group hover:bg-slate-50/50 transition-colors"
                    >
                      <TableCell className="py-5 pl-8">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-800 line-clamp-1">
                            {payment.event?.name}
                          </span>
                          <span className="text-xs text-slate-400">
                            {format(
                              new Date(payment?.createdAt || new Date()),
                              "MMM dd, yyyy"
                            )}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-sm text-slate-500">
                        {payment.transactionId}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-slate-700">
                            {payment.user?.name}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {payment.user?.email}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <span className="font-black text-slate-900">
                          ৳{payment.amount}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant="outline"
                          className={`capitalize px-3 py-1 rounded-full border flex items-center gap-1.5 w-fit mx-auto ${styles.color}`}
                        >
                          {styles.icon}
                          {payment.status.toLowerCase()}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>

            <Pagination meta={meta as IMeta} />

            {payments?.length === 0 && (
              <div className="py-20 text-center space-y-3">
                <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <CreditCard className="text-slate-300 w-8 h-8" />
                </div>
                <p className="text-slate-400 font-medium">
                  No payment records found.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default PaymentPage;
