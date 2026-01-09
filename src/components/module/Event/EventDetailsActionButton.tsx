"use client";
import { Button } from "@/components/ui/button";
import { saveEvent } from "@/services/savedEvents/saveEvent";
import { Heart, Share2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

function EventDetailsActionButton({
  id,
  isSaved = false,
}: {
  id: string;
  isSaved?: boolean;
}) {
  const [isSuccess, setIsSuccess] = useState(isSaved);
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Event Details",
          text: "Check out this event!",
          url: window.location.href,
        })
        .catch(console.error);
    }
  };

  const handleSaveEvent = async () => {
    const toastId = toast.loading("Saving event...");
    try {
      const res = await saveEvent(id || "");
      setIsSuccess(!isSuccess);
      if (res.success) {
        toast.success(
          `Event ${isSuccess ? "unsaved" : "saved"} successfully!`,
          { id: toastId }
        );
      } else {
        setIsSuccess(!isSuccess);
        toast.error(res.message || "Failed to save event.", { id: toastId });
      }
    } catch (error: any) {
      setIsSuccess(!isSuccess);
      toast.error(error?.message || "Failed to save event.", { id: toastId });
    }
  };

  return (
    <>
      <div className="flex gap-3 mb-4">
        <Button className="flex-1 h-14 text-lg font-bold rounded-2xl bg-slate-900 hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200">
          Join Event
        </Button>

        <Button
          onClick={handleSaveEvent}
          variant="outline"
          className="h-14 w-14 rounded-2xl border-slate-200 hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-colors"
        >
          <Heart className={`h-6 w-6 ${isSuccess ? "fill-current" : ""}`} />
        </Button>
      </div>
      <Button
        onClick={handleShare}
        variant="ghost"
        className="w-full text-slate-500 h-12 hover:bg-slate-50 gap-2 font-medium"
      >
        <Share2 className="h-4 w-4" /> Share with friends
      </Button>
    </>
  );
}

export default EventDetailsActionButton;
