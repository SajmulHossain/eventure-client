"use client";

import React, { useEffect, useState } from "react";
import EventFilters from "./EventFilters";
import { IEvent } from "@/types";
import EventCard from "./EventCard";
import NoDataFound from "@/components/shared/NoDataFound";

const EventsClient: React.FC = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    q: "",
    category: "",
    date: "",
    location: "",
  });

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (filters.q) params.set("q", filters.q);
        if (filters.category) params.set("category", filters.category);
        if (filters.date) params.set("date", filters.date);
        if (filters.location) params.set("location", filters.location);

        const res = await fetch(`/api/events?${params.toString()}`);
        if (!res.ok) {
          const fallback = await fetch(`/events`); // try backend route
          if (fallback.ok) {
            const json = await fallback.json();
            setEvents(json.data || []);
          } else {
            setEvents([]);
          }
        } else {
          const json = await res.json();
          setEvents(json.data || []);
        }
      } catch (err) {
        console.error(err);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [filters]);

  return (
    <div className="space-y-6">
      <EventFilters value={filters} onChange={setFilters} />

      <div>
        {loading ? (
          <p className="text-center py-8 text-muted-foreground">Loading...</p>
        ) : events.length ? (
          events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))
        ) : (
          <NoDataFound />
        )}
      </div>
    </div>
  );
};

export default EventsClient;
