"use client";

import { useState } from "react";
import {
  Play,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Eye,
  Calendar,
} from "lucide-react";
import { Video } from "@/lib/data";

interface VideoSectionProps {
  videos: Video[];
  idolName: string;
}

export default function VideoSection({ videos, idolName }: VideoSectionProps) {
  // State untuk video yang sedang diputar di featured player
  const [selectedVideo, setSelectedVideo] = useState<Video>(videos[0] || null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Menambahkan Label Tipe Video
  const getVideoTypeLabel = (type: "mv" | "performance" | "behind") => {
    switch (type) {
      case "mv":
        return "Music Video";
      case "performance":
        return "Performance";
      case "behind":
        return "Behind the Scenes";
      default:
        return "Video";
    }
  };

  // Menambahkan Warna Tipe Video
  const getVideoTypeColor = (type: "mv" | "performance" | "behind") => {
    switch (type) {
      case "mv":
        return "bg-red-500";
      case "performance":
        return "bg-purple-500";
      case "behind":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const getThumbnailUrl = (youtubeId: string) => {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  };

  const getVideoUrl = (youtubeId: string) => {
    return `https://youtu.be/${youtubeId}`;
  };

  // Handler untuk memilih video di featured player
  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    const index = videos.findIndex((v) => v.id === video.id);
    setCurrentIndex(index);
  };

  // Navigation untuk featured video
  const nextVideo = () => {
    const nextIndex = (currentIndex + 1) % videos.length;
    setSelectedVideo(videos[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevVideo = () => {
    const prevIndex = currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
    setSelectedVideo(videos[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  if (!videos || videos.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🎬</div>
          <h3 className="text-2xl font-semibold text-gray-600 mb-2">
            No videos available
          </h3>
          <p className="text-gray-500">
            Videos will appear here when they're uploaded
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
            {idolName} Videos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Koleksi video musik, performance, dan konten behind the scenes dari{" "}
            {idolName}
          </p>
        </div>

        {/* Featured Video Player - Sekarang dinamis */}
        {selectedVideo && (
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mr-4">
                Now Playing
              </h3>
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentIndex + 1} of {videos.length}
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                <div style={{ paddingBottom: "56.25%" }} className="relative">
                  <iframe
                    src={`https://youtube.com/embed/${selectedVideo.youtubeId}?rel=0&showinfo=0&modestbranding=1`}
                    title={selectedVideo.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Navigation Buttons */}
                {videos.length > 1 && (
                  <>
                    <button
                      onClick={prevVideo}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-4 rounded-full hover:bg-black/70 transition-all duration-200 hover:scale-110"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextVideo}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-4 rounded-full hover:bg-black/70 transition-all duration-200 hover:scale-110"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Video Type Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 text-sm font-semibold text-white rounded-full ${getVideoTypeColor(
                      selectedVideo.type
                    )}`}
                  >
                    {getVideoTypeLabel(selectedVideo.type)}
                  </span>
                </div>
              </div>

              {/* Featured Video Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mt-6 border border-gray-100">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedVideo.title}
                </h4>

                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-5 w-5" />
                    <span>{selectedVideo.views}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>{selectedVideo.uploadDate}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={getVideoUrl(selectedVideo.youtubeId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center gap-2 font-semibold"
                  >
                    <Play className="w-5 h-5" />
                    Watch on YouTube
                  </a>
                  <a
                    href={getVideoUrl(selectedVideo.youtubeId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Open
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Grid - Dengan kemampuan memilih untuk featured player */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            All Videos
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                selectedVideo?.id === video.id
                  ? "ring-4 ring-red-500 ring-opacity-50"
                  : ""
              }`}
              onClick={() => handleVideoSelect(video)}
            >
              <div className="relative">
                <img
                  src={getThumbnailUrl(video.youtubeId)}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>

                {/* Video Type Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${getVideoTypeColor(
                      video.type
                    )}`}
                  >
                    {getVideoTypeLabel(video.type)}
                  </span>
                </div>

                {/* Currently Playing Indicator */}
                {selectedVideo?.id === video.id && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Playing
                    </div>
                  </div>
                )}

                {/* Click to Play Hint */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    Click to play in featured player
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-200">
                  {video.title}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{video.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{video.uploadDate}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVideoSelect(video);
                    }}
                    className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center gap-2 font-semibold"
                  >
                    <Play className="w-4 h-4" />
                    Play Now
                  </button>
                  <a
                    href={getVideoUrl(video.youtubeId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Navigation Pills */}
        {videos.length > 1 && (
          <div className="mt-12 flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {videos.map((video, index) => (
                  <button
                    key={video.id}
                    onClick={() => handleVideoSelect(video)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedVideo?.id === video.id
                        ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {index + 1}.{" "}
                    {video.title.length > 20
                      ? video.title.substring(0, 20) + "..."
                      : video.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
