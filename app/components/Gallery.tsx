"use client";

import { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Heart,
  Users,
  Camera,
  User,
} from "lucide-react";

interface Member {
  name: string;
  birthDate: string;
  position: string;
  nationality: string;
  facts: string[];
  image: string;
}

interface GalleryProps {
  photos?: string[];
  members?: Member[];
  title?: string;
}

const Gallery = ({
  photos = [],
  members = [],
  title = "Gallery",
}: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"photos" | "members">("photos");
  const [likedImages, setLikedImages] = useState<Set<string>>(new Set());

  // Combine photos and member images for modal view
  const allImages = [
    ...photos.map((photo, index) => ({
      src: photo,
      type: "photo" as const,
      index,
      title: `Photo ${index + 1}`,
    })),
    ...members.map((member, index) => ({
      src: member.image,
      type: "member" as const,
      index,
      title: member.name,
      member: member,
    })),
  ];

  const currentTabImages =
    activeTab === "photos"
      ? allImages.filter((img) => img.type === "photo")
      : allImages.filter((img) => img.type === "member");

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % currentTabImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? currentTabImages.length - 1 : selectedImage - 1
      );
    }
  };

  const toggleLike = (imageId: string) => {
    const newLikedImages = new Set(likedImages);
    if (newLikedImages.has(imageId)) {
      newLikedImages.delete(imageId);
    } else {
      newLikedImages.add(imageId);
    }
    setLikedImages(newLikedImages);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
  };

  const getImageSrc = (src: string, index: number, type: string) => {
    return (
      src ||
      `https://via.placeholder.com/400x400/8B5CF6/FFFFFF?text=${type}+${
        index + 1
      }`
    );
  };

  const getImageId = (type: string, index: number) => `${type}-${index}`;

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          {title}
        </h3>
        <div className="flex justify-center items-center space-x-6 text-gray-600">
          <div className="flex items-center space-x-2">
            <Camera className="h-5 w-5" />
            <span>{photos.length} photos</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>{members.length} members</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="bg-white rounded-xl shadow-lg p-2 border border-gray-200 flex flex-row space-x-2">
          <button
        onClick={() => setActiveTab("photos")}
        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
          activeTab === "photos"
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
            : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"
        }`}
          >
        <Camera className="h-4 w-4" />
        <span>Photos ({photos.length})</span>
          </button>
          <button
        onClick={() => setActiveTab("members")}
        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
          activeTab === "members"
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
            : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"
        }`}
          >
        <Users className="h-4 w-4" />
        <span>Members ({members.length})</span>
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      {activeTab === "photos" && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              onClick={() => openModal(index)}
            >
              <img
                src={getImageSrc(photo, index, "Photo")}
                alt={`Gallery photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover Content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <div className="text-4xl mb-3">📸</div>
                  <p className="text-sm font-medium">View Photo</p>
                </div>
              </div>

              {/* Like Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(getImageId("photo", index));
                }}
                className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110"
              >
                <Heart
                  className={`h-5 w-5 ${
                    likedImages.has(getImageId("photo", index))
                      ? "text-red-500 fill-red-500"
                      : "text-white"
                  }`}
                />
              </button>

              {/* Photo Number */}
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Members Grid */}
      {activeTab === "members" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-gray-100"
              onClick={() => openModal(index)}
            >
              <div className="relative cursor-pointer group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={getImageSrc(member.image, index, "Member")}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Member Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <div className="flex items-center justify-center mb-2">
                      <User className="h-6 w-6 mr-2" />
                      <span className="text-lg font-bold">View Profile</span>
                    </div>
                  </div>
                </div>

                {/* Like Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(getImageId("member", index));
                  }}
                  className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      likedImages.has(getImageId("member", index))
                        ? "text-red-500 fill-red-500"
                        : "text-white"
                    }`}
                  />
                </button>
              </div>

              {/* Member Details */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {member.name}
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="font-medium text-purple-700">
                      {member.position}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Born:</span>
                    <span>
                      {new Date(member.birthDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">From:</span>
                    <span>{member.nationality}</span>
                  </div>
                </div>

                {/* Fun Facts */}
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Fun Facts:
                  </p>
                  <div className="space-y-1">
                    {member.facts.slice(0, 2).map((fact, factIndex) => (
                      <div
                        key={factIndex}
                        className="text-xs text-gray-600 bg-gray-50 rounded-md px-2 py-1"
                      >
                        • {fact}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedImage !== null && currentTabImages[selectedImage] && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-5xl max-h-full rounded-2xl overflow-hidden bg-white shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <X className="h-10 w-10" />
            </button>

            <div className="flex flex-col lg:flex-row max-h-[90vh]">
              {/* Image Section */}
              <div className="lg:w-2/3 relative bg-black">
                <img
                  src={getImageSrc(
                    currentTabImages[selectedImage].src,
                    currentTabImages[selectedImage].index,
                    currentTabImages[selectedImage].type
                  )}
                  alt={currentTabImages[selectedImage].title}
                  className="w-full h-full object-contain max-h-[60vh] lg:max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
                />

                {/* Navigation Buttons */}
                {currentTabImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Info Section */}
              <div className="lg:w-1/3 bg-white p-6 overflow-y-auto">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {currentTabImages[selectedImage].title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {selectedImage + 1} of {currentTabImages.length}{" "}
                      {activeTab}
                    </p>
                  </div>

                  {/* Member Details in Modal */}
                  {currentTabImages[selectedImage].type === "member" &&
                    currentTabImages[selectedImage].member && (
                      <div className="space-y-4 border-t pt-4">
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">
                            Position
                          </h4>
                          <p className="text-gray-600 bg-purple-50 rounded-lg p-3">
                            {currentTabImages[selectedImage].member!.position}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-700 mb-1">
                              Birth Date
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {new Date(
                                currentTabImages[
                                  selectedImage
                                ].member!.birthDate
                              ).toLocaleDateString()}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-700 mb-1">
                              Nationality
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {
                                currentTabImages[selectedImage].member!
                                  .nationality
                              }
                            </p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">
                            Fun Facts
                          </h4>
                          <div className="space-y-2">
                            {currentTabImages[selectedImage].member!.facts.map(
                              (fact, index) => (
                                <div
                                  key={index}
                                  className="text-sm text-gray-600 bg-gray-50 rounded-lg p-2"
                                >
                                  • {fact}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4 border-t">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(
                          getImageId(
                            currentTabImages[selectedImage].type,
                            currentTabImages[selectedImage].index
                          )
                        );
                      }}
                      className="flex-1 flex items-center justify-center space-x-2 p-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-200"
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          likedImages.has(
                            getImageId(
                              currentTabImages[selectedImage].type,
                              currentTabImages[selectedImage].index
                            )
                          )
                            ? "fill-white"
                            : ""
                        }`}
                      />
                      <span>Like</span>
                    </button>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center space-x-2 p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                    >
                      <Download className="h-5 w-5" />
                      <span>Save</span>
                    </button>
                  </div>

                  <p className="text-xs text-gray-400 text-center pt-2">
                    Press ESC or click outside to close
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {photos.length === 0 && members.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📸</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No content available
          </h3>
          <p className="text-gray-500">
            Photos and member profiles will appear here
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
