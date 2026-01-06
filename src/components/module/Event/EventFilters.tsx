"use client";

import React from "react";

interface Filters {
  q?: string;
  category?: string;
  date?: string;
  location?: string;
}

interface Props {
  value: Filters;
  onChange: (v: Filters) => void;
}

const EventFilters: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <input
        placeholder="Search events..."
        value={value.q || ""}
        onChange={(e) => onChange({ ...value, q: e.target.value })}
        className="input w-60"
      />

      <select
        value={value.category || ""}
        onChange={(e) => onChange({ ...value, category: e.target.value })}
        className="select w-48"
      >
        <option value="">All categories</option>
        <option value="Music">Music</option>
        <option value="Sports">Sports</option>
        <option value="Workshop">Workshop</option>
        <option value="Meetup">Meetup</option>
      </select>

      <input
        type="date"
        value={value.date || ""}
        onChange={(e) => onChange({ ...value, date: e.target.value })}
        className="input"
      />

      <input
        placeholder="Location"
        value={value.location || ""}
        onChange={(e) => onChange({ ...value, location: e.target.value })}
        className="input w-48"
      />

      <button
        className="btn"
        onClick={() => onChange({ q: "", category: "", date: "", location: "" })}
      >
        Reset
      </button>
    </div>
  );
};

export default EventFilters;
