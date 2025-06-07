// lib/data.ts
export interface IdolGroup {
  id: string;
  name: string;
  agency: string;
  debutDate: string;
  description: string;
  image: string;
  members: Member[];
  photos: string[];
  videos: Video[];
  events: Event[];
  articles: Article[];
  socialMedia: SocialMedia;
}

export interface Member {
  name: string;
  birthDate: string;
  position: string;
  nationality: string;
  facts: string[];
  image: string;
}

export interface Video {
  id: string;
  title: string;
  type: "mv" | "performance" | "behind";
  youtubeId: string;
  thumbnail: string;
  views?: number;
  uploadDate?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: "concert" | "fansign" | "comeback" | "variety";
  description: string;
  status?: "upcoming" | "sold-out" | "completed";
  time?: string; // Optional time for the event
  venue?: string; // Optional venue for the event
  ticketUrl?: string; // Optional URL for ticket purchase
}

export interface Article {
  id: string; // ID unik artikel
  title: string; // Judul artikel
  date: string; // Tanggal artikel diterbitkan
  excerpt: string; // Ringkasan artikel
  content: string; // Konten penuh artikel
  image: string; // Gambar utama artikel
  category: "news" | "review" | "interview" | "analysis"; // Kategori artikel
  author: string; // Nama penulis
  readTime: string; // Waktu baca artikel, misalnya "5 min read"
  isFeature?: boolean; // Menandai artikel sebagai artikel unggulan (opsional)
  tags: string[]; // Tags artikel, misalnya ["music", "concert"]
  likes: number; // Jumlah like
  comments: number; // Jumlah komentar
}

export interface SocialMedia {
  instagram?: string;
  twitter?: string;
  youtube?: string;
  tiktok?: string;
}

