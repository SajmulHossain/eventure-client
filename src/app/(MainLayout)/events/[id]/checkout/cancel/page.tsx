import Link from "next/link";

const CancelPage = () => {
  return (
    <div className="page text-center">
      <h2 className="text-xl font-semibold">Payment failed or canceled</h2>
      <p className="mt-2">No payment was taken.</p>
      <div className="mt-4">
        <Link href="/events" className="btn">Back to events</Link>
      </div>
    </div>
  );
};

export default CancelPage;
