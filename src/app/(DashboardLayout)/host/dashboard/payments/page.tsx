import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Calendar, CreditCard, CheckCircle, Clock, XCircle } from "lucide-react";

const PaymentsPage = () => {
  const dummyPayments = [
    {
      id: 1,
      transactionId: "TXN-2024-001",
      participant: "James Miller",
      event: "Tech Innovation Summit 2024",
      amount: 299.99,
      date: "2024-04-15",
      status: "Completed",
      method: "Credit Card",
    },
    {
      id: 2,
      transactionId: "TXN-2024-002",
      participant: "Emma Wilson",
      event: "Tech Innovation Summit 2024",
      amount: 149.99,
      date: "2024-04-16",
      status: "Completed",
      method: "PayPal",
    },
    {
      id: 3,
      transactionId: "TXN-2024-003",
      participant: "Oliver Brown",
      event: "Creative Writing Workshop",
      amount: 79.99,
      date: "2024-04-10",
      status: "Pending",
      method: "Credit Card",
    },
    {
      id: 4,
      transactionId: "TXN-2024-004",
      participant: "Sophia Martinez",
      event: "Tech Innovation Summit 2024",
      amount: 399.99,
      date: "2024-04-18",
      status: "Completed",
      method: "Bank Transfer",
    },
    {
      id: 5,
      transactionId: "TXN-2024-005",
      participant: "Noah Garcia",
      event: "Creative Writing Workshop",
      amount: 79.99,
      date: "2024-04-12",
      status: "Failed",
      method: "Credit Card",
    },
    {
      id: 6,
      transactionId: "TXN-2024-006",
      participant: "Ava Rodriguez",
      event: "Tech Innovation Summit 2024",
      amount: 299.99,
      date: "2024-04-20",
      status: "Pending",
      method: "PayPal",
    },
  ];

  const totalRevenue = dummyPayments
    .filter((p) => p.status === "Completed")
    .reduce((sum, p) => sum + p.amount, 0);

  const pendingAmount = dummyPayments
    .filter((p) => p.status === "Pending")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <section className="page">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
        <p className="text-muted-foreground mt-1">
          View and manage payment transactions
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              <span className="text-2xl font-bold">
                ${totalRevenue.toFixed(2)}
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Payments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-yellow-600" />
              <span className="text-2xl font-bold">
                ${pendingAmount.toFixed(2)}
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-blue-600" />
              <span className="text-2xl font-bold">{dummyPayments.length}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4">
        {dummyPayments.map((payment) => (
          <Card key={payment.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">
                    {payment.transactionId}
                  </CardTitle>
                  <CardDescription className="mt-1">
                    {payment.participant} - {payment.event}
                  </CardDescription>
                </div>
                <Badge
                  variant={
                    payment.status === "Completed"
                      ? "default"
                      : payment.status === "Pending"
                      ? "secondary"
                      : "destructive"
                  }
                  className="flex items-center gap-1"
                >
                  {payment.status === "Completed" ? (
                    <CheckCircle className="h-3 w-3" />
                  ) : payment.status === "Pending" ? (
                    <Clock className="h-3 w-3" />
                  ) : (
                    <XCircle className="h-3 w-3" />
                  )}
                  {payment.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xl font-bold">
                      ${payment.amount.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CreditCard className="h-4 w-4" />
                    {payment.method}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {payment.date}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PaymentsPage;

