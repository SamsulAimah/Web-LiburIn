import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const artikel = [
    {
      id: 1,
      title: "Tips Liburan Nyaman di Villa dengan Keluarga",
      date: "10 November 2023",
      image: "villa (1).jpg",
      description:
        "Liburan bersama keluarga di villa akan terasa lebih menyenangkan dengan tips sederhana ini. Yuk simak selengkapnya!",
    },
    {
        id: 2,
        title: "Tips Liburan Nyaman di Villa dengan Keluarga",
        date: "10 November 2023",
        image: "villa (2).jpg",
        description:
          "Liburan bersama keluarga di villa akan terasa lebih menyenangkan dengan tips sederhana ini. Yuk simak selengkapnya!",
      },
      {
        id: 3,
        title: "Tips Liburan Nyaman di Villa dengan Keluarga",
        date: "10 November 2023",
        image: "villa (3).jpg",
        description:
          "Liburan bersama keluarga di villa akan terasa lebih menyenangkan dengan tips sederhana ini. Yuk simak selengkapnya!",
      },
      {
        id: 4,
        title: "Tips Liburan Nyaman di Villa dengan Keluarga",
        date: "10 November 2023",
        image: "villa (4).jpg",
        description:
          "Liburan bersama keluarga di villa akan terasa lebih menyenangkan dengan tips sederhana ini. Yuk simak selengkapnya!",
      },
      {
        id: 5,
        title: "Tips Liburan Nyaman di Villa dengan Keluarga",
        date: "10 November 2023",
        image: "villa (5).jpg",
        description:
          "Liburan bersama keluarga di villa akan terasa lebih menyenangkan dengan tips sederhana ini. Yuk simak selengkapnya!",
      },
      {
        id: 6,
        title: "Tips Liburan Nyaman di Villa dengan Keluarga",
        date: "10 November 2023",
        image: "villa (6).jpg",
        description:
          "Liburan bersama keluarga di villa akan terasa lebih menyenangkan dengan tips sederhana ini. Yuk simak selengkapnya!",
      },
      {
        id: 7,
        title: "Tips Liburan Nyaman di Villa dengan Keluarga",
        date: "10 November 2023",
        image: "villa (7).jpg",
        description:
          "Liburan bersama keluarga di villa akan terasa lebih menyenangkan dengan tips sederhana ini. Yuk simak selengkapnya!",
      },
      {
        id: 8,
        title: "Tips Liburan Nyaman di Villa dengan Keluarga",
        date: "10 November 2023",
        image: "villa (8).jpg",
        description:
          "Liburan bersama keluarga di villa akan terasa lebih menyenangkan dengan tips sederhana ini. Yuk simak selengkapnya!",
      },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* ============== HERO SECTION ============== */}
      <section className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-center py-16 mt-16">
        <h1 className="text-4xl font-bold mb-4">Blog & Artikel</h1>
        <p className="text-lg opacity-90">
          Temukan tips, inspirasi, dan berita terbaru seputar villa & liburan
        </p>
      </section>
  
      {/* ============== BLOG SECTION ============== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 px-8 pb-20">
        {artikel.map((artikel) => (
          <div
            key={artikel.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={artikel.image}
              alt={artikel.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{artikel.title}</h2>
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <Calendar size={14} className="mr-1" />
                {artikel.date}
              </div>
              <p className="text-sm text-gray-600">{artikel.description}</p>
              <Link
                to="/blog"
                className="flex items-center text-orange-500 text-sm mt-2 hover:underline"
              >
                Read More
                <ArrowRight className="ml-1" size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default BlogPage;
