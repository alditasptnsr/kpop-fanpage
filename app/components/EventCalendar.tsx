"use client";

import { Calendar, MapPin, Clock, Ticket, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Event } from "@/lib/data";

interface EventCalendarProps {
  events: Event[];
  idolName: string;
}

export default function EventCalendar({
  events,
  idolName,
}: EventCalendarProps) {
  const [selectedType, setSelectedType] = useState<string>("all");

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case "concert":
        return "Concert";
      case "fansign":
        return "Fan Meeting";
      case "appearance":
        return "TV Appearance";
      case "release":
        return "Album Release";
      default:
        return "Event";
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "concert":
        return "bg-purple-500";
      case "fansign":
        return "bg-pink-500";
      case "appearance":
        return "bg-blue-500";
      case "release":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "text-green-600 bg-green-100";
      case "sold-out":
        return "text-red-600 bg-red-100";
      case "completed":
        return "text-gray-600 bg-gray-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "upcoming":
        return "Upcoming";
      case "sold-out":
        return "Sold Out";
      case "completed":
        return "Completed";
      default:
        return "Unknown";
    }
  };

  const filteredEvents =
    selectedType === "all"
      ? events
      : events.filter((event) => event.type === selectedType);

  const eventTypes = ["all", "concert", "fansign", "appearance", "release"];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {idolName} Schedule
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jadwal konser, fan meeting, dan event penting lainnya dari{" "}
            {idolName}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedType === type
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {type === "all" ? "All Events" : getEventTypeLabel(type)}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className={`h-2 ${getEventTypeColor(event.type)}`} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${getEventTypeColor(
                          event.type
                        )} text-white`}
                      >
                        {getEventTypeLabel(event.type)}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          event.status ?? "unknown"
                        )}`}
                      >
                        {getStatusLabel(event.status ?? "unknown")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{formatDate(event.date)}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{event.time}</span>
                  </div>

                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-medium">{event.venue}</div>
                      <div className="text-gray-500">{event.location}</div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {event.description}
                </p>

                {event.ticketUrl && event.status === "upcoming" && (
                  <a
                    href={event.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-medium"
                  >
                    <Ticket className="w-4 h-4" />
                    Get Tickets
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                {event.status === "sold-out" && (
                  <div className="w-full bg-gray-200 text-gray-600 px-4 py-2 rounded-lg text-center text-sm font-medium cursor-not-allowed">
                    Sold Out
                  </div>
                )}

                {event.status === "completed" && (
                  <div className="w-full bg-gray-100 text-gray-500 px-4 py-2 rounded-lg text-center text-sm font-medium">
                    Event Completed
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-500 mb-2">
              No events found
            </h3>
            <p className="text-gray-400">
              No events match the selected filter.
            </p>
          </div>
        )}

        {/* Upcoming Events Highlight */}
        {events.filter((e) => e.status === "upcoming").length > 0 && (
          <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Next Upcoming Event
            </h3>
            {(() => {
              const nextEvent = events
                .filter((e) => e.status === "upcoming")
                .sort(
                  (a, b) =>
                    new Date(a.date).getTime() - new Date(b.date).getTime()
                )[0];

              if (!nextEvent) return null;

              return (
                <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {nextEvent.title}
                    </h4>
                    <div className="text-lg text-purple-600 font-semibold mb-4">
                      {formatDate(nextEvent.date)} • {nextEvent.time}
                    </div>
                    <div className="text-gray-600 mb-4">
                      {nextEvent.venue}, {nextEvent.location}
                    </div>
                    <p className="text-gray-700 mb-6">
                      {nextEvent.description}
                    </p>
                    {nextEvent.ticketUrl && (
                      <a
                        href={nextEvent.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
                      >
                        <Ticket className="w-5 h-5" />
                        Get Tickets Now
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
}
