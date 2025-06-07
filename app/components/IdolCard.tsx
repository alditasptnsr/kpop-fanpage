"use client";

import Link from "next/link";
import { Calendar, Users, Heart } from "lucide-react";
import { IdolGroup } from "@/lib/data";

interface IdolCardProps {
  idol: IdolGroup;
}

const IdolCard = ({ idol }: IdolCardProps) => {
  // Periksa apakah idol dan idol.image ada
  const imageSrc =
    idol?.image ||
    "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=No+Image"; // Gambar placeholder jika idol.image tidak ada

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg card-hover">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageSrc}
          alt={idol?.name || "Idol"} // Jika idol.name tidak ada, gunakan fallback 'Idol'
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=${encodeURIComponent(
              idol?.name || "Unknown Idol"
            )}`; // Gambar fallback jika terjadi error saat memuat gambar
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Floating Heart */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Heart className="h-6 w-6 text-white fill-pink-500" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
            {idol?.name || "Unknown Idol"}{" "}
            {/* Jika idol.name tidak ada, tampilkan 'Unknown Idol' */}
          </h3>
          <p className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full inline-block">
            {idol?.agency || "Unknown Agency"}{" "}
            {/* Jika agency tidak ada, tampilkan 'Unknown Agency' */}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
          {idol?.description || "No description available"}{" "}
          {/* Jika description tidak ada, tampilkan fallback */}
        </p>

        {/* Stats */}
        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(idol?.debutDate || "2020-01-01")}</span>{" "}
            {/* Fallback date */}
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{idol?.members.length || 0} members</span>{" "}
          </div>
        </div>

        {/* Members */}
        {/* <div className="flex gap-4 mb-4">
          {idol?.members.slice(0, 3).map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <p className="mt-2 text-sm font-semibold text-gray-700">
                {member.name}
              </p>
              <p className="text-xs text-gray-500">{member.position}</p>
            </div>
          ))}
        </div> */}

        {/* Action Button */}
        <div className="pt-4">
          <Link
            href={`/${idol?.id}`}
            className="block w-full text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
          >
            Explore {idol?.name || "Idol"} {/* Fallback for the name */}
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-pink-200 to-purple-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
    </div>
  );
};

export default IdolCard;
