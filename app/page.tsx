import { getAllIdols } from "@/lib/data";
import IdolCard from "./components/IdolCard";
import { Star, Heart, Music, Sparkles } from "lucide-react";

export default function Homepage() {
  const idols = getAllIdols();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container-custom section-padding">
          <div className="text-center text-white space-y-8">
            {/* Animated Icons */}
            <div className="flex justify-center space-x-6 mb-8">
              <Star className="h-8 w-8 animate-pulse text-yellow-300" />
              <Heart className="h-8 w-8 animate-bounce text-pink-300" />
              <Music className="h-8 w-8 animate-pulse text-blue-300" />
              <Sparkles className="h-8 w-8 animate-bounce text-purple-300" />
            </div>

            {/* Main Title with Group Photos */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  <span className="block">K-Pop</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300">
                    Fanpage
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                  Tempat terbaik untuk mendapatkan informasi terbaru tentang{" "}
                  <span className="text-yellow-300 font-semibold">BTS</span>,{" "}
                  <span className="text-pink-300 font-semibold">ENHYPEN</span>,{" "}
                  <span className="text-blue-300 font-semibold">NCT</span>, dan{" "}
                  <span className="text-green-300 font-semibold">TXT</span>
                </p>
              </div>

              {/* Group Photos Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {idols.slice(0, 4).map((idol, index) => (
                  <div
                    key={idol.id}
                    className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                      index % 2 === 0
                        ? "animate-float"
                        : "animate-float-reverse"
                    }`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={idol.image}
                        alt={idol.name}
                        className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg md:text-xl mb-1">
                          {idol.name}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {idol.members?.length || 0} Members
                        </p>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg" />
                      </div>
                    </div>

                    {/* Floating elements around photos */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-300/30 rounded-full animate-ping" />
                    <div
                      className="absolute -bottom-2 -right-2 w-4 h-4 bg-pink-300/30 rounded-full animate-ping"
                      style={{ animationDelay: "1s" }}
                    />
                  </div>
                ))}
              </div>

              {/* Floating Group Logos/Icons */}
              <div className="hidden md:block">
                <div className="absolute left-10 top-1/2 transform -translate-y-1/2">
                  <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center animate-bounce">
                    <Music className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
                  <div
                    className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">5</div>
                <div className="text-sm text-purple-200">Groups</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-300">50+</div>
                <div className="text-sm text-purple-200">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">100+</div>
                <div className="text-sm text-purple-200">Photos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">Latest</div>
                <div className="text-sm text-purple-200">Updates</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-pink-300/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-20 w-12 h-12 bg-yellow-300/20 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-40 right-10 w-24 h-24 bg-blue-300/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />

        {/* Additional floating elements */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full animate-pulse" />
        <div
          className="absolute top-3/4 right-1/4 w-6 h-6 bg-gradient-to-r from-blue-300/20 to-green-300/20 rounded-full animate-pulse"
          style={{ animationDelay: "3s" }}
        />
      </section>

      {/* Groups Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Your <span className="text-gradient">Favorite Groups</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Jelajahi profil lengkap, foto, video, dan jadwal konser dari grup
              K-Pop terpopuler
            </p>
          </div>

          {/* Grid of Idol Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {idols.map((idol) => (
              <IdolCard key={idol.id} idol={idol} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You'll Find Here
            </h2>
            <p className="text-xl text-gray-600">
              Semua yang Anda butuhkan sebagai K-Pop fan dalam satu tempat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "📸",
                title: "Galeri Foto",
                description:
                  "Koleksi foto terbaru dan terlengkap dari setiap grup",
              },
              {
                icon: "🎵",
                title: "Video & MV",
                description: "Music video, performance, dan behind the scenes",
              },
              {
                icon: "📅",
                title: "Jadwal Event",
                description:
                  "Jadwal konser, comeback, dan acara penting lainnya",
              },
              {
                icon: "📰",
                title: "Berita Terbaru",
                description: "Update dan artikel terbaru tentang idola favorit",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container-custom text-center">
          <div className="space-y-8 text-white">
            <h2 className="text-4xl font-bold">Ready to Explore?</h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Pilih grup favorit Anda dan mulai jelajahi konten eksklusif yang
              telah kami siapkan
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {idols.slice(0, 3).map((idol) => (
                <a
                  key={idol.id}
                  href={`/${idol.id}`}
                  className="btn-secondary hover:scale-105 transform transition-all duration-300"
                >
                  Explore {idol.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