export const idolGroups: IdolGroup[] = [
  {
    id: "bts",
    name: "BTS",
    agency: "BIGHIT MUSIC",
    debutDate: "2013-06-13",
    description:
      "BTS adalah boy group Korea Selatan yang terdiri dari tujuh anggota: RM, Jin, Suga, J-Hope, Jimin, V, dan Jungkook. Mereka adalah grup K-pop pertama yang mendominasi Billboard Hot 100.",
    image: "/images/bts/group.jpg",
    members: [
      {
        name: "RM (Kim Namjoon)",
        birthDate: "1994-09-12",
        position: "Leader, Main Rapper",
        nationality: "South Korea",
        facts: [
          "IQ 148",
          "Belajar bahasa Inggris dari serial Friends",
          "Suka koleksi mainan",
        ],
        image: "/images/bts/rm.jpg",
      },
      {
        name: "Jin (Kim Seokjin)",
        birthDate: "1992-12-04",
        position: "Visual, Vocalist",
        nationality: "South Korea",
        facts: ["Lulusan Konkuk University", "Suka memasak", "Dad jokes king"],
        image: "/images/bts/jin.jpg",
      },
      {
        name: "Suga (Min Yoongi)",
        birthDate: "1993-03-09",
        position: "Lead Rapper, Producer",
        nationality: "South Korea",
        facts: [
          "Produser musik berbakat",
          "Suka tidur",
          "Pernah bekerja part-time",
        ],
        image: "/images/bts/suga.jpg",
      },
      {
        name: "J-Hope (Jung Hoseok)",
        birthDate: "1994-02-18",
        position: "Main Dancer, Sub Rapper",
        nationality: "South Korea",
        facts: [
          "Pemenang kompetisi tari",
          "Suka fashion",
          "Energi positif grup",
        ],
        image: "/images/bts/jhope.jpg",
      },
      {
        name: "Jimin (Park Jimin)",
        birthDate: "1995-10-13",
        position: "Lead Vocalist, Main Dancer",
        nationality: "South Korea",
        facts: [
          "Pernah belajar tari tradisional",
          "Suka warna biru",
          "Punya suara yang merdu",
        ],
        image: "/images/bts/jimin.jpg",
      },
      {
        name: "V (Kim Taehyung)",
        birthDate: "1995-12-30",
        position: "Vocalist, Visual",
        nationality: "South Korea",
        facts: [
          "Punya suara unik",
          "Suka seni dan fotografi",
          "Pernah jadi trainee di Big Hit",
        ],
        image: "/images/bts/v.jpg",
      },
      {
        name: "Jungkook (Jeon Jungkook)",
        birthDate: "1997-09-01",
        position: "Main Vocalist, Lead Dancer, Sub Rapper",
        nationality: "South Korea",
        facts: [
          "Maknae (anggota termuda)",
          "Punya bakat multi-talenta",
          "Suka bermain game",
        ],
        image: "/images/bts/jk.jpg",
      },
    ],
    photos: [
      "/images/bts/photo1.jpg",
      "/images/bts/photo2.jpg",
      "/images/bts/photo3.jpg",
      "/images/bts/photo4.jpg",
    ],
    videos: [
      {
        id: "dynamite",
        title: "Dynamite",
        type: "mv",
        youtubeId: "gdZLi9oWNZg",
        thumbnail: "/images/bts/dynamite-thumb.jpg",
        views: 1500000000,
        uploadDate: "2020-08-21",
      },
      {
        id: "butter",
        title: "Butter",
        type: "mv",
        youtubeId: "WMweEpGlu_U",
        thumbnail: "/images/bts/butter-thumb.jpg",
        views: 1300000000,
        uploadDate: "2021-05-21",
      },
    ],
    events: [
      {
        id: "permission-to-dance",
        title: "Permission to Dance On Stage - Seoul",
        date: "2025-08-15",
        location: "Olympic Stadium, Seoul",
        type: "concert",
        description: "Konser besar BTS di Seoul setelah hiatus",
        status: "upcoming",
        time: "19:00 KST",
        venue: "Olympic Stadium",
        ticketUrl: "https://bts.com/tickets",
      },
      {
        id: "bts-fansign",
        title: "BTS Fansign Event",
        date: "2025-09-10",
        location: "COEX Mall, Seoul",
        type: "fansign",
        description: "Kesempatan bertemu langsung dengan BTS",
        status: "upcoming",
        time: "15:00 KST",
        venue: "COEX Mall",
      },
      {
        id: "bts-variety-show",
        title: "BTS on Running",
        date: "2025-10-05",
        location: "SBS Studio, Seoul",
        type: "variety",
        description: "BTS tampil di variety show populer",
        status: "upcoming",
        time: "20:00 KST",
        venue: "SBS Studio",
        ticketUrl: "https://bts.com/tickets",
      },
    ],
    articles: [
      {
        id: "bts-comeback-2025",
        title: "BTS Umumkan Comeback 2025",
        date: "2025-06-01",
        excerpt:
          "Setelah menjalani wajib militer, BTS siap comeback dengan album baru...",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        image: "/images/bts/article1.jpg",
        category: "news",
        author: "K-Pop News",
        readTime: "5 min read",
        tags: ["comeback", "album", "news"],
        likes: 1200,
        comments: 300,
        isFeature: true,
      },
      {
        id: "bts-world-tour-2025",
        title: "BTS World Tour 2025: Semua yang Perlu Kamu Tahu",
        date: "2025-07-15",
        excerpt:
          "BTS akan menggelar world tour dengan 20 kota di seluruh dunia...",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        image: "/images/bts/article2.jpg",
        category: "news",
        author: "K-Pop News",
        readTime: "6 min read",
        tags: ["world tour", "concert", "news"],
        likes: 950,
        comments: 200,
        isFeature: false,
      },
    ],
    socialMedia: {
      instagram: "@bts.bighitofficial",
      twitter: "@BTS_twt",
      youtube: "@BANGTANTV",
      tiktok: "@bts_official_bighit",
    },
  },
  {
    id: "enhypen",
    name: "ENHYPEN",
    agency: "BELIFT LAB",
    debutDate: "2020-11-30",
    description:
      "ENHYPEN adalah boy group Korea Selatan yang dibentuk melalui survival show I-LAND. Grup ini terdiri dari tujuh anggota: Heeseung, Jay, Jake, Sunghoon, Sunoo, Jungwon, dan Ni-ki.",
    image: "/images/enhypen/group.jpg",
    members: [
      {
        name: "Heeseung (Lee Heeseung)",
        birthDate: "2001-10-15",
        position: "Vocalist, Dancer",
        nationality: "South Korea",
        facts: ["Trainee terlama", "Ace of ENHYPEN", "Suka bermain game"],
        image: "/images/enhypen/heeseung.jpg",
      },
      {
        name: "Jay (Park Jongseong)",
        birthDate: "2002-04-20",
        position: "Vocalist, Rapper",
        nationality: "USA/South Korea",
        facts: ["Lahir di Seattle", "Fashionista", "Suka memasak"],
        image: "/images/enhypen/jay.jpg",
      },
      {
        name: "Jake (Sim Jae-yun)",
        birthDate: "2002-11-15",
        position: "Vocalist, Rapper",
        nationality: "Australia/South Korea",
        facts: [
          "Lahir di Australia",
          "Suka olahraga",
          "Punya suara yang merdu",
        ],
        image: "/images/enhypen/jake.jpg",
      },
      {
        name: "Sunghoon (Park Sunghoon)",
        birthDate: "2003-12-08",
        position: "Vocalist, Dancer",
        nationality: "South Korea",
        facts: ["Pemain skating profesional", "Suka seni", "Visual center"],
        image: "/images/enhypen/sunghoon.jpg",
      },
      {
        name: "Sunoo (Kim Sunoo)",
        birthDate: "2003-05-24",
        position: "Vocalist",
        nationality: "South Korea",
        facts: ["Suka bermain piano", "Punya suara yang merdu", "Suka fashion"],
        image: "/images/enhypen/sunoo.jpg",
      },
      {
        name: "Jungwon (Yang Jungwon)",
        birthDate: "2004-02-09",
        position: "Leader, Vocalist",
        nationality: "South Korea",
        facts: [
          "Pernah jadi trainee di Big Hit",
          "Suka bermain sepak bola",
          "Punya suara yang merdu",
        ],
        image: "/images/enhypen/jungwon.jpg",
      },
      {
        name: "Ni-ki (Nishimura Riki)",
        birthDate: "2005-12-09",
        position: "Main Dancer, Sub Rapper, Vocalist",
        nationality: "Japan",
        facts: [
          "Maknae (anggota termuda)",
          "Punya bakat menari yang luar biasa",
          "Suka bermain game",
        ],
        image: "/images/enhypen/niki.jpg",
      },
    ],
    photos: [
      "/images/enhypen/photo1.jpg",
      "/images/enhypen/photo2.jpg",
      "/images/enhypen/photo3.jpg",
      "/images/enhypen/photo4.jpg",
    ],
    videos: [
      {
        id: "bad-desire",
        title: "Bad Desire",
        type: "mv",
        youtubeId: "a2Zqdo9RbNs",
        thumbnail: "/images/enhypen/blessed-cursed-thumb.jpg",
      },
      {
        id: "bite-me",
        title: "Bite Me",
        type: "mv",
        youtubeId: "wXFLzODIdUI",
        thumbnail: "/images/enhypen/bite-me-thumb.jpg",
      },
    ],
    events: [
      {
        id: "manifesto-tour",
        title: "MANIFESTO World Tour",
        date: "2025-07-20",
        location: "Gocheok Sky Dome, Seoul",
        type: "concert",
        description: "World tour ENHYPEN di Seoul",
      },
      {
        id: "enhypen-fansign",
        title: "ENHYPEN Fansign Event",
        date: "2025-08-05",
        location: "COEX Mall, Seoul",
        type: "fansign",
        description: "Kesempatan bertemu langsung dengan ENHYPEN",
        status: "upcoming",
        time: "15:00 KST",
        venue: "COEX Mall",
      },
    ],
    articles: [
      {
        id: "enhypen-world-tour",
        title: "ENHYPEN Umumkan World Tour 2025",
        date: "2025-05-28",
        excerpt: "ENHYPEN akan menggelar world tour dengan 20 kota...",
        content: "Lorem ipsum dolor sit amet...",
        image: "/images/enhypen/article1.jpg",
        category: "news",
        author: "K-Pop News",
        readTime: "4 min read",
        tags: ["world tour", "concert", "news"],
        likes: 800,
        comments: 150,
        isFeature: true,
      },
    ],
    socialMedia: {
      instagram: "@enhypen",
      twitter: "@ENHYPEN",
      youtube: "@ENHYPEN",
      tiktok: "@enhypen",
    },
  },
  {
    id: "nct127",
    name: "NCT 127",
    agency: "SM Entertainment",
    debutDate: "2016-07-07",
    description:
      "NCT 127 adalah sub-unit dari NCT yang berbasis di Seoul. Grup ini dikenal dengan konsep musik yang eksperimental dan performa yang energik.",
    image: "/images/nct127/group.jpg",
    members: [
      {
        name: "Taeyong (Lee Taeyong)",
        birthDate: "1995-07-01",
        position: "Leader, Main Rapper, Main Dancer",
        nationality: "South Korea",
        facts: ["Visual center", "Produser musik", "Suka fashion"],
        image: "/images/nct127/taeyong.jpg",
      },
      {
        name: "Mark (Mark Lee)",
        birthDate: "1999-08-02",
        position: "Main Rapper, Lead Dancer, Sub Vocalist",
        nationality: "Canada/South Korea",
        facts: ["Lahir di Kanada", "Multi-talenta", "Anggota SuperM"],
        image: "/images/nct127/mark.jpg",
      },
      {
        name: "Yuta (Yuta Nakamoto)",
        birthDate: "1995-10-26",
        position: "Lead Rapper, Lead Dancer, Sub Vocalist",
        nationality: "Japan",
        facts: [
          "Lahir di Osaka, Jepang",
          "Punya suara yang merdu",
          "Suka bermain gitar",
        ],
        image: "/images/nct127/yuta.jpg",
      },
      {
        name: "Doyoung (Kim Dongyoung)",
        birthDate: "1996-02-01",
        position: "Main Vocalist",
        nationality: "South Korea",
        facts: [
          "Punya suara yang merdu",
          "Suka bermain piano",
          "Pernah jadi trainee di SM Rookies",
        ],
        image: "/images/nct127/doyoung.jpg",
      },
      {
        name: "Jaehyun (Jeong Jaehyun)",
        birthDate: "1997-02-14",
        position: "Lead Vocalist, Lead Dancer",
        nationality: "South Korea",
        facts: [
          "Punya suara yang merdu",
          "Suka bermain basket",
          "Visual center",
        ],
        image: "/images/nct127/jaehyun.jpg",
      },
      {
        name: "Haechan (Lee Donghyuck)",
        birthDate: "2000-06-06",
        position: "Main Vocalist, Lead Dancer",
        nationality: "South Korea",
        facts: [
          "Maknae (anggota termuda)",
          "Punya suara yang merdu",
          "Suka bermain game",
        ],
        image: "/images/nct127/haechan.jpg",
      },
      {
        name: "Johnny (Seo Youngho)",
        birthDate: "1995-02-09",
        position: "Lead Rapper, Sub Vocalist",
        nationality: "USA/South Korea",
        facts: [
          "Lahir di Chicago, USA",
          "Suka bermain gitar",
          "Punya suara yang merdu",
        ],
        image: "/images/nct127/johnny.jpg",
      },
      {
        name: "Jungwoo (Kim Jungwoo)",
        birthDate: "1998-02-19",
        position: "Lead Vocalist, Lead Dancer",
        nationality: "South Korea",
        facts: [
          "Punya suara yang merdu",
          "Suka bermain game",
          "Pernah jadi trainee di SM Rookies",
        ],
        image: "/images/nct127/jungwoo.jpg",
      },
    ],
    photos: [
      "/images/nct127/photo1.jpg",
      "/images/nct127/photo2.jpg",
      "/images/nct127/photo3.jpg",
      "/images/nct127/photo4.jpg",
    ],
    videos: [
      {
        id: "kick-it",
        title: "Kick It",
        type: "mv",
        youtubeId: "2OvyA2__Eas",
        thumbnail: "/images/nct127/kickit-thumb.jpg",
      },
    ],
    events: [
      {
        id: "nct127-world-tour",
        title: "NCT 127 World Tour",
        date: "2025-09-15",
        location: "Gocheok Sky Dome, Seoul",
        type: "concert",
        description: "World tour NCT 127 di Seoul",
        status: "upcoming",
        time: "19:00 KST",
        venue: "Gocheok Sky Dome",
        ticketUrl: "https://nct127.com/tickets",
      },
      {
        id: "nct127-fansign",
        title: "NCT 127 Fansign Event",
        date: "2025-10-01",
        location: "COEX Mall, Seoul",
        type: "fansign",
        description: "Kesempatan bertemu langsung dengan NCT 127",
        status: "upcoming",
        time: "15:00 KST",
        venue: "COEX Mall",
      },
    ],
    articles: [
      {
        id: "nct127-comeback-2025",
        title: "NCT 127 Umumkan Comeback 2025",
        date: "2025-06-15",
        excerpt:
          "NCT 127 akan merilis album baru pada bulan depan dengan konsep yang lebih eksperimental...",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        image: "/images/nct127/article1.jpg",
        category: "news",
        author: "K-Pop News",
        readTime: "5 min read",
        tags: ["comeback", "album", "news"],
        likes: 900,
        comments: 200,
        isFeature: true,
      },
    ],
    socialMedia: {
      instagram: "@nct127",
      twitter: "@NCTsmtown_127",
      youtube: "@NCT127",
      tiktok: "@nct127",
    },
  },
  {
    id: "nctdream",
    name: "NCT Dream",
    agency: "SM Entertainment",
    debutDate: "2016-08-25",
    description:
      "NCT Dream adalah sub-unit termuda dari NCT yang awalnya memiliki konsep graduation system, namun kini menjadi unit tetap.",
    image: "/images/nctdream/group.jpg",
    members: [
      {
        name: "Mark (Mark Lee)",
        birthDate: "1999-08-02",
        position: "Main Rapper, Vocalist",
        nationality: "Canada/South Korea",
        facts: ["Born in Canada", "Multi-talented", "SuperM member"],
        image: "/images/nctdream/mark.jpg",
      },
      {
        name: "Renjun (Huang Renjun)",
        birthDate: "2000-03-23",
        position: "Lead Vocalist",
        nationality: "China",
        facts: [
          "Lahir di Jilin, China",
          "Punya suara yang merdu",
          "Suka bermain piano",
        ],
        image: "/images/nctdream/renjun.jpg",
      },
      {
        name: "Jeno (Lee Jeno)",
        birthDate: "2000-04-23",
        position: "Lead Rapper, Lead Dancer",
        nationality: "South Korea",
        facts: [
          "Punya suara yang merdu",
          "Suka bermain game",
          "Pernah jadi trainee di SM Rookies",
        ],
        image: "/images/nctdream/jeno.jpg",
      },
      {
        name: "Haechan (Lee Donghyuck)",
        birthDate: "2000-06-06",
        position: "Main Vocalist, Lead Dancer",
        nationality: "South Korea",
        facts: [
          "Maknae (anggota termuda)",
          "Punya suara yang merdu",
          "Suka bermain game",
        ],
        image: "/images/nctdream/haechan.jpg",
      },
      {
        name: "Jaemin (Na Jaemin)",
        birthDate: "2000-08-13",
        position: "Lead Rapper, Lead Dancer",
        nationality: "South Korea",
        facts: [
          "Punya suara yang merdu",
          "Suka bermain game",
          "Pernah jadi trainee di SM Rookies",
        ],
        image: "/images/nctdream/jaemin.jpg",
      },
      {
        name: "Chenle (Zhong Chenle)",
        birthDate: "2001-11-22",
        position: "Main Vocalist",
        nationality: "China",
        facts: [
          "Lahir di Shanghai, China",
          "Punya suara yang merdu",
          "Suka bermain piano",
        ],
        image: "/images/nctdream/chenle.jpg",
      },
      {
        name: "Jisung (Park Jisung)",
        birthDate: "2002-02-05",
        position: "Main Dancer, Sub Rapper, Vocalist",
        nationality: "South Korea",
        facts: [
          "Maknae (anggota termuda)",
          "Punya bakat menari yang luar biasa",
          "Suka bermain game",
        ],
        image: "/images/nctdream/jisung.jpg",
      },
    ],
    photos: [
      "/images/nctdream/photo1.jpg",
      "/images/nctdream/photo2.jpg",
      "/images/nctdream/photo3.jpg",
      "/images/nctdream/photo4.jpg",
    ],
    videos: [
      {
        id: "hello-future",
        title: "Hello Future",
        type: "mv",
        youtubeId: "QPUjV7epJqE",
        thumbnail: "/images/nctdream/hotsauce-thumb.jpg",
      },
    ],
    events: [
      {
        id: "nctdream-world-tour",
        title: "NCT Dream World Tour",
        date: "2025-08-20",
        location: "Gocheok Sky Dome, Seoul",
        type: "concert",
        description: "World tour NCT Dream di Seoul",
        status: "upcoming",
        time: "19:00 KST",
        venue: "Gocheok Sky Dome",
        ticketUrl: "https://nctdream.com/tickets",
      },
      {
        id: "nctdream-fansign",
        title: "NCT Dream Fansign Event",
        date: "2025-09-05",
        location: "COEX Mall, Seoul",
        type: "fansign",
        description: "Kesempatan bertemu langsung dengan NCT Dream",
        status: "upcoming",
        time: "15:00 KST",
        venue: "COEX Mall",
      },
    ],
    articles: [
      {
        id: "nctdream-comeback-2025",
        title: "NCT Dream Umumkan Comeback 2025",
        date: "2025-06-20",
        excerpt:
          "NCT Dream akan merilis album baru pada bulan depan dengan konsep yang lebih ceria...",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        image: "/images/nctdream/article1.jpg",
        category: "news",
        author: "K-Pop News",
        readTime: "5 min read",
        tags: ["comeback", "album", "news"],
        likes: 850,
        comments: 180,
        isFeature: true,
      },
    ],
    socialMedia: {
      instagram: "@nct_dream",
      twitter: "@NCTsmtown_DREAM",
      youtube: "@NCTDREAM",
      tiktok: "@nct_dream",
    },
  },
  {
    id: "txt",
    name: "TXT (Tomorrow X Together)",
    agency: "BigHit Music",
    debutDate: "2019-03-04",
    description:
      "TXT adalah boy group yang dibentuk oleh BigHit Entertainment yang terdiri dari lima anggota. Mereka dikenal dengan konsep yang segar dan musik yang menarik, menggabungkan berbagai genre untuk menciptakan karya yang unik.",
    image: "/images/txt/group.jpg",
    members: [
      {
        name: "Soobin (Choi Soobin)",
        birthDate: "2000-12-05",
        position: "Leader, Lead Vocalist",
        nationality: "South Korea",
        facts: [
          "Pemimpin grup TXT",
          "Suka bermain gitar",
          "Memiliki kemampuan menulis lagu",
        ],
        image: "/images/txt/soobin.jpg",
      },
      {
        name: "Yeonjun (Choi Yeonjun)",
        birthDate: "1999-09-13",
        position: "Lead Rapper, Main Dancer",
        nationality: "South Korea",
        facts: [
          "Dikenal sebagai anggota yang sangat berbakat dalam menari",
          "Sering menjadi pusat perhatian dengan penampilannya yang energik",
        ],
        image: "/images/txt/yeonjun.jpg",
      },
      {
        name: "Beomgyu (Choi Beomgyu)",
        birthDate: "2001-03-13",
        position: "Lead Vocalist, Lead Dancer",
        nationality: "South Korea",
        facts: [
          "Memiliki kemampuan vokal yang kuat",
          "Menjadi anggota yang ceria dan humoris di grup",
        ],
        image: "/images/txt/beomgyu.jpg",
      },
      {
        name: "Taehyun (Kang Taehyun)",
        birthDate: "2002-02-05",
        position: "Main Vocalist, Lead Dancer",
        nationality: "South Korea",
        facts: [
          "Memiliki suara yang merdu dan kuat",
          "Suka bermain video game dan melukis",
        ],
        image: "/images/txt/taehyun.jpg",
      },
      {
        name: "Huening Kai (Kai Kamal Huening)",
        birthDate: "2002-08-14",
        position: "Sub-Vocalist, Maknae",
        nationality: "South Korea",
        facts: [
          "Memiliki bakat dalam bermain alat musik, terutama piano",
          "Adik dari seorang penyanyi dan aktor di Tiongkok",
        ],
        image: "/images/txt/hueningkai.jpg",
      },
    ],
    photos: [
      "/images/txt/photo1.jpg",
      "/images/txt/photo2.jpg",
      "/images/txt/photo3.jpg",
      "/images/txt/photo4.jpg",
    ],
    videos: [
      {
        id: "crown",
        title: "CROWN",
        type: "mv",
        youtubeId: "W3iSnJ663II",
        thumbnail: "/images/txt/crown-thumb.jpg",
      },
      {
        id: "cat-and-dog",
        title: "Cat & Dog",
        type: "mv",
        youtubeId: "NaKrke1EL1A",
        thumbnail: "/images/txt/catanddog-thumb.jpg",
      },
    ],
    events: [
      {
        id: "txt-world-tour",
        title: "TXT World Tour",
        date: "2025-10-01",
        location: "Gocheok Sky Dome, Seoul",
        type: "concert",
        description: "World tour TXT di Seoul",
        status: "upcoming",
        time: "19:00 KST",
        venue: "Gocheok Sky Dome",
        ticketUrl: "https://txt.com/tickets",
      },
      {
        id: "txt-fansign",
        title: "TXT Fansign Event",
        date: "2025-10-15",
        location: "COEX Mall, Seoul",
        type: "fansign",
        description: "Kesempatan bertemu langsung dengan TXT",
        status: "upcoming",
        time: "15:00 KST",
        venue: "COEX Mall",
      },
    ],
    articles: [
      {
        id: "txt-comeback-2025",
        title: "TXT Umumkan Comeback 2025",
        date: "2025-06-10",
        excerpt:
          "TXT akan merilis album baru pada bulan depan dengan konsep yang lebih ceria...",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        image: "/images/txt/article1.jpg",
        category: "news",
        author: "K-Pop News",
        readTime: "5 min read",
        tags: ["comeback", "album", "news"],
        likes: 700,
        comments: 120,
        isFeature: true,
      },
    ],
    socialMedia: {
      instagram: "@txt_bighit",
      twitter: "@TXT_bighit",
      youtube: "@TXT",
      tiktok: "@txt_official",
    },
  },
];

export function getIdolById(id: string): IdolGroup | undefined {
  return idolGroups.find((idol) => idol.id === id);
}

export function getAllIdols(): IdolGroup[] {
  return idolGroups;
}
