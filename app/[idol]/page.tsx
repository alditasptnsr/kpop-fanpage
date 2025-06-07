// app/[idol]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { getIdolById } from "@/lib/data";
import IdolCard from "../components/IdolCard";
import Gallery from "../components/Gallery";
import VideoSection from "../components/VideoSection";
import EventCalendar from "../components/EventCalendar";
import BlogSection from "../components/BlogSection";

export default function IdolDetail() {
  const params = useParams();
  const id = params.idol;

  // Find the idolGroup matching the idolId using getIdolById
  const idolGroup = id ? getIdolById(id as string) : undefined;

  // If idolGroup is not found, display an error message
  if (!idolGroup) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">😢</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Idol not found!
          </h1>
          <p className="text-gray-600">
            The idol you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Idol Info */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">{idolGroup.name}</h1>
            <p className="text-xl opacity-90 mb-2">{idolGroup.agency}</p>
            <p className="text-lg opacity-80">
              Debut: {new Date(idolGroup.debutDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section - Now supports both photos and members */}
      <section className="py-12">
        <Gallery
          photos={idolGroup.photos}
          members={idolGroup.members}
          title={`${idolGroup.name} Gallery`}
        />
      </section>

      {/* Other Sections */}
      <section className="py-12 bg-white">
        <VideoSection videos={idolGroup.videos} idolName={idolGroup.name} />
      </section>

      <section className="py-12">
        <EventCalendar events={idolGroup.events} idolName={idolGroup.name} />
      </section>

      <section className="py-12 bg-white">
        <BlogSection posts={idolGroup.articles} idolName={idolGroup.name} />
      </section>
    </div>
  );
}
