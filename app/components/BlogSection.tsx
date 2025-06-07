"use client";

import { Article } from "@/lib/data";
import {
  Calendar,
  User,
  ArrowRight,
  Tag,
  Clock,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import { useState } from "react";

interface BlogSectionProps {
  posts: Article[];
  idolName: string;
}

export default function BlogSection({ posts, idolName }: BlogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "news":
        return "News";
      case "review":
        return "Review";
      case "interview":
        return "Interview";
      case "analysis":
        return "Analysis";
      default:
        return "Article";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "news":
        return "bg-blue-500";
      case "review":
        return "bg-purple-500";
      case "interview":
        return "bg-green-500";
      case "analysis":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleLike = (postId: string) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const featuredPost = posts.find((post) => post.isFeature);
  const categories = ["all", "news", "review", "interview", "analysis"];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {idolName} Blog & News
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berita terbaru, review, interview, dan artikel menarik tentang{" "}
            {idolName}
          </p>
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Featured Article
            </h3>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className={`px-3 py-1 text-sm font-semibold text-white rounded-full ${getCategoryColor(
                        featuredPost.category
                      )}`}
                    >
                      {getCategoryLabel(featuredPost.category)}
                    </span>
                    <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full font-medium">
                      Featured
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredPost.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center gap-2 font-medium">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-4 text-gray-500">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {featuredPost.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {featuredPost.comments}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category === "all" ? "All Articles" : getCategoryLabel(category)}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts
            .filter((post) => !post.isFeature)
            .map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${getCategoryColor(
                        post.category
                      )}`}
                    >
                      {getCategoryLabel(post.category)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center gap-1 group">
                      Read More
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center gap-1 text-sm transition-colors ${
                          likedPosts.has(post.id)
                            ? "text-red-500"
                            : "text-gray-500 hover:text-red-500"
                        }`}
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            likedPosts.has(post.id) ? "fill-current" : ""
                          }`}
                        />
                        {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                      </button>

                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </div>

                      <button className="text-gray-500 hover:text-gray-700 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <Tag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-500 mb-2">
              No articles found
            </h3>
            <p className="text-gray-400">
              No articles match the selected category.
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Stay Updated with {idolName}
          </h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter untuk mendapatkan berita terbaru,
            artikel eksklusif, dan update terkini tentang {idolName}
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
