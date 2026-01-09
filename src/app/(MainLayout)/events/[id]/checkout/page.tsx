import CheckoutCard from "@/components/module/Checkout/CheckoutCard";
import NoDataFound from "@/components/shared/NoDataFound";
import { getEvent } from "@/services/events/get-event";

const CheckoutPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const event = await getEvent(id);

  if (!event) {
    return <NoDataFound />;
  }

  return (
    <section className="page">
      <CheckoutCard event={event} />
    </section>
  );
};

export default CheckoutPage;
