import Link from "next/link";

const SuccessPage = () => {
  return (
    <div className="page text-center">
      <h2 className="text-xl font-semibold">Payment successful</h2>
      <p className="mt-2">Thank you — your payment was processed (simulated).</p>
      <div className="mt-4">
        <Link href="/events" className="btn">Back to events</Link>
      </div>
    </div>
  );
};

export default SuccessPage;
